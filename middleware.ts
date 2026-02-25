import { auth } from '@/lib/auth/nextauth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const userRole = req.auth?.user?.role

  const isAdminRoute = nextUrl.pathname.startsWith('/admin')
  const isDashboardRoute = nextUrl.pathname.startsWith('/dashboard')

  if (isAdminRoute) {
    if (!isLoggedIn || userRole !== 'admin') {
      return NextResponse.redirect(new URL('/login', nextUrl))
    }
  }

  if (isDashboardRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/api/admin/:path*']
}
