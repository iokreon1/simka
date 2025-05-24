import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300",
      indigo: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300",
      emerald: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-300",
      amber: "bg-amber-50 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300",
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="flex gap-3 rounded-lg border border-slate-200 p-3 transition-all hover:shadow-sm dark:border-slate-700">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${getColorClasses(color)}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-slate-900 dark:text-white">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
      </div>
    </div>
  )
}
