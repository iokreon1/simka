"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Header } from "@/components/admin/header"
import { Sidebar } from "@/components/admin/sidebar"
import { EnhancedStatsCards } from "@/components/admin/enhanced-stats-cards"
import { DetailedApplicationsSection } from "@/components/admin/detailed-applications-section"
import { EnhancedStatusSection } from "@/components/admin/enhanced-status-section"
import { ActivitiesSection } from "@/components/admin/activities-section"
import { EnhancedGisSection } from "@/components/admin/enhanced-gis-section"

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<{ name?: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/user", {
          credentials: "include",
          headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        })

        if (!res.ok) {
          throw new Error("Unauthorized")
        }

        const data = await res.json()

        if (data.role !== "admin") {
          // Redirect ke halaman sesuai role
          const redirectPath = data.role === "user" ? "/user/dashboard" : "/login"
          router.replace(redirectPath)
          return
        }

        setUser(data)
      } catch (error) {
        console.error("Auth check failed:", error)
        router.replace("/login")
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Memuat dashboard...</p>
        </div>
      </div>
    )

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 transform overflow-y-auto border-r bg-white pt-16 transition-all dark:border-slate-700 dark:bg-slate-800 md:block">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 pt-6 md:ml-64">
          <div className="container mx-auto max-w-6xl pb-12">
            {/* Welcome Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard Admin</h1>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">
                    Selamat datang kembali, {user?.name || "Admin"}. Berikut ringkasan sistem hari ini.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Terakhir diperbarui</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {new Date().toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Cards */}
            <EnhancedStatsCards />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Pengajuan Terbaru - Takes 2 columns */}
              <div className="lg:col-span-2">
                <DetailedApplicationsSection />
              </div>

              {/* Status & Smart Reminder - Takes 1 column */}
              <div className="lg:col-span-1">
                <EnhancedStatusSection />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <EnhancedGisSection />
              <ActivitiesSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
