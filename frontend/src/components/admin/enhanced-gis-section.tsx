import { BarChart3, Map, MapPin, TrendingUp, Users, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface RegionData {
  name: string
  count: number
  percentage: number
  color: string
  growth: number
  activeVehicles: number
}

export function EnhancedGisSection() {
  const regionData: RegionData[] = [
    { name: "Kecamatan Kota", count: 15, percentage: 35, color: "bg-blue-500", growth: 12, activeVehicles: 456 },
    { name: "Kecamatan Jati", count: 12, percentage: 28, color: "bg-indigo-500", growth: 8, activeVehicles: 342 },
    { name: "Kecamatan Undaan", count: 8, percentage: 19, color: "bg-purple-500", growth: -2, activeVehicles: 289 },
    { name: "Kecamatan Gebog", count: 5, percentage: 12, color: "bg-emerald-500", growth: 15, activeVehicles: 178 },
    { name: "Kecamatan Mejobo", count: 3, percentage: 7, color: "bg-amber-500", growth: 5, activeVehicles: 123 },
  ]

  const totalSubmissions = regionData.reduce((sum, region) => sum + region.count, 0)
  const totalVehicles = regionData.reduce((sum, region) => sum + region.activeVehicles, 0)

  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              Analisis Pemetaan GIS
            </CardTitle>
            <CardDescription>Distribusi pengajuan dan kendaraan per wilayah</CardDescription>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
            <Map className="h-6 w-6" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Summary Stats */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Total Pengajuan</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{totalSubmissions}</p>
              </div>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">+8%</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Kendaraan Aktif</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{totalVehicles.toLocaleString()}</p>
              </div>
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Regional Data */}
        <div className="space-y-4">
          {regionData.map((region, index) => (
            <div key={index} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-4 w-4 rounded-full ${region.color}`} />
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">{region.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {region.activeVehicles.toLocaleString()} kendaraan terdaftar
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-slate-900 dark:text-white">{region.count}</p>
                  <div className="flex items-center gap-1">
                    {region.growth > 0 ? (
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    ) : (
                      <TrendingUp className="h-3 w-3 rotate-180 text-red-600" />
                    )}
                    <span className={`text-xs font-medium ${region.growth > 0 ? "text-green-600" : "text-red-600"}`}>
                      {region.growth > 0 ? "+" : ""}
                      {region.growth}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Progress
                  value={region.percentage}
                  className="h-2 flex-1 bg-slate-200 dark:bg-slate-700"
                  indicatorClassName={region.color}
                />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 w-12">
                  {region.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Insights */}
        <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <div className="flex items-start gap-3">
            <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 dark:text-blue-100">Insight Analisis</h4>
              <ul className="mt-2 space-y-1 text-sm text-blue-800 dark:text-blue-200">
                <li>• Kecamatan Kota memiliki tingkat pengajuan tertinggi (35%)</li>
                <li>• Kecamatan Gebog menunjukkan pertumbuhan terbaik (+15%)</li>
                <li>• Total 1,388 kendaraan tersebar di 5 kecamatan</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
          <Navigation className="mr-2 h-4 w-4" />
          Lihat Peta Lengkap
        </Button>
        <Button variant="outline" className="flex-1">
          <BarChart3 className="mr-2 h-4 w-4" />
          Analisis Detail
        </Button>
      </CardFooter>
    </Card>
  )
}
