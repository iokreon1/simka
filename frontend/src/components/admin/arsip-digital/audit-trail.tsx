import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertCircle, Clock, Scroll } from "lucide-react"

const auditActivities = [
  {
    time: "2024-01-18 14:30",
    user: "Ahmad Susanto",
    action: "✅ Menyetujui pengajuan",
    document: "REG/001/2024",
    status: "success",
    icon: "🎉",
  },
  {
    time: "2024-01-18 10:15",
    user: "Siti Rahayu",
    action: "📎 Mengupload dokumen pendukung",
    document: "REG/002/2024",
    status: "info",
    icon: "📁",
  },
  {
    time: "2024-01-17 16:45",
    user: "Budi Hartono",
    action: "❌ Menolak pengajuan",
    document: "REG/003/2024",
    status: "error",
    icon: "🚫",
  },
  {
    time: "2024-01-17 14:20",
    user: "Ahmad Susanto",
    action: "🔄 Meminta revisi dokumen",
    document: "REG/004/2024",
    status: "warning",
    icon: "⚠️",
  },
]

export function AuditTrail() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Scroll className="h-5 w-5" />📜 Audit Trail & Histori Aktivitas
        </CardTitle>
        <CardDescription>🕵️ Pelacakan semua aktivitas dan perubahan pada sistem arsip digital</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {auditActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-2xl">{activity.icon}</div>
              <div
                className={`p-2 rounded-full ${
                  activity.status === "success"
                    ? "bg-emerald-100 text-emerald-600"
                    : activity.status === "error"
                      ? "bg-red-100 text-red-600"
                      : activity.status === "warning"
                        ? "bg-amber-100 text-amber-600"
                        : "bg-blue-100 text-blue-600"
                }`}
              >
                {activity.status === "success" ? (
                  <CheckCircle className="h-4 w-4" />
                ) : activity.status === "error" ? (
                  <XCircle className="h-4 w-4" />
                ) : activity.status === "warning" ? (
                  <AlertCircle className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-gray-600">
                  📋 Dokumen: {activity.document} • 👤 Oleh: {activity.user}
                </p>
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
