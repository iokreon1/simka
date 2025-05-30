"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Filter } from "lucide-react"
import { useState } from "react"
import { Eye, X, ImageIcon, FileText, FileImage } from "lucide-react"

// Inline StatusBadge component
function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "Disetujui":
      return <Badge className="bg-emerald-500 text-white hover:bg-emerald-600 border-emerald-500">✅ Disetujui</Badge>
    case "Pending":
      return <Badge className="bg-amber-500 text-white hover:bg-amber-600 border-amber-500">⏳ Pending</Badge>
    case "Ditolak":
      return <Badge className="bg-red-500 text-white hover:bg-red-600 border-red-500">❌ Ditolak</Badge>
    case "Revisi":
      return <Badge className="bg-orange-500 text-white hover:bg-orange-600 border-orange-500">🔄 Revisi</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

// Inline DocumentDetailDialog component
function DocumentDetailDialog({ document, files }: any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="outline" size="sm" title="Lihat Detail" onClick={() => setIsOpen(true)}>
        <Eye className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Detail Dokumen - {document.nomor_pengajuan}</CardTitle>
                <p className="text-sm text-gray-600 mt-1">Informasi lengkap dan histori dokumen</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6 py-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nama Pemohon</label>
                    <p className="text-sm text-gray-600">{document.nama_pemohon}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Jenis Dokumen</label>
                    <p className="text-sm text-gray-600">{document.jenis_dokumen}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Tanggal Pengajuan</label>
                    <p className="text-sm text-gray-600">{document.tanggal_pengajuan}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Status</label>
                    <div className="mt-1">
                      <StatusBadge status={document.status} />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Petugas Verifikator</label>
                    <p className="text-sm text-gray-600">{document.petugas}</p>
                  </div>
                  {document.tanggal_persetujuan && (
                    <div>
                      <label className="text-sm font-medium">Tanggal Persetujuan</label>
                      <p className="text-sm text-gray-600">{document.tanggal_persetujuan}</p>
                    </div>
                  )}
                  {document.masa_berlaku && (
                    <div>
                      <label className="text-sm font-medium">Masa Berlaku</label>
                      <p className="text-sm text-gray-600">{document.masa_berlaku}</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

// Inline FilePreviewDialog component
function FilePreviewDialog({ files, documentNumber }: any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        title="Preview File"
        className="text-blue-600"
        onClick={() => setIsOpen(true)}
      >
        <ImageIcon className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-3xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>🔍 Quick Preview - {documentNumber}</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 py-4">
                {files.map((file: any) => (
                  <div key={file.id} className="border rounded-lg p-3 hover:bg-gray-50">
                    <div className="flex items-center gap-2 mb-2">
                      {file.type === "pdf" ? (
                        <FileText className="h-5 w-5 text-red-500" />
                      ) : (
                        <FileImage className="h-5 w-5 text-blue-500" />
                      )}
                      <span className="text-sm font-medium truncate">{file.name}</span>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded flex items-center justify-center mb-2">
                      {file.type === "pdf" ? (
                        <FileText className="h-8 w-8 text-red-400" />
                      ) : (
                        <img
                          src={file.url || "/placeholder.svg"}
                          alt={file.name}
                          className="w-full h-full object-cover rounded"
                        />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 text-center">{file.size}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

interface Document {
  id: string
  nomor_pengajuan: string
  nama_pemohon: string
  jenis_dokumen: string
  tanggal_pengajuan: string
  tanggal_persetujuan: string | null
  status: string
  masa_berlaku: string | null
  petugas: string
  file_count: number
}

interface DocumentsTableProps {
  documents: Document[]
  totalDocuments: number
}

const mockFiles = [
  {
    id: 1,
    name: "KTP_Pemohon.pdf",
    type: "pdf",
    url: "/placeholder.svg?height=600&width=400",
    size: "2.3 MB",
  },
  {
    id: 2,
    name: "STNK_Kendaraan.jpg",
    type: "image",
    url: "/placeholder.svg?height=600&width=800",
    size: "1.8 MB",
  },
  {
    id: 3,
    name: "Surat_Permohonan.pdf",
    type: "pdf",
    url: "/placeholder.svg?height=600&width=400",
    size: "1.2 MB",
  },
]

export function DocumentsTable({ documents, totalDocuments }: DocumentsTableProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Daftar Arsip Dokumen</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Excel
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter Lanjutan
            </Button>
          </div>
        </div>
        <CardDescription>
          Menampilkan {documents.length} dari {totalDocuments} dokumen
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No. Pengajuan</TableHead>
                <TableHead>Nama Pemohon</TableHead>
                <TableHead>Jenis Dokumen</TableHead>
                <TableHead>Tanggal Pengajuan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Petugas</TableHead>
                <TableHead>File</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">{doc.nomor_pengajuan}</TableCell>
                  <TableCell>{doc.nama_pemohon}</TableCell>
                  <TableCell>{doc.jenis_dokumen}</TableCell>
                  <TableCell>{doc.tanggal_pengajuan}</TableCell>
                  <TableCell>
                    <StatusBadge status={doc.status} />
                  </TableCell>
                  <TableCell>{doc.petugas}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{doc.file_count} file</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <DocumentDetailDialog document={doc} files={mockFiles} />
                      <Button variant="outline" size="sm" title="Download File">
                        <Download className="h-4 w-4" />
                      </Button>
                      <FilePreviewDialog files={mockFiles} documentNumber={doc.nomor_pengajuan} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
