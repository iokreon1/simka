import type { ReactNode } from "react"

interface ActivityItemProps {
  icon: ReactNode
  title: string
  description: string
  time: string
  color: string
}

export function ActivityItem({ icon, title, description, time, color }: ActivityItemProps) {
  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300",
      green: "bg-green-50 text-green-600 dark:bg-green-900/50 dark:text-green-300",
      yellow: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300",
      purple: "bg-purple-50 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300",
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="flex items-start gap-4">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${getColorClasses(color)}`}>
        {icon}
      </div>
      <div>
        <p className="font-medium text-slate-900 dark:text-white">{title}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
        <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{time}</p>
      </div>
    </div>
  )
}
