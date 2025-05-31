"use client"

import { useState } from "react"
import { Download, FileSpreadsheet, FileText, Filter, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"
import { useExport } from "./export-utils"

interface EnhancedFilterSectionProps {
  serviceFilter: string
  setServiceFilter: (value: string) => void
  periodFilter: string
  setPeriodFilter: (value: string) => void
  statusFilter: string
  setStatusFilter: (value: string) => void
  onFilterChange?: () => void
}

export default function EnhancedFilterSection({
  serviceFilter,
  setServiceFilter,
  periodFilter,
  setPeriodFilter,
  statusFilter,
  setStatusFilter,
  onFilterChange,
}: EnhancedFilterSectionProps) {
  const [isExporting, setIsExporting] = useState(false)
  const [exportType, setExportType] = useState<"excel" | "pdf" | null>(null)
  const [isFiltering, setIsFiltering] = useState(false)
  const { toast } = useToast()
  const { exportToExcel, exportToPDF } = useExport()

  const handleFilterChange = async (filterType: string, value: string) => {
    setIsFiltering(true)

    // Simulasi loading saat filter berubah
    setTimeout(() => {
      switch (filterType) {
        case "service":
          setServiceFilter(value)
          break
        case "period":
          setPeriodFilter(value)
          break
        case "status":
          setStatusFilter(value)
          break
      }
      setIsFiltering(false)
      onFilterChange?.()
    }, 500)
  }

  const handleExportExcel = async () => {
    setIsExporting(true)
    setExportType("excel")

    try {
      const result = await exportToExcel({
        serviceFilter,
        periodFilter,
        statusFilter,
      })

      if (result.success) {
        toast({
          title: "Export Berhasil",
          description: `File Excel ${result.fileName} siap didownload`,
        })
      } else {
        throw new Error("Export failed")
      }
    } catch (error) {
      toast({
        title: "Export Gagal",
        description: "Terjadi kesalahan saat mengexport data ke Excel",
        variant: "destructive",
      })
    } finally {
      setIsExporting(false)
      setExportType(null)
    }
  }

  const handleExportPDF = async () => {
    setIsExporting(true)
    setExportType("pdf")

    try {
      const result = await exportToPDF({
        serviceFilter,
        periodFilter,
        statusFilter,
      })

      if (result.success) {
        toast({
          title: "Export Berhasil",
          description: `File PDF ${result.fileName} siap didownload`,
        })
      } else {
        throw new Error("Export failed")
      }
    } catch (error) {
      toast({
        title: "Export Gagal",
        description: "Terjadi kesalahan saat mengexport data ke PDF",
        variant: "destructive",
      })
    } finally {
      setIsExporting(false)
      setExportType(null)
    }
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Filter className="h-5 w-5 text-gray-400" />
          <h3 className="font-medium text-gray-900">Filter Data</h3>
          {isFiltering && (
            <div className="flex items-center gap-2 text-blue-600">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Memfilter data...</span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Select
            value={serviceFilter}
            onValueChange={(value) => handleFilterChange("service", value)}
            disabled={isFiltering}
          >
            <SelectTrigger className="border-gray-200">
              <SelectValue placeholder="Jenis Layanan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Layanan</SelectItem>
              <SelectItem value="perpanjangan">Perpanjangan Kartu</SelectItem>
              <SelectItem value="rekomendasi">Pengajuan Rekomendasi</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={periodFilter}
            onValueChange={(value) => handleFilterChange("period", value)}
            disabled={isFiltering}
          >
            <SelectTrigger className="border-gray-200">
              <SelectValue placeholder="Periode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">1 Bulan</SelectItem>
              <SelectItem value="3months">3 Bulan</SelectItem>
              <SelectItem value="6months">6 Bulan</SelectItem>
              <SelectItem value="1year">1 Tahun</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={statusFilter}
            onValueChange={(value) => handleFilterChange("status", value)}
            disabled={isFiltering}
          >
            <SelectTrigger className="border-gray-200">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Status</SelectItem>
              <SelectItem value="approved">Disetujui</SelectItem>
              <SelectItem value="pending">Menunggu</SelectItem>
              <SelectItem value="rejected">Ditolak</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex-1 border-gray-200" disabled={isExporting || isFiltering}>
                  {isExporting ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Download className="h-4 w-4 mr-2" />
                  )}
                  {isExporting ? "Exporting..." : "Export Data"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={handleExportExcel} className="cursor-pointer" disabled={isExporting}>
                  <div className="flex items-center w-full">
                    {isExporting && exportType === "excel" ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin text-green-600" />
                    ) : (
                      <FileSpreadsheet className="h-4 w-4 mr-2 text-green-600" />
                    )}
                    <div className="flex flex-col flex-1">
                      <span className="font-medium">Export Excel</span>
                      <span className="text-xs text-gray-500">Format .xlsx dengan filter aktif</span>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleExportPDF} className="cursor-pointer" disabled={isExporting}>
                  <div className="flex items-center w-full">
                    {isExporting && exportType === "pdf" ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin text-red-600" />
                    ) : (
                      <FileText className="h-4 w-4 mr-2 text-red-600" />
                    )}
                    <div className="flex flex-col flex-1">
                      <span className="font-medium">Export PDF</span>
                      <span className="text-xs text-gray-500">Format .pdf dengan grafik dan tabel</span>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Export Status Info */}
        {isExporting && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
              <span className="text-sm text-blue-800">
                Sedang memproses export {exportType === "excel" ? "Excel" : "PDF"}...
              </span>
            </div>
            <p className="text-xs text-blue-600 mt-1">File akan otomatis terdownload setelah selesai diproses</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
