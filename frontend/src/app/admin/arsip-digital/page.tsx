"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, RefreshCw, Archive, Search, Shield } from "lucide-react"

// Import komponen layout
import { Header } from "@/components/admin/header"
import { Sidebar } from "@/components/admin/sidebar"

// Import komponen konten
import { StatisticsCards } from "@/components/admin/arsip-digital/statistics-cards"
import { SearchAndFilter } from "@/components/admin/arsip-digital/search-and-filter"
import { DocumentsTable } from "@/components/admin/arsip-digital/documents-table"
import { AdvancedSearch } from "@/components/admin/arsip-digital/advanced-search"
import { AuditTrail } from "@/components/admin/arsip-digital/audit-trail"

export default function AdminArchiveDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Mock data untuk dokumen arsip
  const archiveDocuments = [
    {
      id: "KP-2024-001",
      nomor_pengajuan: "REG/001/2024",
      nama_pemohon: "PT. Angkutan Jaya",
      jenis_dokumen: "Kartu Pengawasan",
      tanggal_pengajuan: "2024-01-15",
      tanggal_persetujuan: "2024-01-18",
      status: "Disetujui",
      masa_berlaku: "2025-01-18",
      petugas: "Ahmad Susanto",
      file_count: 5,
    },
    {
      id: "KP-2024-002",
      nomor_pengajuan: "REG/002/2024",
      nama_pemohon: "CV. Transport Mandiri",
      jenis_dokumen: "Perpanjangan Kartu Pengawasan",
      tanggal_pengajuan: "2024-01-16",
      tanggal_persetujuan: null,
      status: "Pending",
      masa_berlaku: null,
      petugas: "Siti Rahayu",
      file_count: 3,
    },
    {
      id: "KP-2024-003",
      nomor_pengajuan: "REG/003/2024",
      nama_pemohon: "UD. Sejahtera Transport",
      jenis_dokumen: "Kartu Pengawasan Baru",
      tanggal_pengajuan: "2024-01-14",
      tanggal_persetujuan: null,
      status: "Ditolak",
      masa_berlaku: null,
      petugas: "Budi Hartono",
      file_count: 4,
    },
  ]

  const filteredDocuments = archiveDocuments.filter((doc) => {
    const matchesSearch =
      doc.nama_pemohon.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.nomor_pengajuan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.jenis_dokumen.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = selectedStatus === "all" || doc.status === selectedStatus
    const matchesType = selectedType === "all" || doc.jenis_dokumen.includes(selectedType)

    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex">
        {/* Sidebar - hidden on mobile, visible on desktop */}
        <div className="hidden md:block w-64 shrink-0 border-r border-gray-200 dark:border-slate-800 h-[calc(100vh-4rem)] overflow-y-auto fixed">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 md:ml-64">
          <div className="p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Page Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pengelolaan Arsip Digital</h1>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Upload Dokumen
                  </Button>
                  <Button className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4" />
                    Refresh Data
                  </Button>
                </div>
              </div>

              {/* Statistics Cards */}
              <StatisticsCards />

              {/* Main Content */}
              <Tabs defaultValue="archive" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="archive" className="flex items-center gap-2">
                    <Archive className="h-4 w-4" />
                    Arsip Dokumen
                  </TabsTrigger>
                  <TabsTrigger value="search" className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Pencarian Lanjutan
                  </TabsTrigger>
                  <TabsTrigger value="audit" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    🕵️ Audit Trail
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="archive" className="space-y-6">
                  <SearchAndFilter
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                  />
                  <DocumentsTable documents={filteredDocuments} totalDocuments={archiveDocuments.length} />
                </TabsContent>

                <TabsContent value="search" className="space-y-6">
                  <AdvancedSearch />
                </TabsContent>

                <TabsContent value="audit" className="space-y-6">
                  <AuditTrail />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
