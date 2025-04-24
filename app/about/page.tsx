import Image from "next/image"
import { Button } from "@/components/ui/button"
import ParallaxSection from "@/components/parallax-section"
import MediumHeroSection from "@/components/medium-hero-section"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <MediumHeroSection imageSrc="/upper_room.jpg" imageAlt="CHurch building" title="About Our Church" subtitle="A community of faith, hope, and love serving God and our neighbors"/>

      {/* Mission Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-amber-900 mb-6">Our Mission & Vision</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1998, our church has been a beacon of hope and faith in our community for about 3 decades.
                We are committed to sharing the love of Christ through worship, discipleship, fellowship, and service and bringing libration to lives and families.
              </p>
              <p className="text-gray-700 mb-4">
                As a Zonal Headquater of the Redeem Christian Church of God, we are committed to the mission and vision of the <a className="text-amber-600" href="https://www.rccg.org/mission-and-vision/">Redeem Christian church of God</a>
              </p>
              <p className="text-gray-700 mb-8">
                We envision a community where every person experiences God's love, discovers their purpose, and lives
                out their faith in practical ways that transform lives and communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.rccg.org/our-beliefs/" className="bg-amber-800 hover:bg-amber-900 text-white rounded-lg flex justify-center items-center px-4 py-2">Our Beliefs</a>
                {/* <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
                  Our History
                </Button> */}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/backgrounds/service.jpg" alt="Church community" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ParallaxSection className="bg-amber-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-amber-900 mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Image
                  src="/icons/bible.png?height=32&width=32"
                  alt="Bible icon"
                  width={32}
                  height={32}
                  className="text-amber-900"
                />
              </div>
              <h3 className="text-xl font-medium text-amber-900 mb-4">Biblical Teaching</h3>
              <p className="text-gray-700">
                We are committed to teaching the Bible in a way that is relevant, practical, and transformative. We
                believe that God's Word provides wisdom and guidance for every aspect of our lives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Image
                  src="/icons/praying.png?height=32&width=32"
                  alt="Bible icon"
                  width={32}
                  height={32}
                  className="text-amber-900"
                />
              </div>
              <h3 className="text-xl font-medium text-amber-900 mb-4">Prevailing Prayers</h3>
              <p className="text-gray-700">
                We are committed to a life of prayer. We believe that prayer is the key to enforcing the promises of God in our lives
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Image
                  src="/icons/diversity.png?height=32&width=32"
                  alt="Community icon"
                  width={32}
                  height={32}
                  className="text-amber-900"
                />
              </div>
              <h3 className="text-xl font-medium text-amber-900 mb-4">Authentic Community</h3>
              <p className="text-gray-700">
                We foster genuine relationships where people can be known, loved, and supported. We believe that
                spiritual growth happens best in the context of community.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Image
                  src="/icons/community.png?height=32&width=32"
                  alt="Service icon"
                  width={32}
                  height={32}
                  className="text-amber-900"
                />
              </div>
              <h3 className="text-xl font-medium text-amber-900 mb-4">Compassionate Service</h3>
              <p className="text-gray-700">
                We are called to serve others with the love of Christ. We actively seek opportunities to meet needs in
                our community and around the world and welcome willing minds into these services.
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Leadership Section */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-amber-900 mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <Image
                  src="/people/ps_ayo.jpg?height=300&width=300"
                  alt="Pastor Ayo Onakunle"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium text-amber-900 mb-1">Ps. Ayo Onakunle</h3>
              <p className="text-amber-800 mb-4">Pastor in Charge of Zone </p>
              
            </div>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <Image
                  src="/people/zn_mummy.jpg?height=300&width=300" 
                  alt="Pastor Morin Onakunle"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium text-amber-900 mb-1">Ps (Mrs) Morin Onakunle</h3>
              <p className="text-amber-800 mb-4">Wife of PICZ</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <Image
                  src="/people/pastor_elliot1.jpg?height=300&width=300"
                  alt="Pastor Elliot Edaki"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium text-amber-900 mb-1">Ps Elliot Edaki</h3>
              <p className="text-amber-800 mb-4">Pastor in Charge of Parish</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <ParallaxSection className="bg-amber-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Us This Sunday</h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our church family. Our services are designed to help you connect with God and
            others in meaningful ways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href='/events' className="bg-amber-100 text-amber-900 hover:bg-white border border-input bg-background hover:bg-accent hover:text-accent-foreground border-amber-100 text-sm font-medium px-4 py-2 flex items-center rounded-lg">Service Times</Link>
            <Link href='/contact' className="border border-input bg-background hover:bg-accent hover:text-accent-foreground border-amber-100 text-amber-900 text-sm font-medium px-4 py-2 hover:bg-amber-800 flex items-center rounded-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </ParallaxSection>
    </main>
  )
}
