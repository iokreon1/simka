"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, FileCheck, TrendingUp } from "lucide-react"

const insightsData = [
  {
    icon: CreditCard,
    title: "Perpanjangan Kartu",
    description:
      "Permintaan perpanjangan kartu meningkat 18% dalam 3 bulan terakhir. Puncak pengajuan terjadi pada awal dan akhir bulan.",
    bgColor: "bg-blue-50",
    textColor: "text-blue-900",
    descColor: "text-blue-700",
    iconColor: "text-blue-600",
  },
  {
    icon: FileCheck,
    title: "Pengajuan Rekomendasi",
    description:
      "Rekomendasi untuk beasiswa dan pekerjaan mendominasi 70% dari total pengajuan. Tingkat persetujuan 85%.",
    bgColor: "bg-purple-50",
    textColor: "text-purple-900",
    descColor: "text-purple-700",
    iconColor: "text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Rekomendasi Sistem",
    description:
      "Implementasi reminder otomatis untuk perpanjangan kartu dan template rekomendasi untuk mempercepat proses.",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-900",
    descColor: "text-emerald-700",
    iconColor: "text-emerald-600",
  },
]

export default function DSSInsights() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Insights & Rekomendasi</CardTitle>
        <p className="text-sm text-gray-500">Decision Support System</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insightsData.map((insight, index) => (
            <div key={index} className={`p-4 ${insight.bgColor} rounded-xl`}>
              <div className="flex items-center gap-2 mb-2">
                <insight.icon className={`h-5 w-5 ${insight.iconColor}`} />
                <h4 className={`font-medium ${insight.textColor}`}>{insight.title}</h4>
              </div>
              <p className={`text-sm ${insight.descColor}`}>{insight.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
