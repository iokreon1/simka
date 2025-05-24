import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ApplicationCard } from "./application-card"

export function ApplicationsSection() {
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle>Pengajuan Terbaru</CardTitle>
        <CardDescription>Daftar pengajuan yang sedang diproses</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4 grid w-full grid-cols-3">
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="kartu">Kartu Pengawasan</TabsTrigger>
            <TabsTrigger value="rekomendasi">Rekomendasi</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <ApplicationCard
              title="Perpanjangan Kartu Pengawasan"
              subtitle="Angkutan Umum B 1234 XYZ"
              date="15 Mei 2025"
              status="Verifikasi Decision Tree"
              statusColor="blue"
            />
            <ApplicationCard
              title="Rekomendasi Ganti TNKB"
              subtitle="Angkutan Kota Rute A"
              date="20 Mei 2025"
              status="Menunggu Dokumen"
              statusColor="yellow"
            />
            <ApplicationCard
              title="Rekomendasi Kendaraan Baru"
              subtitle="Bus Pariwisata"
              date="22 Mei 2025"
              status="Disetujui"
              statusColor="green"
            />
          </TabsContent>
          <TabsContent value="kartu" className="space-y-4">
            <ApplicationCard
              title="Perpanjangan Kartu Pengawasan"
              subtitle="Angkutan Umum B 1234 XYZ"
              date="15 Mei 2025"
              status="Verifikasi Decision Tree"
              statusColor="blue"
            />
          </TabsContent>
          <TabsContent value="rekomendasi" className="space-y-4">
            <ApplicationCard
              title="Rekomendasi Ganti TNKB"
              subtitle="Angkutan Kota Rute A"
              date="20 Mei 2025"
              status="Menunggu Dokumen"
              statusColor="yellow"
            />
            <ApplicationCard
              title="Rekomendasi Kendaraan Baru"
              subtitle="Bus Pariwisata"
              date="22 Mei 2025"
              status="Disetujui"
              statusColor="green"
            />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Lihat Semua Pengajuan
        </Button>
      </CardFooter>
    </Card>
  )
}
