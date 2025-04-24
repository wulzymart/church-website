import Image from "next/image"
import Link from "next/link"
import { Play, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SermonCardProps {
  title: string
  speaker: string
  date: string
  imageSrc: string
  description: string
  duration: string
  series: string
}

export default function SermonCard({ title, speaker, date, imageSrc, description, duration, series }: SermonCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent flex items-end p-4">
          <div className="text-white">
            <p className="text-sm font-medium">{series}</p>
            <p className="text-xs flex items-center mt-1">
              <Clock className="h-3 w-3 mr-1" />
              {duration}
            </p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-amber-900 mb-2">{title}</h3>
        <p className="text-amber-800 text-sm mb-3">
          {speaker} • {date}
        </p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
            <Play className="h-4 w-4 mr-2" />
            Listen
          </Button>
          <Link href="#" className="text-amber-800 text-sm hover:underline">
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}
