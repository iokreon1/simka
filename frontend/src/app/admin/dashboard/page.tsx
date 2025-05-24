"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Header } from "@/components/admin/header"
import { Sidebar } from "@/components/admin/sidebar"
import { QuickActions } from "@/components/admin/quick-actions"
import { StatsCards } from "@/components/admin/stats-cards"
import { ApplicationsSection } from "@/components/admin/applications-section"
import { StatusSection } from "@/components/admin/status-section"
import { FeaturesSection } from "@/components/admin/features-section"
import { ActivitiesSection } from "@/components/admin/activities-section"

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
    <div className="p-6 text-center text-slate-600 dark:text-slate-400">
      Memuat dashboard...
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
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
              <p className="text-slate-500 dark:text-slate-400">
                Selamat datang kembali, {user?.name || "User"}
              </p>
            </div>

            {/* Quick Actions */}
            <QuickActions />

            {/* Stats Cards */}
            <StatsCards />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Pengajuan Terbaru */}
              <div className="lg:col-span-2">
                <ApplicationsSection />
              </div>

              {/* Status & Smart Reminder */}
              <div className="lg:col-span-1">
                <StatusSection />
              </div>
            </div>

            {/* Fitur Sistem & Aktivitas Terbaru */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <FeaturesSection />
              <ActivitiesSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
