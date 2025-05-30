import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, XCircle } from "lucide-react"

interface Notification {
  id: number
  recipient: string
  template: string
  status: string
  sentAt: string
}

interface NotificationListProps {
  notifications: Notification[]
}

export function NotificationList({ notifications }: NotificationListProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return (
          <Badge variant="default" className="bg-green-500">
            <CheckCircle className="w-3 h-3 mr-1" />
            Terkirim
          </Badge>
        )
      case "sent":
        return (
          <Badge variant="secondary">
            <Clock className="w-3 h-3 mr-1" />
            Dikirim
          </Badge>
        )
      case "failed":
        return (
          <Badge variant="destructive">
            <XCircle className="w-3 h-3 mr-1" />
            Gagal
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifikasi Terbaru</CardTitle>
        <CardDescription>5 notifikasi terakhir yang dikirim</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.slice(0, 5).map((notif) => (
            <div key={notif.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <p className="font-medium">{notif.recipient}</p>
                <p className="text-sm text-gray-600">{notif.template}</p>
                <p className="text-xs text-gray-500">{notif.sentAt}</p>
              </div>
              <div className="text-right">{getStatusBadge(notif.status)}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
