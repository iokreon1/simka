import { Button } from "@/components/ui/button"

interface UploadBoxProps {
  title: string
  description: string
  hasOcr?: boolean
}

export default function UploadBox({ title, description, hasOcr = false }: UploadBoxProps) {
  return (
    <div className="rounded-lg border border-dashed p-6">
      <div className="flex flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-2 text-gray-400"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
        <h4 className="mb-1 text-sm font-medium">{title}</h4>
        <p className="mb-3 text-xs text-muted-foreground">{description}</p>
        <Button size="sm" variant="outline">
          Pilih File
        </Button>
        {hasOcr && (
          <div className="mt-2 text-xs text-blue-600">
            <span className="cursor-pointer">Gunakan OCR untuk mengisi formulir otomatis</span>
          </div>
        )}
      </div>
    </div>
  )
}
