import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, ChevronRight } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  imageSrc: string
  category: string
}

export default function EventCard({ title, date, time, location, imageSrc, category }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm group">
      <div className="relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-amber-800 text-white text-xs px-2 py-1 rounded">{category}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-amber-900 mb-4">{title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-amber-800">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-amber-800">
            <Clock className="h-5 w-5 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-amber-800">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <Link href="#" className="text-amber-800 text-sm flex items-center hover:text-amber-700">
          Event Details <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}
