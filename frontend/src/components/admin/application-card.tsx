interface ApplicationCardProps {
  title: string
  subtitle: string
  date: string
  status: string
  statusColor: string
}

export function ApplicationCard({ title, subtitle, date, status, statusColor }: ApplicationCardProps) {
  const getStatusClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-400",
      green:
        "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-900/30 dark:text-green-400",
      yellow:
        "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-400",
      red: "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-900/30 dark:text-red-400",
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-slate-900 dark:text-white">{title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
          </div>
          <div className="rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-3 py-1 text-xs font-medium text-white">
            {date}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="text-xs text-slate-500 dark:text-slate-400">Status:</div>
          <div className={`rounded-full border px-2 py-0.5 text-xs font-medium ${getStatusClasses(statusColor)}`}>
            {status}
          </div>
        </div>
      </div>
    </div>
  )
}
