import Image from "next/image"

interface MinisterCardProps {
  name: string
  role: string
  imageSrc: string
}

export default function MinisterCard({ name, role, imageSrc }: MinisterCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-lg font-medium text-amber-900 mb-1">{name}</h3>
      <p className="text-amber-800">{role}</p>
    </div>
  )
}
