"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface CounterAnimationProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function CounterAnimation({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let startTime: number
      let animationFrame: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step)
        }
      }

      animationFrame = window.requestAnimationFrame(step)

      return () => {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <div ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
