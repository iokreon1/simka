import { AlertTriangle, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function StatusSection() {
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle>Status Permohonan</CardTitle>
        <CardDescription>Progres pengajuan saat ini</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm font-medium">Kartu Pengawasan</div>
            <div className="text-sm text-slate-500">75%</div>
          </div>
          <Progress value={75} className="h-2 bg-slate-100 dark:bg-slate-700" indicatorClassName="bg-blue-600" />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm font-medium">Rekomendasi</div>
            <div className="text-sm text-slate-500">50%</div>
          </div>
          <Progress value={50} className="h-2 bg-slate-100 dark:bg-slate-700" indicatorClassName="bg-indigo-600" />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm font-medium">Pengaduan</div>
            <div className="text-sm text-slate-500">30%</div>
          </div>
          <Progress value={30} className="h-2 bg-slate-100 dark:bg-slate-700" indicatorClassName="bg-emerald-600" />
        </div>

        <div className="mt-6 border-t pt-6">
          <h3 className="mb-3 text-sm font-medium">Smart Reminder</h3>
          <div className="space-y-3">
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-sm text-yellow-800 dark:border-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-400">
              <div className="mb-1 flex items-center gap-2 font-medium">
                <AlertTriangle className="h-4 w-4" />
                <span>Kartu Pengawasan Kedaluwarsa</span>
              </div>
              <p>Kartu Pengawasan untuk kendaraan B 5678 ABC akan kedaluwarsa dalam 30 hari.</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-800 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-400">
              <div className="mb-1 flex items-center gap-2 font-medium">
                <MessageSquare className="h-4 w-4" />
                <span>Notifikasi WhatsApp</span>
              </div>
              <p>Pengajuan perpanjangan Anda telah diverifikasi oleh sistem.</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Lihat Semua Notifikasi
        </Button>
      </CardFooter>
    </Card>
  )
}
