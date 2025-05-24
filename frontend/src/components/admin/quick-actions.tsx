import { ClipboardList, FileCheck, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuickActions() {
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
      <Button
        variant="outline"
        className="flex h-auto flex-col items-center gap-2 p-4 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-700"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
          <FileCheck className="h-5 w-5" />
        </div>
        <span>Perpanjangan Kartu</span>
      </Button>
      <Button
        variant="outline"
        className="flex h-auto flex-col items-center gap-2 p-4 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-700"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
          <FileText className="h-5 w-5" />
        </div>
        <span>Pengajuan Rekomendasi</span>
      </Button>
      <Button
        variant="outline"
        className="flex h-auto flex-col items-center gap-2 p-4 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-700"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300">
          <ClipboardList className="h-5 w-5" />
        </div>
        <span>Riwayat & Tracking</span>
      </Button>
    </div>
  )
}
