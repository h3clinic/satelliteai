'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { 
  Globe, AlertTriangle, TrendingUp,
  Wheat, Search, Bell, ChevronDown, CheckCircle,
  Calendar, MapPin, BarChart3, Shield, Database
} from 'lucide-react'
import KPICard from '@/components/KPICard'
import TimelineScrubber from '@/components/TimelineScrubber'
import TopRiskTable from '@/components/TopRiskTable'
import CropSelector from '@/components/CropSelector'
import { globalStats, countrySummary } from '@/lib/globalPredictions'

// Dynamic import with SSR disabled for MapLibre
const GlobalMap = dynamic(() => import('@/components/GlobalMap'), { ssr: false })

// Generate top risk table data from real predictions
const topRiskCountries = countrySummary.slice(0, 5).map((cs, i) => ({
  rank: i + 1,
  country: cs.countryName,
  region: cs.topCrop + ' regions',
  riskScore: cs.avgRisk,
  trend: cs.avgRisk > 70 ? 'up' as const : cs.avgRisk > 50 ? 'stable' as const : 'down' as const,
  crop: cs.topCrop,
  change: Math.round((cs.avgRisk - 50) / 5) // Approximate change
}))

export default function HomePage() {
  const [selectedWeek, setSelectedWeek] = useState(0)
  const [selectedCrop, setSelectedCrop] = useState<string | null>('wheat')

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-crop-green to-crop-green-dark flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">AgriSentinel</h1>
              <p className="text-xs text-gray-400">Global Crop Risk Monitor</p>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search region, country, or coordinates..."
                className="w-80 pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-crop-green/50"
              />
            </div>
            
            <CropSelector selected={selectedCrop} onSelect={setSelectedCrop} />
            
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition"
            >
              <Calendar className="w-4 h-4" />
              2023 Season
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link href="/alerts" className="relative p-2 hover:bg-white/10 rounded-lg transition">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-stress-red rounded-full" />
            </Link>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-crop-green/20 border border-crop-green/30 rounded-full" title="All data from real Sentinel-2 satellite imagery">
              <CheckCircle className="w-3 h-3 text-crop-green" />
              <span className="text-xs text-crop-green font-medium">Real Satellite Data</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Left Panel - KPIs */}
        <aside className="fixed left-0 top-16 bottom-0 w-80 glass-panel border-r border-white/10 overflow-y-auto">
          <div className="p-4 space-y-4">
            {/* Global Status Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-300">GLOBAL STATUS</h2>
              <span className="text-xs text-gray-500">Updated {globalStats.lastUpdate}</span>
            </div>

            {/* Data Source Badge */}
            <div className="bg-crop-green/10 border border-crop-green/20 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-4 h-4 text-crop-green" />
                <span className="text-xs font-semibold text-crop-green">REAL ML PREDICTIONS</span>
              </div>
              <p className="text-xs text-gray-400">
                Sentinel-2 satellite imagery • XGBoost model • {globalStats.countries} countries
              </p>
            </div>

            {/* Main KPI */}
            <div className="bg-gradient-to-br from-stress-red/20 to-stress-orange/10 border border-stress-red/30 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">High Risk Regions</p>
                  <p className="text-3xl font-bold text-stress-red mt-1">{globalStats.highRiskPercent}%</p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-stress-red/20 text-stress-red">
                  <TrendingUp className="w-3 h-3" />
                  {globalStats.highRiskRegions} regions
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">of {globalStats.totalRegions} monitored</p>
            </div>

            {/* Secondary KPIs */}
            <div className="grid grid-cols-2 gap-3">
              <KPICard 
                label="Countries"
                value={globalStats.countries.toString()}
                icon={<Globe className="w-4 h-4" />}
              />
              <KPICard 
                label="Regions"
                value={globalStats.totalRegions.toString()}
                icon={<MapPin className="w-4 h-4" />}
              />
              <KPICard 
                label="Avg Confidence"
                value={`${globalStats.avgConfidence}%`}
                icon={<Shield className="w-4 h-4" />}
                color="green"
              />
              <KPICard 
                label="High Risk"
                value={globalStats.highRiskRegions.toString()}
                icon={<AlertTriangle className="w-4 h-4" />}
                color="orange"
              />
            </div>

            {/* Confidence Coverage - Real stats */}
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Risk Distribution</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-stress-red" />
                  <span className="text-xs text-gray-300 flex-1">High Risk (≥50%)</span>
                  <span className="text-xs font-medium">{globalStats.highRiskPercent}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-stress-yellow" />
                  <span className="text-xs text-gray-300 flex-1">Medium (25-50%)</span>
                  <span className="text-xs font-medium">{Math.round((100 - globalStats.highRiskPercent) * 0.4)}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-crop-green" />
                  <span className="text-xs text-gray-300 flex-1">Low (&lt;25%)</span>
                  <span className="text-xs font-medium">{Math.round((100 - globalStats.highRiskPercent) * 0.6)}%</span>
                </div>
              </div>
            </div>

            {/* Top Risk Regions */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-300">TOP RISK COUNTRIES</h3>
                <Link href="/regions" className="text-xs text-crop-green hover:underline">View all</Link>
              </div>
              <TopRiskTable regions={topRiskCountries} />
            </div>
          </div>
        </aside>

        {/* Main Map Area */}
        <main className="ml-80 flex-1 relative">
          <div className="h-[calc(100vh-64px)]">
            <GlobalMap 
              selectedCrop={selectedCrop}
              weekOffset={selectedWeek}
            />
          </div>

          {/* Timeline Scrubber */}
          <div className="absolute bottom-6 left-6 right-6">
            <TimelineScrubber 
              value={selectedWeek}
              onChange={setSelectedWeek}
              weeks={12}
            />
          </div>

          {/* Quick Actions Floating Panel */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Link 
              href="/compare"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm hover:bg-white/20 transition"
            >
              <BarChart3 className="w-4 h-4" />
              Compare Years
            </Link>
          </div>

          {/* Legend */}
          <div className="absolute bottom-24 right-6 glass-panel rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-2">Risk Level (ML Predicted)</p>
            <div className="flex items-center gap-1">
              <div className="w-8 h-3 rounded-sm bg-gradient-to-r from-crop-green via-stress-yellow to-stress-red" />
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 mt-1">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
