import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface MonthlyData {
  month: string
  sent: number
  delivered: number
  read: number
  responded: number
}

interface MonthlyChartProps {
  data: MonthlyData[]
}

export function MonthlyChart({ data }: MonthlyChartProps) {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Tren Bulanan</CardTitle>
        <CardDescription>Perbandingan performa 4 bulan terakhir</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sent" fill="#8884d8" name="Dikirim" />
            <Bar dataKey="delivered" fill="#82ca9d" name="Terkirim" />
            <Bar dataKey="responded" fill="#ffc658" name="Direspons" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
