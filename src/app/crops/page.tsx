'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, AlertCircle, MapPin, TrendingUp, 
  Info, ExternalLink, Shield
} from 'lucide-react'

const crops = {
  staple: [
    { 
      id: 'corn', 
      name: 'Corn (Maize)', 
      icon: '🌽', 
      coverage: 'global',
      confidence: 'high',
      hectares: '197M ha',
      topCountries: ['USA', 'China', 'Brazil', 'Argentina'],
      riskNow: 28,
      description: 'Global coverage with high-confidence field boundaries in major producing regions.',
    },
    { 
      id: 'wheat', 
      name: 'Wheat', 
      icon: '🌾', 
      coverage: 'global',
      confidence: 'high',
      hectares: '221M ha',
      topCountries: ['China', 'India', 'Russia', 'USA'],
      riskNow: 35,
      description: 'Comprehensive monitoring across winter and spring wheat regions worldwide.',
    },
    { 
      id: 'rice', 
      name: 'Rice', 
      icon: '🍚', 
      coverage: 'global',
      confidence: 'high',
      hectares: '164M ha',
      topCountries: ['China', 'India', 'Indonesia', 'Bangladesh'],
      riskNow: 22,
      description: 'Paddy rice detection with flooding pattern analysis.',
    },
    { 
      id: 'soy', 
      name: 'Soybean', 
      icon: '🫘', 
      coverage: 'global',
      confidence: 'high',
      hectares: '127M ha',
      topCountries: ['Brazil', 'USA', 'Argentina', 'China'],
      riskNow: 45,
      description: 'High-resolution monitoring in major exporting regions.',
    },
    { 
      id: 'cotton', 
      name: 'Cotton', 
      icon: '☁️', 
      coverage: 'global',
      confidence: 'medium',
      hectares: '33M ha',
      topCountries: ['India', 'China', 'USA', 'Brazil'],
      riskNow: 52,
      description: 'Good coverage in major cotton belts with moderate confidence.',
    },
  ],
  specialty: [
    { 
      id: 'mango', 
      name: 'Mango', 
      icon: '🥭', 
      coverage: 'partial',
      confidence: 'low',
      hectares: '5.5M ha',
      topCountries: ['India', 'China', 'Thailand', 'Indonesia'],
      riskNow: 31,
      description: 'Orchard detection available in select regions. Boundaries are probabilistic.',
    },
    { 
      id: 'cherry', 
      name: 'Cherries', 
      icon: '🍒', 
      coverage: 'partial',
      confidence: 'low',
      hectares: '0.4M ha',
      topCountries: ['Turkey', 'USA', 'Chile', 'Uzbekistan'],
      riskNow: 18,
      description: 'Limited to major producing regions with partner data.',
    },
    { 
      id: 'citrus', 
      name: 'Citrus', 
      icon: '🍊', 
      coverage: 'partial',
      confidence: 'medium',
      hectares: '9.2M ha',
      topCountries: ['China', 'Brazil', 'India', 'USA'],
      riskNow: 26,
      description: 'Grove detection in major citrus belts.',
    },
    { 
      id: 'coffee', 
      name: 'Coffee', 
      icon: '☕', 
      coverage: 'partial',
      confidence: 'medium',
      hectares: '11M ha',
      topCountries: ['Brazil', 'Vietnam', 'Colombia', 'Indonesia'],
      riskNow: 38,
      description: 'Plantation monitoring in key export regions.',
    },
    { 
      id: 'grapes', 
      name: 'Grapes', 
      icon: '🍇', 
      coverage: 'partial',
      confidence: 'medium',
      hectares: '7.4M ha',
      topCountries: ['Spain', 'France', 'Italy', 'China'],
      riskNow: 29,
      description: 'Vineyard detection with regional confidence variation.',
    },
  ],
}

const coverageInfo = {
  global: {
    label: 'Global Coverage',
    color: 'bg-crop-green/20 text-crop-green border-crop-green/30',
    description: 'Available worldwide with high data density',
  },
  partial: {
    label: 'Partial Coverage',
    color: 'bg-stress-yellow/20 text-stress-yellow border-stress-yellow/30',
    description: 'Available in select regions with varying density',
  },
}

const confidenceInfo = {
  high: { label: 'High', color: 'text-crop-green' },
  medium: { label: 'Medium', color: 'text-stress-yellow' },
  low: { label: 'Low', color: 'text-stress-orange' },
}

function getRiskColor(risk: number): string {
  if (risk >= 50) return 'text-stress-red'
  if (risk >= 35) return 'text-stress-orange'
  if (risk >= 25) return 'text-stress-yellow'
  return 'text-crop-green'
}

export default function CropsPage() {
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Map
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Crop Explorer</h1>
          <p className="text-gray-400">
            Browse available crops and their monitoring coverage. Select a crop to view on the map.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-stress-yellow/10 border border-stress-yellow/30 rounded-xl p-4 mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-stress-yellow flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-stress-yellow">Coverage Transparency</p>
            <p className="text-sm text-gray-400 mt-1">
              We show confidence levels for every crop. &quot;Partial coverage&quot; means boundaries may be inferred 
              from probability models, not verified field data. We never pretend we have every farm.
            </p>
          </div>
        </div>

        {/* Staple Crops */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">Staple Crops</h2>
            <span className="text-xs px-2 py-1 bg-crop-green/20 text-crop-green rounded-full">Global Coverage</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {crops.staple.map((crop) => (
              <CropCard key={crop.id} crop={crop} selected={selectedCrop === crop.id} onClick={() => setSelectedCrop(crop.id)} />
            ))}
          </div>
        </section>

        {/* Specialty Crops */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">Specialty Crops</h2>
            <span className="text-xs px-2 py-1 bg-stress-yellow/20 text-stress-yellow rounded-full">Partial Coverage</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {crops.specialty.map((crop) => (
              <CropCard key={crop.id} crop={crop} selected={selectedCrop === crop.id} onClick={() => setSelectedCrop(crop.id)} />
            ))}
          </div>
        </section>

        {/* Data Sources */}
        <section className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-lg font-semibold mb-4">Data Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <DataSourceCard 
              name="WorldCereal"
              type="Cropland"
              resolution="10m"
              link="https://worldcereal.org"
            />
            <DataSourceCard 
              name="GFSAD"
              type="Crop Type"
              resolution="1km"
              link="https://earthdata.nasa.gov"
            />
            <DataSourceCard 
              name="MapSPAM"
              type="Allocation"
              resolution="~10km"
              link="https://mapspam.info"
            />
            <DataSourceCard 
              name="Fields of The World"
              type="Boundaries"
              resolution="Field-level"
              link="https://fieldsofthe.world"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function CropCard({ 
  crop, 
  selected, 
  onClick 
}: { 
  crop: typeof crops.staple[0]
  selected: boolean
  onClick: () => void
}) {
  return (
    <div 
      onClick={onClick}
      className={`glass-panel rounded-xl p-4 cursor-pointer transition-all ${
        selected 
          ? 'ring-2 ring-crop-green border-crop-green/50' 
          : 'hover:bg-white/5 border-white/10'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{crop.icon}</span>
          <div>
            <h3 className="font-semibold">{crop.name}</h3>
            <p className="text-xs text-gray-400">{crop.hectares} global</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`text-lg font-bold ${getRiskColor(crop.riskNow)}`}>{crop.riskNow}</p>
          <p className="text-[10px] text-gray-500">Risk Index</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 mb-3 line-clamp-2">{crop.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-[10px] px-2 py-0.5 rounded-full border ${coverageInfo[crop.coverage as keyof typeof coverageInfo].color}`}>
            {coverageInfo[crop.coverage as keyof typeof coverageInfo].label}
          </span>
          <span className={`text-[10px] flex items-center gap-1 ${confidenceInfo[crop.confidence as keyof typeof confidenceInfo].color}`}>
            <Shield className="w-3 h-3" />
            {confidenceInfo[crop.confidence as keyof typeof confidenceInfo].label}
          </span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-white/10">
        <div className="flex items-center gap-1 text-[10px] text-gray-500">
          <MapPin className="w-3 h-3" />
          {crop.topCountries.join(' · ')}
        </div>
      </div>

      {selected && (
        <Link 
          href={`/?crop=${crop.id}`}
          className="mt-3 flex items-center justify-center gap-2 w-full py-2 bg-crop-green/20 text-crop-green rounded-lg text-sm font-medium hover:bg-crop-green/30 transition"
        >
          View on Map
          <ExternalLink className="w-4 h-4" />
        </Link>
      )}
    </div>
  )
}

function DataSourceCard({ name, type, resolution, link }: { name: string, type: string, resolution: string, link: string }) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel rounded-lg p-3 hover:bg-white/5 transition group"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-white transition" />
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-[10px] text-gray-400">{type}</span>
        <span className="text-[10px] text-gray-600">•</span>
        <span className="text-[10px] text-gray-400">{resolution}</span>
      </div>
    </a>
  )
}
