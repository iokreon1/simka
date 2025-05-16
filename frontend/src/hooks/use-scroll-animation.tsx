"use client"

import { useEffect, useRef, useState } from "react"

type AnimationDirection = "up" | "down" | "left" | "right" | "none"

interface UseScrollAnimationProps {
  threshold?: number
  direction?: AnimationDirection
  delay?: number
  duration?: number
  once?: boolean
}

export function useScrollAnimation({
  threshold = 0.1,
  direction = "up",
  delay = 0,
  duration = 600,
  once = true,
}: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, once])

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate3d(0, 30px, 0)"
      case "down":
        return "translate3d(0, -30px, 0)"
      case "left":
        return "translate3d(30px, 0, 0)"
      case "right":
        return "translate3d(-30px, 0, 0)"
      default:
        return "translate3d(0, 0, 0)"
    }
  }

  const animationStyle = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translate3d(0, 0, 0)" : getTransform(),
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  }

  return { ref, animationStyle, isInView }
}
