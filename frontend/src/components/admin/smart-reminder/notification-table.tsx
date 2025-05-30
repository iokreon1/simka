import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { CheckCircle, Clock, XCircle, Eye } from "lucide-react"

interface NotificationData {
  id: number
  recipient: string
  phone: string
  template: string
  status: string
  sentAt: string
  readAt: string | null
  responded: boolean
  response: string | null
}

interface NotificationTableProps {
  notifications: NotificationData[]
}

export function NotificationTable({ notifications }: NotificationTableProps) {
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Penerima</TableHead>
          <TableHead>Template</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Dikirim</TableHead>
          <TableHead>Dibaca</TableHead>
          <TableHead>Respons</TableHead>
          <TableHead>Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {notifications.map((notif) => (
          <TableRow key={notif.id}>
            <TableCell>
              <div>
                <p className="font-medium">{notif.recipient}</p>
                <p className="text-sm text-gray-600">{notif.phone}</p>
              </div>
            </TableCell>
            <TableCell>{notif.template}</TableCell>
            <TableCell>{getStatusBadge(notif.status)}</TableCell>
            <TableCell>{notif.sentAt}</TableCell>
            <TableCell>
              {notif.readAt ? (
                <span className="text-green-600">{notif.readAt}</span>
              ) : (
                <span className="text-gray-400">-</span>
              )}
            </TableCell>
            <TableCell>
              {notif.responded ? (
                <Badge variant="default" className="bg-green-500">
                  Ya
                </Badge>
              ) : (
                <Badge variant="secondary">Tidak</Badge>
              )}
            </TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Detail Notifikasi</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label>Penerima</Label>
                      <p className="text-sm">
                        {notif.recipient} ({notif.phone})
                      </p>
                    </div>
                    <div>
                      <Label>Template</Label>
                      <p className="text-sm">{notif.template}</p>
                    </div>
                    <div>
                      <Label>Status</Label>
                      <div className="mt-1">{getStatusBadge(notif.status)}</div>
                    </div>
                    {notif.response && (
                      <div>
                        <Label>Respons</Label>
                        <p className="text-sm bg-gray-50 p-2 rounded">{notif.response}</p>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
