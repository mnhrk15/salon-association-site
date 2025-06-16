import { NextRequest, NextResponse } from 'next/server';

export const config = {
  // Middlewareを適用するパスを指定
  matcher: '/special-plan',
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    // base64でエンコードされた "user:password" をデコード
    const [user, pwd] = atob(authValue).split(':');

    // 本来は環境変数から取得する
    const validUser = process.env.BASIC_AUTH_USER || 'admin';
    const validPassword = process.env.BASIC_AUTH_PASSWORD || 'password123';

    if (user === validUser && pwd === validPassword) {
      return NextResponse.next();
    }
  }

  // 認証情報を要求するレスポンスを返す
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
} 