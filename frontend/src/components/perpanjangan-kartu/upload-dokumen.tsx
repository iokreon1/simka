import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import UploadBox from "@/components/perpanjangan-kartu/upload-box"
import InfoAlert from "@/components/perpanjangan-kartu/info-alert"

export default function UploadDokumen() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Dokumen Wajib</h3>

            <UploadBox title="Upload STNK" description="Format JPG, PNG atau PDF (Maks. 2MB)" hasOcr={true} />

            <UploadBox title="Upload KTP Pemilik" description="Format JPG, PNG atau PDF (Maks. 2MB)" />

            <UploadBox
              title="Upload Kartu Pengawasan Lama"
              description="Format JPG, PNG atau PDF (Maks. 2MB)"
              hasOcr={true}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Dokumen Pendukung</h3>

            <UploadBox title="Upload Bukti Pembayaran Pajak" description="Format JPG, PNG atau PDF (Maks. 2MB)" />

            <UploadBox title="Upload Foto Kendaraan" description="Format JPG, PNG (Maks. 2MB)" />

            <UploadBox title="Upload Dokumen Lainnya" description="Format JPG, PNG atau PDF (Maks. 2MB)" />

            <InfoAlert
              title="Perhatian"
              message="Pastikan semua dokumen wajib telah diunggah dan dalam format yang sesuai. Sistem akan melakukan verifikasi otomatis menggunakan Decision Tree untuk mengevaluasi kelengkapan dan validitas data."
              type="warning"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline">Kembali</Button>
          <Button>Ajukan Perpanjangan</Button>
        </div>
      </CardContent>
    </Card>
  )
}
