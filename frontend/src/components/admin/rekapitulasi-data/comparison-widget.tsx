"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { useState } from "react"

const comparisonData = {
  "month-over-month": [
    { metric: "Total Pengajuan", current: 1524, previous: 1362, change: 11.9, trend: "up" },
    { metric: "Tingkat Persetujuan", current: 78.7, previous: 75.2, change: 4.7, trend: "up", unit: "%" },
    { metric: "Waktu Pemrosesan", current: 2.8, previous: 3.2, change: -12.5, trend: "up", unit: " hari" },
    { metric: "Kepuasan Pengguna", current: 4.6, previous: 4.4, change: 4.5, trend: "up", unit: "/5" },
  ],
  "year-over-year": [
    { metric: "Total Pengajuan", current: 1524, previous: 1156, change: 31.8, trend: "up" },
    { metric: "Tingkat Persetujuan", current: 78.7, previous: 72.1, change: 9.2, trend: "up", unit: "%" },
    { metric: "Waktu Pemrosesan", current: 2.8, previous: 4.1, change: -31.7, trend: "up", unit: " hari" },
    { metric: "Kepuasan Pengguna", current: 4.6, previous: 4.1, change: 12.2, trend: "up", unit: "/5" },
  ],
}

export default function ComparisonWidget() {
  const [comparisonType, setComparisonType] = useState<"month-over-month" | "year-over-year">("month-over-month")

  const getTrendIcon = (trend: string, change: number) => {
    if (Math.abs(change) < 1) return <Minus className="h-3 w-3" />
    return trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />
  }

  const getTrendColor = (trend: string, change: number) => {
    if (Math.abs(change) < 1) return "text-gray-500"
    return trend === "up" ? "text-green-600" : "text-red-600"
  }

  const getBadgeVariant = (trend: string, change: number) => {
    if (Math.abs(change) < 1) return "secondary"
    return trend === "up" ? "default" : "destructive"
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">Perbandingan Performa</CardTitle>
            <p className="text-sm text-gray-500">Analisis perubahan dari periode sebelumnya</p>
          </div>
          <Select value={comparisonType} onValueChange={(value: any) => setComparisonType(value)}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month-over-month">Bulan ke Bulan</SelectItem>
              <SelectItem value="year-over-year">Tahun ke Tahun</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {comparisonData[comparisonType].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-1">{item.metric}</h4>
                <div className="flex items-center gap-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-semibold text-gray-900">{item.current}</span>
                    <span className="text-sm text-gray-500">{item.unit}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <span>vs</span>
                    <span>
                      {item.previous}
                      {item.unit}
                    </span>
                  </div>
                </div>
              </div>
              <Badge variant={getBadgeVariant(item.trend, item.change)} className="flex items-center gap-1">
                {getTrendIcon(item.trend, item.change)}
                <span>{Math.abs(item.change).toFixed(1)}%</span>
              </Badge>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            💡 <strong>Insight:</strong> Performa keseluruhan menunjukkan tren positif dengan peningkatan efisiensi
            pemrosesan dan kepuasan pengguna.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
