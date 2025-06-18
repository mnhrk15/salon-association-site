import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE_NAME, AUTH_PATH, SPECIAL_PLAN_PATH } from './src/lib/constants';

export const config = {
  // Middlewareを適用するパスを指定
  matcher: [
    '/special-plan/:path*',
    // 静的ファイルなどを除くパスにMiddlewareを適用
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export function middleware(request: NextRequest) {
  // 1. セキュリティヘッダーを設定
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', cspHeader)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // 2. 認証ロジックを実行
  const { pathname } = request.nextUrl;
  const isAuthenticated = request.cookies.has(AUTH_COOKIE_NAME);

  // /special-plan 関連のパス以外は、何もしない
  if (!pathname.startsWith(SPECIAL_PLAN_PATH)) {
    return response; // セキュリティヘッダーのみ適用して終了
  }

  // 認証済みで、認証ページにアクセスしようとした場合
  if (isAuthenticated && pathname.startsWith(AUTH_PATH)) {
    // /special-plan のトップにリダイレクト
    const url = request.nextUrl.clone();
    url.pathname = SPECIAL_PLAN_PATH;
    return NextResponse.redirect(url);
  }

  // 未認証で、保護されたページにアクセスしようとした場合
  if (!isAuthenticated && !pathname.startsWith(AUTH_PATH)) {
    // 認証ページにリダイレクト
    const url = request.nextUrl.clone();
    url.pathname = AUTH_PATH;
    return NextResponse.redirect(url);
  }

  return response; // 認証チェックをパスした場合
} 