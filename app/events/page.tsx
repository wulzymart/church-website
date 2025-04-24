import Image from "next/image"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EventCard from "@/components/event-card"
import ShortHeroSection from "@/components/short-hero-section"

export default function EventsPage() {
  const events = [
    {
      title: "Youth Service + Sunday School",
      date: "Every Sunday",
      time: "7:30 AM to 9:30 AM",
      location: "Main Auditorium",
      imageSrc: "/backgrounds/youth_church.jpg?height=300&width=500",
      category: "Worship"
    },
    {
      title: "Sunday School + Power Service",
      date: "Every Sunday", 
      time: "8:45 AM to 11:30 AM",
      location: "Main Auditorium",
      imageSrc: "/backgrounds/service.jpg?height=300&width=500",
      category: "Worship"
    },
    {
      title: "Bible Study",
      date: "Every Tuesday",
      time: "6:30 PM",
      location: "Main Auditorium",
      imageSrc: "/backgrounds/bible_study.jpg?height=300&width=500",
      category: "Community"
    },
    {
      title: "Faith Clinic",
      date: "April 15, 2023",
      time: "10:00 AM - 2:00 PM", 
      location: "Main Auditorium",
      imageSrc: "/backgrounds/prayer_time.jpg?height=300&width=500",
      category: "Community"
    },
  ];
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ShortHeroSection title="Events & Calendar" subtitle="Join us for worship, fellowship, and community outreach" imageSrc="/upper_room.jpg" imageAlt="upper room church" />

      {/* Upcoming Events */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-amber-900 mb-12 text-center">Upcoming Events</h2>

          <Tabs defaultValue="all" className="w-full mb-12">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="worship">Worship</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="worship">Excellent Men</TabsTrigger>
              <TabsTrigger value="worship">Treasured Sisters</TabsTrigger>
              <TabsTrigger value="worship">Youths</TabsTrigger>
              <TabsTrigger value="worship">Teenagers</TabsTrigger>
              <TabsTrigger value="worship">Children</TabsTrigger>
              <TabsTrigger value="outreach">Outreach</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {events.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Event */}
      <section className="w-full bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/backgrounds/choristers.jpg?height=800&width=600"
                alt="Easter celebration"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Event
              </div>
              <h2 className="text-3xl font-serif text-amber-900 mb-4">Youth Anniversary</h2>
              <div className="flex items-center text-amber-800 mb-3">
                <Calendar className="h-5 w-5 mr-2" />
                <span>April 24, 2025 - April 26, 2025</span>
              </div>
              <div className="flex items-center text-amber-800 mb-3">
              </div>
              <div className="flex items-center text-amber-800 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Main Sanctuary</span>
              </div>
              <p className="text-gray-700 mb-8">
                Join us for spirit inspired events as we celebrate the 1 year Anniversary of the youth church.
              </p>
             
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
