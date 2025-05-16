"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const { ref, animationStyle } = useScrollAnimation({
    direction,
    delay,
    duration,
    threshold,
    once,
  })

  return (
    <div ref={ref} style={animationStyle} className={className}>
      {children}
    </div>
  )
}
