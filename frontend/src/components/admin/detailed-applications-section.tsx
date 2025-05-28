import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MapPin, User, FileText, AlertCircle } from "lucide-react"

interface DetailedApplicationCardProps {
  title: string
  applicantName: string
  vehicleNumber: string
  location: string
  submittedDate: string
  status: string
  statusColor: string
  priority: "high" | "medium" | "low"
  documentsCount: number
  estimatedCompletion: string
}

function DetailedApplicationCard({
  title,
  applicantName,
  vehicleNumber,
  location,
  submittedDate,
  status,
  statusColor,
  priority,
  documentsCount,
  estimatedCompletion,
}: DetailedApplicationCardProps) {
  const getStatusClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-400",
      green:
        "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/30 dark:text-green-400",
      yellow:
        "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-400",
      red: "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-900/30 dark:text-red-400",
    }
    return colors[color] || colors.blue
  }

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      high: "bg-red-100 text-red-700 border-red-200",
      medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
      low: "bg-green-100 text-green-700 border-green-200",
    }
    return colors[priority] || colors.medium
  }

  return (
    <Card className="border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback className="bg-blue-100 text-blue-600">
                {applicantName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
              <div className="flex items-center gap-4 mt-1 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  <span>{applicantName}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
          </div>
          <Badge className={`text-xs ${getPriorityColor(priority)}`}>
            {priority === "high" ? "Prioritas Tinggi" : priority === "medium" ? "Prioritas Sedang" : "Prioritas Rendah"}
          </Badge>
        </div>

        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 mb-3">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-slate-500 dark:text-slate-400">No. Kendaraan:</span>
              <p className="font-medium text-slate-900 dark:text-white">{vehicleNumber}</p>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400">Tanggal Pengajuan:</span>
              <p className="font-medium text-slate-900 dark:text-white">{submittedDate}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1">
              <FileText className="h-3 w-3" />
              <span>{documentsCount} dokumen</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Estimasi: {estimatedCompletion}</span>
            </div>
          </div>
          <div className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusClasses(statusColor)}`}>
            {status}
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            Lihat Detail
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            Proses
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function DetailedApplicationsSection() {
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Pengajuan Terbaru</CardTitle>
            <CardDescription>Daftar pengajuan yang memerlukan perhatian admin</CardDescription>
          </div>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            23 Menunggu Review
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4 grid w-full grid-cols-4">
            <TabsTrigger value="all">Semua (23)</TabsTrigger>
            <TabsTrigger value="kartu">Kartu (15)</TabsTrigger>
            <TabsTrigger value="rekomendasi">Rekomendasi (8)</TabsTrigger>
            <TabsTrigger value="urgent">Mendesak (3)</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <DetailedApplicationCard
              title="Perpanjangan Kartu Pengawasan"
              applicantName="Budi Santoso"
              vehicleNumber="B 1234 XYZ"
              location="Kec. Kota"
              submittedDate="15 Mei 2025"
              status="Verifikasi Decision Tree"
              statusColor="blue"
              priority="high"
              documentsCount={8}
              estimatedCompletion="2 hari"
            />
            <DetailedApplicationCard
              title="Rekomendasi Ganti TNKB"
              applicantName="Siti Aminah"
              vehicleNumber="B 5678 ABC"
              location="Kec. Jati"
              submittedDate="20 Mei 2025"
              status="Menunggu Dokumen"
              statusColor="yellow"
              priority="medium"
              documentsCount={5}
              estimatedCompletion="5 hari"
            />
            <DetailedApplicationCard
              title="Rekomendasi Kendaraan Baru"
              applicantName="Ahmad Wijaya"
              vehicleNumber="B 9012 DEF"
              location="Kec. Undaan"
              submittedDate="22 Mei 2025"
              status="Disetujui"
              statusColor="green"
              priority="low"
              documentsCount={12}
              estimatedCompletion="Selesai"
            />
          </TabsContent>

          <TabsContent value="urgent" className="space-y-4">
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg dark:bg-red-900/20 dark:border-red-800">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <span className="text-sm text-red-700 dark:text-red-400">3 pengajuan memerlukan perhatian segera</span>
            </div>
            <DetailedApplicationCard
              title="Perpanjangan Kartu Pengawasan"
              applicantName="Budi Santoso"
              vehicleNumber="B 1234 XYZ"
              location="Kec. Kota"
              submittedDate="15 Mei 2025"
              status="Verifikasi Decision Tree"
              statusColor="blue"
              priority="high"
              documentsCount={8}
              estimatedCompletion="2 hari"
            />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Lihat Semua Pengajuan (247)
        </Button>
      </CardFooter>
    </Card>
  )
}
