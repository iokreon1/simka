"use client"

import { useState } from "react"
import { Sidebar } from "@/components/admin/sidebar"
import { Header } from "@/components/admin/header"
import EnhancedFilterSection from "@/components/admin/rekapitulasi-data/enhanced-filter-section"
import FilterResults from "@/components/admin/rekapitulasi-data/filter-results"
import FilteredDataTable from "@/components/admin/rekapitulasi-data/filtered-data-table"
import StatsCards from "@/components/admin/rekapitulasi-data/stats-cards"
import PerformanceMetrics from "@/components/admin/rekapitulasi-data/performance-metrics"
import ChartsSection from "@/components/admin/rekapitulasi-data/charts-section"
import ComparisonWidget from "@/components/admin/rekapitulasi-data/comparison-widget"
import DSSInsights from "@/components/admin/rekapitulasi-data/dss-insights"
import RecentDataTable from "@/components/admin/rekapitulasi-data/recent-data-table"

export default function RekapitulasiPage() {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [serviceFilter, setServiceFilter] = useState("all")
  const [periodFilter, setPeriodFilter] = useState("6months")
  const [statusFilter, setStatusFilter] = useState("all")

  const handleClearFilter = (filterType: string) => {
    switch (filterType) {
      case "service":
        setServiceFilter("all")
        break
      case "status":
        setStatusFilter("all")
        break
    }
  }

  const handleClearAllFilters = () => {
    setServiceFilter("all")
    setStatusFilter("all")
    setPeriodFilter("6months")
  }

  const handleFilterChange = () => {
    console.log("Filter changed:", { serviceFilter, periodFilter, statusFilter })
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
          {/* Header */}
          <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    
          <div className="flex">
            {/* Sidebar - Desktop */}
            <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 transform overflow-y-auto border-r bg-white pt-16 transition-all dark:border-slate-700 dark:bg-slate-800 md:block">
              <Sidebar />
            </aside>

      {/* Main content dengan margin top untuk header */}
      <div className="flex-1 md:ml-64 px-6 pt-7">
        <main className="max-w-7xl space-y-8 mx-auto">
          <div className="mb-">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Rekapitulasi Data</h1>
          </div>
          <EnhancedFilterSection
            serviceFilter={serviceFilter}
            setServiceFilter={setServiceFilter}
            periodFilter={periodFilter}
            setPeriodFilter={setPeriodFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            onFilterChange={handleFilterChange}
          />

          <FilterResults
            serviceFilter={serviceFilter}
            periodFilter={periodFilter}
            statusFilter={statusFilter}
            onClearFilter={handleClearFilter}
            onClearAllFilters={handleClearAllFilters}
          />

          {(serviceFilter !== "all" || statusFilter !== "all") && (
            <FilteredDataTable serviceFilter={serviceFilter} statusFilter={statusFilter} periodFilter={periodFilter} />
          )}

          <StatsCards />

          <PerformanceMetrics />

          <ChartsSection />

          <ComparisonWidget />

          <DSSInsights />

          <RecentDataTable />
        </main>
      </div>
    </div>
    </div>
  )
}
