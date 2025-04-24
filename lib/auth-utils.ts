import { toast } from "sonner"

// User roles
export enum UserRole {
  MEMBER = "member",
  ADMIN = "admin",
}

// User verification status
export enum VerificationStatus {
  PENDING_EMAIL = "pending_email",
  PENDING_APPROVAL = "pending_approval",
  VERIFIED = "verified",
}

// User interface
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: UserRole
  verificationStatus: VerificationStatus
  phoneNumber?: string
  dateOfBirth?: Date
  occupation?: string
  maritalStatus?: string
  address?: string
  createdAt: Date
  updatedAt: Date
}

// Mock function to check if user is verified
export const isUserVerified = (user: User | null): boolean => {
  if (!user) return false
  return user.verificationStatus === VerificationStatus.VERIFIED
}

// Mock function to check if user is admin
export const isUserAdmin = (user: User | null): boolean => {
  if (!user) return false
  return user.role === UserRole.ADMIN
}

// Mock function to show verification notification
export const showVerificationNotification = (status: VerificationStatus) => {
  switch (status) {
    case VerificationStatus.PENDING_EMAIL:
      toast.warning("Please verify your email address to access the members' portal", {
        description: "Check your inbox for a verification link",
        duration: 5000,
      })
      break
    case VerificationStatus.PENDING_APPROVAL:
      toast.info("Your account is pending approval from an administrator", {
        description: "You'll be notified once your account is approved",
        duration: 5000,
      })
      break
    case VerificationStatus.VERIFIED:
      toast.success("Your account is fully verified", {
        description: "Welcome to the Faith Church community!",
        duration: 3000,
      })
      break
  }
}
