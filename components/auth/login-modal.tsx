"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "./login-form"
import RegisterForm from "./register-form"
import ForgotPasswordForm from "./forgot-password-form"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

type AuthTab = "login" | "register" | "forgot-password"

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [activeTab, setActiveTab] = useState<AuthTab>("login")

  const handleTabChange = (value: string) => {
    setActiveTab(value as AuthTab)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-amber-900">
            {activeTab === "login" && "Welcome Back"}
            {activeTab === "register" && "Join Our Community"}
            {activeTab === "forgot-password" && "Reset Your Password"}
          </DialogTitle>
          <DialogDescription className="text-amber-800">
            {activeTab === "login" && "Sign in to access the members' portal"}
            {activeTab === "register" && "Create an account to join our church community"}
            {activeTab === "forgot-password" && "Enter your email to receive a reset link"}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <LoginForm onForgotPassword={() => setActiveTab("forgot-password")} onClose={onClose} />
          </TabsContent>

          <TabsContent value="register">
            <RegisterForm onClose={onClose} />
          </TabsContent>

          <TabsContent value="forgot-password">
            <ForgotPasswordForm onBackToLogin={() => setActiveTab("login")} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
