'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useRef, useState, useMemo } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { ArrowLeft, MapPin, Play, Pause, ChevronLeft, ChevronRight, AlertTriangle, Layers } from 'lucide-react'
import { getFarmById, getCropColor, getFarmRiskColor } from '@/lib/realFarms'

const YEARS = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// NASA GIBS NDVI layer - real vegetation data!
// Available from 2012-present, 8-day composites
function getGibsNdviTileUrl(date: string) {
  // Format: YYYY-MM-DD
  return `https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_NDVI_8Day/default/${date}/GoogleMapsCompatible_Level9/{z}/{y}/{x}.png`
}

// Get the nearest valid GIBS date (8-day composites)
function getValidGibsDate(year: number, month: number): string {
  // GIBS NDVI is available in 8-day composites
  // Use middle of month as representative date
  const day = 15
  // Cap at current date for future dates
  const now = new Date()
  const targetDate = new Date(year, month, day)
  if (targetDate > now) {
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-01`
  }
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function getNdviColor(ndvi: number): string {
  if (ndvi >= 0.7) return '#006400'
  if (ndvi >= 0.5) return '#228B22'
  if (ndvi >= 0.35) return '#9ACD32'
  if (ndvi >= 0.2) return '#DAA520'
  return '#CD5C5C'
}

export default function UnitPage() {
  const { id } = useParams()
  const farm = getFarmById(id as string)
  
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  
  const [frameIndex, setFrameIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedYear, setSelectedYear] = useState(2024)
  const [showNdviLayer, setShowNdviLayer] = useState(true)
  
  const frames = useMemo(() => {
    if (!farm) return []
    const result: { year: number; monthNum: number; month: string; ndvi: number; date: string; gibsDate: string }[] = []
    for (const year of YEARS) {
      const count = year === 2026 ? 2 : 12
      for (let m = 0; m < count; m++) {
        const seasonal = Math.sin((m - 3) * Math.PI / 6) * 0.15
        const ndvi = Math.max(0.15, Math.min(0.8, farm.ndviMean + seasonal + (Math.random() - 0.5) * 0.1))
        result.push({ 
          year, 
          monthNum: m,
          month: MONTHS[m], 
          ndvi, 
          date: `${MONTHS[m]} ${year}`,
          gibsDate: getValidGibsDate(year, m)
        })
      }
    }
    return result
  }, [farm])
  
  const currentFrame = frames[frameIndex]
  const yearFrames = frames.filter(f => f.year === selectedYear)

  // Initialize map with Sentinel-2 cloudless + NDVI overlay
  useEffect(() => {
    if (!mapContainer.current || !farm) return
    if (mapRef.current) {
      mapRef.current.remove()
      mapRef.current = null
    }
    
    const initialDate = getValidGibsDate(selectedYear, 6) // July of selected year
    
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          // Base: Sentinel-2 cloudless mosaic (real satellite imagery)
          'sentinel-cloudless': {
            type: 'raster',
            tiles: [
              'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2020_3857/default/GoogleMapsCompatible/{z}/{y}/{x}.jpg'
            ],
            tileSize: 256,
            maxzoom: 14,
            attribution: '© EOX, Sentinel-2 cloudless 2020'
          },
          // NDVI overlay: NASA GIBS MODIS (real vegetation data with time!)
          'ndvi-layer': {
            type: 'raster',
            tiles: [
              getGibsNdviTileUrl(initialDate)
            ],
            tileSize: 256,
            maxzoom: 9,
            attribution: '© NASA GIBS MODIS NDVI'
          }
        },
        layers: [
          {
            id: 'sentinel-base',
            type: 'raster',
            source: 'sentinel-cloudless',
            minzoom: 0,
            maxzoom: 14
          },
          {
            id: 'ndvi-overlay',
            type: 'raster',
            source: 'ndvi-layer',
            minzoom: 0,
            maxzoom: 9,
            paint: {
              'raster-opacity': 0.7
            }
          }
        ]
      },
      center: [farm.location.lng, farm.location.lat],
      zoom: 8,
      minZoom: 3,
      maxZoom: 14
    })

    map.addControl(new maplibregl.NavigationControl(), 'top-left')
    
    map.on('load', () => {
      new maplibregl.Marker({ color: getFarmRiskColor(farm.risk) })
        .setLngLat([farm.location.lng, farm.location.lat])
        .addTo(map)
    })

    mapRef.current = map
    return () => { 
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [farm, selectedYear])

  // Update NDVI layer when timeline frame changes
  useEffect(() => {
    if (!mapRef.current || !currentFrame) return
    const map = mapRef.current
    
    // Update NDVI tiles for the current date
    const source = map.getSource('ndvi-layer') as maplibregl.RasterTileSource
    if (source && source.setTiles) {
      source.setTiles([getGibsNdviTileUrl(currentFrame.gibsDate)])
    }
  }, [currentFrame])

  // Toggle NDVI layer visibility
  useEffect(() => {
    if (!mapRef.current) return
    const map = mapRef.current
    if (map.getLayer('ndvi-overlay')) {
      map.setLayoutProperty('ndvi-overlay', 'visibility', showNdviLayer ? 'visible' : 'none')
    }
  }, [showNdviLayer])

  useEffect(() => {
    if (!isPlaying || frames.length === 0) return
    const interval = setInterval(() => {
      setFrameIndex(prev => prev >= frames.length - 1 ? 0 : prev + 1)
    }, 800) // Slower for better NDVI loading
    return () => clearInterval(interval)
  }, [isPlaying, frames])
  
  if (!farm) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Region Not Found</h1>
          <Link href="/" className="px-4 py-2 bg-green-600 rounded-lg">← Back</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="glass-panel border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-3">
            <ArrowLeft className="w-4 h-4" /> Back to Global Map
          </Link>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-5 rounded-full" style={{ backgroundColor: getFarmRiskColor(farm.risk) }} />
                <h1 className="text-2xl font-bold">{farm.name}</h1>
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `${getCropColor(farm.crop)}20`, color: getCropColor(farm.crop) }}>{farm.crop}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{farm.location.lat.toFixed(3)}°, {farm.location.lng.toFixed(3)}°</span>
                <span>{farm.location.countryName}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400 mb-1">Risk Score</div>
              <div className="text-2xl font-bold" style={{ color: getFarmRiskColor(farm.risk) }}>{farm.risk}</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {/* Map Container */}
            <div className="rounded-xl overflow-hidden bg-gray-800 relative" style={{ height: '450px' }}>
              <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
              
              {/* Layer Toggle */}
              <div className="absolute top-3 right-3 glass-panel rounded-lg p-2">
                <button
                  onClick={() => setShowNdviLayer(!showNdviLayer)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs transition-colors ${
                    showNdviLayer ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-white/10 text-gray-400'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  NDVI Overlay
                </button>
              </div>
              
              {/* Current Date Badge */}
              <div className="absolute top-3 left-14 glass-panel rounded-lg px-3 py-2">
                <div className="text-xs text-gray-400">Viewing</div>
                <div className="text-sm font-bold text-white">{currentFrame?.date}</div>
                <div className="text-[10px] text-gray-500">NASA MODIS NDVI</div>
              </div>
              
              {/* NDVI Legend */}
              {showNdviLayer && (
                <div className="absolute bottom-3 right-3 glass-panel rounded-lg p-2 text-xs">
                  <div className="text-gray-400 mb-1">NDVI (Vegetation)</div>
                  <div className="flex gap-0.5">
                    <div className="w-4 h-3 bg-yellow-700" title="Bare/Sparse" />
                    <div className="w-4 h-3 bg-yellow-500" title="Low" />
                    <div className="w-4 h-3 bg-lime-500" title="Moderate" />
                    <div className="w-4 h-3 bg-green-500" title="Healthy" />
                    <div className="w-4 h-3 bg-green-700" title="Dense" />
                  </div>
                  <div className="flex justify-between text-[9px] text-gray-500 mt-0.5">
                    <span>Low</span>
                    <span>High</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Timeline Controls */}
            <div className="glass-panel rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-xs text-gray-400">Estimated NDVI</div>
                  <div className="text-2xl font-bold" style={{ color: getNdviColor(currentFrame?.ndvi || 0) }}>{currentFrame?.ndvi?.toFixed(3) || '---'}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Date</div>
                  <div className="text-lg font-semibold">{currentFrame?.date}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gray-400">Year:</span>
                <div className="flex gap-1 flex-wrap">
                  {YEARS.map(year => (
                    <button key={year} onClick={() => { setSelectedYear(year); setFrameIndex(frames.findIndex(f => f.year === year)) }} className={`px-2 py-1 rounded text-xs ${selectedYear === year ? 'bg-blue-500 text-white font-bold' : 'bg-white/10 text-gray-300'}`}>{year}</button>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-1 mb-3 overflow-x-auto pb-2">
                {yearFrames.map((frame, i) => {
                  const globalIdx = frames.findIndex(f => f.year === frame.year && f.month === frame.month)
                  return (
                    <div key={i} className={`flex-shrink-0 flex flex-col items-center p-2 rounded-lg ${globalIdx === frameIndex ? 'bg-white/20 ring-2 ring-blue-500' : 'bg-white/5'}`}>
                      <div className="w-8 h-8 rounded mb-1" style={{ backgroundColor: getNdviColor(frame.ndvi) }} />
                      <span className="text-[10px] text-gray-400">{frame.month}</span>
                    </div>
                  )
                })}
              </div>
              
              <div className="flex items-center gap-3">
                <button onClick={() => setIsPlaying(!isPlaying)} className="p-2.5 rounded-full bg-blue-500 hover:bg-blue-600">{isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}</button>
                <button onClick={() => setFrameIndex(Math.max(0, frameIndex - 1))} disabled={frameIndex === 0} className="p-1.5 rounded hover:bg-white/20 disabled:opacity-30"><ChevronLeft className="w-5 h-5" /></button>
                <input type="range" min={0} max={frames.length - 1} value={frameIndex} onChange={e => setFrameIndex(+e.target.value)} className="flex-1 accent-blue-500" />
                <button onClick={() => setFrameIndex(Math.min(frames.length - 1, frameIndex + 1))} disabled={frameIndex === frames.length - 1} className="p-1.5 rounded hover:bg-white/20 disabled:opacity-30"><ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-5">
              <h3 className="text-sm font-semibold mb-3">NDVI Time Series (2018-2026)</h3>
              <div className="h-32 flex items-end gap-0.5">
                {frames.map((f, i) => (
                  <div key={i} onClick={() => { setFrameIndex(i); setSelectedYear(f.year) }} className={`flex-1 cursor-pointer transition-all ${i === frameIndex ? 'ring-2 ring-blue-500' : ''}`} style={{ height: `${f.ndvi * 100}%`, backgroundColor: getNdviColor(f.ndvi), opacity: f.year === selectedYear ? 1 : 0.4 }} title={`${f.date}: ${f.ndvi.toFixed(3)}`} />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-gray-500">
                {YEARS.map(y => <span key={y}>{y}</span>)}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="glass-panel rounded-xl p-5">
              <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-4">Current Observation</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">NDVI Value</span>
                  <span className="text-2xl font-bold" style={{ color: getNdviColor(currentFrame?.ndvi || 0) }}>{currentFrame?.ndvi?.toFixed(3) || '---'}</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Date</span>
                  <span>{currentFrame?.date || '---'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Frame</span>
                  <span>{frameIndex + 1} / {frames.length}</span>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-5">
              <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-4">Farm Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-400">Crop</span><span style={{ color: getCropColor(farm.crop) }}>{farm.crop}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Risk</span><span style={{ color: getFarmRiskColor(farm.risk) }}>{farm.risk}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Confidence</span><span>{farm.confidence}%</span></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
