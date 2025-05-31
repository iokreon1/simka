"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface RecommendationFormProps {
  selectedRecommendationType: string
  onRecommendationTypeChange: (value: string) => void
}

export function RecommendationForm({
  selectedRecommendationType,
  onRecommendationTypeChange,
}: RecommendationFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informasi Pengajuan Rekomendasi</CardTitle>
        <CardDescription>Lengkapi form berikut untuk mengajukan rekomendasi sesuai kebutuhan Anda</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="recommendation-type">Jenis Rekomendasi *</Label>
            <Select value={selectedRecommendationType} onValueChange={onRecommendationTypeChange}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih Jenis Rekomendasi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ganti-tnkb">Ganti TNKB</SelectItem>
                <SelectItem value="mutasi">Mutasi</SelectItem>
                <SelectItem value="kendaraan-baru">Kendaraan Baru</SelectItem>
                <SelectItem value="rubah-sifat">Rubah Sifat</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="vehicle-number">Nomor Kendaraan *</Label>
            <Input id="vehicle-number" placeholder="Contoh: B 1234 XYZ" className="placeholder:text-gray-400" />
            <p className="text-xs text-gray-500">Masukkan nomor kendaraan sesuai STNK</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="owner-name">Nama Pemilik *</Label>
            <Input id="owner-name" placeholder="Nama pemilik kendaraan" className="placeholder:text-gray-400" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone-number">Nomor Telepon *</Label>
            <Input id="phone-number" placeholder="Contoh: 08123456789" className="placeholder:text-gray-400" />
            <p className="text-xs text-gray-500">Nomor WhatsApp aktif untuk notifikasi</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="vehicle-type">Jenis Angkutan</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilih Jenis Angkutan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="angkot">Angkutan Kota</SelectItem>
                <SelectItem value="bus">Bus</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="ojek">Ojek</SelectItem>
                <SelectItem value="taksi">Taksi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="route">Trayek</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilih Trayek" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="01">01 - Terminal - Pasar</SelectItem>
                <SelectItem value="02">02 - Stasiun - Mall</SelectItem>
                <SelectItem value="03">03 - Bandara - Hotel</SelectItem>
                <SelectItem value="04">04 - Kampus - Kota</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedRecommendationType === "mutasi" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-blue-50 rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="origin-region">Daerah Asal</Label>
              <Input id="origin-region" placeholder="Masukkan daerah asal" className="placeholder:text-gray-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination-region">Daerah Tujuan</Label>
              <Input
                id="destination-region"
                placeholder="Masukkan daerah tujuan"
                className="placeholder:text-gray-400"
              />
            </div>
          </div>
        )}

        {selectedRecommendationType === "ganti-tnkb" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-green-50 rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="old-plate">Nomor Plat Lama</Label>
              <Input id="old-plate" placeholder="Contoh: B 1234 XYZ" className="placeholder:text-gray-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-plate">Nomor Plat Baru (Jika sudah ada)</Label>
              <Input id="new-plate" placeholder="Contoh: B 5678 ABC" className="placeholder:text-gray-400" />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="owner-address">Alamat Pemilik *</Label>
          <Textarea
            id="owner-address"
            placeholder="Alamat lengkap pemilik kendaraan"
            className="min-h-[100px] placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="recommendation-reason">Alasan Pengajuan Rekomendasi</Label>
          <Textarea
            id="recommendation-reason"
            placeholder="Jelaskan alasan pengajuan rekomendasi (opsional)"
            className="min-h-[100px] placeholder:text-gray-400"
          />
        </div>
      </CardContent>
    </Card>
  )
}
