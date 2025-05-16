"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FormPengajuan from "@/components/perpanjangan-kartu/form-pengajuan"
import UploadDokumen from "@/components/perpanjangan-kartu/upload-dokumen"
import StatusPengajuan from "@/components/perpanjangan-kartu/status-pengajuan"

export default function PerpanjanganKartuTabs() {
  return (
    <Tabs defaultValue="form" className="w-full">
      <TabsList className="mb-4 grid w-full grid-cols-3">
        <TabsTrigger value="form">Form Pengajuan</TabsTrigger>
        <TabsTrigger value="upload">Upload Dokumen</TabsTrigger>
        <TabsTrigger value="status">Status Pengajuan</TabsTrigger>
      </TabsList>

      <TabsContent value="form" className="space-y-4">
        <FormPengajuan />
      </TabsContent>

      <TabsContent value="upload" className="space-y-4">
        <UploadDokumen />
      </TabsContent>

      <TabsContent value="status" className="space-y-4">
        <StatusPengajuan />
      </TabsContent>
    </Tabs>
  )
}
