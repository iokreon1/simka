import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  status: string
}

export function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case "Disetujui":
      return <Badge className="bg-emerald-500 text-white hover:bg-emerald-600 border-emerald-500">✅ Disetujui</Badge>
    case "Pending":
      return <Badge className="bg-amber-500 text-white hover:bg-amber-600 border-amber-500">⏳ Pending</Badge>
    case "Ditolak":
      return <Badge className="bg-red-500 text-white hover:bg-red-600 border-red-500">❌ Ditolak</Badge>
    case "Revisi":
      return <Badge className="bg-orange-500 text-white hover:bg-orange-600 border-orange-500">🔄 Revisi</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}
