import type { ReactNode } from "react"
import { redirect } from "next/navigation"
import AdminSidebar from "@/components/admin/admin-sidebar"
import { isUserAdmin } from "@/lib/auth-utils"

export default function AdminLayout({ children }: { children: ReactNode }) {
  // In a real app, this would check if the user is an admin
  const user = { role: "admin" } // Mock user for demo

  if (!isUserAdmin(user as any)) {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen pt-16">
      <AdminSidebar />
      <div className="flex-1 p-8 ml-64">{children}</div>
    </div>
  )
}
