"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/dashboard/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/admin/sidebar"
import { RecommendationForm } from "@/components/admin/pengajuan-rekomendasi/recommendation-form"
import { DocumentUpload } from "@/components/admin/pengajuan-rekomendasi/document-upload"
import { StatusTracking } from "@/components/admin/pengajuan-rekomendasi/status-tracking"

export default function Component() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedRecommendationType, setSelectedRecommendationType] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])

  const handleFileUpload = (fileName: string) => {
    setUploadedFiles((prev) => [...prev, fileName])
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

      {/* Main Content */}
      <div className="flex-1 px-4 pt-6 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Pengajuan Rekomendasi</h1>
            <p className="text-gray-600">Ajukan rekomendasi untuk berbagai keperluan kendaraan angkutan umum</p>
          </div>

          <Tabs defaultValue="form" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="form">Form Pengajuan</TabsTrigger>
              <TabsTrigger value="upload">Upload Dokumen</TabsTrigger>
              <TabsTrigger value="status">Status Pengajuan</TabsTrigger>
            </TabsList>

            <TabsContent value="form" className="space-y-6">
              <RecommendationForm
                selectedRecommendationType={selectedRecommendationType}
                onRecommendationTypeChange={setSelectedRecommendationType}
              />
            </TabsContent>

            <TabsContent value="upload" className="space-y-6">
              <DocumentUpload uploadedFiles={uploadedFiles} onFileUpload={handleFileUpload} />
            </TabsContent>

            <TabsContent value="status" className="space-y-6">
              <StatusTracking />
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-4 mt-8 mb-8">
            <Button variant="outline">Simpan Draft</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Ajukan Rekomendasi</Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
