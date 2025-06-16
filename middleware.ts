import { NextRequest, NextResponse } from 'next/server';

export const config = {
  // Middlewareを適用するパスを指定
  matcher: '/special-plan',
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

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
      return NextResponse.next();
    }
  }

  // 認証に失敗した場合、要件定義に従いトップページへリダイレクトする
  const homeUrl = new URL('/', req.url);
  return NextResponse.redirect(homeUrl);
} 