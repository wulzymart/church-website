"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import LoginButton from "./auth/login-button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 mr-2">
              <Image
                src="/logo.png?height=48&width=48"
                alt="RCCG Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className={cn("text-xl font-medium font-serif", isScrolled ? "text-amber-900" : "text-white")}>
              Upper Room
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "font-medium transition-colors",
                isScrolled ? "text-amber-900 hover:text-amber-700" : "text-white hover:text-amber-100",
                isActive("/") && (isScrolled ? "text-amber-700" : "text-amber-100"),
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "font-medium transition-colors",
                isScrolled ? "text-amber-900 hover:text-amber-700" : "text-white hover:text-amber-100",
                isActive("/about") && (isScrolled ? "text-amber-700" : "text-amber-100"),
              )}
            >
              About
            </Link>
            <Link
              href="/sermons"
              className={cn(
                "font-medium transition-colors",
                isScrolled ? "text-amber-900 hover:text-amber-700" : "text-white hover:text-amber-100",
                isActive("/sermons") && (isScrolled ? "text-amber-700" : "text-amber-100"),
              )}
            >
              Sermons
            </Link>
            <Link
              href="/events"
              className={cn(
                "font-medium transition-colors",
                isScrolled ? "text-amber-900 hover:text-amber-700" : "text-white hover:text-amber-100",
                isActive("/events") && (isScrolled ? "text-amber-700" : "text-amber-100"),
              )}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className={cn(
                "font-medium transition-colors",
                isScrolled ? "text-amber-900 hover:text-amber-700" : "text-white hover:text-amber-100",
                isActive("/contact") && (isScrolled ? "text-amber-700" : "text-amber-100"),
              )}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LoginButton isScrolled={isScrolled} />
            <Button
              className={cn(
                "transition-colors",
                isScrolled
                  ? "bg-amber-800 hover:bg-amber-900 text-white"
                  : "bg-white hover:bg-amber-100 text-amber-900",
              )}
            >
              Donate Now
            </Button>
          </div>

          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className={isScrolled ? "text-amber-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-amber-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-amber-900 z-40 flex flex-col p-8 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end mb-8">
          <button onClick={closeMenu} aria-label="Close menu">
            <X className="text-white" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6">
          <Link href="/" className="text-white text-2xl font-medium" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className="text-white text-2xl font-medium" onClick={closeMenu}>
            About
          </Link>
          <Link href="/sermons" className="text-white text-2xl font-medium" onClick={closeMenu}>
            Sermons
          </Link>
          <Link href="/events" className="text-white text-2xl font-medium" onClick={closeMenu}>
            Events
          </Link>
          <Link href="/contact" className="text-white text-2xl font-medium" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
        <div className="mt-auto space-y-4">
          <LoginButton variant="outline" className="w-full border-white text-amber-900 hover:bg-amber-800" />
          <Button className="w-full bg-white hover:bg-amber-100 text-amber-900">Donate Now</Button>
        </div>
      </div>
    </header>
  )
}
