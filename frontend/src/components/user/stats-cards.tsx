import { AlertTriangle, Bell, CheckCircle2, Clock, FileCheck, RefreshCw, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StatsCards() {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="overflow-hidden border-none shadow-md">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Kartu Pengawasan</CardTitle>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <FileCheck className="h-4 w-4" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-slate-900 dark:text-white">5</div>
          <div className="mt-2 flex items-center">
            <Badge
              variant="outline"
              className="flex items-center gap-1 rounded-md border-yellow-200 bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 dark:border-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-400"
            >
              <AlertTriangle className="h-3 w-3" />1 akan kedaluwarsa
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-none shadow-md">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Pengajuan Aktif</CardTitle>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
              <RefreshCw className="h-4 w-4" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-slate-900 dark:text-white">3</div>
          <div className="mt-2 flex flex-wrap gap-1">
            <Badge
              variant="outline"
              className="rounded-md border-blue-200 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-400"
            >
              2 Perpanjangan
            </Badge>
            <Badge
              variant="outline"
              className="rounded-md border-purple-200 bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 dark:border-purple-900 dark:bg-purple-900/30 dark:text-purple-400"
            >
              1 Rekomendasi
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-none shadow-md">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Status Pengajuan</CardTitle>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300">
              <Clock className="h-4 w-4" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-slate-900 dark:text-white">4</div>
          <div className="mt-2 flex flex-wrap gap-1">
            <Badge
              variant="outline"
              className="flex items-center gap-1 rounded-md border-green-200 bg-green-50 px-2 py-1 text-xs font-medium text-green-700 dark:border-green-900 dark:bg-green-900/30 dark:text-green-400"
            >
              <CheckCircle2 className="h-3 w-3" />2 Disetujui
            </Badge>
            <Badge
              variant="outline"
              className="flex items-center gap-1 rounded-md border-red-200 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 dark:border-red-900 dark:bg-red-900/30 dark:text-red-400"
            >
              <XCircle className="h-3 w-3" />1 Ditolak
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-none shadow-md">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Notifikasi</CardTitle>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-300">
              <Bell className="h-4 w-4" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-slate-900 dark:text-white">7</div>
          <div className="mt-2 flex items-center">
            <Badge
              variant="outline"
              className="rounded-md border-blue-200 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-400"
            >
              3 Pesan WhatsApp baru
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
