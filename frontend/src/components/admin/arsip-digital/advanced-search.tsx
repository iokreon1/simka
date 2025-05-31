import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function AdvancedSearch() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pencarian Lanjutan</CardTitle>
        <CardDescription>Gunakan filter detail untuk menemukan dokumen spesifik</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="date-from">Tanggal Mulai</Label>
            <Input type="date" id="date-from" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="date-to">Tanggal Akhir</Label>
            <Input type="date" id="date-to" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="officer">Petugas Verifikator</Label>
            <Select>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Pilih Petugas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ahmad">Ahmad Susanto</SelectItem>
                <SelectItem value="siti">Siti Rahayu</SelectItem>
                <SelectItem value="budi">Budi Hartono</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Cari Dokumen
          </Button>
          <Button variant="outline">Reset Filter</Button>
        </div>
      </CardContent>
    </Card>
  )
}
