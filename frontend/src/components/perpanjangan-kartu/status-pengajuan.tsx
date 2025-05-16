import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import InfoAlert from "@/components/perpanjangan-kartu/info-alert"
import ProgressTracker, { type ProgressStep } from "@/components/perpanjangan-kartu/progress-tracker"

export default function StatusPengajuan() {
  const progressSteps: ProgressStep[] = [
    {
      title: "Pengajuan Diterima",
      date: "16 Mei 2025, 14:03",
      description: "Pengajuan perpanjangan kartu pengawasan telah diterima sistem.",
      status: "completed" as const,
    },
    {
      title: "Verifikasi Otomatis",
      date: "16 Mei 2025, 14:05",
      description:
        "Sistem Decision Tree telah memverifikasi kelengkapan dokumen dan data. Hasil: Data lengkap dan valid.",
      status: "completed" as const,
    },
    {
      title: "Verifikasi Petugas",
      date: "Dalam Proses",
      description: "Petugas Dishub sedang melakukan verifikasi manual terhadap dokumen dan data yang diajukan.",
      status: "current" as const,
    },
    {
      title: "Persetujuan",
      date: "Menunggu",
      description: "Menunggu persetujuan dari Kepala Seksi Angkutan.",
      status: "pending" as const,
    },
    {
      title: "Penerbitan Kartu",
      date: "Menunggu",
      description: "Kartu Pengawasan akan diterbitkan setelah mendapat persetujuan.",
      status: "pending" as const,
    },
  ]

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-700">
          <div className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <div>
              <p className="font-medium">Pengajuan Berhasil Dikirim</p>
              <p className="mt-1">
                Pengajuan perpanjangan kartu pengawasan Anda telah berhasil dikirim dan sedang dalam proses verifikasi.
                Anda akan menerima notifikasi WhatsApp ketika ada pembaruan status.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-medium">Detail Pengajuan</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Nomor Pengajuan</p>
              <p className="font-medium">PK-2025-0123</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Tanggal Pengajuan</p>
              <p className="font-medium">16 Mei 2025</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Status</p>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-500">Dalam Proses</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Estimasi Selesai</p>
              <p className="font-medium">18 Mei 2025</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-4 text-lg font-medium">Progress Pengajuan</h3>
          <ProgressTracker steps={progressSteps} />
        </div>

        <InfoAlert
          title="Smart Reminder Aktif"
          message="Anda akan menerima notifikasi WhatsApp secara otomatis ketika ada perubahan status pengajuan. Pastikan nomor WhatsApp Anda aktif."
          type="info"
        />
      </CardContent>
    </Card>
  )
}
