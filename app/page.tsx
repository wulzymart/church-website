import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParallaxSection from "@/components/parallax-section"
import SermonPlayer from "@/components/sermon-player"
import NewsCard from "@/components/news-card"
import MinisterCard from "@/components/minister-card"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/upper_room.jpg?height=1080&width=1920"
            alt="Church congregation"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-black/70">
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            A place for everyone,
            <br />
            Making greatness common.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Embracing Faith, Fostering Community, Building God's Light
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">Join Us Sunday</Button>
            <Button variant="outline" className="border-white text-amber-900 hover:bg-white/10">
              Watch Online
            </Button>
          </div>
        </div>
      </section>

      {/* Faith Stats Section */}
      <section className="w-full bg-amber-50/80 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-900 mb-2">1k+</h3>
              <p className="text-amber-800">Community Members</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-900 mb-2">400+</h3>
              <p className="text-amber-800">Weekly Attendees</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-amber-900 mb-2">{new Date().getFullYear() - 1998}+</h3>
              <p className="text-amber-800">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faith Principles Section */}
      <ParallaxSection className="bg-amber-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Empowering Faith. Embracing Diversity.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
                <Image
                  src="/icons/bible.png?height=64&width=64"
                  alt="Bible icon"
                  width={64}
                  height={64}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Weekly Bible Study</h3>
              <p className="text-amber-100">Deepen your understanding of scripture through our weekly studies</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
                <Image
                  src="/icons/praying.png?height=64&width=64"
                  alt="Prayer icon"
                  width={64}
                  height={64}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Prayer Ministry</h3>
              <p className="text-amber-100">Join our prayer meetings in lifting up our personal and community's needs</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
                <Image
                  src="/icons/community.png?height=64&width=64"
                  alt="Community icon"
                  width={64}
                  height={64}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Community Outreach</h3>
              <p className="text-amber-100">Serving our neighbors with compassion and practical support</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
                <Image
                  src="/icons/church.png?height=64&width=64"
                  alt="Worship icon"
                  width={64}
                  height={64}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Worship Experience</h3>
              <p className="text-amber-100">Encounter God through music, prayer, and the Word in our worship services</p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button className="bg-amber-100 text-amber-900 hover:bg-white">About Us</Button>
          </div>
        </div>
      </ParallaxSection>

      {/* Ministers Section */}
      <section className="w-full hidden bg-amber-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-amber-900 mb-4">
            Meet Our Pastors
          </h2>
          <p className="text-center text-amber-800 mb-12 max-w-2xl mx-auto">
            Our dedicated team of ministers are here to guide, support, and walk alongside you in your faith journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <MinisterCard name="Christopher Hart" role="Lead Pastor" imageSrc="/placeholder.svg?height=300&width=300" />
            <MinisterCard
              name="Sarah Johnson"
              role="Worship Minister"
              imageSrc="/placeholder.svg?height=300&width=300"
            />
            <MinisterCard name="Michael Taylor" role="Youth Pastor" imageSrc="/placeholder.svg?height=300&width=300" />
            <MinisterCard
              name="Ruth Wilson"
              role="Community Outreach"
              imageSrc="/placeholder.svg?height=300&width=300"
            />
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-900"></span>
              <span className="w-2 h-2 rounded-full bg-amber-900/40"></span>
              <span className="w-2 h-2 rounded-full bg-amber-900/40"></span>
              <span className="w-2 h-2 rounded-full bg-amber-900/40"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <ParallaxSection className="bg-amber-50 py-20 w-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-amber-900 max-w-xl mx-auto mb-12">
            Support Your Faith. Support Your Home. Join Our meetings.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg h-64">
              <Image src="/backgrounds/choristers.jpg?height=600&width=800" alt="Church service" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 to-black/90 flex flex-col justify-end p-6">
                <h3 className="text-xl font-medium text-white mb-2">Youth Powered First Service</h3>
                <p className="text-amber-100 mb-4">Join our youth powered service on sundays at 7:30AM for energetic, spirit filled engaging worship</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-64">
              <Image src="/backgrounds/service.jpg?height=600&width=800" alt="Church service" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-black/90 flex flex-col justify-end p-6">
                <h3 className="text-xl font-medium text-white mb-2">Sunday Second Service</h3>
                <p className="text-amber-100 mb-4">Join us every Sunday at 8:45AM for an intriguing power packed worship</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-64">
              <Image src="/backgrounds/bible_study.jpg?height=600&width=800" alt="Church service" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-black/90 flex flex-col justify-end p-6">
                <h3 className="text-xl font-medium text-white mb-2">Bible Studies</h3>
                <p className="text-amber-100 mb-4">Dive into God's librating word with us every Tuesday at 6:30PM, and gain insight into God's promises</p>
            
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-64">
              <Image src="/backgrounds/praying.jpg?height=600&width=800" alt="Church service" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-black/90 flex flex-col justify-end p-6">
                <h3 className="text-xl font-medium text-white mb-2">Faith Clinic</h3>
                <p className="text-amber-100 mb-4">Join us every Thursday at 6:30PM at our time of prevailing prayers, and see God move in your life and family.</p>
                
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-64">
              <Image src="/backgrounds/prayer_time.jpg?height=600&width=800" alt="Church service" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-black/90 flex flex-col justify-end p-6">
                <h3 className="text-xl font-medium text-white mb-2">Prayer rain</h3>
                <p className="text-amber-100 mb-4">We pray untill we see a shift every last friday of the month at 5:30PM.</p>
                
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-64">
              <Image src="/backgrounds/decreeing.jpg?height=600&width=800" alt="Church service" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-black/90 flex flex-col justify-end p-6">
                <h3 className="text-xl font-medium text-white mb-2">Good Morning Jesus</h3>
                <p className="text-amber-100 mb-4">Launch the new month with us at 6:00AM every first day of the month as we take charge and control the month through prayers and the power of God's word</p>
               
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
          <Link href="/events" className="bg-amber-900 hover:bg-white hover:text-amber-900 text-white rounded-lg px-6 py-4 mt-6 flex items-center text-sm">
                  View Our Schedule <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* Quote Section */}
      <section className="w-full bg-amber-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Faith In Every Step, Love In Every Action</h2>
          <div className="flex justify-center gap-4">
            <Button className="bg-amber-100 text-amber-900 hover:bg-white">Volunteer to Serve</Button>
            <Button variant="outline" className="border-amber-100 text-amber-900 hover:bg-amber-800">
              Donate
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif text-amber-900">Latest News & Blogs</h2>
            <Link
              href="/news"
              className="text-amber-800 text-sm font-medium px-4 py-2 border border-amber-800 rounded hover:bg-amber-50"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <NewsCard
              title="Weekly Bible Study with Pastor Elliot"
              date="March 15"
              imageSrc="/placeholder.svg?height=300&width=400"
              category="Events"
            />
            <NewsCard
              title="Youth Camp Signups Now Open - Don't Miss Out!"
              date="March 12"
              imageSrc="/placeholder.svg?height=300&width=400"
              category="Youth"
            />
            <NewsCard
              title="Annual Charity Drive, Helping Families in Need"
              date="March 10"
              imageSrc="/placeholder.svg?height=300&width=400"
              category="Outreach"
            />
            <NewsCard
              title="Sunday Sermon: Building Bridges Of Faith with Pastor Sarah"
              date="March 8"
              imageSrc="/placeholder.svg?height=300&width=400"
              category="Sermons"
            />
          </div>
        </div>
      </section>

      {/* Sermon Section */}
      <ParallaxSection className="bg-amber-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Faith through knowledge,
                <br />
                understanding God's purpose
              </h2>
              <div className="relative pl-8 mb-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-amber-600"></div>
                <blockquote className="text-lg italic text-amber-100">
                  "For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you,
                  plans to give you hope and a future."
                </blockquote>
                <p className="mt-4 text-amber-200">Jeremiah 29:11</p>
              </div>
              <p className="text-amber-100 mb-8">
                Join us this Sunday as Pastor Ayo explores how faith can transform our lives and communities.
                Discover the power of God's love to heal and restore.
              </p>
              <div className="flex items-center gap-4">
                <Button className="bg-amber-100 text-amber-900 hover:bg-white">Watch Stream</Button>
                <Link href="/sermons" className="text-amber-200 flex items-center">
                  All Sermons <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-amber-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-6">Featured Sermon</h3>
              <SermonPlayer
                title="Embracing Faith, Empowering Souls"
                speaker="Pastor Elliot Edaki"
                date="March 12, 2023"
              />
              <SermonPlayer title="Walking in God's Light" speaker="Pastor Ayo Onakunle" date="March 5, 2023" />
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Gallery Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image
              src="/backgrounds/praying.jpg?height=300&width=300"
              alt="Church community"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/backgrounds/service.jpg?height=300&width=300"
              alt="Worship service"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/backgrounds/prayer_time.jpg?height=300&width=300"
              alt="Youth group"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/backgrounds/choristers.jpg?height=300&width=300"
              alt="Community outreach"
              width={300}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </main>
  )
}
