'use client'

import { useState } from 'react'
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'

interface TimelineScrubberProps {
  value: number
  onChange: (value: number) => void
  weeks: number
}

export default function TimelineScrubber({ value, onChange, weeks }: TimelineScrubberProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Generate week labels
  const weekLabels = Array.from({ length: weeks }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (weeks - 1 - i) * 7)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  })

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    // In production, this would animate through weeks
  }

  return (
    <div className="glass-panel rounded-xl p-4">
      <div className="flex items-center gap-4">
        {/* Play Controls */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => onChange(Math.max(0, value - 1))}
            className="p-1.5 hover:bg-white/10 rounded-lg transition"
            disabled={value === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={handlePlayPause}
            className="p-2 bg-crop-green/20 hover:bg-crop-green/30 rounded-lg transition"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => onChange(Math.min(weeks - 1, value + 1))}
            className="p-1.5 hover:bg-white/10 rounded-lg transition"
            disabled={value === weeks - 1}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Timeline */}
        <div className="flex-1">
          <div className="relative">
            {/* Track */}
            <div className="h-2 bg-white/10 rounded-full">
              {/* Progress */}
              <div 
                className="h-full bg-gradient-to-r from-crop-green to-crop-green-dark rounded-full transition-all duration-200"
                style={{ width: `${((value + 1) / weeks) * 100}%` }}
              />
            </div>
            
            {/* Markers */}
            <div className="absolute top-0 left-0 right-0 h-2 flex justify-between">
              {Array.from({ length: weeks }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => onChange(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i <= value 
                      ? 'bg-crop-green scale-100' 
                      : 'bg-white/20 scale-75 hover:scale-100'
                  } ${i === value ? 'ring-2 ring-crop-green ring-offset-2 ring-offset-[#0a0a0a]' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-2">
            <span className="text-[10px] text-gray-500">{weekLabels[0]}</span>
            <span className="text-xs font-medium text-crop-green">{weekLabels[value]}</span>
            <span className="text-[10px] text-gray-500">{weekLabels[weeks - 1]}</span>
          </div>
        </div>

        {/* Week indicator */}
        <div className="text-right min-w-[80px]">
          <p className="text-xs text-gray-400">Week</p>
          <p className="text-lg font-bold">{value - weeks + 1 === 0 ? 'Current' : `${value - weeks + 1}`}</p>
        </div>
      </div>
    </div>
  )
}
