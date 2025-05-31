"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { subDays } from "date-fns"
import type { DateRange } from "react-day-picker"

// Import komponen yang sudah dibuat
import { StatsCards } from "@/components/admin/smart-reminder/stats-cards"
import { TrendChart } from "@/components/admin/smart-reminder/trend-chart"
import { MonthlyChart } from "@/components/admin/smart-reminder/monthly-chart"
import { CategoryChart } from "@/components/admin/smart-reminder/category-chart"
import { NotificationList } from "@/components/admin/smart-reminder/notification-list"
import { TemplateList } from "@/components/admin/smart-reminder/template-list"
import { ExportDialog } from "@/components/admin/smart-reminder/export-dialog"
import { NotificationTable } from "@/components/admin/smart-reminder/notification-table"
import { Header } from "@/components/admin/header"
import { Sidebar } from "@/components/admin/sidebar"

export default function SmartReminderAdmin() {
  const [activeTab, setActiveTab] = useState("overview")
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  })
  const [exportDialogOpen, setExportDialogOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Mock data
  const stats = {
    totalSent: 1247,
    delivered: 1198,
    read: 1089,
    responded: 892,
  }

  const templates = [
    {
      id: 1,
      name: "Status Pengajuan Ditolak",
      type: "status_rejected",
      message: "Halo {nama}, pengajuan Anda dengan nomor {nomor_pengajuan} telah ditolak...",
      active: true,
      lastUsed: "2024-01-15",
    },
    {
      id: 2,
      name: "Status Pengajuan Diverifikasi",
      type: "status_verified",
      message: "Selamat! Pengajuan Anda dengan nomor {nomor_pengajuan} telah diverifikasi...",
      active: true,
      lastUsed: "2024-01-14",
    },
    {
      id: 3,
      name: "Pengingat Perpanjangan Kartu",
      type: "card_renewal",
      message: "Halo {nama}, kartu pengawasan Anda akan berakhir pada {tanggal_berakhir}...",
      active: true,
      lastUsed: "2024-01-13",
    },
  ]

  const notifications = [
    {
      id: 1,
      recipient: "John Doe",
      phone: "+62812345678",
      template: "Status Pengajuan Diverifikasi",
      status: "delivered",
      sentAt: "2024-01-15 10:30",
      readAt: "2024-01-15 10:32",
      responded: true,
      response: "Terima kasih",
    },
    {
      id: 2,
      recipient: "Jane Smith",
      phone: "+62812345679",
      template: "Pengingat Perpanjangan Kartu",
      status: "sent",
      sentAt: "2024-01-15 09:15",
      readAt: null,
      responded: false,
      response: null,
    },
    {
      id: 3,
      recipient: "Bob Wilson",
      phone: "+62812345680",
      template: "Status Pengajuan Ditolak",
      status: "failed",
      sentAt: "2024-01-15 08:45",
      readAt: null,
      responded: false,
      response: null,
    },
  ]

  const trendData = [
    { date: "2024-01-01", sent: 45, delivered: 43, read: 38, responded: 32 },
    { date: "2024-01-02", sent: 52, delivered: 50, read: 45, responded: 38 },
    { date: "2024-01-03", sent: 38, delivered: 36, read: 32, responded: 28 },
    { date: "2024-01-04", sent: 67, delivered: 64, read: 58, responded: 48 },
    { date: "2024-01-05", sent: 71, delivered: 68, read: 62, responded: 55 },
    { date: "2024-01-06", sent: 43, delivered: 41, read: 37, responded: 31 },
    { date: "2024-01-07", sent: 89, delivered: 85, read: 78, responded: 68 },
  ]

  const categoryData = [
    { name: "Status Pengajuan", value: 45, color: "#8884d8" },
    { name: "Perpanjangan Kartu", value: 35, color: "#82ca9d" },
    { name: "Reminder Umum", value: 20, color: "#ffc658" },
  ]

  const monthlyData = [
    { month: "Okt", sent: 1205, delivered: 1156, read: 1045, responded: 892 },
    { month: "Nov", sent: 1342, delivered: 1289, read: 1167, responded: 998 },
    { month: "Des", sent: 1247, delivered: 1198, read: 1089, responded: 892 },
    { month: "Jan", sent: 1456, delivered: 1398, read: 1267, responded: 1089 },
  ]

  return (
    <div className="min h-screen bg-gray-50">
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                  {/* Sidebar - Desktop */}
                  <div className="flex">
            <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 transform overflow-y-auto border-r bg-white pt-16 transition-all dark:border-slate-700 dark:bg-slate-800 md:block">
              <Sidebar />
            </aside>

      {/* Main Content */}
       <div className="flex-1 md:ml-64 px-6 pt-7">
        <main className="max-w-7xl mx-auto">
          <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Smart Reminder</h1>
                  <p className="text-gray-600 mt-1">Manajemen notifikasi otomatis via WhatsApp</p>
                </div>
                <div className="flex gap-3">
                  <ExportDialog
                    open={exportDialogOpen}
                    onOpenChange={setExportDialogOpen}
                    dateRange={dateRange}
                    onDateRangeChange={setDateRange}
                  />
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Kirim Notifikasi
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <StatsCards stats={stats} />

              {/* Main Content */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="templates">Template</TabsTrigger>
                  <TabsTrigger value="schedule">Penjadwalan</TabsTrigger>
                  <TabsTrigger value="history">Riwayat</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <TrendChart data={trendData} />

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <MonthlyChart data={monthlyData} />
                    <CategoryChart data={categoryData} />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <NotificationList notifications={notifications} />
                    <TemplateList templates={templates} />
                  </div>
                </TabsContent>

                {/* Templates Tab */}
                <TabsContent value="templates" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Template Notifikasi</CardTitle>
                      <CardDescription>Kelola template pesan untuk berbagai jenis notifikasi</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-gray-500 py-8">Template management akan ditambahkan di sini</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Schedule Tab */}
                <TabsContent value="schedule" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Penjadwalan Notifikasi</CardTitle>
                      <CardDescription>Atur jadwal pengiriman notifikasi otomatis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-gray-500 py-8">Schedule management akan ditambahkan di sini</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* History Tab */}
                <TabsContent value="history" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Riwayat Notifikasi</CardTitle>
                      <CardDescription>Log lengkap pengiriman dan respons notifikasi</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <NotificationTable notifications={notifications} />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
          </div>
        </main>
      </div>
      </div>
    </div>
  )
}
