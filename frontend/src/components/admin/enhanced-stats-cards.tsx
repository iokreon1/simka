import { AlertTriangle, CheckCircle2, FileCheck, RefreshCw, TrendingUp, Car } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function EnhancedStatsCards() {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Total Pengajuan */}
      <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">Total Pengajuan</CardTitle>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg">
              <FileCheck className="h-5 w-5" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">247</div>
          <div className="mt-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm text-green-600 font-medium">+12% dari bulan lalu</span>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-blue-600 dark:text-blue-400 mb-1">
              <span>Target Bulanan</span>
              <span>82%</span>
            </div>
            <Progress value={82} className="h-2 bg-blue-200 dark:bg-blue-800" indicatorClassName="bg-blue-600" />
          </div>
        </CardContent>
      </Card>

      {/* Pengajuan Aktif */}
      <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-amber-700 dark:text-amber-300">Sedang Diproses</CardTitle>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-white shadow-lg">
              <RefreshCw className="h-5 w-5" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-amber-900 dark:text-amber-100">23</div>
          <div className="mt-2 flex flex-wrap gap-1">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
              15 Perpanjangan
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400">
              8 Rekomendasi
            </Badge>
          </div>
          <div className="mt-3 text-xs text-amber-600 dark:text-amber-400">Rata-rata waktu proses: 3.2 hari</div>
        </CardContent>
      </Card>

      {/* Status Pengajuan */}
      <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Tingkat Persetujuan
            </CardTitle>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-lg">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-emerald-900 dark:text-emerald-100">94.2%</div>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-green-700 dark:text-green-400">189 Disetujui</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <span className="text-red-700 dark:text-red-400">12 Ditolak</span>
            </div>
          </div>
          <div className="mt-3">
            <Progress
              value={94.2}
              className="h-2 bg-emerald-200 dark:bg-emerald-800"
              indicatorClassName="bg-emerald-600"
            />
          </div>
        </CardContent>
      </Card>

      {/* Kendaraan Terdaftar */}
      <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">Kendaraan Aktif</CardTitle>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500 text-white shadow-lg">
              <Car className="h-5 w-5" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">1,847</div>
          <div className="mt-2 grid grid-cols-1 gap-1 text-xs">
            <div className="flex justify-between">
              <span className="text-purple-600 dark:text-purple-400">Angkutan Umum</span>
              <span className="font-medium">1,203</span>
            </div>
            <div className="flex justify-between">
              <span className="text-purple-600 dark:text-purple-400">Bus Pariwisata</span>
              <span className="font-medium">644</span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <AlertTriangle className="h-3 w-3 text-yellow-600" />
            <span className="text-xs text-yellow-700 dark:text-yellow-400">23 akan kedaluwarsa</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
