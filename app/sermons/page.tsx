import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SermonCard from "@/components/sermon-card"
import ShortHeroSection from "@/components/short-hero-section"

export default function SermonsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ShortHeroSection imageSrc="/upper_room.jpg?height=1080&width=1920" imageAlt="Upper room church" title="Sermons & Teachings" subtitle="Explore our library of messages to grow in your faith journey" />

      {/* Search & Filter Section */}
      <section className="w-full bg-amber-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input type="text" placeholder="Search sermons..." className="w-full" />
            </div>
            <div className="w-full md:w-48">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="faith">Faith</SelectItem>
                  <SelectItem value="prayer">Prayer</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="service">Service</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-48">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Speaker" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="christopher">Pastor Christopher</SelectItem>
                  <SelectItem value="sarah">Pastor Sarah</SelectItem>
                  <SelectItem value="michael">Pastor Michael</SelectItem>
                  <SelectItem value="guest">Guest Speakers</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-48">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SermonCard
              title="Faith That Moves Mountains"
              speaker="Pastor Christopher Hart"
              date="March 12, 2023"
              imageSrc="/placeholder.svg?height=300&width=500"
              description="Discover how faith can transform obstacles into opportunities in your life."
              duration="45 min"
              series="Foundations of Faith"
            />
            <SermonCard
              title="Walking in God's Light"
              speaker="Pastor Sarah Johnson"
              date="March 5, 2023"
              imageSrc="/placeholder.svg?height=300&width=500"
              description="Learn how to live in the light of God's truth and grace every day."
              duration="38 min"
              series="Foundations of Faith"
            />
            <SermonCard
              title="The Power of Community"
              speaker="Pastor Michael Taylor"
              date="February 26, 2023"
              imageSrc="/placeholder.svg?height=300&width=500"
              description="Explore the biblical foundations for authentic Christian community."
              duration="42 min"
              series="Foundations of Faith"
            />
            <SermonCard
              title="Healing Through Prayer"
              speaker="Pastor Christopher Hart"
              date="February 19, 2023"
              imageSrc="/placeholder.svg?height=300&width=500"
              description="Understanding God's healing power and how to pray effectively."
              duration="47 min"
              series="Prayer & Healing"
            />
            <SermonCard
              title="Raising Godly Children"
              speaker="Pastor Sarah Johnson"
              date="February 12, 2023"
              imageSrc="/placeholder.svg?height=300&width=500"
              description="Biblical principles for parenting in today's challenging world."
              duration="41 min"
              series="Family Matters"
            />
            <SermonCard
              title="Serving with Compassion"
              speaker="Pastor Michael Taylor"
              date="February 5, 2023"
              imageSrc="/placeholder.svg?height=300&width=500"
              description="How to serve others with the heart of Christ in your community."
              duration="39 min"
              series="Outreach & Service"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
              Load More Sermons
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Series */}
      <section className="w-full bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-amber-900 mb-12 text-center">Featured Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Foundations of Faith Series"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-amber-900 mb-2">Foundations of Faith</h3>
                <p className="text-gray-700 mb-4">
                  A 6-part series exploring the core elements of Christian faith and practice.
                </p>
                <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white">Watch Series</Button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Prayer & Healing Series"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-amber-900 mb-2">Prayer & Healing</h3>
                <p className="text-gray-700 mb-4">
                  Discover the power of prayer and God's desire to bring healing and restoration.
                </p>
                <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white">Watch Series</Button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Family Matters Series"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-amber-900 mb-2">Family Matters</h3>
                <p className="text-gray-700 mb-4">
                  Biblical wisdom for building strong families, marriages, and relationships.
                </p>
                <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white">Watch Series</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
