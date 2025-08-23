import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  if (pathname.startsWith('/admin')) {
    const authCookie = request.cookies.get('admin-auth');
    
    // /admin/login または /admin/login/ の場合
    if (pathname === '/admin/login' || pathname === '/admin/login/') {
      if (authCookie?.value === 'true') {
        return NextResponse.redirect(new URL('/admin/news', request.url));
      }
      return NextResponse.next();
    }
    
    // その他の/admin配下のページで認証がない場合
    if (!authCookie || authCookie.value !== 'true') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*'
};