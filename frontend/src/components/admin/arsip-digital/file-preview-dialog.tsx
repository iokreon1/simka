"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, FileImage, ImageIcon, Download, X } from "lucide-react"

interface FilePreviewDialogProps {
  files: Array<{
    id: number
    name: string
    type: string
    url: string
    size: string
  }>
  documentNumber: string
}

export function FilePreviewDialog({ files, documentNumber }: FilePreviewDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<any>(null)

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
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>🔍 Quick Preview - {documentNumber}</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              {!selectedFile ? (
                <div className="grid grid-cols-3 gap-4 py-4">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedFile(file)}
                    >
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
              ) : (
                <div className="py-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">📄 {selectedFile.name}</h3>
                    <Button variant="outline" onClick={() => setSelectedFile(null)}>
                      ← Kembali
                    </Button>
                  </div>
                  <div className="flex justify-center items-center bg-gray-100 rounded-lg p-4 min-h-[400px]">
                    {selectedFile.type === "pdf" ? (
                      <div className="text-center">
                        <FileText className="h-16 w-16 text-red-500 mx-auto mb-4" />
                        <p className="text-gray-600">Preview PDF: {selectedFile.name}</p>
                        <p className="text-sm text-gray-500 mt-2">Ukuran: {selectedFile.size}</p>
                        <Button className="mt-4" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <img
                          src={selectedFile.url || "/placeholder.svg"}
                          alt={selectedFile.name}
                          className="max-w-full max-h-[400px] object-contain rounded border"
                        />
                        <p className="text-sm text-gray-600 mt-2">
                          {selectedFile.name} ({selectedFile.size})
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
