import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import InfoAlert from "@/components/perpanjangan-kartu/info-alert"

export default function FormPengajuan() {
  return (
    <>
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nomor Kendaraan</label>
              <Input placeholder="Contoh: B 1234 XYZ" />
              <p className="text-xs text-muted-foreground">Masukkan nomor kendaraan sesuai STNK</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Nomor Kartu Pengawasan</label>
              <Input placeholder="Contoh: KP-2023-0001" />
              <p className="text-xs text-muted-foreground">Masukkan nomor kartu pengawasan yang akan diperpanjang</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Nama Pemilik</label>
              <Input placeholder="Nama pemilik kendaraan" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Nomor Telepon</label>
              <Input placeholder="Contoh: 08123456789" />
              <p className="text-xs text-muted-foreground">Nomor WhatsApp aktif untuk notifikasi</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Jenis Angkutan</label>
              <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                <option value="">Pilih Jenis Angkutan</option>
                <option value="angkot">Angkutan Kota</option>
                <option value="bus">Bus</option>
                <option value="taksi">Taksi</option>
                <option value="ojek">Ojek Online</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Trayek</label>
              <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                <option value="">Pilih Trayek</option>
                <option value="trayek1">Kudus - Jepara</option>
                <option value="trayek2">Kudus - Pati</option>
                <option value="trayek3">Kudus - Demak</option>
                <option value="trayek4">Dalam Kota</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Alamat Pemilik</label>
              <textarea
                className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Alamat lengkap pemilik kendaraan"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Catatan Tambahan</label>
              <textarea
                className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Catatan tambahan (opsional)"
              ></textarea>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <Button variant="outline">Reset</Button>
            <Button>Lanjutkan ke Upload Dokumen</Button>
          </div>
        </CardContent>
      </Card>

      <InfoAlert
        title="Fitur OCR Tersedia"
        message="Anda dapat menggunakan fitur OCR untuk mengisi formulir secara otomatis dengan mengunggah foto STNK dan Kartu Pengawasan lama pada tab Upload Dokumen."
        type="info"
      />
    </>
  )
}
