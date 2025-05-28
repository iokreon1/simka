"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, FileCheck } from "lucide-react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

const trendData = [
  { month: "Jan", total: 186, approved: 120, rejected: 66, perpanjangan: 110, rekomendasi: 76 },
  { month: "Feb", total: 305, approved: 200, rejected: 105, perpanjangan: 180, rekomendasi: 125 },
  { month: "Mar", total: 237, approved: 180, rejected: 57, perpanjangan: 140, rekomendasi: 97 },
  { month: "Apr", total: 273, approved: 190, rejected: 83, perpanjangan: 160, rekomendasi: 113 },
  { month: "May", total: 209, approved: 130, rejected: 79, perpanjangan: 120, rekomendasi: 89 },
  { month: "Jun", total: 314, approved: 240, rejected: 74, perpanjangan: 190, rekomendasi: 124 },
]

const serviceData = [
  { name: "Perpanjangan Kartu", value: 890, color: "#6366f1" },
  { name: "Pengajuan Rekomendasi", value: 634, color: "#8b5cf6" },
]

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Trend Chart */}
      <Card className="lg:col-span-2 border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Tren Pengajuan</CardTitle>
          <p className="text-sm text-gray-500">6 bulan terakhir</p>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis axisLine={false} tickLine={false} className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="perpanjangan"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="rekomendasi"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-sm text-gray-600">Perpanjangan Kartu</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-sm text-gray-600">Pengajuan Rekomendasi</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Distribution */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Distribusi Layanan</CardTitle>
          <p className="text-sm text-gray-500">Berdasarkan jenis</p>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {serviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-3">
            {serviceData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                  <div className="flex items-center gap-2">
                    {item.name === "Perpanjangan Kartu" ? (
                      <CreditCard className="h-4 w-4 text-gray-500" />
                    ) : (
                      <FileCheck className="h-4 w-4 text-gray-500" />
                    )}
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                </div>
                <span className="font-semibold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
