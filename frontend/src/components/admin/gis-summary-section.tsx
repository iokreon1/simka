import { BarChart3, Map, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface RegionData {
  name: string
  count: number
  percentage: number
  color: string
}

export function GisSummarySection() {
  const regionData: RegionData[] = [
    { name: "Kecamatan Kota", count: 15, percentage: 35, color: "bg-blue-500" },
    { name: "Kecamatan Jati", count: 12, percentage: 28, color: "bg-indigo-500" },
    { name: "Kecamatan Undaan", count: 8, percentage: 19, color: "bg-purple-500" },
    { name: "Kecamatan Gebog", count: 5, percentage: 12, color: "bg-emerald-500" },
    { name: "Kecamatan Mejobo", count: 3, percentage: 7, color: "bg-amber-500" },
  ]

  const totalSubmissions = regionData.reduce((sum, region) => sum + region.count, 0)

  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              Ringkasan Pemetaan GIS
            </CardTitle>
            <CardDescription>Distribusi pengajuan per wilayah kecamatan</CardDescription>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
            <Map className="h-6 w-6" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-700 dark:text-slate-300">Total Pengajuan</span>
            <span className="text-2xl font-bold text-slate-900 dark:text-white">{totalSubmissions}</span>
          </div>
        </div>

        <div className="space-y-3">
          {regionData.map((region, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${region.color}`} />
                  <span className="font-medium text-slate-700 dark:text-slate-300">{region.name}</span>
                </div>
                <span className="font-semibold text-slate-900 dark:text-white">{region.count}</span>
              </div>
              <div className="flex items-center gap-2">
                <Progress
                  value={region.percentage}
                  className="h-2 flex-1 bg-slate-200 dark:bg-slate-700"
                  indicatorClassName={region.color}
                />
                <span className="text-xs text-slate-500 dark:text-slate-400 w-8">{region.percentage}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <BarChart3 className="h-4 w-4" />
            <span>
              Wilayah dengan pengajuan terbanyak:{" "}
              <strong className="text-slate-900 dark:text-white">Kecamatan Kota</strong>
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          <Map className="mr-2 h-4 w-4" />
          Lihat Peta Lengkap
        </Button>
      </CardFooter>
    </Card>
  )
}
