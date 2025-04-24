"use client"

import type React from "react"

import { Toaster as Sonner } from "sonner"
import { useTheme } from "next-themes"

type ToasterProps = React.ComponentProps<typeof Sonner>

export function SonnerProvider({ ...props }: ToasterProps) {
  const { theme } = useTheme()

  return (
    <Sonner
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-amber-900 group-[.toaster]:border-amber-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-amber-950 dark:group-[.toaster]:text-amber-50",
          description: "group-[.toast]:text-amber-800 dark:group-[.toast]:text-amber-200",
          actionButton: "group-[.toast]:bg-amber-800 group-[.toast]:text-white",
          cancelButton: "group-[.toast]:bg-amber-100 group-[.toast]:text-amber-900",
        },
      }}
      {...props}
    />
  )
}
