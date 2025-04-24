"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterSignup() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the email to your server
    console.log("Newsletter signup:", email)

    toast({
      title: "Subscription Successful",
      description: "Thank you for subscribing to our newsletter!",
    })

    setEmail("")
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-serif text-amber-900 mb-4">Join With Us. Subscribe Our Newsletter.</h2>
      <p className="text-amber-800 mb-8 max-w-2xl mx-auto">
        Stay updated with our latest sermons, events, and community news by subscribing to our weekly newsletter.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" className="bg-amber-800 hover:bg-amber-900 text-white">
          Subscribe
        </Button>
      </form>
    </div>
  )
}
