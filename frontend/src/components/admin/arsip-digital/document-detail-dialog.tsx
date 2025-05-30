"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Eye, Download, FileText, FileImage, X } from "lucide-react"
import { StatusBadge } from "./status-badge"

interface DocumentDetailDialogProps {
  document: {
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
  files: Array<{
    id: number
    name: string
    type: string
    url: string
    size: string
  }>
}

export function DocumentDetailDialog({ document, files }: DocumentDetailDialogProps) {
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
                    <Label className="text-sm font-medium">Nama Pemohon</Label>
                    <p className="text-sm text-gray-600">{document.nama_pemohon}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Jenis Dokumen</Label>
                    <p className="text-sm text-gray-600">{document.jenis_dokumen}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Tanggal Pengajuan</Label>
                    <p className="text-sm text-gray-600">{document.tanggal_pengajuan}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Status</Label>
                    <div className="mt-1">
                      <StatusBadge status={document.status} />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Petugas Verifikator</Label>
                    <p className="text-sm text-gray-600">{document.petugas}</p>
                  </div>
                  {document.tanggal_persetujuan && (
                    <div>
                      <Label className="text-sm font-medium">Tanggal Persetujuan</Label>
                      <p className="text-sm text-gray-600">{document.tanggal_persetujuan}</p>
                    </div>
                  )}
                  {document.masa_berlaku && (
                    <div>
                      <Label className="text-sm font-medium">Masa Berlaku</Label>
                      <p className="text-sm text-gray-600">{document.masa_berlaku}</p>
                    </div>
                  )}
                  <div>
                    <Label className="text-sm font-medium">File Terlampir</Label>
                    <div className="mt-2 space-y-2">
                      {files.map((file) => (
                        <div key={file.id} className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center gap-2">
                            {file.type === "pdf" ? (
                              <FileText className="h-4 w-4 text-red-500" />
                            ) : (
                              <FileImage className="h-4 w-4 text-blue-500" />
                            )}
                            <span className="text-sm">{file.name}</span>
                            <span className="text-xs text-gray-500">({file.size})</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Semua File
                </Button>
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Lihat Detail Lengkap
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
