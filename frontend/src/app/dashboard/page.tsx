"use client"

import { useState } from "react"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { ApplicationsSection } from "@/components/dashboard/applications-section"
import { StatusSection } from "@/components/dashboard/status-section"
import { FeaturesSection } from "@/components/dashboard/features-section"
import { ActivitiesSection } from "@/components/dashboard/activities-section"

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
              <p className="text-slate-500 dark:text-slate-400">Selamat datang kembali, Ahmad Fauzi</p>
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
