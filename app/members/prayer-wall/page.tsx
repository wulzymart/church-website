"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HandIcon as PrayingHands, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

// Mock prayer requests data
const mockPrayerRequests = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    content:
      "Please pray for my mother who is undergoing surgery next week. We're hoping for a successful procedure and quick recovery.",
    date: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Michael Taylor",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MT",
    },
    content:
      "I'm facing a difficult decision regarding my career. Please pray for wisdom and clarity as I consider my options.",
    date: "Yesterday",
  },
  {
    id: 3,
    user: {
      name: "Ruth Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "RW",
    },
    content:
      "My son is struggling with anxiety at school. Please pray for peace and confidence for him, and wisdom for us as parents.",
    date: "2 days ago",
  },
  {
    id: 4,
    user: {
      name: "David Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DM",
    },
    content:
      "Praising God for answering our prayers! My wife and I are expecting our first child after years of trying. Please pray for a healthy pregnancy.",
    date: "3 days ago",
  },
]

export default function PrayerWallPage() {
  const [prayerRequests, setPrayerRequests] = useState(mockPrayerRequests)
  const [newPrayer, setNewPrayer] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newPrayer.trim()) {
      toast.error("Please enter your prayer request")
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newRequest = {
        id: Date.now(),
        user: {
          name: "You",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "YO",
        },
        content: newPrayer,
        date: "Just now",
      }

      setPrayerRequests([newRequest, ...prayerRequests])
      setNewPrayer("")

      toast.success("Prayer request submitted", {
        description: "Your prayer request has been shared with the community",
      })
    } catch (error) {
      toast.error("Failed to submit prayer request", {
        description: "Please try again later",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <Button asChild variant="ghost" size="sm" className="text-amber-800">
          <Link href="/members">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Portal
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <PrayingHands className="h-6 w-6 text-amber-800" />
        <h1 className="text-3xl font-serif text-amber-900">Prayer Wall</h1>
      </div>

      <p className="text-amber-800 mb-8 max-w-3xl">
        Share your prayer requests with our church community. We believe in the power of prayer and are committed to
        lifting each other up in prayer.
      </p>

      <Card className="mb-8">
        <CardHeader className="bg-amber-50 border-b border-amber-100 pb-4">
          <h2 className="text-lg font-medium text-amber-900">Share Your Prayer Request</h2>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit}>
            <Textarea
              placeholder="Type your prayer request here..."
              className="min-h-[120px] mb-4"
              value={newPrayer}
              onChange={(e) => setNewPrayer(e.target.value)}
            />
            <Button type="submit" className="bg-amber-800 hover:bg-amber-900 text-white" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Prayer Request"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-serif text-amber-900 mb-6">Community Prayer Requests</h2>

      <div className="space-y-6">
        {prayerRequests.map((prayer) => (
          <Card key={prayer.id}>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src={prayer.user.avatar || "/placeholder.svg"} alt={prayer.user.name} />
                  <AvatarFallback className="bg-amber-200 text-amber-800">{prayer.user.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-amber-900">{prayer.user.name}</h3>
                    <span className="text-sm text-amber-700">{prayer.date}</span>
                  </div>
                  <p className="text-gray-700">{prayer.content}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-amber-100 bg-amber-50">
              <Button variant="ghost" className="text-amber-800 hover:text-amber-900 hover:bg-amber-100">
                <PrayingHands className="h-4 w-4 mr-2" />
                Praying
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}
