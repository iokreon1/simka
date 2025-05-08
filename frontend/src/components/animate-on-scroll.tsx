"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: "fade" | "slide-up" | "slide-right" | "zoom" | "none"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export function AnimateOnScroll({
  children,
  animation = "fade",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
}: AnimateOnScrollProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  // Define animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slide-up" ? 50 : 0,
      x: animation === "slide-right" ? -50 : 0,
      scale: animation === "zoom" ? 0.8 : 1,
    } as Variant,
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    } as Variant,
    none: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    } as Variant,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          controls.start("visible")
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsInView(false)
          controls.start("hidden")
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [controls, threshold, once])

  return (
    <motion.div
      ref={ref}
      initial={animation === "none" ? "none" : "hidden"}
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
