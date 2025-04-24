import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface NewsCardProps {
  title: string
  date: string
  imageSrc: string
  category: string
}

export default function NewsCard({ title, date, imageSrc, category }: NewsCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-amber-800 text-white text-xs px-2 py-1 rounded">{category}</div>
      </div>
      <div>
        <p className="text-amber-800 text-sm mb-2">{date}</p>
        <h3 className="text-lg font-medium text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
          {title}
        </h3>
        <Link href="#" className="text-amber-800 text-sm flex items-center hover:text-amber-700">
          Read More <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}
