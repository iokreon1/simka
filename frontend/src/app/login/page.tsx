"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validasi form
    if (!email.trim()) {
      setErrorMessage("Email tidak boleh kosong")
      return
    }

    if (!password) {
      setErrorMessage("Password tidak boleh kosong")
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorMessage("Format email tidak valid")
      return
    }

    setIsLoading(true)
    setErrorMessage(null)

    const loginData = {
      email,
      password,
      remember: rememberMe, // Tambahkan data "remember me"
    }

    try {
      // Ambil CSRF cookie dari Laravel Sanctum
      await fetch("http://localhost:8000/sanctum/csrf-cookie", {
        method: "GET",
        credentials: "include",
      })

      // Dapatkan token CSRF dari cookie
      const csrfToken = getCookie("XSRF-TOKEN")

      // Kirim permintaan login dengan token CSRF
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
          "X-XSRF-TOKEN": csrfToken, // Menambahkan CSRF token disini
        },
        credentials: "include",
        body: JSON.stringify(loginData),
      })

      if (!res.ok) {
        const errorData = await res.json().catch(() => null)
        throw new Error(errorData?.message || `Login gagal dengan status: ${res.status}`)
      }

      const data = await res.json()
      console.log("Login berhasil:", data)
      router.push("/dashboard")
    } catch (error) {
      console.error("Terjadi kesalahan:", error)
      setErrorMessage(error instanceof Error ? error.message : "Periksa email dan password Anda.")
    } finally {
      setIsLoading(false)
    }
  }

  // Fungsi untuk mendapatkan nilai cookie berdasarkan nama
  function getCookie(name: string): string {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
      const cookieValue = parts.pop()?.split(";").shift() || ""
      return decodeURIComponent(cookieValue) // Dekode token
    }
    return ""
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with logo - positioned at top left */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-3">
        <Image src="/logo-dishub.png" alt="Logo Dishub Kudus" width={60} height={60} className="h-12 w-16" />
        <div>
          <h2 className="font-bold text-lg text-[#0A2647] md:text-white">DINAS PERHUBUNGAN</h2>
          <p className="text-xs text-gray-600 md:text-gray-200">KABUPATEN KUDUS</p>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left side - Branding and Information */}
        <div className="hidden md:flex md:w-7/12 bg-[#0A2647] relative">
          <div className="absolute inset-0">
            <Image
              src="/halaman-login.jpg"
              alt="Transportasi Kudus"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="relative z-10 flex flex-col justify-center p-12 text-white">
            {/* Removed logo and text from here */}
            <div className="mb-12"></div> {/* Spacer to maintain layout */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-4xl font-bold mb-6">Selamat Datang di Portal Layanan Dishub Kudus</h2>
              <p className="text-xl mb-8 text-gray-100">
                Akses berbagai layanan online Dinas Perhubungan Kabupaten Kudus dengan mudah dan cepat
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-lg">Perizinan trayek dan operasional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-lg">Pengujian kendaraan bermotor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-lg">Informasi lalu lintas terkini</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-lg">Pengaduan masyarakat</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-5/12 flex items-center justify-center bg-gray-50 px-6">
          <motion.div
            className="w-full max-w-md py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10 text-center md:text-left">
              {/* Removed logo and text from here */}
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Masuk ke Akun Anda</h1>
              <p className="text-gray-600">
                Masukkan email dan password Anda untuk mengakses layanan Dinas Perhubungan
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{errorMessage}</div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 rounded-lg border-gray-300 focus:ring-[#0A2647] focus:border-[#0A2647]"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <Link href="/lupa-password" className="text-sm text-[#0A2647] hover:underline font-medium">
                    Lupa password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 rounded-lg border-gray-300 focus:ring-[#0A2647] focus:border-[#0A2647]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                        <line x1="2" x2="22" y1="2" y2="22"></line>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="text-[#0A2647] focus:ring-[#0A2647]"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Ingat saya
                </label>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#0A2647] hover:bg-[#144272] text-base rounded-lg transition-all duration-200"
              >
                {isLoading ? "Memproses..." : "Masuk"}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Belum memiliki akun?{" "}
                <Link href="/register" className="text-[#0A2647] hover:underline font-medium">
                  Daftar sekarang
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
