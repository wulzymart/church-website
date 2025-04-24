"use client"

import { useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface SermonPlayerProps {
  title: string
  speaker: string
  date: string
}

export default function SermonPlayer({ title, speaker, date }: SermonPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // In a real app, this would control the audio playback
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    // In a real app, this would control the audio volume
  }

  return (
    <div className="bg-amber-700 rounded-lg p-4 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="text-white font-medium">{title}</h4>
          <p className="text-amber-200 text-sm">
            {speaker} • {date}
          </p>
        </div>
        <button
          onClick={togglePlay}
          className="bg-amber-100 text-amber-900 rounded-full p-2 hover:bg-white transition-colors"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>
      <div className="space-y-2">
        <div className="relative h-1 bg-amber-800 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-amber-100" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-amber-200 text-xs">{Math.floor((progress / 100) * 45)}:00</span>
          <button onClick={toggleMute} className="text-amber-200 hover:text-white">
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <span className="text-amber-200 text-xs">45:00</span>
        </div>
      </div>
    </div>
  )
}
