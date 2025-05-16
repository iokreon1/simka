import Link from "next/link"
import Image from "next/image"
import {
  Bell,
  CheckCircle,
  Clock,
  FileText,
  MapPin,
  MessageSquare,
  User,
  BarChart3,
  Brain,
  Eye,
  Map,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md px-8">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/logo-dishub.png"
                alt="Logo Dishub Kudus"
                width={40}
                height={40}
                className="h-10 w-10 object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wide text-sky-950">DISHUB</span>
              <span className="text-xs text-sky-700">Kabupaten Kudus</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#beranda" className="text-sm font-medium text-gray-600 transition-colors hover:text-sky-700">
              Beranda
            </Link>
            <Link href="#fitur" className="text-sm font-medium text-gray-600 transition-colors hover:text-sky-700">
              Fitur
            </Link>
            <Link href="#manfaat" className="text-sm font-medium text-gray-600 transition-colors hover:text-sky-700">
              Manfaat
            </Link>
            <Link href="#cara-kerja" className="text-sm font-medium text-gray-600 transition-colors hover:text-sky-700">
              Cara Kerja
            </Link>
            <Link href="#kontak" className="text-sm font-medium text-gray-600 transition-colors hover:text-sky-700">
              Kontak
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-sky-700 hover:bg-sky-50 hover:text-sky-800 cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                    Masuk
              </Button>
            </Link>
            <Button
              size="sm"
              className="hidden md:flex bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 cursor-pointer"
            >
              Daftar
            </Button>

            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="beranda"
          className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-20 lg:py-32"
        >
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-sky-200/40 to-sky-300/40 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-tr from-sky-200/40 to-sky-300/40 blur-3xl"></div>

          <div className="container px-4 sm:px-6 lg:px-10 relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <AnimatedSection direction="right" duration={800}>
                <div className="flex flex-col space-y-8 max-w-xl">
                  <div>
                    <div className="mb-6 inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-sm font-medium text-sky-700 shadow-sm">
                      <span className="mr-2 flex h-2 w-2 rounded-full bg-sky-500"></span>
                      Sistem Informasi Terpadu
                    </div>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                      Penerbitan & Perpanjangan <span className="text-sky-700">Kartu Pengawasan</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Layanan digital Dinas Perhubungan Kabupaten Kudus untuk penerbitan dan perpanjangan kartu
                      pengawasan izin usaha angkutan yang lebih efisien, transparan, dan mudah.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 shadow-lg shadow-sky-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-200/60"
                    >
                      Ajukan Permohonan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-sky-200 text-sky-700 hover:bg-sky-50 hover:text-sky-800"
                    >
                      Cek Status
                    </Button>
                  </div>

                  <StaggeredChildren
                    staggerDelay={150}
                    baseDelay={300}
                    className="grid grid-cols-2 gap-4 sm:grid-cols-3"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-sky-600" />
                      <span className="text-sm text-gray-600">Proses Cepat</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-sky-600" />
                      <span className="text-sm text-gray-600">Transparan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-sky-600" />
                      <span className="text-sm text-gray-600">Terintegrasi</span>
                    </div>
                  </StaggeredChildren>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" duration={800}>
                <div className="relative flex justify-center lg:justify-end">
                  <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 blur-3xl"></div>
                  <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl shadow-sky-200/50 w-full max-w-[650px]">
                    <Image
                      src="/homepage-dishub.jpg"
                      alt="Ilustrasi Sistem Dishub"
                      width={650}
                      height={780}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gradient-to-tr from-sky-400/20 to-sky-500/20 blur-2xl"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Statistik */}
        <AnimatedSection>
          <section className="py-16 bg-white">
            <div className="container px-4 sm:px-6 lg:px-10">
              <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-sky-600 to-sky-800 p-1 shadow-xl">
                <div className="rounded-xl bg-white p-8">
                  <StaggeredChildren className="grid grid-cols-2 gap-8 md:grid-cols-4" staggerDelay={150}>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50">
                        <FileText className="h-8 w-8 text-sky-600" />
                      </div>
                      <span className="mb-1 text-3xl font-bold text-sky-700">1500+</span>
                      <span className="text-sm text-gray-600">Kartu Pengawasan Terbit</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50">
                        <Clock className="h-8 w-8 text-sky-600" />
                      </div>
                      <span className="mb-1 text-3xl font-bold text-sky-700">85%</span>
                      <span className="text-sm text-gray-600">Pengurangan Waktu Proses</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50">
                        <Bell className="h-8 w-8 text-sky-600" />
                      </div>
                      <span className="mb-1 text-3xl font-bold text-sky-700">24/7</span>
                      <span className="text-sm text-gray-600">Layanan Online</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50">
                        <CheckCircle className="h-8 w-8 text-sky-600" />
                      </div>
                      <span className="mb-1 text-3xl font-bold text-sky-700">98%</span>
                      <span className="text-sm text-gray-600">Tingkat Kepuasan</span>
                    </div>
                  </StaggeredChildren>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Fitur Utama */}
        <section id="fitur" className="py-24 bg-gradient-to-b from-white to-sky-50">
          <div className="container px-4 sm:px-6 lg:px-10">
            <AnimatedSection className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-sm font-medium text-sky-700 shadow-sm mb-4">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-sky-500"></span>
                Fitur Unggulan
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Teknologi Terkini untuk Pelayanan Terbaik</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sistem kami dilengkapi dengan teknologi terkini untuk memberikan pelayanan terbaik bagi masyarakat
                Kabupaten Kudus
              </p>
            </AnimatedSection>

            <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={100}>
              <div className="group relative overflow-hidden rounded-2xl bg-white p-1 shadow-lg shadow-sky-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-xl bg-white p-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <Bell className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Smart Reminder</h3>
                  <p className="text-gray-600">
                    Sistem pengingat otomatis melalui WhatsApp untuk status pengajuan dan masa berlaku kartu pengawasan.
                  </p>
                  <div className="mt-6 flex items-center text-sky-600 transition-colors duration-300 group-hover:text-sky-700">
                    <span className="text-sm font-medium">Pelajari lebih lanjut</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-1 shadow-lg shadow-sky-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-xl bg-white p-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <FileText className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">OCR Technology</h3>
                  <p className="text-gray-600">
                    Teknologi pengenalan karakter otomatis untuk mempercepat pengisian formulir dari dokumen yang
                    diunggah.
                  </p>
                  <div className="mt-6 flex items-center text-sky-600 transition-colors duration-300 group-hover:text-sky-700">
                    <span className="text-sm font-medium">Pelajari lebih lanjut</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-1 shadow-lg shadow-sky-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-xl bg-white p-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <Brain className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Decision Tree</h3>
                  <p className="text-gray-600">
                    Evaluasi otomatis kelengkapan dan validitas data untuk mempercepat proses persetujuan.
                  </p>
                  <div className="mt-6 flex items-center text-sky-600 transition-colors duration-300 group-hover:text-sky-700">
                    <span className="text-sm font-medium">Pelajari lebih lanjut</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-1 shadow-lg shadow-sky-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-xl bg-white p-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <BarChart3 className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Decision Support System</h3>
                  <p className="text-gray-600">
                    Sistem pendukung keputusan untuk membantu admin dalam menentukan prioritas dan analisis data.
                  </p>
                  <div className="mt-6 flex items-center text-sky-600 transition-colors duration-300 group-hover:text-sky-700">
                    <span className="text-sm font-medium">Pelajari lebih lanjut</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-1 shadow-lg shadow-sky-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-xl bg-white p-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <Map className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Geographic Information System</h3>
                  <p className="text-gray-600">
                    Pemetaan visual lokasi usaha angkutan untuk analisis spasial dan pengambilan keputusan.
                  </p>
                  <div className="mt-6 flex items-center text-sky-600 transition-colors duration-300 group-hover:text-sky-700">
                    <span className="text-sm font-medium">Pelajari lebih lanjut</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-1 shadow-lg shadow-sky-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-200/50">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-xl bg-white p-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Tracking Status</h3>
                  <p className="text-gray-600">
                    Pantau status pengajuan secara real-time dan lihat riwayat pengajuan yang pernah dilakukan.
                  </p>
                  <div className="mt-6 flex items-center text-sky-600 transition-colors duration-300 group-hover:text-sky-700">
                    <span className="text-sm font-medium">Pelajari lebih lanjut</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </StaggeredChildren>
          </div>
        </section>

        {/* Cara Kerja */}
        <section id="cara-kerja" className="py-24 bg-sky-50">
          <div className="container px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="right">
                <div>
                  <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-sm font-medium text-sky-700 shadow-sm mb-4">
                    <span className="mr-2 flex h-2 w-2 rounded-full bg-sky-500"></span>
                    Cara Kerja Sistem
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Proses yang Efisien dan Transparan</h2>
                  <p className="text-gray-600 mb-10">
                    Sistem informasi penerbitan dan perpanjangan kartu pengawasan izin usaha angkutan bekerja dengan
                    efisien dan transparan untuk memberikan pelayanan terbaik.
                  </p>

                  <StaggeredChildren className="space-y-8" staggerDelay={200}>
                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-sky-700 text-white shadow-lg">
                        <span className="font-bold">1</span>
                      </div>
                      <div className="rounded-xl bg-white p-6 shadow-lg">
                        <h3 className="text-lg font-semibold mb-2">Pengajuan Perpanjangan Kartu Pengawasan</h3>
                        <p className="text-gray-600">
                          Isi formulir online dengan bantuan OCR, sistem akan mengevaluasi kelengkapan data menggunakan
                          Decision Tree.
                        </p>
                      </div>
                    </div>

                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-sky-700 text-white shadow-lg">
                        <span className="font-bold">2</span>
                      </div>
                      <div className="rounded-xl bg-white p-6 shadow-lg">
                        <h3 className="text-lg font-semibold mb-2">Pengajuan Rekomendasi</h3>
                        <p className="text-gray-600">
                          Pilih jenis rekomendasi yang dibutuhkan, isi formulir, dan tunggu verifikasi dari petugas
                          Dishub.
                        </p>
                      </div>
                    </div>

                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-sky-700 text-white shadow-lg">
                        <span className="font-bold">3</span>
                      </div>
                      <div className="rounded-xl bg-white p-6 shadow-lg">
                        <h3 className="text-lg font-semibold mb-2">Rekapitulasi Data</h3>
                        <p className="text-gray-600">
                          Statistik dan laporan dalam bentuk grafik dan tabel yang dapat diekspor dalam format Excel
                          atau PDF.
                        </p>
                      </div>
                    </div>

                    <div className="relative pl-16">
                      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-sky-700 text-white shadow-lg">
                        <span className="font-bold">4</span>
                      </div>
                      <div className="rounded-xl bg-white p-6 shadow-lg">
                        <h3 className="text-lg font-semibold mb-2">Tracking Status dan Smart Reminder</h3>
                        <p className="text-gray-600">
                          Pantau status pengajuan secara real-time dan terima notifikasi otomatis melalui WhatsApp.
                        </p>
                      </div>
                    </div>
                  </StaggeredChildren>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left">
                <div className="relative">
                  <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 blur-3xl"></div>
                  <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/placeholder.svg?height=600&width=500"
                      alt="Alur Kerja Sistem"
                      width={500}
                      height={600}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-tr from-sky-400/20 to-sky-500/20 blur-2xl"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Manfaat */}
        <section id="manfaat" className="py-24 bg-white">
          <div className="container px-4 sm:px-6 lg:px-10">
            <AnimatedSection className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-sm font-medium text-sky-700 shadow-sm mb-4">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-sky-500"></span>
                Manfaat Sistem
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Transformasi Digital dalam Pelayanan Publik</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Transformasi digital dalam pelayanan publik memberikan berbagai manfaat bagi masyarakat dan Dinas
                Perhubungan
              </p>
            </AnimatedSection>

            <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={100}>
              <div className="group relative overflow-hidden rounded-2xl bg-white p-px shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-2xl bg-white p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <Clock className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Efisiensi Waktu</h3>
                  <p className="text-gray-600">
                    Proses pengajuan yang lebih cepat tanpa perlu kunjungan langsung ke kantor Dishub.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-px shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-2xl bg-white p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Transparansi</h3>
                  <p className="text-gray-600">
                    Tracking status pengajuan secara real-time dan notifikasi otomatis untuk setiap perubahan status.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-px shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-2xl bg-white p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <FileText className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Akurasi Data</h3>
                  <p className="text-gray-600">
                    Penggunaan OCR dan Decision Tree mengurangi kesalahan dalam pengisian dan verifikasi data.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-px shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-2xl bg-white p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <Bell className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Pengingat Otomatis</h3>
                  <p className="text-gray-600">
                    Smart Reminder memastikan pengguna tidak melewatkan masa berlaku kartu pengawasan.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-px shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-2xl bg-white p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <BarChart3 className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Analisis Data</h3>
                  <p className="text-gray-600">
                    Visualisasi data dan laporan untuk pengambilan keputusan yang lebih baik oleh Dishub.
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-px shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-2xl bg-white p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <Clock className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Pelayanan 24/7</h3>
                  <p className="text-gray-600">
                    Akses sistem kapan saja dan di mana saja melalui perangkat yang terhubung internet.
                  </p>
                </div>
              </div>
            </StaggeredChildren>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 bg-gradient-to-b from-white to-sky-50">
          <div className="container px-4 sm:px-6 lg:px-10">
            <AnimatedSection className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-sm font-medium text-sky-700 shadow-sm mb-4">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-sky-500"></span>
                Testimoni
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Apa Kata Pengguna Kami</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dengarkan pengalaman pengguna yang telah merasakan manfaat dari sistem informasi penerbitan dan
                perpanjangan kartu pengawasan
              </p>
            </AnimatedSection>

            <StaggeredChildren className="grid md:grid-cols-3 gap-8" staggerDelay={150}>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-sky-100">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Foto Pengguna"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Budi Santoso</h4>
                    <p className="text-sm text-gray-500">Pengusaha Angkutan</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Sistem ini sangat membantu saya dalam memperpanjang kartu pengawasan. Prosesnya cepat dan saya
                  mendapat notifikasi otomatis sebelum masa berlaku habis."
                </p>
                <div className="mt-6 flex text-yellow-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-sky-100">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Foto Pengguna"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Siti Rahayu</h4>
                    <p className="text-sm text-gray-500">Pemilik Perusahaan Angkutan</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Fitur OCR sangat membantu dalam pengisian formulir. Saya tidak perlu mengetik ulang data yang sudah
                  ada di dokumen. Sangat menghemat waktu!"
                </p>
                <div className="mt-6 flex text-yellow-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-sky-100">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Foto Pengguna"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ahmad Hidayat</h4>
                    <p className="text-sm text-gray-500">Sopir Angkutan Umum</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Tracking status yang real-time membuat saya tidak perlu bolak-balik ke kantor Dishub untuk mengecek
                  status pengajuan. Sangat praktis!"
                </p>
                <div className="mt-6 flex text-yellow-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
            </StaggeredChildren>
          </div>
        </section>

        {/* CTA */}
        <AnimatedSection>
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-800"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=800&width=1200')]"></div>

            <div className="container px-4 sm:px-6 lg:px-10 relative z-10">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold mb-6 text-white sm:text-4xl">Mulai Gunakan Sistem Sekarang</h2>
                <p className="mb-8 text-sky-100 text-lg">
                  Daftarkan diri Anda dan nikmati kemudahan dalam penerbitan dan perpanjangan kartu pengawasan izin
                  usaha angkutan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-sky-700 hover:bg-sky-50 shadow-lg shadow-sky-900/20">
                    Daftar Sekarang
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-sky-700/50">
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container px-4 sm:px-6 lg:px-10">
            <AnimatedSection className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-sm font-medium text-sky-700 shadow-sm mb-4">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-sky-500"></span>
                FAQ
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Pertanyaan yang Sering Diajukan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Temukan jawaban untuk pertanyaan umum tentang sistem informasi penerbitan dan perpanjangan kartu
                pengawasan
              </p>
            </AnimatedSection>

            <StaggeredChildren className="mx-auto max-w-3xl space-y-4" staggerDelay={150}>
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <button className="flex w-full items-center justify-between p-6 text-left">
                  <span className="font-semibold text-gray-900">Apa itu Kartu Pengawasan?</span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Kartu Pengawasan adalah dokumen resmi yang diterbitkan oleh Dinas Perhubungan sebagai bentuk
                    legalitas operasional kendaraan angkutan umum. Kartu ini memiliki masa berlaku tertentu dan harus
                    diperbarui setiap tahun agar kendaraan tetap dapat beroperasi sesuai peraturan yang berlaku.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <button className="flex w-full items-center justify-between p-6 text-left">
                  <span className="font-semibold text-gray-900">
                    Bagaimana cara mengajukan perpanjangan Kartu Pengawasan?
                  </span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Untuk mengajukan perpanjangan Kartu Pengawasan, Anda perlu mendaftar di sistem, mengisi formulir
                    pengajuan, dan mengunggah dokumen yang diperlukan. Sistem akan membantu Anda dengan fitur OCR untuk
                    mempercepat pengisian formulir dan Decision Tree untuk mengevaluasi kelengkapan data.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <button className="flex w-full items-center justify-between p-6 text-left">
                  <span className="font-semibold text-gray-900">Berapa lama proses perpanjangan Kartu Pengawasan?</span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Dengan sistem baru, proses perpanjangan Kartu Pengawasan dapat diselesaikan dalam waktu 1-3 hari
                    kerja, tergantung pada kelengkapan dokumen dan hasil verifikasi. Anda dapat memantau status
                    pengajuan secara real-time melalui fitur Tracking Status.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <button className="flex w-full items-center justify-between p-6 text-left">
                  <span className="font-semibold text-gray-900">
                    Apa saja dokumen yang diperlukan untuk perpanjangan?
                  </span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Dokumen yang diperlukan untuk perpanjangan Kartu Pengawasan antara lain: STNK yang masih berlaku,
                    KTP pemilik kendaraan, bukti pembayaran pajak kendaraan, hasil uji KIR yang masih berlaku, dan
                    dokumen izin trayek sebelumnya. Semua dokumen dapat diunggah secara digital melalui sistem.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <button className="flex w-full items-center justify-between p-6 text-left">
                  <span className="font-semibold text-gray-900">Bagaimana cara mendapatkan notifikasi pengingat?</span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    Saat mendaftar di sistem, Anda akan diminta untuk memasukkan nomor WhatsApp aktif. Sistem Smart
                    Reminder akan secara otomatis mengirimkan notifikasi terkait status pengajuan dan pengingat masa
                    berlaku kartu pengawasan melalui WhatsApp tersebut.
                  </p>
                </div>
              </div>
            </StaggeredChildren>
          </div>
        </section>

        {/* Kontak */}
        <section id="kontak" className="py-24 bg-sky-50">
          <div className="container px-4 sm:px-6 lg:px-10">
            <AnimatedSection className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1.5 text-sm font-medium text-sky-700 shadow-sm mb-4">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-sky-500"></span>
                Kontak Kami
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Hubungi Kami</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi kami
              </p>
            </AnimatedSection>

            <StaggeredChildren className="grid md:grid-cols-3 gap-8" staggerDelay={150}>
              <div className="group relative overflow-hidden rounded-2xl bg-white p-px shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-2xl bg-white p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Alamat</h3>
                  <p className="text-gray-600">
                    Jl. Jenderal Sudirman No. 123
                    <br />
                    Kabupaten Kudus
                    <br />
                    Jawa Tengah 59311
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-px shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-2xl bg-white p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <Phone className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Kontak</h3>
                  <p className="text-gray-600">
                    <span className="flex items-center gap-2 mb-2">
                      <Mail className="h-4 w-4" />
                      dishub@kuduskab.go.id
                    </span>
                    <span className="flex items-center gap-2 mb-2">
                      <Phone className="h-4 w-4" />
                      (0291) 123456
                    </span>
                    <span className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      +62 812 3456 7890
                    </span>
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl bg-white p-px shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative h-full rounded-2xl bg-white p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-100">
                    <Clock className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">Jam Operasional</h3>
                  <p className="text-gray-600">
                    <span className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4" />
                      Senin - Jumat: 08.00 - 16.00 WIB
                    </span>
                    <span className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4" />
                      Sabtu: 08.00 - 12.00 WIB
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Minggu & Hari Libur: Tutup
                    </span>
                  </p>
                </div>
              </div>
            </StaggeredChildren>

            <AnimatedSection className="mt-16 mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-xl" delay={300}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Kirim Pesan</h3>
                  <p className="text-gray-600 mb-6">
                    Isi formulir berikut untuk mengirimkan pesan atau pertanyaan kepada kami. Tim kami akan segera
                    menghubungi Anda.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                        placeholder="Masukkan email"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                        placeholder="Masukkan pesan Anda"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800">
                      Kirim Pesan
                    </Button>
                  </form>
                </div>
                <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl">
                  <Image src="/placeholder.svg?height=600&width=500" alt="Peta Lokasi" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-sky-900/20">
                    <div className="rounded-lg bg-white p-4 shadow-lg">
                      <MapPin className="h-6 w-6 text-sky-700" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 py-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src="/logo-dishub.png"
                    alt="Logo Dishub Kudus"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-wide text-white">DISHUB</span>
                  <span className="text-xs text-sky-400">Kabupaten Kudus</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Dinas Perhubungan Kabupaten Kudus berkomitmen untuk memberikan pelayanan terbaik bagi masyarakat melalui
                transformasi digital.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-sky-600 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-sky-600 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-sky-600 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-sky-600 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 1.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#beranda"
                    className="text-gray-400 transition-colors hover:text-sky-400 flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-2" />
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="#fitur" className="text-gray-400 transition-colors hover:text-sky-400 flex items-center">
                    <ChevronRight className="h-3 w-3 mr-2" />
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link
                    href="#manfaat"
                    className="text-gray-400 transition-colors hover:text-sky-400 flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-2" />
                    Manfaat
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cara-kerja"
                    className="text-gray-400 transition-colors hover:text-sky-400 flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-2" />
                    Cara Kerja
                  </Link>
                </li>
                <li>
                  <Link href="#kontak" className="text-gray-400 transition-colors hover:text-sky-400 flex items-center">
                    <ChevronRight className="h-3 w-3 mr-2" />
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Layanan</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-sky-400 flex items-center">
                    <ChevronRight className="h-3 w-3 mr-2" />
                    Kartu Pengawasan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-sky-400 flex items-center">
                    <ChevronRight className="h-3 w-3 mr-2" />
                    Rekomendasi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-sky-400 flex items-center">
                    <ChevronRight className="h-3 w-3 mr-2" />
                    Tracking Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-sky-400 flex items-center">
                    <ChevronRight className="h-3 w-3 mr-2" />
                    Panduan Pengguna
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition-colors hover:text-sky-400 flex items-center">
                    <ChevronRight className="h-3 w-3 mr-2" />
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 py-8 text-center text-sm">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Dinas Perhubungan Kabupaten Kudus. Hak Cipta Dilindungi.
            </p>
            <div className="mt-4 flex justify-center gap-6">
              <Link href="#" className="text-gray-400 transition-colors hover:text-sky-400">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-sky-400">
                Syarat & Ketentuan
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-sky-400">
                Peta Situs
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-sky-700 text-white shadow-lg shadow-sky-600/20 transition-all hover:shadow-xl hover:shadow-sky-600/30"
        >
          <MessageSquare className="h-6 w-6" />
        </a>
      </div>
    </div>
  )
}
