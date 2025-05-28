"use client"

import { Calendar, FileText, TrendingUp, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const statsData = [
  {
    title: "Total Pengajuan",
    value: "1,524",
    change: "+12% bulan ini",
    changeType: "positive",
    icon: FileText,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Disetujui",
    value: "1,200",
    change: "78.7% tingkat persetujuan",
    changeType: "positive",
    icon: TrendingUp,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Menunggu",
    value: "174",
    change: "Rata-rata 3 hari",
    changeType: "neutral",
    icon: Calendar,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Ditolak",
    value: "150",
    change: "9.8% tingkat penolakan",
    changeType: "negative",
    icon: X,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
]

export default function StatsCards() {
  const getChangeColor = (type: string) => {
    switch (type) {
      case "positive":
        return "text-emerald-600"
      case "negative":
        return "text-red-600"
      default:
        return "text-amber-600"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <Card key={index} className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm mt-1 ${getChangeColor(stat.changeType)}`}>{stat.change}</p>
              </div>
              <div className={`h-12 w-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
