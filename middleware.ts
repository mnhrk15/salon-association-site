import { NextRequest, NextResponse } from 'next/server';

export const config = {
  // Middlewareを適用するパスを指定
  matcher: ['/special-plan', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  
  // セキュリティヘッダーを設定
  const response = NextResponse.next();
  
  // Content Security Policy
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://www.google-analytics.com https://api.resend.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  
  // special-planページの認証処理
  if (url.pathname === '/special-plan') {
    const basicAuth = req.headers.get('authorization');
    const user = process.env.BASIC_AUTH_USER;
    const password = process.env.BASIC_AUTH_PASSWORD;

    // 環境変数が設定されているか確認
    if (!user || !password) {
      console.error('ERROR: Basic Authentication credentials are not set in environment variables.');
      // 環境変数が設定されていない場合は、500エラーを返す
      return new NextResponse('Internal Server Error: Auth credentials not configured.', {
        status: 500,
      });
    }

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [decodedUser, decodedPwd] = Buffer.from(authValue, 'base64').toString().split(':');

      if (decodedUser === user && decodedPwd === password) {
        return response;
      }
    }

    // 認証に失敗した場合、要件定義に従いトップページへリダイレクトする
    const homeUrl = new URL('/', req.url);
    return NextResponse.redirect(homeUrl);
  }
  
  return response;
} 