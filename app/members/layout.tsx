import type { ReactNode } from "react"
import { redirect } from "next/navigation"
import VerificationBanner from "@/components/auth/verification-banner"
import { VerificationStatus } from "@/lib/auth-utils"

// This would normally come from an auth provider or API
const getMockUserStatus = (): VerificationStatus => {
  // For demo purposes, return a mock status
  // In a real app, this would check the user's actual status
  return VerificationStatus.VERIFIED
}

export default function MembersLayout({ children }: { children: ReactNode }) {
  // Check if user is logged in (would use a real auth check in production)
  const isLoggedIn = true // Mock for demo

  if (!isLoggedIn) {
    redirect("/")
  }

  const verificationStatus = getMockUserStatus()

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="container mx-auto px-4">
        {verificationStatus !== VerificationStatus.VERIFIED && (
          <div className="mb-6">
            <VerificationBanner status={verificationStatus} email="member@example.com" />
          </div>
        )}

        {children}
      </div>
    </div>
  )
}
