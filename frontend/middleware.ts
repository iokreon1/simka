import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Daftar halaman yang butuh login
const protectedRoutes = [
  '/dashboard',
  '/perpanjangan-kartu',
  '/rekomendasi',
  '/rekapitulasi',
  '/riwayat',
  '/reminder',
  '/pemetaan',
]

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('XSRF-TOKEN') // atau cookie lain seperti 'laravel_session'

  const currentPath = request.nextUrl.pathname

  // Jika halaman butuh login tapi belum login
  if (protectedRoutes.includes(currentPath) && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: protectedRoutes,
}
