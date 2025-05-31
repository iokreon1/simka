import { AlertTriangle, MessageSquare, Clock, CheckCircle, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function EnhancedStatusSection() {
  return (
    <div className="space-y-6">
      {/* Status Permohonan */}
      <Card className="border-none shadow-md">
        <CardHeader className="pb-2">
          <CardTitle>Status Permohonan</CardTitle>
          <CardDescription>Progres pengajuan saat ini</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="text-sm font-medium">Kartu Pengawasan</div>
              <div className="text-sm text-slate-500">15/20 (75%)</div>
            </div>
            <Progress value={75} className="h-3 bg-slate-100 dark:bg-slate-700" indicatorClassName="bg-blue-600" />
            <div className="mt-1 text-xs text-slate-500">Target bulanan: 20 pengajuan</div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="text-sm font-medium">Rekomendasi</div>
              <div className="text-sm text-slate-500">8/15 (53%)</div>
            </div>
            <Progress value={53} className="h-3 bg-slate-100 dark:bg-slate-700" indicatorClassName="bg-indigo-600" />
            <div className="mt-1 text-xs text-slate-500">Target bulanan: 15 pengajuan</div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="text-sm font-medium">Pengaduan</div>
              <div className="text-sm text-slate-500">3/10 (30%)</div>
            </div>
            <Progress value={30} className="h-3 bg-slate-100 dark:bg-slate-700" indicatorClassName="bg-emerald-600" />
            <div className="mt-1 text-xs text-slate-500">Target bulanan: 10 pengaduan</div>
          </div>
        </CardContent>
      </Card>

      {/* Smart Reminder */}
      <Card className="border-none shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-blue-600" />
            Smart Reminder
          </CardTitle>
          <CardDescription>Notifikasi dan pengingat otomatis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-900/30 dark:text-red-400">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2 font-medium">
                <AlertTriangle className="h-4 w-4" />
                <span>Kartu Kedaluwarsa</span>
              </div>
              <Badge variant="destructive" className="text-xs">
                Urgent
              </Badge>
            </div>
            <p className="mb-2">23 kartu pengawasan akan kedaluwarsa dalam 30 hari</p>
            <div className="flex items-center gap-2 text-xs">
              <Clock className="h-3 w-3" />
              <span>Reminder terkirim: 2 jam lalu</span>
            </div>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-800 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-400">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle className="h-4 w-4" />
                <span>Notifikasi WhatsApp</span>
              </div>
              <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">
                Terkirim
              </Badge>
            </div>
            <p className="mb-2">15 notifikasi berhasil dikirim hari ini</p>
            <div className="flex items-center gap-2 text-xs">
              <Users className="h-3 w-3" />
              <span>Response rate: 87%</span>
            </div>
          </div>

          <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800 dark:border-green-900 dark:bg-green-900/30 dark:text-green-400">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2 font-medium">
                <Calendar className="h-4 w-4" />
                <span>Jadwal Reminder</span>
              </div>
              <Badge variant="outline" className="text-xs bg-green-100 text-green-700">
                Aktif
              </Badge>
            </div>
            <p className="mb-2">5 reminder terjadwal untuk besok</p>
            <div className="flex items-center gap-2 text-xs">
              <Clock className="h-3 w-3" />
              <span>Pengiriman otomatis: 09:00 WIB</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Kelola Reminder
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
