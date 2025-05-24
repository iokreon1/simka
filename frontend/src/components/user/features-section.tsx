import { FileText, Layers, Map, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureCard } from "./feature-card"

export function FeaturesSection() {
  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle>Fitur Sistem</CardTitle>
        <CardDescription>Teknologi yang digunakan dalam sistem</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <FeatureCard
            icon={<MessageSquare className="h-5 w-5" />}
            title="Smart Reminder"
            description="Notifikasi otomatis via WhatsApp untuk status pengajuan dan pengingat perpanjangan"
            color="blue"
          />
          <FeatureCard
            icon={<FileText className="h-5 w-5" />}
            title="OCR Document"
            description="Ekstraksi data otomatis dari dokumen untuk mempercepat pengisian formulir"
            color="indigo"
          />
          <FeatureCard
            icon={<Layers className="h-5 w-5" />}
            title="Decision Tree"
            description="Evaluasi otomatis kelengkapan dan validitas data pengajuan"
            color="emerald"
          />
          <FeatureCard
            icon={<Map className="h-5 w-5" />}
            title="Pemetaan GIS"
            description="Visualisasi lokasi usaha angkutan dan kendaraan pemohon"
            color="amber"
          />
        </div>
      </CardContent>
    </Card>
  )
}
