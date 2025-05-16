export interface ProgressStep {
  title: string
  date: string
  description: string
  status: "completed" | "current" | "pending"
}

interface ProgressTrackerProps {
  steps: ProgressStep[]
}

export default function ProgressTracker({ steps }: ProgressTrackerProps) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1

        const getStatusIcon = (status: string) => {
          switch (status) {
            case "completed":
              return (
                <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              )
            case "current":
              return (
                <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
              )
            default:
              return (
                <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              )
          }
        }

        return (
          <div className="relative" key={index}>
            {!isLast && <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-200"></div>}
            <div className="relative flex gap-4">
              {getStatusIcon(step.status)}
              <div className={isLast ? "" : "pb-6"}>
                <p className="font-medium">{step.title}</p>
                <p className="text-sm text-muted-foreground">{step.date}</p>
                <p className="mt-1 text-sm">{step.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
