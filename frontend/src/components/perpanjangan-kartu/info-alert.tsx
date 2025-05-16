import { Info, AlertTriangle, CheckCircle, Phone } from "lucide-react"

interface InfoAlertProps {
  title: string
  message: string
  type: "info" | "warning" | "success" | "phone"
}

export default function InfoAlert({ title, message, type }: InfoAlertProps) {
  const getAlertStyles = () => {
    switch (type) {
      case "info":
        return {
          bg: "bg-blue-50",
          text: "text-blue-700",
          icon: <Info width={20} height={20} />,
        }
      case "warning":
        return {
          bg: "bg-amber-50",
          text: "text-amber-700",
          icon: <AlertTriangle width={20} height={20} />,
        }
      case "success":
        return {
          bg: "bg-green-50",
          text: "text-green-700",
          icon: <CheckCircle width={20} height={20} />,
        }
      case "phone":
        return {
          bg: "bg-blue-50",
          text: "text-blue-700",
          icon: <Phone width={20} height={20} />,
        }
      default:
        return {
          bg: "bg-blue-50",
          text: "text-blue-700",
          icon: <Info width={20} height={20} />,
        }
    }
  }

  const { bg, text, icon } = getAlertStyles()

  return (
    <div className={`rounded-lg border ${bg} p-4 text-sm ${text}`}>
      <div className="flex items-start gap-3">
        {icon}
        <div>
          <p className="font-medium">{title}</p>
          <p className="mt-1">{message}</p>
        </div>
      </div>
    </div>
  )
}
