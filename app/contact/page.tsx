"use client"

import type React from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "./contactForm"
import MediumHeroSection from "@/components/medium-hero-section"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <MediumHeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions or prayer requests."
        imageSrc="/upper_room.jpg"
        imageAlt="Upper Room Parish"
       />


      {/* Contact Info & Form */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-amber-900 mb-8">Get In Touch</h2>
              <div className="grid gap-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-amber-900 mb-1">Our Location</h3>
                    <p className="text-gray-700">
                      2 Tunji Olusanya,
                      <br/>
                      Oja Bus stop, Yakoyo
                      <br />
                      Ojodu, Lagos
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-amber-900 mb-1">Phone</h3>
                    <p className="text-gray-700">+2348088789556</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-amber-900 mb-1">Email</h3>
                    <p className="text-gray-700">info@rccgupperroom.com.ng</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-amber-900 mb-1">Service Times</h3>
                    <p className="text-gray-700">
                      Sunday: 7:30 AM & 8:45 AM
                      <br />
                      Tuesday: 6:30 PM
                      <br />
                      Thursday: 6:30 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-lg font-medium text-amber-900 mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com/rccg.upperroomparish.9" className="bg-amber-100 p-3 rounded-full hover:bg-amber-200">
                    <svg className="h-6 w-6 text-amber-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="bg-amber-100 p-3 rounded-full hover:bg-amber-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  text-amber-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
                  </a>
                  <a href="#" className="bg-amber-100 p-3 rounded-full hover:bg-amber-200">
                    <svg className="h-6 w-6 text-amber-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="bg-amber-100 p-3 rounded-full hover:bg-amber-200">
                    <svg className="h-6 w-6 text-amber-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-amber-900 mb-8 text-center">Find Us</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            {/* In a real app, you would embed a Google Map or other map service here */}
            <div className="w-full h-full flex items-center justify-center bg-amber-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6682.558268956001!2d3.3530915355215467!3d6.648895352144806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93f53f500d7b%3A0x8c4bb8822579a578!2sThe%20Redeemed%20Christian%20Church%20Of%20God%2C%20Upper%20Room%20Parish!5e1!3m2!1sen!2sng!4v1745453529847!5m2!1sen!2sng" width="100%" height="450"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
