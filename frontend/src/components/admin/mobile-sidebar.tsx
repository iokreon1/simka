import Image from "next/image"
import { Sidebar } from "./sidebar"

export function MobileSidebar() {
  return (
    <div className="flex h-full flex-col bg-white dark:bg-slate-800">
      <div className="flex h-16 items-center border-b px-6 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <Image src="/logo-dishub.png" alt="Logo Dinas Perhubungan" width={40} height={40} className="rounded-full" />
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white">DINAS PERHUBUNGAN</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">KABUPATEN KUDUS</p>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <Sidebar />
      </div>
    </div>
  )
}
