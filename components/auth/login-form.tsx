"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { showVerificationNotification, VerificationStatus } from "@/lib/auth-utils"

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

type LoginFormValues = z.infer<typeof loginSchema>

interface LoginFormProps {
  onForgotPassword: () => void
  onClose: () => void
}

export default function LoginForm({ onForgotPassword, onClose }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, show different verification statuses based on email
      if (data.email.includes("pending")) {
        showVerificationNotification(VerificationStatus.PENDING_EMAIL)
      } else if (data.email.includes("approval")) {
        showVerificationNotification(VerificationStatus.PENDING_APPROVAL)
      } else if (data.email.includes("admin")) {
        toast.success("Welcome, Administrator!", {
          description: "You have full access to all church features",
        })
        onClose()
      } else {
        toast.success("Login successful!", {
          description: "Welcome to the Faith Church members' portal",
        })
        onClose()
      }
    } catch (error) {
      toast.error("Login failed", {
        description: "Please check your credentials and try again",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="button" variant="link" className="px-0 text-amber-800" onClick={onForgotPassword}>
          Forgot your password?
        </Button>

        <Button type="submit" className="w-full bg-amber-800 hover:bg-amber-900 text-white" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </Form>
  )
}
