"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Target, Clock, Users, Award } from "lucide-react"

const performanceData = [
  {
    title: "Target Bulanan",
    current: 1524,
    target: 1800,
    percentage: 84.7,
    trend: "up",
    icon: Target,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Waktu Rata-rata",
    current: 2.8,
    target: 3.0,
    percentage: 93.3,
    trend: "up",
    icon: Clock,
    color: "text-green-600",
    bgColor: "bg-green-50",
    unit: "hari",
  },
  {
    title: "Kepuasan Pengguna",
    current: 4.6,
    target: 4.5,
    percentage: 102.2,
    trend: "up",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    unit: "/5.0",
  },
  {
    title: "Efisiensi Tim",
    current: 89,
    target: 85,
    percentage: 104.7,
    trend: "up",
    icon: Award,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    unit: "%",
  },
]

export default function PerformanceMetrics() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Performance Metrics</CardTitle>
        <p className="text-sm text-gray-500">Target dan pencapaian bulan ini</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceData.map((metric, index) => (
            <div key={index} className={`p-4 ${metric.bgColor} rounded-xl`}>
              <div className="flex items-center justify-between mb-3">
                <metric.icon className={`h-5 w-5 ${metric.color}`} />
                <Badge variant={metric.trend === "up" ? "default" : "secondary"} className="text-xs">
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {metric.percentage.toFixed(1)}%
                </Badge>
              </div>
              <div className="space-y-2">
                <h4 className={`font-medium ${metric.color}`}>{metric.title}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">{metric.current}</span>
                  <span className="text-sm text-gray-600">{metric.unit}</span>
                </div>
                <Progress value={metric.percentage} className="h-2" />
                <p className="text-xs text-gray-600">
                  Target: {metric.target}
                  {metric.unit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
