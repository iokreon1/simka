"use client"

import { Children, type ReactNode, isValidElement } from "react"
import { AnimatedSection } from "./animated-section"

interface StaggeredChildrenProps {
  children: ReactNode
  staggerDelay?: number
  baseDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  className?: string
  childClassName?: string
}

export function StaggeredChildren({
  children,
  staggerDelay = 100,
  baseDelay = 0,
  direction = "up",
  duration = 600,
  className = "",
  childClassName = "",
}: StaggeredChildrenProps) {
  const childrenArray = Children.toArray(children)

  return (
    <div className={className}>
      {childrenArray.map((child, index) => {
        if (!isValidElement(child)) return child

        return (
          <AnimatedSection
            key={index}
            direction={direction}
            delay={baseDelay + index * staggerDelay}
            duration={duration}
            className={childClassName}
          >
            {child}
          </AnimatedSection>
        )
      })}
    </div>
  )
}
