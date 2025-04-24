import Image from 'next/image'
import React from 'react'
interface MediumHeroSectionProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  subtitle: string;
}
const MediumHeroSection = ({imageSrc, imageAlt, title, subtitle}: MediumHeroSectionProps ) => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        

    <div className="absolute inset-0 z-0">
      <Image
        src={imageSrc}
        alt={imageAlt || title}
        fill
        className="object-cover brightness-[0.85]"
        priority
      />
    </div>
    <div className="absolute inset-0 z-0 bg-black/70">
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-serif mb-6">{title}</h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  </section>
  )
}

export default MediumHeroSection