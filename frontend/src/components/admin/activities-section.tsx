import { FileCheck, FileText, Map, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ActivityItem } from "./activity-item"

export function ActivitiesSection() {
  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle>Aktivitas Terbaru</CardTitle>
        <CardDescription>Riwayat aktivitas dalam sistem</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <ActivityItem
            icon={<FileCheck className="h-5 w-5" />}
            title="Pengajuan Perpanjangan Kartu Pengawasan"
            description="Sistem Decision Tree telah memverifikasi kelengkapan dokumen Anda"
            time="2 jam yang lalu"
            color="blue"
          />
          <ActivityItem
            icon={<FileText className="h-5 w-5" />}
            title="Rekomendasi Kendaraan Baru Disetujui"
            description="Pengajuan rekomendasi kendaraan baru Anda telah disetujui"
            time="1 hari yang lalu"
            color="green"
          />
          <ActivityItem
            icon={<MessageSquare className="h-5 w-5" />}
            title="Smart Reminder Dikirim"
            description="Notifikasi WhatsApp telah dikirim terkait dokumen yang perlu dilengkapi"
            time="2 hari yang lalu"
            color="yellow"
          />
          <ActivityItem
            icon={<Map className="h-5 w-5" />}
            title="Lokasi Usaha Dipetakan"
            description="Lokasi usaha angkutan Anda telah berhasil dipetakan dalam sistem GIS"
            time="3 hari yang lalu"
            color="purple"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Lihat Semua Aktivitas
        </Button>
      </CardFooter>
    </Card>
  )
}
