"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, FileCheck, Eye, Download } from "lucide-react"

interface FilteredDataTableProps {
  serviceFilter: string
  statusFilter: string
  periodFilter: string
}

// Sample data yang akan difilter
const allData = [
  {
    id: "REQ001",
    name: "Ahmad Wijaya",
    service: "Perpanjangan Kartu",
    date: "2024-01-15",
    status: "approved",
    priority: "normal",
    description: "Perpanjangan kartu keanggotaan",
  },
  {
    id: "REQ002",
    name: "Siti Nurhaliza",
    service: "Pengajuan Rekomendasi",
    date: "2024-01-14",
    status: "pending",
    priority: "high",
    description: "Rekomendasi untuk beasiswa",
  },
  {
    id: "REQ003",
    name: "Budi Santoso",
    service: "Perpanjangan Kartu",
    date: "2024-01-13",
    status: "approved",
    priority: "normal",
    description: "Perpanjangan kartu identitas",
  },
  {
    id: "REQ004",
    name: "Maya Sari",
    service: "Pengajuan Rekomendasi",
    date: "2024-01-12",
    status: "rejected",
    priority: "low",
    description: "Rekomendasi untuk pekerjaan",
  },
  {
    id: "REQ005",
    name: "Andi Pratama",
    service: "Perpanjangan Kartu",
    date: "2024-01-11",
    status: "pending",
    priority: "high",
    description: "Perpanjangan kartu mahasiswa",
  },
  {
    id: "REQ006",
    name: "Dewi Lestari",
    service: "Pengajuan Rekomendasi",
    date: "2024-01-10",
    status: "approved",
    priority: "normal",
    description: "Rekomendasi untuk magang",
  },
  {
    id: "REQ007",
    name: "Rudi Hartono",
    service: "Perpanjangan Kartu",
    date: "2024-01-09",
    status: "approved",
    priority: "normal",
    description: "Perpanjangan kartu pegawai",
  },
  {
    id: "REQ008",
    name: "Lina Marlina",
    service: "Pengajuan Rekomendasi",
    date: "2024-01-08",
    status: "pending",
    priority: "high",
    description: "Rekomendasi untuk penelitian",
  },
]

export default function FilteredDataTable({ serviceFilter, statusFilter, periodFilter }: FilteredDataTableProps) {
  // Filter data berdasarkan kriteria
  const filteredData = allData.filter((item) => {
    const serviceMatch =
      serviceFilter === "all" ||
      (serviceFilter === "perpanjangan" && item.service === "Perpanjangan Kartu") ||
      (serviceFilter === "rekomendasi" && item.service === "Pengajuan Rekomendasi")

    const statusMatch = statusFilter === "all" || item.status === statusFilter

    return serviceMatch && statusMatch
  })

  const getStatusBadge = (status: string) => {
    const variants = {
      approved: "bg-emerald-100 text-emerald-700 border-emerald-200",
      pending: "bg-amber-100 text-amber-700 border-amber-200",
      rejected: "bg-red-100 text-red-700 border-red-200",
    }
    const labels = {
      approved: "Disetujui",
      pending: "Menunggu",
      rejected: "Ditolak",
    }
    return (
      <Badge className={`${variants[status as keyof typeof variants]} border font-medium`}>
        {labels[status as keyof typeof labels]}
      </Badge>
    )
  }

  const getPriorityBadge = (priority: string) => {
    const variants = {
      high: "bg-red-50 text-red-600 border-red-200",
      normal: "bg-gray-50 text-gray-600 border-gray-200",
      low: "bg-blue-50 text-blue-600 border-blue-200",
    }
    const labels = {
      high: "Tinggi",
      normal: "Normal",
      low: "Rendah",
    }
    return (
      <Badge className={`${variants[priority as keyof typeof variants]} border font-medium`}>
        {labels[priority as keyof typeof labels]}
      </Badge>
    )
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">
              Data Hasil Filter ({filteredData.length} items)
            </CardTitle>
            <p className="text-sm text-gray-500">Data yang sesuai dengan kriteria filter yang dipilih</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Filtered
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {filteredData.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">
              <FileCheck className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada data</h3>
            <p className="text-gray-500">Tidak ditemukan data yang sesuai dengan filter yang dipilih.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200">
                  <TableHead className="text-gray-500 font-medium">ID</TableHead>
                  <TableHead className="text-gray-500 font-medium">Nama</TableHead>
                  <TableHead className="text-gray-500 font-medium">Layanan</TableHead>
                  <TableHead className="text-gray-500 font-medium">Deskripsi</TableHead>
                  <TableHead className="text-gray-500 font-medium">Tanggal</TableHead>
                  <TableHead className="text-gray-500 font-medium">Status</TableHead>
                  <TableHead className="text-gray-500 font-medium">Prioritas</TableHead>
                  <TableHead className="text-gray-500 font-medium text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow key={item.id} className="border-gray-100 hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900">{item.id}</TableCell>
                    <TableCell className="text-gray-700">{item.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {item.service === "Perpanjangan Kartu" ? (
                          <CreditCard className="h-4 w-4 text-indigo-500" />
                        ) : (
                          <FileCheck className="h-4 w-4 text-purple-500" />
                        )}
                        <span className="text-gray-700">{item.service}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600 text-sm max-w-xs truncate">{item.description}</TableCell>
                    <TableCell className="text-gray-500">{item.date}</TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
                    <TableCell>{getPriorityBadge(item.priority)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
                        <Eye className="h-4 w-4 mr-1" />
                        Detail
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
