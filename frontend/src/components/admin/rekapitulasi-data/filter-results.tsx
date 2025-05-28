"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, Filter, Calendar, FileText, CheckCircle } from "lucide-react"

interface FilterResultsProps {
  serviceFilter: string
  periodFilter: string
  statusFilter: string
  onClearFilter: (filterType: string) => void
  onClearAllFilters: () => void
}

const getFilterLabel = (filterType: string, value: string): string => {
  const serviceLabels = {
    perpanjangan: "Perpanjangan Kartu",
    rekomendasi: "Pengajuan Rekomendasi",
    all: "Semua Layanan",
  }

  const periodLabels = {
    "1month": "1 Bulan Terakhir",
    "3months": "3 Bulan Terakhir",
    "6months": "6 Bulan Terakhir",
    "1year": "1 Tahun Terakhir",
  }

  const statusLabels = {
    approved: "Disetujui",
    pending: "Menunggu",
    rejected: "Ditolak",
    all: "Semua Status",
  }

  switch (filterType) {
    case "service":
      return serviceLabels[value as keyof typeof serviceLabels] || value
    case "period":
      return periodLabels[value as keyof typeof periodLabels] || value
    case "status":
      return statusLabels[value as keyof typeof statusLabels] || value
    default:
      return value
  }
}

const getFilteredStats = (serviceFilter: string, statusFilter: string) => {
  // Simulasi data berdasarkan filter
  const baseStats = {
    total: 1524,
    approved: 1200,
    pending: 174,
    rejected: 150,
  }

  let filteredStats = { ...baseStats }

  // Filter berdasarkan layanan
  if (serviceFilter === "perpanjangan") {
    filteredStats = {
      total: 890,
      approved: 720,
      pending: 98,
      rejected: 72,
    }
  } else if (serviceFilter === "rekomendasi") {
    filteredStats = {
      total: 634,
      approved: 480,
      pending: 76,
      rejected: 78,
    }
  }

  // Filter berdasarkan status
  if (statusFilter === "approved") {
    filteredStats = {
      total: filteredStats.approved,
      approved: filteredStats.approved,
      pending: 0,
      rejected: 0,
    }
  } else if (statusFilter === "pending") {
    filteredStats = {
      total: filteredStats.pending,
      approved: 0,
      pending: filteredStats.pending,
      rejected: 0,
    }
  } else if (statusFilter === "rejected") {
    filteredStats = {
      total: filteredStats.rejected,
      approved: 0,
      pending: 0,
      rejected: filteredStats.rejected,
    }
  }

  return filteredStats
}

export default function FilterResults({
  serviceFilter,
  periodFilter,
  statusFilter,
  onClearFilter,
  onClearAllFilters,
}: FilterResultsProps) {
  const hasActiveFilters = serviceFilter !== "all" || statusFilter !== "all"
  const stats = getFilteredStats(serviceFilter, statusFilter)

  if (!hasActiveFilters) return null

  return (
    <Card className="border-0 shadow-sm bg-gradient-to-r from-blue-50 to-indigo-50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg font-semibold text-blue-900">Hasil Filter</CardTitle>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onClearAllFilters}
            className="text-blue-600 border-blue-200 hover:bg-blue-100"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Active Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {serviceFilter !== "all" && (
            <Badge variant="secondary" className="bg-white border-blue-200 text-blue-700">
              <FileText className="h-3 w-3 mr-1" />
              {getFilterLabel("service", serviceFilter)}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 ml-1 hover:bg-blue-100"
                onClick={() => onClearFilter("service")}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}

          <Badge variant="secondary" className="bg-white border-blue-200 text-blue-700">
            <Calendar className="h-3 w-3 mr-1" />
            {getFilterLabel("period", periodFilter)}
          </Badge>

          {statusFilter !== "all" && (
            <Badge variant="secondary" className="bg-white border-blue-200 text-blue-700">
              <CheckCircle className="h-3 w-3 mr-1" />
              {getFilterLabel("status", statusFilter)}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 ml-1 hover:bg-blue-100"
                onClick={() => onClearFilter("status")}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
        </div>

        {/* Filtered Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="text-2xl font-bold text-blue-900">{stats.total.toLocaleString()}</div>
            <div className="text-sm text-blue-600">Total Hasil</div>
          </div>

          {statusFilter === "all" && (
            <>
              <div className="bg-white p-4 rounded-lg border border-green-100">
                <div className="text-2xl font-bold text-green-900">{stats.approved.toLocaleString()}</div>
                <div className="text-sm text-green-600">Disetujui</div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-amber-100">
                <div className="text-2xl font-bold text-amber-900">{stats.pending.toLocaleString()}</div>
                <div className="text-sm text-amber-600">Menunggu</div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-red-100">
                <div className="text-2xl font-bold text-red-900">{stats.rejected.toLocaleString()}</div>
                <div className="text-sm text-red-600">Ditolak</div>
              </div>
            </>
          )}
        </div>

        {/* Filter Summary */}
        <div className="mt-4 p-3 bg-white rounded-lg border border-blue-100">
          <p className="text-sm text-blue-800">
            <strong>Ringkasan:</strong> Menampilkan {stats.total.toLocaleString()} data
            {serviceFilter !== "all" && ` untuk ${getFilterLabel("service", serviceFilter)}`}
            {statusFilter !== "all" && ` dengan status ${getFilterLabel("status", statusFilter)}`} dalam periode{" "}
            {getFilterLabel("period", periodFilter).toLowerCase()}.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
