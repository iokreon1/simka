import { Card, CardContent } from "@/components/ui/card"
import { Archive, FileText, Clock, CheckCircle } from "lucide-react"

const stats = [
  {
    title: "Total Arsip",
    value: "2,847",
    icon: Archive,
    trend: "+12%",
    color: "text-blue-600",
  },
  {
    title: "Dokumen Bulan Ini",
    value: "156",
    icon: FileText,
    trend: "+8%",
    color: "text-green-600",
  },
  {
    title: "Pending Review",
    value: "23",
    icon: Clock,
    trend: "-5%",
    color: "text-orange-600",
  },
  {
    title: "Disetujui Hari Ini",
    value: "12",
    icon: CheckCircle,
    trend: "+15%",
    color: "text-emerald-600",
  },
]

export function StatisticsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${stat.trend.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                  {stat.trend} dari bulan lalu
                </p>
              </div>
              <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
