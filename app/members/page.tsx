import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { HandIcon as PrayingHands, Users, MessageSquare } from "lucide-react"

export default function MembersPortalPage() {
  return (
    <main className="py-8">
      <h1 className="text-4xl font-serif text-amber-900 mb-6">Members' Portal</h1>
      <p className="text-amber-800 mb-12 max-w-3xl">
        Welcome to the Faith Church members' portal. Connect with our community, share prayer requests, and stay updated
        with the latest news and testimonies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="bg-amber-50 border-b border-amber-100">
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <PrayingHands className="h-5 w-5" />
              Prayer Wall
            </CardTitle>
            <CardDescription>Share and view prayer requests from our community</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-600 mb-4">
              Submit your prayer requests and pray for others in our community. Your prayers matter and our community is
              here to support you.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-amber-800 hover:bg-amber-900 text-white">
              <Link href="/members/prayer-wall">View Prayer Wall</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="bg-amber-50 border-b border-amber-100">
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <Users className="h-5 w-5" />
              The Gist
            </CardTitle>
            <CardDescription>Connect with other members in our community</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-600 mb-4">
              Share updates, photos, and connect with other members. Build relationships and stay connected with our
              church family.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-amber-800 hover:bg-amber-900 text-white">
              <Link href="/members/gist">Join The Conversation</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="bg-amber-50 border-b border-amber-100">
            <CardTitle className="flex items-center gap-2 text-amber-900">
              <MessageSquare className="h-5 w-5" />
              Testimonies
            </CardTitle>
            <CardDescription>Share how God has worked in your life</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-600 mb-4">
              Share your testimony of God's faithfulness and read inspiring stories from other members. Your story can
              encourage others.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-amber-800 hover:bg-amber-900 text-white">
              <Link href="/members/testimonies">View Testimonies</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
