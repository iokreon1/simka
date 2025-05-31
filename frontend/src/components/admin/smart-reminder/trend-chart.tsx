import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { format } from "date-fns"

interface TrendData {
  date: string
  sent: number
  delivered: number
  read: number
  responded: number
}

interface TrendChartProps {
  data: TrendData[]
}

export function TrendChart({ data }: TrendChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tren Pengiriman Notifikasi (7 Hari Terakhir)</CardTitle>
        <CardDescription>Grafik performa harian sistem notifikasi</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={(value) => format(new Date(value), "dd/MM")} />
            <YAxis />
            <Tooltip labelFormatter={(value) => format(new Date(value), "dd MMM yyyy")} />
            <Line type="monotone" dataKey="sent" stroke="#8884d8" strokeWidth={2} name="Dikirim" />
            <Line type="monotone" dataKey="delivered" stroke="#82ca9d" strokeWidth={2} name="Terkirim" />
            <Line type="monotone" dataKey="read" stroke="#ffc658" strokeWidth={2} name="Dibaca" />
            <Line type="monotone" dataKey="responded" stroke="#ff7300" strokeWidth={2} name="Direspons" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
