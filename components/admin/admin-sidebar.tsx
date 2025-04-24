"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  FileText,
  Video,
  Calendar,
  Settings,
  MessageSquare,
  HandIcon as PrayingHands,
  LogOut,
} from "lucide-react"
import { toast } from "sonner"

export default function AdminSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  const handleLogout = () => {
    toast.success("Logged out successfully")
    // In a real app, this would handle the logout process
  }

  return (
    <div className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-amber-900 text-white p-6 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-xl font-serif mb-1">Faith Church</h2>
        <p className="text-amber-200 text-sm">Admin Dashboard</p>
      </div>

      <nav className="space-y-1">
        <Link
          href="/admin"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
            isActive("/admin") &&
              !isActive("/admin/members") &&
              !isActive("/admin/blog") &&
              !isActive("/admin/sermons") &&
              !isActive("/admin/events") &&
              !isActive("/admin/settings") &&
              !isActive("/admin/prayer-requests") &&
              !isActive("/admin/testimonies")
              ? "bg-amber-800 text-white"
              : "text-amber-100 hover:bg-amber-800 hover:text-white",
          )}
        >
          <LayoutDashboard className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/admin/members"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
            isActive("/admin/members")
              ? "bg-amber-800 text-white"
              : "text-amber-100 hover:bg-amber-800 hover:text-white",
          )}
        >
          <Users className="h-5 w-5" />
          <span>Members</span>
        </Link>

        <Link
          href="/admin/blog"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
            isActive("/admin/blog") ? "bg-amber-800 text-white" : "text-amber-100 hover:bg-amber-800 hover:text-white",
          )}
        >
          <FileText className="h-5 w-5" />
          <span>Blog & News</span>
        </Link>

        <Link
          href="/admin/sermons"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
            isActive("/admin/sermons")
              ? "bg-amber-800 text-white"
              : "text-amber-100 hover:bg-amber-800 hover:text-white",
          )}
        >
          <Video className="h-5 w-5" />
          <span>Sermons</span>
        </Link>

        <Link
          href="/admin/events"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
            isActive("/admin/events")
              ? "bg-amber-800 text-white"
              : "text-amber-100 hover:bg-amber-800 hover:text-white",
          )}
        >
          <Calendar className="h-5 w-5" />
          <span>Events</span>
        </Link>

        <Link
          href="/admin/prayer-requests"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
            isActive("/admin/prayer-requests")
              ? "bg-amber-800 text-white"
              : "text-amber-100 hover:bg-amber-800 hover:text-white",
          )}
        >
          <PrayingHands className="h-5 w-5" />
          <span>Prayer Requests</span>
        </Link>

        <Link
          href="/admin/testimonies"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
            isActive("/admin/testimonies")
              ? "bg-amber-800 text-white"
              : "text-amber-100 hover:bg-amber-800 hover:text-white",
          )}
        >
          <MessageSquare className="h-5 w-5" />
          <span>Testimonies</span>
        </Link>

        <Link
          href="/admin/settings"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
            isActive("/admin/settings")
              ? "bg-amber-800 text-white"
              : "text-amber-100 hover:bg-amber-800 hover:text-white",
          )}
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-md transition-colors w-full text-amber-100 hover:bg-amber-800 hover:text-white"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
