"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import { cn } from "@/lib/utils"
import LoginModal from "./login-modal"

interface LoginButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  isScrolled?: boolean
}

export default function LoginButton({
  variant = "default",
  size = "default",
  className,
  isScrolled = false,
}: LoginButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={openModal}
        className={cn(
          "flex items-center gap-2",
          isScrolled ? "bg-amber-800 hover:bg-amber-900 text-white" : "bg-white hover:bg-amber-100 text-amber-900",
          className,
        )}
      >
        <LogIn className="h-4 w-4" />
        <span className="sm:inline">Login</span>
      </Button>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
