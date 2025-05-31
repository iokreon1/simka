'use client'

import { useState } from "react"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/admin/sidebar"
import PerpanjanganKartuTabs from "@/components/perpanjangan-kartu/perpanjangan-kartu-tabs"

export default function PerpanjanganKartuPage() {
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
          <div className="mb-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-1">Perpanjangan Kartu Pengawasan</h1>
                <p className="text-muted-foreground">Ajukan perpanjangan kartu pengawasan angkutan umum</p>
            </div>
          </div>

          <PerpanjanganKartuTabs />
        </main>
      </div>
    </div>
  )
}