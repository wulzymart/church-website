"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export default function ParallaxSection({ children, className, speed = 0.5 }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) return // Disable parallax on mobile for better performance

    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight

      // Check if section is in viewport
      if (scrollPosition + viewportHeight > sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const distance = scrollPosition - sectionTop
        const parallax = distance * speed
        section.style.backgroundPositionY = `${parallax}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, isMobile])

  return (
    <section ref={sectionRef} className={cn("relative bg-fixed bg-no-repeat bg-cover transition-all", className)}>
      {children}
    </section>
  )
}
