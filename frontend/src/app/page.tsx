"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bus,
  Car,
  ChevronRight,
  Clock,
  Facebook,
  FileText,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Ship,
  Truck,
  Twitter,
  X,
  Youtube,
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { CounterAnimation } from "@/components/counter-animation"
import { ParallaxSection } from "@/components/parallax-section"
import { useEffect, useState } from "react"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header
        className={`bg-white py-5 sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md py-3" : "shadow-sm"
        }`}
      >
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <Image
              src="/logo-dishub.png"
              alt="Logo Dishub Kudus"
              width={60}
              height={60}
              className="h-10 w-14 md:h-13 md:w-18"
            />
            <div>
              <h1 className="font-bold text-sm md:text-lg lg:text-xl text-[#0A2647]">DINAS PERHUBUNGAN</h1>
              <p className="text-xs md:text-sm text-gray-600">KABUPATEN KUDUS</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="font-medium hover:text-[#0A2647]">
              Beranda
            </Link>
            <Link href="#" className="font-medium hover:text-[#0A2647]">
              Profil
            </Link>
            <Link href="#" className="font-medium hover:text-[#0A2647]">
              Layanan
            </Link>
            <Link href="#" className="font-medium hover:text-[#0A2647]">
              Informasi
            </Link>
            <Link href="#" className="font-medium hover:text-[#0A2647]">
              Berita
            </Link>
            <Link href="#" className="font-medium hover:text-[#0A2647]">
              Kontak
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-3">
              <Button className="bg-[#0A2647] hover:bg-[#144272]">Layanan Online</Button>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-[#0A2647] text-[#0A2647] hover:bg-[#0A2647] hover:text-white cursor-pointer"
                >
                  <span>Login</span>
                </Button>
              </Link>
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <Search className="h-4 w-4" />
              <span className="sr-only">Cari</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-[#0A2647]" /> : <Menu className="h-6 w-6 text-[#0A2647]" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link href="#" className="font-medium hover:text-[#0A2647]">
              Beranda
            </Link>
            <Link href="#" className="font-medium hover:text-[#0A2647]">
              Profil
            </Link>
            <Link href="#" className="font-medium hover:text-[#0A2647]">
              Layanan
            </Link>
            <Link href="#" className="font-medium hover:text-[#0A2647]">
              Informasi
            </Link>
            <Link href="#" className="font-medium hover:text-[#0A2647]">
              Berita
            </Link>
            <Link href="#" className="font-medium hover:text-[#0A2647]">
              Kontak
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Button className="w-full bg-[#0A2647] hover:bg-[#144272]">Layanan Online</Button>
              <Link href="/login" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-[#0A2647] text-[#0A2647] hover:bg-[#0A2647] hover:text-white"
                >
                  Login
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <ParallaxSection speed={0.2} className="relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src="/homepage-dishub.jpg"
            alt="Transportasi Kudus"
            width={1600}
            height={600}
            className="w-full h-[600px] object-cover"
          />
          <div className="container relative z-20 min-h-[600px] flex flex-col justify-center py-12 md:py-24">
            <AnimateOnScroll animation="slide-up" delay={0.2} className="max-w-2xl text-white px-4 md:ml-6 lg:ml-8">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">Melayani Transportasi Kabupaten Kudus</h1>
              <p className="text-base md:text-lg lg:text-xl mb-8">
                Mewujudkan sistem transportasi yang aman, nyaman, dan berkelanjutan untuk masyarakat Kudus
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pb-8 md:pb-16">
                <Button className="bg-[#0A2647] hover:bg-[#144272] w-full sm:w-auto">Layanan Kami</Button>
                <Button className="bg-[#0A2647] hover:bg-[#144272] w-full sm:w-auto">Hubungi Kami</Button>
              </div>
            </AnimateOnScroll>
          </div>
        </ParallaxSection>

        {/* Layanan Section */}
        <section className="py-20 bg-gray-50 mt-8">
          <div className="container">
            <AnimateOnScroll animation="fade" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0A2647] mb-4">Layanan Kami</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dinas Perhubungan Kabupaten Kudus menyediakan berbagai layanan untuk memastikan sistem transportasi yang
                efisien dan aman
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimateOnScroll animation="slide-up" delay={0.1}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-[#0A2647]/10 flex items-center justify-center mb-4">
                      <Car className="h-6 w-6 text-[#0A2647]" />
                    </div>
                    <CardTitle>Pengujian Kendaraan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      Layanan pengujian kelayakan kendaraan bermotor untuk memastikan keamanan berkendara
                    </CardDescription>
                    <Link href="#" className="text-[#0A2647] font-medium flex items-center text-sm">
                      Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={0.2}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-[#0A2647]/10 flex items-center justify-center mb-4">
                      <Bus className="h-6 w-6 text-[#0A2647]" />
                    </div>
                    <CardTitle>Angkutan Umum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      Informasi dan pengelolaan angkutan umum di Kabupaten Kudus untuk mobilitas masyarakat
                    </CardDescription>
                    <Link href="#" className="text-[#0A2647] font-medium flex items-center text-sm">
                      Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={0.3}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-[#0A2647]/10 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-[#0A2647]" />
                    </div>
                    <CardTitle>Perizinan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      Layanan perizinan trayek, operasional, dan dokumen terkait transportasi di Kabupaten Kudus
                    </CardDescription>
                    <Link href="#" className="text-[#0A2647] font-medium flex items-center text-sm">
                      Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={0.4}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-[#0A2647]/10 flex items-center justify-center mb-4">
                      <Truck className="h-6 w-6 text-[#0A2647]" />
                    </div>
                    <CardTitle>Manajemen Lalu Lintas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      Pengelolaan dan pengaturan lalu lintas untuk kelancaran dan keamanan transportasi
                    </CardDescription>
                    <Link href="#" className="text-[#0A2647] font-medium flex items-center text-sm">
                      Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Informasi Terkini */}
        <section className="py-16">
          <div className="container">
            <AnimateOnScroll animation="fade" className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-[#0A2647]">Informasi Terkini</h2>
              <Link href="#" className="text-[#0A2647] font-medium flex items-center mt-4 md:mt-0">
                Lihat Semua Berita <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimateOnScroll animation="slide-up" delay={0.1}>
                <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Berita Dishub"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>12 Mei 2025</span>
                    </div>
                    <CardTitle className="text-lg">Peresmian Terminal Baru Kabupaten Kudus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      Terminal baru Kabupaten Kudus diresmikan untuk meningkatkan pelayanan transportasi umum bagi
                      masyarakat
                    </CardDescription>
                    <Link href="#" className="text-[#0A2647] font-medium flex items-center text-sm">
                      Baca Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={0.2}>
                <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Berita Dishub"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>5 Mei 2025</span>
                    </div>
                    <CardTitle className="text-lg">Sosialisasi Keselamatan Berkendara di Sekolah</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      Dishub Kudus mengadakan sosialisasi keselamatan berkendara di sekolah-sekolah untuk meningkatkan
                      kesadaran lalu lintas
                    </CardDescription>
                    <Link href="#" className="text-[#0A2647] font-medium flex items-center text-sm">
                      Baca Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-up" delay={0.3}>
                <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Berita Dishub"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>28 April 2025</span>
                    </div>
                    <CardTitle className="text-lg">Pemasangan CCTV di Titik Rawan Kemacetan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      Dishub Kudus memasang CCTV di beberapa titik rawan kemacetan untuk memantau dan mengelola arus
                      lalu lintas
                    </CardDescription>
                    <Link href="#" className="text-[#0A2647] font-medium flex items-center text-sm">
                      Baca Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Statistik */}
        <section className="py-16 bg-[#0A2647] text-white">
          <div className="container">
            <AnimateOnScroll animation="fade" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Statistik Transportasi</h2>
              <p className="max-w-2xl mx-auto">
                Data statistik transportasi Kabupaten Kudus yang menunjukkan perkembangan dan capaian dalam pengelolaan
                transportasi
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimateOnScroll animation="zoom" delay={0.1}>
                <div className="text-center">
                  <CounterAnimation end={1250} suffix="+" className="text-4xl font-bold mb-2" />
                  <p className="text-gray-300">Angkutan Umum Terdaftar</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="zoom" delay={0.2}>
                <div className="text-center">
                  <CounterAnimation end={85} suffix="%" className="text-4xl font-bold mb-2" />
                  <p className="text-gray-300">Tingkat Kepuasan Masyarakat</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="zoom" delay={0.3}>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <p className="text-gray-300">Pemantauan Lalu Lintas</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="zoom" delay={0.4}>
                <div className="text-center">
                  <CounterAnimation end={50} suffix="+" className="text-4xl font-bold mb-2" />
                  <p className="text-gray-300">Titik Pemantauan CCTV</p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Program Unggulan */}
        <section className="py-16">
          <div className="container">
            <AnimateOnScroll animation="fade" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0A2647] mb-4">Program Unggulan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Program-program unggulan Dinas Perhubungan Kabupaten Kudus dalam meningkatkan kualitas transportasi
              </p>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimateOnScroll animation="slide-right" delay={0.1}>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#0A2647]/10 flex items-center justify-center shrink-0">
                    <Bus className="h-8 w-8 text-[#0A2647]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Smart Transportation System</h3>
                    <p className="text-gray-600 mb-4">
                      Pengembangan sistem transportasi cerdas dengan integrasi teknologi untuk memantau dan mengelola
                      lalu lintas secara real-time, meningkatkan efisiensi dan keamanan transportasi di Kabupaten Kudus.
                    </p>
                    <Link href="#" className="text-[#0A2647] font-medium flex items-center text-sm">
                      Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={0.2}>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#0A2647]/10 flex items-center justify-center shrink-0">
                    <Ship className="h-8 w-8 text-[#0A2647]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Transportasi Ramah Lingkungan</h3>
                    <p className="text-gray-600 mb-4">
                      Inisiatif untuk mendorong penggunaan transportasi ramah lingkungan, termasuk pengembangan jalur
                      sepeda, transportasi umum berbasis listrik, dan kampanye kesadaran lingkungan.
                    </p>
                    <Link href="#" className="text-[#0A2647] font-medium flex items-center text-sm">
                      Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={0.3}>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#0A2647]/10 flex items-center justify-center shrink-0">
                    <Car className="h-8 w-8 text-[#0A2647]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Keselamatan Berkendara</h3>
                    <p className="text-gray-600 mb-4">
                      Program edukasi dan sosialisasi keselamatan berkendara untuk berbagai kelompok masyarakat,
                      termasuk pelajar, pengemudi profesional, dan masyarakat umum.
                    </p>
                    <Link href="#" className="text-[#0A2647] font-medium flex items-center text-sm">
                      Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={0.4}>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#0A2647]/10 flex items-center justify-center shrink-0">
                    <Truck className="h-8 w-8 text-[#0A2647]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Modernisasi Angkutan Umum</h3>
                    <p className="text-gray-600 mb-4">
                      Program peremajaan dan modernisasi armada angkutan umum untuk meningkatkan kenyamanan, keamanan,
                      dan efisiensi layanan transportasi publik di Kabupaten Kudus.
                    </p>
                    <Link href="#" className="text-[#0A2647] font-medium flex items-center text-sm">
                      Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <AnimateOnScroll animation="fade">
              <div className="bg-[#0A2647] rounded-xl p-8 md:p-12 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Butuh Informasi Lebih Lanjut?</h2>
                <p className="max-w-2xl mx-auto mb-8">
                  Hubungi kami untuk mendapatkan informasi lebih lanjut tentang layanan Dinas Perhubungan Kabupaten
                  Kudus
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-[#0A2647] hover:bg-gray-100">Hubungi Kami</Button>
                  <Button variant="outline" className="bg-white text-[#0A2647] border-white hover:bg-gray-100 ">
                    Layanan Online
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0A2647] text-white pt-16 pb-8 p-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <AnimateOnScroll animation="fade" delay={0.1}>
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Image
                    src="/logo-dishub.png"
                    alt="Logo Dishub Kudus"
                    width={60}
                    height={60}
                    className="h-13 w-18 bg-white p-1 pt-1 rounded"
                  />
                  <div>
                    <h3 className="font-bold text-lg">DISHUB</h3>
                    <p className="text-sm text-gray-300">KABUPATEN KUDUS</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Dinas Perhubungan Kabupaten Kudus berkomitmen untuk mewujudkan sistem transportasi yang aman, nyaman,
                  dan berkelanjutan.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="hover:text-gray-300" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="hover:text-gray-300" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="hover:text-gray-300" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="hover:text-gray-300" aria-label="Youtube">
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade" delay={0.2}>
              <div>
                <h3 className="text-lg font-bold mb-6">Tautan Cepat</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Layanan
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Berita
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Galeri
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade" delay={0.3}>
              <div>
                <h3 className="text-lg font-bold mb-6">Layanan</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Pengujian Kendaraan
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Perizinan Trayek
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Manajemen Lalu Lintas
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Angkutan Umum
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      Terminal
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade" delay={0.4}>
              <div>
                <h3 className="text-lg font-bold mb-6">Kontak Kami</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 shrink-0" />
                    <span className="text-gray-300">Jl. Jendral Sudirman No. 123, Kudus, Jawa Tengah, Indonesia</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 shrink-0" />
                    <span className="text-gray-300">(0291) 123456</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 shrink-0" />
                    <span className="text-gray-300">dishub@kuduskab.go.id</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 shrink-0" />
                    <span className="text-gray-300">Senin - Jumat: 08.00 - 16.00 WIB</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Dinas Perhubungan Kabupaten Kudus. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
