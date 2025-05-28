"use client"

// Utility functions untuk export data
export interface ExportData {
  id: string
  nama: string
  layanan: string
  deskripsi: string
  tanggal: string
  status: string
  prioritas: string
}

export interface ExportOptions {
  serviceFilter: string
  periodFilter: string
  statusFilter: string
  dateRange?: {
    start: Date
    end: Date
  }
}

// Sample data untuk export (dalam implementasi nyata, ini akan dari API)
const sampleExportData: ExportData[] = [
  {
    id: "REQ001",
    nama: "Ahmad Wijaya",
    layanan: "Perpanjangan Kartu",
    deskripsi: "Perpanjangan kartu keanggotaan",
    tanggal: "2024-01-15",
    status: "Disetujui",
    prioritas: "Normal",
  },
  {
    id: "REQ002",
    nama: "Siti Nurhaliza",
    layanan: "Pengajuan Rekomendasi",
    deskripsi: "Rekomendasi untuk beasiswa",
    tanggal: "2024-01-14",
    status: "Menunggu",
    prioritas: "Tinggi",
  },
  {
    id: "REQ003",
    nama: "Budi Santoso",
    layanan: "Perpanjangan Kartu",
    deskripsi: "Perpanjangan kartu identitas",
    tanggal: "2024-01-13",
    status: "Disetujui",
    prioritas: "Normal",
  },
  {
    id: "REQ004",
    nama: "Maya Sari",
    layanan: "Pengajuan Rekomendasi",
    deskripsi: "Rekomendasi untuk pekerjaan",
    tanggal: "2024-01-12",
    status: "Ditolak",
    prioritas: "Rendah",
  },
  {
    id: "REQ005",
    nama: "Andi Pratama",
    layanan: "Perpanjangan Kartu",
    deskripsi: "Perpanjangan kartu mahasiswa",
    tanggal: "2024-01-11",
    status: "Menunggu",
    prioritas: "Tinggi",
  },
  // Tambah lebih banyak data untuk demo
  {
    id: "REQ006",
    nama: "Dewi Lestari",
    layanan: "Pengajuan Rekomendasi",
    deskripsi: "Rekomendasi untuk magang",
    tanggal: "2024-01-10",
    status: "Disetujui",
    prioritas: "Normal",
  },
  {
    id: "REQ007",
    nama: "Rudi Hartono",
    layanan: "Perpanjangan Kartu",
    deskripsi: "Perpanjangan kartu pegawai",
    tanggal: "2024-01-09",
    status: "Disetujui",
    prioritas: "Normal",
  },
  {
    id: "REQ008",
    nama: "Lina Marlina",
    layanan: "Pengajuan Rekomendasi",
    deskripsi: "Rekomendasi untuk penelitian",
    tanggal: "2024-01-08",
    status: "Menunggu",
    prioritas: "Tinggi",
  },
]

// Function untuk filter data berdasarkan options
export const filterExportData = (data: ExportData[], options: ExportOptions): ExportData[] => {
  let filteredData = [...data]

  // Filter berdasarkan jenis layanan
  if (options.serviceFilter !== "all") {
    const serviceMap = {
      perpanjangan: "Perpanjangan Kartu",
      rekomendasi: "Pengajuan Rekomendasi",
    }
    const serviceName = serviceMap[options.serviceFilter as keyof typeof serviceMap]
    if (serviceName) {
      filteredData = filteredData.filter((item) => item.layanan === serviceName)
    }
  }

  // Filter berdasarkan status
  if (options.statusFilter !== "all") {
    const statusMap = {
      approved: "Disetujui",
      pending: "Menunggu",
      rejected: "Ditolak",
    }
    const statusName = statusMap[options.statusFilter as keyof typeof statusMap]
    if (statusName) {
      filteredData = filteredData.filter((item) => item.status === statusName)
    }
  }

  // Filter berdasarkan periode (implementasi sederhana)
  // Dalam implementasi nyata, ini akan lebih kompleks dengan date parsing

  return filteredData
}

// Function untuk generate Excel (simulasi)
export const generateExcelFile = async (data: ExportData[], options: ExportOptions): Promise<void> => {
  const filteredData = filterExportData(data, options)

  // Dalam implementasi nyata, gunakan library seperti xlsx atau exceljs
  console.log("Generating Excel file with data:", filteredData)

  // Simulasi proses export
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Excel file generated successfully")
      resolve()
    }, 2000)
  })
}

// Function untuk generate PDF (simulasi)
export const generatePDFFile = async (data: ExportData[], options: ExportOptions): Promise<void> => {
  const filteredData = filterExportData(data, options)

  // Dalam implementasi nyata, gunakan library seperti jsPDF atau puppeteer
  console.log("Generating PDF file with data:", filteredData)

  // Simulasi proses export
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("PDF file generated successfully")
      resolve()
    }, 2000)
  })
}

// Hook untuk export functionality
export const useExport = () => {
  const exportToExcel = async (options: ExportOptions) => {
    try {
      await generateExcelFile(sampleExportData, options)
      // Dalam implementasi nyata, ini akan trigger download
      const fileName = `rekapitulasi-data-${new Date().toISOString().split("T")[0]}.xlsx`
      console.log(`Excel file ready for download: ${fileName}`)
      return { success: true, fileName }
    } catch (error) {
      console.error("Error generating Excel file:", error)
      return { success: false, error }
    }
  }

  const exportToPDF = async (options: ExportOptions) => {
    try {
      await generatePDFFile(sampleExportData, options)
      // Dalam implementasi nyata, ini akan trigger download
      const fileName = `rekapitulasi-data-${new Date().toISOString().split("T")[0]}.pdf`
      console.log(`PDF file ready for download: ${fileName}`)
      return { success: true, fileName }
    } catch (error) {
      console.error("Error generating PDF file:", error)
      return { success: false, error }
    }
  }

  return {
    exportToExcel,
    exportToPDF,
  }
}
