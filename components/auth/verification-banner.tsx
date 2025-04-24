"use client"

import { useState, useEffect } from "react"
import { AlertCircle, CheckCircle, XCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { VerificationStatus } from "@/lib/auth-utils"
import { toast } from "sonner"

interface VerificationBannerProps {
  status: VerificationStatus
  email?: string
}

export default function VerificationBanner({ status, email }: VerificationBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setIsVisible(true)
  }, [status])

  const handleResendVerification = () => {
    toast.success("Verification email resent", {
      description: `A new verification link has been sent to ${email || "your email"}`,
    })
  }

  if (!isVisible) return null

  return (
    <Alert
      variant={
        status === VerificationStatus.VERIFIED
          ? "default"
          : status === VerificationStatus.PENDING_EMAIL
            ? "destructive"
            : "warning"
      }
      className={
        status === VerificationStatus.VERIFIED
          ? "bg-green-50 text-green-800 border-green-200"
          : status === VerificationStatus.PENDING_EMAIL
            ? "bg-red-50 text-red-800 border-red-200"
            : "bg-amber-50 text-amber-800 border-amber-200"
      }
    >
      {status === VerificationStatus.VERIFIED && <CheckCircle className="h-4 w-4 text-green-600" />}
      {status === VerificationStatus.PENDING_EMAIL && <XCircle className="h-4 w-4 text-red-600" />}
      {status === VerificationStatus.PENDING_APPROVAL && <AlertCircle className="h-4 w-4 text-amber-600" />}

      <AlertTitle>
        {status === VerificationStatus.VERIFIED && "Account Verified"}
        {status === VerificationStatus.PENDING_EMAIL && "Email Verification Required"}
        {status === VerificationStatus.PENDING_APPROVAL && "Awaiting Admin Approval"}
      </AlertTitle>

      <AlertDescription className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        {status === VerificationStatus.VERIFIED && (
          <span>Your account is fully verified. You have access to all member features.</span>
        )}

        {status === VerificationStatus.PENDING_EMAIL && (
          <>
            <span>Please verify your email address to access the members' portal.</span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleResendVerification}
              className="border-red-300 text-red-800 hover:bg-red-50 hover:text-red-900"
            >
              Resend Email
            </Button>
          </>
        )}

        {status === VerificationStatus.PENDING_APPROVAL && (
          <span>Your email has been verified. Your account is now awaiting administrator approval.</span>
        )}
      </AlertDescription>
    </Alert>
  )
}
