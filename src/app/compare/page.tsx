'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowLeftRight, Calendar, Play, Pause } from 'lucide-react'

export default function ComparePage() {
  const [yearA, setYearA] = useState(2025)
  const [yearB, setYearB] = useState(2024)
  const [syncCursor, setSyncCursor] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="glass-panel border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <h1 className="text-xl font-bold">Compare Mode</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Year selectors */}
            <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
              <select 
                value={yearA}
                onChange={(e) => setYearA(Number(e.target.value))}
                className="bg-transparent px-3 py-1.5 text-sm focus:outline-none"
              >
                {[2025, 2024, 2023, 2022, 2021, 2020].map(y => (
                  <option key={y} value={y} className="bg-[#0a0a0a]">{y}</option>
                ))}
              </select>
              <ArrowLeftRight className="w-4 h-4 text-gray-500" />
              <select 
                value={yearB}
                onChange={(e) => setYearB(Number(e.target.value))}
                className="bg-transparent px-3 py-1.5 text-sm focus:outline-none"
              >
                {[2025, 2024, 2023, 2022, 2021, 2020].map(y => (
                  <option key={y} value={y} className="bg-[#0a0a0a]">{y}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setSyncCursor(!syncCursor)}
              className={`px-3 py-1.5 rounded-lg text-sm transition ${
                syncCursor 
                  ? 'bg-crop-green/20 text-crop-green border border-crop-green/30' 
                  : 'bg-white/5 text-gray-400 border border-white/10'
              }`}
            >
              Sync Cursor
            </button>
          </div>
        </div>
      </header>

      {/* Split View */}
      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Map */}
        <div className="flex-1 relative border-r border-white/10">
          <div className="absolute top-4 left-4 z-10 glass-panel rounded-lg px-4 py-2">
            <span className="text-lg font-bold">{yearA}</span>
            <span className="text-sm text-gray-400 ml-2">Current Season</span>
          </div>
          
          {/* Placeholder map */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Map View A</p>
              <p className="text-sm">{yearA} Season</p>
            </div>
          </div>

          {/* Risk indicator */}
          <div className="absolute bottom-4 left-4 glass-panel rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Avg Risk Score</p>
            <p className="text-2xl font-bold text-stress-orange">62</p>
          </div>
        </div>

        {/* Divider with controls */}
        <div className="w-12 glass-panel flex flex-col items-center justify-center gap-4">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-crop-green/20 hover:bg-crop-green/30 rounded-full transition"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <div className="w-px h-20 bg-white/20" />
          <ArrowLeftRight className="w-5 h-5 text-gray-500" />
        </div>

        {/* Right Map */}
        <div className="flex-1 relative">
          <div className="absolute top-4 left-4 z-10 glass-panel rounded-lg px-4 py-2">
            <span className="text-lg font-bold">{yearB}</span>
            <span className="text-sm text-gray-400 ml-2">Comparison Year</span>
          </div>

          {/* Placeholder map */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Map View B</p>
              <p className="text-sm">{yearB} Season</p>
            </div>
          </div>

          {/* Risk indicator */}
          <div className="absolute bottom-4 left-4 glass-panel rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Avg Risk Score</p>
            <p className="text-2xl font-bold text-crop-green">38</p>
          </div>
        </div>
      </div>

      {/* Bottom Timeline */}
      <div className="fixed bottom-0 left-0 right-0 glass-panel border-t border-white/10 px-6 py-3">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 w-16">Week 1</span>
            <div className="flex-1 h-2 bg-white/10 rounded-full">
              <div className="h-full w-3/4 bg-gradient-to-r from-crop-green to-stress-orange rounded-full" />
            </div>
            <span className="text-xs text-gray-400 w-16 text-right">Week 24</span>
          </div>
          <div className="flex justify-center mt-2">
            <span className="text-sm font-medium">Week 18 - July 15</span>
          </div>
        </div>
      </div>

      {/* Delta Summary Panel */}
      <div className="fixed bottom-16 right-6 glass-panel rounded-xl p-4 w-64">
        <h3 className="text-sm font-semibold mb-3">Year-over-Year Delta</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Risk Change</span>
            <span className="text-stress-red font-medium">+24 pts</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">High Risk Area</span>
            <span className="text-stress-red font-medium">+18%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Onset Timing</span>
            <span className="text-stress-orange font-medium">3 weeks earlier</span>
          </div>
        </div>
      </div>
    </div>
  )
}
