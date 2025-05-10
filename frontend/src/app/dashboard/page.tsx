import Image from "next/image"
import Link from "next/link"
import {
  Bell,
  Calendar,
  Car,
  ChevronDown,
  ClipboardList,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  Settings,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Logo Dinas Perhubungan"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-[#0a2647]">DINAS PERHUBUNGAN</h1>
              <p className="text-xs text-gray-500">KABUPATEN KUDUS</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-500">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 overflow-hidden rounded-full bg-[#0a2647]">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Ahmad Fauzi</p>
                <p className="text-xs text-gray-500">Pengguna</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 mt-16 overflow-y-auto bg-[#0a2647] md:block">
          <nav className="px-4 py-6 space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-white rounded-md bg-[#144272]">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 transition-colors rounded-md hover:text-white hover:bg-[#144272]"
            >
              <Car className="w-5 h-5" />
              <span>Pengujian Kendaraan</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 transition-colors rounded-md hover:text-white hover:bg-[#144272]"
            >
              <FileText className="w-5 h-5" />
              <span>Perizinan Trayek</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 transition-colors rounded-md hover:text-white hover:bg-[#144272]"
            >
              <ClipboardList className="w-5 h-5" />
              <span>Pengaduan</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 transition-colors rounded-md hover:text-white hover:bg-[#144272]"
            >
              <Calendar className="w-5 h-5" />
              <span>Jadwal Pengujian</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 transition-colors rounded-md hover:text-white hover:bg-[#144272]"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Pesan</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 transition-colors rounded-md hover:text-white hover:bg-[#144272]"
            >
              <User className="w-5 h-5" />
              <span>Profil</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-gray-300 transition-colors rounded-md hover:text-white hover:bg-[#144272]"
            >
              <Settings className="w-5 h-5" />
              <span>Pengaturan</span>
            </Link>
            <div className="pt-6 mt-6 border-t border-gray-700">
              <Link
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-300 transition-colors rounded-md hover:text-white hover:bg-[#144272]"
              >
                <LogOut className="w-5 h-5" />
                <span>Keluar</span>
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:ml-64 mt-16">
          <div className="container mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#0a2647]">Dashboard</h1>
              <p className="text-gray-500">Selamat datang kembali, Ahmad Fauzi</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Total Pengujian</CardTitle>
                  <Car className="w-4 h-4 text-[#0a2647]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-green-500">+2 dari bulan lalu</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Perizinan Aktif</CardTitle>
                  <FileText className="w-4 h-4 text-[#0a2647]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-gray-500">Berlaku hingga Des 2025</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Pengaduan</CardTitle>
                  <ClipboardList className="w-4 h-4 text-[#0a2647]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-orange-500">Menunggu respon</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">Jadwal Mendatang</CardTitle>
                  <Calendar className="w-4 h-4 text-[#0a2647]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-gray-500">Dalam 7 hari ke depan</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Upcoming Schedule */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Jadwal Mendatang</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all">
                    <TabsList className="mb-4">
                      <TabsTrigger value="all">Semua</TabsTrigger>
                      <TabsTrigger value="pengujian">Pengujian</TabsTrigger>
                      <TabsTrigger value="perizinan">Perizinan</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">Pengujian Kendaraan B 1234 XYZ</h3>
                            <p className="text-sm text-gray-500">Truk Angkutan Barang</p>
                          </div>
                          <div className="px-2 py-1 text-xs font-medium text-white rounded-full bg-[#0a2647]">
                            15 Mei 2025
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <div className="text-xs text-gray-500">Status:</div>
                          <div className="px-2 py-0.5 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                            Terjadwal
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">Perpanjangan Izin Trayek</h3>
                            <p className="text-sm text-gray-500">Angkutan Kota Rute A</p>
                          </div>
                          <div className="px-2 py-1 text-xs font-medium text-white rounded-full bg-[#0a2647]">
                            20 Mei 2025
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <div className="text-xs text-gray-500">Status:</div>
                          <div className="px-2 py-0.5 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full">
                            Menunggu Dokumen
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="pengujian" className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">Pengujian Kendaraan B 1234 XYZ</h3>
                            <p className="text-sm text-gray-500">Truk Angkutan Barang</p>
                          </div>
                          <div className="px-2 py-1 text-xs font-medium text-white rounded-full bg-[#0a2647]">
                            15 Mei 2025
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <div className="text-xs text-gray-500">Status:</div>
                          <div className="px-2 py-0.5 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                            Terjadwal
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="perizinan" className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">Perpanjangan Izin Trayek</h3>
                            <p className="text-sm text-gray-500">Angkutan Kota Rute A</p>
                          </div>
                          <div className="px-2 py-1 text-xs font-medium text-white rounded-full bg-[#0a2647]">
                            20 Mei 2025
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <div className="text-xs text-gray-500">Status:</div>
                          <div className="px-2 py-0.5 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full">
                            Menunggu Dokumen
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Status Permohonan */}
              <Card>
                <CardHeader>
                  <CardTitle>Status Permohonan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium">Pengujian Kendaraan</div>
                      <div className="text-sm text-gray-500">75%</div>
                    </div>
                    <Progress value={75} className="h-2 bg-gray-200" indicatorClassName="bg-[#0a2647]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium">Perizinan Trayek</div>
                      <div className="text-sm text-gray-500">50%</div>
                    </div>
                    <Progress value={50} className="h-2 bg-gray-200" indicatorClassName="bg-[#0a2647]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium">Pengaduan</div>
                      <div className="text-sm text-gray-500">30%</div>
                    </div>
                    <Progress value={30} className="h-2 bg-gray-200" indicatorClassName="bg-[#0a2647]" />
                  </div>
                  <div className="pt-4 mt-4 border-t">
                    <h3 className="mb-2 text-sm font-medium">Pengumuman Terbaru</h3>
                    <div className="p-3 text-sm border rounded-lg bg-blue-50 border-blue-100 text-[#0a2647]">
                      Jadwal pengujian kendaraan untuk bulan Mei 2025 telah diperbarui. Silakan cek jadwal terbaru.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Aktivitas Terbaru</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-blue-50 text-[#0a2647]">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Pengajuan Perizinan Trayek</p>
                      <p className="text-sm text-gray-500">Anda telah mengajukan permohonan perizinan trayek baru</p>
                      <p className="text-xs text-gray-400">2 hari yang lalu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-green-50 text-green-600">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Pengujian Kendaraan Selesai</p>
                      <p className="text-sm text-gray-500">Kendaraan B 5678 ABC telah lulus pengujian</p>
                      <p className="text-xs text-gray-400">1 minggu yang lalu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-orange-50 text-orange-600">
                      <ClipboardList className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Pengaduan Direspon</p>
                      <p className="text-sm text-gray-500">Pengaduan Anda tentang angkutan umum telah direspon</p>
                      <p className="text-xs text-gray-400">2 minggu yang lalu</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
