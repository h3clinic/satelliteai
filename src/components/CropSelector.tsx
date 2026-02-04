'use client'

import { useState, useRef, useEffect } from 'react'
import { Wheat, ChevronDown, Check, AlertCircle } from 'lucide-react'

interface CropSelectorProps {
  selected: string | null
  onSelect: (crop: string | null) => void
}

const crops = [
  { id: 'corn', name: 'Corn', coverage: 'global', confidence: 'high', icon: '🌽' },
  { id: 'wheat', name: 'Wheat', coverage: 'global', confidence: 'high', icon: '🌾' },
  { id: 'rice', name: 'Rice', coverage: 'global', confidence: 'high', icon: '🍚' },
  { id: 'soy', name: 'Soybean', coverage: 'global', confidence: 'high', icon: '🫘' },
  { id: 'cotton', name: 'Cotton', coverage: 'global', confidence: 'medium', icon: '☁️' },
  { id: 'divider', name: '---', coverage: '', confidence: '', icon: '' },
  { id: 'mango', name: 'Mango', coverage: 'partial', confidence: 'low', icon: '🥭' },
  { id: 'cherry', name: 'Cherries', coverage: 'partial', confidence: 'low', icon: '🍒' },
  { id: 'citrus', name: 'Citrus', coverage: 'partial', confidence: 'medium', icon: '🍊' },
  { id: 'coffee', name: 'Coffee', coverage: 'partial', confidence: 'medium', icon: '☕' },
  { id: 'grapes', name: 'Grapes', coverage: 'partial', confidence: 'medium', icon: '🍇' },
]

const coverageBadge = {
  global: { label: 'Global', color: 'bg-crop-green/20 text-crop-green' },
  partial: { label: 'Partial', color: 'bg-stress-yellow/20 text-stress-yellow' },
}

const confidenceBadge = {
  high: { label: 'High conf.', color: 'text-crop-green' },
  medium: { label: 'Med conf.', color: 'text-stress-yellow' },
  low: { label: 'Low conf.', color: 'text-stress-orange' },
}

export default function CropSelector({ selected, onSelect }: CropSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedCrop = crops.find(c => c.id === selected)

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition"
      >
        <span>{selectedCrop?.icon || '🌾'}</span>
        <span>{selectedCrop?.name || 'Wheat'}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 left-0 w-64 glass-panel rounded-xl overflow-hidden z-50">
          {/* Crop list */}
          <div className="max-h-64 overflow-y-auto">
            {crops.map((crop) => {
              if (crop.id === 'divider') {
                return <div key={crop.id} className="border-t border-white/10 my-1" />
              }

              return (
                <button
                  key={crop.id}
                  onClick={() => { onSelect(crop.id); setIsOpen(false) }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition"
                >
                  <span className="text-lg">{crop.icon}</span>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{crop.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${coverageBadge[crop.coverage as keyof typeof coverageBadge]?.color}`}>
                        {coverageBadge[crop.coverage as keyof typeof coverageBadge]?.label}
                      </span>
                    </div>
                    <span className={`text-[10px] ${confidenceBadge[crop.confidence as keyof typeof confidenceBadge]?.color}`}>
                      {confidenceBadge[crop.confidence as keyof typeof confidenceBadge]?.label}
                    </span>
                  </div>
                  {selected === crop.id && <Check className="w-4 h-4 text-crop-green" />}
                </button>
              )
            })}
          </div>

          {/* Disclaimer */}
          <div className="border-t border-white/10 p-3 bg-stress-yellow/5">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-stress-yellow flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-gray-400">
                Specialty crops have limited coverage. Boundaries may be inferred from probability models.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
