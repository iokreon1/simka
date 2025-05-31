"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, Camera, CheckCircle, AlertCircle } from "lucide-react"

interface DocumentUploadProps {
  uploadedFiles: string[]
  onFileUpload: (fileName: string) => void
}

export function DocumentUpload({ uploadedFiles, onFileUpload }: DocumentUploadProps) {
  const documents = [
    { id: "stnk", title: "STNK", description: "Surat Tanda Nomor Kendaraan" },
    { id: "ktp", title: "KTP Pemilik", description: "Kartu Tanda Penduduk" },
    { id: "kartu-lama", title: "Kartu Pengawasan Lama", description: "Kartu pengawasan yang akan diperpanjang" },
    { id: "tambahan", title: "Dokumen Tambahan", description: "Dokumen pendukung lainnya" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Dokumen Pendukung</CardTitle>
        <CardDescription>
          Upload dokumen yang diperlukan untuk pengajuan rekomendasi. Sistem OCR akan membantu mengisi form secara
          otomatis.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors"
            >
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900 mb-1">{doc.title}</p>
              <p className="text-xs text-gray-500 mb-3">{doc.description}</p>
              <Button variant="outline" size="sm" onClick={() => onFileUpload(`${doc.title}.pdf`)}>
                <Camera className="w-4 h-4 mr-2" />
                Upload File
              </Button>
            </div>
          ))}
        </div>

        {uploadedFiles.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">File yang telah diupload:</h4>
            <div className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-900">{file}</span>
                  <Badge variant="secondary" className="ml-auto">
                    OCR Processed
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Teknologi OCR Aktif</h4>
              <p className="text-sm text-blue-700">
                Sistem akan secara otomatis membaca dan mengisi form berdasarkan dokumen yang Anda upload. Pastikan
                dokumen terlihat jelas dan tidak buram.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
