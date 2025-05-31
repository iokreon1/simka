"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface SimpleDialogProps {
  trigger: ReactNode
  title: string
  children: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function SimpleDialog({ trigger, title, children }: SimpleDialogProps) {
  return (
    <div className="relative">
      <div className="group">
        {trigger}
        <div className="hidden group-hover:block absolute top-full left-0 z-50 w-96 mt-2">
          <Card className="shadow-lg border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="pt-0">{children}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
