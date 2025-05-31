"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock3, Bell } from "lucide-react"

export function StatusTracking() {
  const timeline = [
    {
      title: "Pengajuan Diterima",
      time: "15 Januari 2024, 10:30 WIB",
      status: "completed",
    },
    {
      title: "Dokumen Diverifikasi",
      time: "15 Januari 2024, 14:15 WIB",
      status: "completed",
    },
    {
      title: "Sedang Diproses",
      time: "16 Januari 2024, 09:00 WIB",
      status: "current",
    },
    {
      title: "Menunggu Persetujuan",
      time: "Estimasi: 17 Januari 2024",
      status: "pending",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Status Pengajuan</CardTitle>
        <CardDescription>Pantau status pengajuan rekomendasi Anda secara real-time</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
            <Clock3 className="w-6 h-6 text-yellow-600" />
            <div className="flex-1">
              <h4 className="font-medium text-yellow-900">Menunggu Verifikasi</h4>
              <p className="text-sm text-yellow-700">
                Pengajuan Anda sedang dalam proses verifikasi oleh petugas Dishub
              </p>
            </div>
            <Badge variant="outline" className="border-yellow-300 text-yellow-700">
              Dalam Proses
            </Badge>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Timeline Pengajuan</h4>
            <div className="space-y-3">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      item.status === "completed"
                        ? "bg-green-500"
                        : item.status === "current"
                          ? "bg-yellow-500"
                          : "bg-gray-300"
                    }`}
                  />
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${item.status === "pending" ? "text-gray-500" : "text-gray-900"}`}
                    >
                      {item.title}
                    </p>
                    <p className={`text-xs ${item.status === "pending" ? "text-gray-400" : "text-gray-500"}`}>
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <Bell className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Smart Reminder Aktif</h4>
              <p className="text-sm text-blue-700">
                Anda akan menerima notifikasi WhatsApp untuk setiap update status pengajuan.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
