import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const role = request.cookies.get('role')?.value?.toLowerCase() // Normalisasi role ke lowercase
  const path = request.nextUrl.pathname

  const validRoles = ['admin', 'user']
  const isProtected = path.startsWith('/admin') || path.startsWith('/user')

  console.log('Role dari cookie:', role)

  // 🔒 Jika ada role yang tidak valid (misalnya hasil manipulasi), anggap belum login
  if (role && !validRoles.includes(role)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 🛡️ Jika belum login dan mencoba akses halaman yang butuh login
  if (isProtected && !role) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 🚫 Jika user role 'user' mencoba akses route admin
  if (path.startsWith('/admin') && role !== 'admin') {
    const redirectPath = role === 'user' ? '/user/dashboard' : '/login'
    return NextResponse.redirect(new URL(redirectPath, request.url))
  }

  // 🚫 Jika user role 'admin' mencoba akses route user
  if (path.startsWith('/user') && role !== 'user') {
    const redirectPath = role === 'admin' ? '/admin/dashboard' : '/login'
    return NextResponse.redirect(new URL(redirectPath, request.url))
  }

  // 🔁 Jika user sudah login, cegah kembali ke halaman login
  if (path === '/login' && role) {
    const redirectPath = role === 'admin' ? '/admin/dashboard' : '/user/dashboard'
    return NextResponse.redirect(new URL(redirectPath, request.url))
  }

  // ✅ Jika tidak ada kondisi khusus, lanjutkan permintaan
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/login',
    '/admin/:path*',
    '/user/:path*',
    '/perpanjangan-kartu/:path*',
    '/rekomendasi/:path*',
    '/rekapitulasi/:path*',
    '/riwayat/:path*',
    '/reminder/:path*',
    '/pemetaan/:path*',
  ],
}
