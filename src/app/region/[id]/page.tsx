'use client'

import { useState, use, useMemo, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { 
  ArrowLeft, Download, Bell, TrendingUp, TrendingDown, 
  MapPin, Calendar, Shield, ChevronRight,
  ChevronLeft, Play, Pause, BarChart3, Info, Satellite,
  Thermometer, Droplets, Wind, Sun, Eye
} from 'lucide-react'

// Dynamic import for map component (no SSR)
const RegionMap = dynamic(() => import('@/components/RegionMap'), { ssr: false })

// Region data with coordinates for satellite imagery
const regionData: Record<string, RegionInfo> = {
  'brazil-mato-grosso': {
    name: 'Mato Grosso',
    country: 'Brazil',
    area: '12.4M ha',
    center: { lat: -12.6819, lng: -56.9211 },
    bbox: [-60.0, -18.0, -50.0, -8.0],
    cropMix: [
      { crop: 'Soy', percent: 55, risk: 82 },
      { crop: 'Corn', percent: 35, risk: 45 },
      { crop: 'Cotton', percent: 8, risk: 38 },
      { crop: 'Other', percent: 2, risk: 12 },
    ],
    currentRisk: 82,
    lastMonthRisk: 65,
    confidence: 75,
    units: 234,
    highRiskUnits: 89,
    lastUpdate: '3 hours ago',
    stressOnset: 'May 28, 2025',
    weeklyRisk: [35, 38, 45, 52, 58, 65, 72, 78, 80, 81, 82, 82],
    weatherData: { temp: 32, humidity: 45, rainfall: 12, windSpeed: 8 },
  },
  'usa-kansas': {
    name: 'Kansas',
    country: 'United States',
    area: '8.2M ha',
    center: { lat: 38.5266, lng: -96.7265 },
    bbox: [-102.0, 37.0, -94.5, 40.0],
    cropMix: [
      { crop: 'Wheat', percent: 45, risk: 71 },
      { crop: 'Corn', percent: 30, risk: 35 },
      { crop: 'Soy', percent: 20, risk: 28 },
      { crop: 'Other', percent: 5, risk: 15 },
    ],
    currentRisk: 71,
    lastMonthRisk: 58,
    confidence: 82,
    units: 156,
    highRiskUnits: 34,
    lastUpdate: '2 hours ago',
    stressOnset: 'June 12, 2025',
    weeklyRisk: [45, 48, 52, 55, 58, 62, 65, 68, 70, 71, 71, 71],
    weatherData: { temp: 28, humidity: 35, rainfall: 5, windSpeed: 15 },
  },
  'ukraine-central': {
    name: 'Central Ukraine',
    country: 'Ukraine',
    area: '15.2M ha',
    center: { lat: 49.0139, lng: 31.2858 },
    bbox: [28.0, 47.0, 36.0, 52.0],
    cropMix: [
      { crop: 'Wheat', percent: 40, risk: 65 },
      { crop: 'Corn', percent: 35, risk: 42 },
      { crop: 'Sunflower', percent: 20, risk: 38 },
      { crop: 'Other', percent: 5, risk: 15 },
    ],
    currentRisk: 65,
    lastMonthRisk: 52,
    confidence: 78,
    units: 312,
    highRiskUnits: 67,
    lastUpdate: '4 hours ago',
    stressOnset: 'June 5, 2025',
    weeklyRisk: [32, 35, 38, 42, 45, 48, 52, 55, 58, 62, 64, 65],
    weatherData: { temp: 24, humidity: 55, rainfall: 18, windSpeed: 12 },
  },
  'india-punjab': {
    name: 'Punjab',
    country: 'India',
    area: '5.0M ha',
    center: { lat: 31.1471, lng: 75.3412 },
    bbox: [73.5, 29.5, 77.0, 32.5],
    cropMix: [
      { crop: 'Wheat', percent: 50, risk: 58 },
      { crop: 'Rice', percent: 35, risk: 72 },
      { crop: 'Cotton', percent: 10, risk: 45 },
      { crop: 'Other', percent: 5, risk: 20 },
    ],
    currentRisk: 72,
    lastMonthRisk: 55,
    confidence: 80,
    units: 189,
    highRiskUnits: 52,
    lastUpdate: '1 hour ago',
    stressOnset: 'June 20, 2025',
    weeklyRisk: [38, 42, 45, 48, 50, 52, 55, 58, 62, 68, 70, 72],
    weatherData: { temp: 38, humidity: 65, rainfall: 85, windSpeed: 6 },
  },
}

interface RegionInfo {
  name: string
  country: string
  area: string
  center: { lat: number; lng: number }
  bbox: number[]
  cropMix: { crop: string; percent: number; risk: number }[]
  currentRisk: number
  lastMonthRisk: number
  confidence: number
  units: number
  highRiskUnits: number
  lastUpdate: string
  stressOnset: string
  weeklyRisk: number[]
  weatherData: { temp: number; humidity: number; rainfall: number; windSpeed: number }
}

const defaultRegion: RegionInfo = {
  name: 'Unknown Region',
  country: 'Unknown',
  area: 'N/A',
  center: { lat: 0, lng: 0 },
  bbox: [-180, -90, 180, 90],
  cropMix: [
    { crop: 'Mixed', percent: 100, risk: 45 },
  ],
  currentRisk: 45,
  lastMonthRisk: 40,
  confidence: 70,
  units: 100,
  highRiskUnits: 15,
  lastUpdate: 'Unknown',
  stressOnset: 'Not detected',
  weeklyRisk: [30, 32, 35, 38, 40, 42, 44, 45, 45, 45, 45, 45],
  weatherData: { temp: 25, humidity: 50, rainfall: 20, windSpeed: 10 },
}

// Generate timeline dates (past 24 months)
function generateTimelineDates() {
  const dates = []
  const now = new Date()
  for (let i = 23; i >= 0; i--) {
    const d = new Date(now)
    d.setMonth(d.getMonth() - i)
    dates.push({
      date: d,
      label: d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
      monthYear: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`,
    })
  }
  return dates
}

// Sentinel-2 style imagery URL 
function getSatelliteImageUrl(bbox: number[], layer: string = 'truecolor') {
  const [minLng, minLat, maxLng, maxLat] = bbox
  // Using EOX Sentinel-2 cloudless mosaic (free, no API key needed)
  return `https://tiles.maps.eox.at/wms?service=WMS&request=GetMap&version=1.1.1&layers=s2cloudless-2020&styles=&format=image/jpeg&transparent=false&width=800&height=500&srs=EPSG:4326&bbox=${minLng},${minLat},${maxLng},${maxLat}`
}

function getRiskColor(risk: number): string {
  if (risk >= 70) return '#ef4444'
  if (risk >= 50) return '#f97316'
  if (risk >= 30) return '#eab308'
  return '#22c55e'
}

function getRiskClass(risk: number): string {
  if (risk >= 70) return 'text-red-500'
  if (risk >= 50) return 'text-orange-500'
  if (risk >= 30) return 'text-yellow-500'
  return 'text-green-500'
}

function getRiskBgClass(risk: number): string {
  if (risk >= 70) return 'bg-red-500'
  if (risk >= 50) return 'bg-orange-500'
  if (risk >= 30) return 'bg-yellow-500'
  return 'bg-green-500'
}

export default function RegionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const region = regionData[id] || defaultRegion
  
  const [selectedDateIndex, setSelectedDateIndex] = useState(23)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedLayer, setSelectedLayer] = useState<'truecolor' | 'ndvi' | 'moisture'>('truecolor')
  const [showAlertModal, setShowAlertModal] = useState(false)
  
  const timelineDates = useMemo(() => generateTimelineDates(), [])
  const selectedDate = timelineDates[selectedDateIndex]
  
  const riskChange = region.currentRisk - region.lastMonthRisk
  const maxRisk = Math.max(...region.weeklyRisk)

  // Simulated historical data per month
  const historicalData = useMemo(() => {
    return timelineDates.map((d, i) => {
      const seasonalVariation = Math.sin((i / 12) * Math.PI * 2) * 15
      const trend = (i / 24) * (region.currentRisk - 30)
      const noise = (Math.sin(i * 7.3) * 5)
      const risk = Math.max(10, Math.min(95, 30 + trend + seasonalVariation + noise))
      const ndvi = Math.max(0.1, Math.min(0.9, 0.6 - (risk - 30) / 100 + Math.sin(i * 3.7) * 0.05))
      return { ...d, risk: Math.round(risk), ndvi: parseFloat(ndvi.toFixed(2)) }
    })
  }, [region.currentRisk, timelineDates])

  // Auto-play timeline
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setSelectedDateIndex(prev => prev >= 23 ? 0 : prev + 1)
    }, 800)
    return () => clearInterval(interval)
  }, [isPlaying])

  const selectedHistorical = historicalData[selectedDateIndex]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="glass-panel border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Global Map
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold">{region.name}</h1>
                <span className="text-gray-400">{region.country}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                  region.currentRisk >= 70 ? 'bg-red-500/20 text-red-400' :
                  region.currentRisk >= 50 ? 'bg-orange-500/20 text-orange-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  Risk: {region.currentRisk}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {region.area}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Updated {region.lastUpdate}
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  {region.confidence}% confidence
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowAlertModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition"
              >
                <Bell className="w-4 h-4" />
                Create Alert
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Satellite Imagery Section */}
        <div className="glass-panel rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Satellite className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold">Satellite Time Series</h2>
              <span className="text-sm text-gray-400">Sentinel-2 Cloudless Mosaic</span>
            </div>
            
            {/* Layer selector */}
            <div className="flex gap-2">
              {[
                { id: 'truecolor', label: 'True Color', icon: Eye },
                { id: 'ndvi', label: 'NDVI', icon: BarChart3 },
                { id: 'moisture', label: 'Moisture', icon: Droplets },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setSelectedLayer(id as typeof selectedLayer)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition ${
                    selectedLayer === id 
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Main imagery display */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Large current view - Interactive Map */}
            <div className="col-span-2 relative aspect-[16/10] bg-gray-900 rounded-lg overflow-hidden">
              <RegionMap
                center={region.center}
                bbox={region.bbox}
                regionName={region.name}
                risk={selectedHistorical.risk}
                selectedLayer={selectedLayer}
              />
              
              {/* Date and layer info */}
              <div className="absolute top-4 left-4 glass-panel rounded-lg px-3 py-2 z-10">
                <div className="text-sm font-medium">{selectedDate.label}</div>
                <div className="text-xs text-gray-400">
                  {selectedLayer === 'truecolor' && 'RGB Composite'}
                  {selectedLayer === 'ndvi' && `NDVI: ${selectedHistorical.ndvi.toFixed(2)}`}
                  {selectedLayer === 'moisture' && 'Soil Moisture Index'}
                </div>
              </div>
              
              {/* Risk indicator */}
              <div className="absolute top-4 right-4 glass-panel rounded-lg px-3 py-2 z-10">
                <div className="text-xs text-gray-400">Risk Score</div>
                <div className={`text-2xl font-bold ${getRiskClass(selectedHistorical.risk)}`}>
                  {selectedHistorical.risk}
                </div>
              </div>
              
              {/* Coordinates */}
              <div className="absolute bottom-4 left-4 text-xs text-white/60 z-10">
                {region.center.lat.toFixed(4)}°, {region.center.lng.toFixed(4)}°
              </div>
            </div>

            {/* Side panel */}
            <div className="space-y-4">
              {/* Same month last year */}
              <div className="glass-panel rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-2">Same Month Last Year</div>
                <div className="relative aspect-video bg-gray-900 rounded overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={getSatelliteImageUrl(region.bbox, selectedLayer)}
                    alt="Last year comparison"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
                    Risk: {historicalData[Math.max(0, selectedDateIndex - 12)]?.risk || 'N/A'}
                  </div>
                </div>
              </div>

              {/* Weather data */}
              <div className="glass-panel rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-3">Current Weather</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-red-400" />
                    <div>
                      <div className="text-sm font-medium">{region.weatherData.temp}°C</div>
                      <div className="text-[10px] text-gray-500">Temperature</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-sm font-medium">{region.weatherData.humidity}%</div>
                      <div className="text-[10px] text-gray-500">Humidity</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-yellow-400" />
                    <div>
                      <div className="text-sm font-medium">{region.weatherData.rainfall}mm</div>
                      <div className="text-[10px] text-gray-500">Rainfall (30d)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-gray-400" />
                    <div>
                      <div className="text-sm font-medium">{region.weatherData.windSpeed} km/h</div>
                      <div className="text-[10px] text-gray-500">Wind</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Period stats */}
              <div className="glass-panel rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-2">Period Analysis</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Avg NDVI</span>
                    <span className="text-green-400">{selectedHistorical.ndvi.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Cloud Cover</span>
                    <span>{Math.round(5 + selectedDateIndex % 15)}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Data Quality</span>
                    <span className="text-green-400">Good</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline scrubber */}
          <div className="space-y-3">
            {/* Play controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg hover:bg-white/20 transition"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span className="text-sm">{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              <button
                onClick={() => setSelectedDateIndex(Math.max(0, selectedDateIndex - 1))}
                className="p-1.5 bg-white/10 rounded hover:bg-white/20 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedDateIndex(Math.min(23, selectedDateIndex + 1))}
                className="p-1.5 bg-white/10 rounded hover:bg-white/20 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-sm text-gray-400">
                {selectedDate.label} • {selectedDateIndex + 1} of {timelineDates.length}
              </span>
            </div>

            {/* Timeline with risk bars */}
            <div className="relative">
              <div className="flex items-end gap-1 h-16 mb-2">
                {historicalData.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDateIndex(i)}
                    className={`flex-1 rounded-t transition-all ${
                      i === selectedDateIndex ? 'ring-2 ring-white ring-offset-1 ring-offset-black' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      height: `${(d.risk / 100) * 100}%`,
                      backgroundColor: getRiskColor(d.risk),
                      minHeight: '8px',
                    }}
                    title={`${d.label}: Risk ${d.risk}`}
                  />
                ))}
              </div>
              
              <div className="flex justify-between text-[10px] text-gray-500">
                {timelineDates.filter((_, i) => i % 4 === 0).map((d, i) => (
                  <span key={i}>{d.label}</span>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-green-500" />
                <span>Low (&lt;30)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-yellow-500" />
                <span>Elevated (30-49)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-orange-500" />
                <span>Medium (50-69)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-red-500" />
                <span>High (70+)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Risk Summary */}
          <div className="glass-panel rounded-xl p-6">
            <h2 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Risk Summary</h2>
            
            <div className="text-center mb-6">
              <div className={`text-6xl font-bold ${getRiskClass(region.currentRisk)}`}>
                {region.currentRisk}
              </div>
              <p className="text-gray-400 mt-1">Current Risk Score</p>
              
              <div className={`inline-flex items-center gap-1 mt-3 px-3 py-1 rounded-full text-sm ${
                riskChange > 0 
                  ? 'bg-red-500/20 text-red-400' 
                  : riskChange < 0 
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-white/10 text-gray-400'
              }`}>
                {riskChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {riskChange > 0 ? '+' : ''}{riskChange} vs last month
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Monitored Units</span>
                <span>{region.units}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">High Risk Units</span>
                <span className="text-red-400">{region.highRiskUnits}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Stress Onset</span>
                <span>{region.stressOnset}</span>
              </div>
            </div>
          </div>

          {/* 12-Week Trend */}
          <div className="glass-panel rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm text-gray-400 uppercase tracking-wider">12-Week Trend</h2>
              <Info className="w-4 h-4 text-gray-500" />
            </div>
            
            <div className="flex items-end gap-1 h-32">
              {region.weeklyRisk.map((risk, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div 
                    className={`w-full rounded-t ${getRiskBgClass(risk)}`}
                    style={{ height: `${(risk / maxRisk) * 100}%` }}
                  />
                  <span className="text-[8px] text-gray-500">W{i - 11}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Crop Mix */}
          <div className="glass-panel rounded-xl p-6">
            <h2 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Crop Mix & Risk</h2>
            
            <div className="space-y-4">
              {region.cropMix.map((crop) => (
                <div key={crop.crop}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{crop.crop}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">{crop.percent}%</span>
                      <span className={`font-medium ${getRiskClass(crop.risk)}`}>{crop.risk}</span>
                    </div>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getRiskBgClass(crop.risk)}`}
                      style={{ width: `${crop.risk}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Risk Units */}
          <div className="col-span-3 glass-panel rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm text-gray-400 uppercase tracking-wider">Top Risk Units</h2>
              <Link href={`/region/${id}/units`} className="text-xs text-blue-400 hover:underline">
                View all {region.units} units →
              </Link>
            </div>

            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => {
                const unitRisk = 95 - i * 5
                return (
                  <Link
                    key={i}
                    href={`/unit/hex-${id}-${i}`}
                    className="glass-panel rounded-lg p-4 hover:bg-white/5 transition"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Unit #{String(i).padStart(3, '0')}</span>
                      <span className={`text-lg font-bold ${getRiskClass(unitRisk)}`}>{unitRisk}</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-2">
                      <div 
                        className={`h-full ${getRiskBgClass(unitRisk)}`}
                        style={{ width: `${unitRisk}%` }}
                      />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <ChevronRight className="w-3 h-3" />
                      View details
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Alert Modal */}
      {showAlertModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowAlertModal(false)}>
          <div className="glass-panel rounded-xl p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-semibold mb-4">Create Alert Rule</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Alert when risk exceeds</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  defaultValue="70"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span className="text-red-400 font-medium">70</span>
                  <span>100</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Notify via</label>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm">Email</button>
                  <button className="flex-1 py-2 bg-white/5 text-gray-400 rounded-lg text-sm hover:bg-white/10">SMS</button>
                  <button className="flex-1 py-2 bg-white/5 text-gray-400 rounded-lg text-sm hover:bg-white/10">Webhook</button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowAlertModal(false)}
                className="flex-1 py-2 bg-white/5 rounded-lg text-sm hover:bg-white/10 transition"
              >
                Cancel
              </button>
              <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
                Create Alert
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
