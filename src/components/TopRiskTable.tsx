import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import Link from 'next/link'

interface Region {
  rank: number
  country: string
  region: string
  riskScore: number
  trend: 'up' | 'down' | 'stable'
  crop: string
  change: number
}

interface TopRiskTableProps {
  regions: Region[]
}

function getRiskColor(risk: number): string {
  if (risk >= 70) return 'text-stress-red'
  if (risk >= 50) return 'text-stress-orange'
  if (risk >= 30) return 'text-stress-yellow'
  return 'text-crop-green'
}

function getRiskBg(risk: number): string {
  if (risk >= 70) return 'bg-stress-red/20'
  if (risk >= 50) return 'bg-stress-orange/20'
  if (risk >= 30) return 'bg-stress-yellow/20'
  return 'bg-crop-green/20'
}

export default function TopRiskTable({ regions }: TopRiskTableProps) {
  return (
    <div className="space-y-2">
      {regions.map((region) => (
        <Link
          key={region.rank}
          href={`/region/${region.country.toLowerCase()}-${region.region.toLowerCase().replace(' ', '-')}`}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition group"
        >
          {/* Rank */}
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${getRiskBg(region.riskScore)} ${getRiskColor(region.riskScore)}`}>
            {region.rank}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium truncate">{region.region}</span>
              <span className="text-[10px] text-gray-500">{region.country}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-gray-400">
              <span>{region.crop}</span>
            </div>
          </div>

          {/* Risk Score */}
          <div className="text-right">
            <div className={`text-sm font-bold ${getRiskColor(region.riskScore)}`}>
              {region.riskScore}
            </div>
            <div className={`flex items-center justify-end gap-0.5 text-[10px] ${
              region.trend === 'up' ? 'text-stress-red' : 
              region.trend === 'down' ? 'text-crop-green' : 'text-gray-500'
            }`}>
              {region.trend === 'up' && <TrendingUp className="w-3 h-3" />}
              {region.trend === 'down' && <TrendingDown className="w-3 h-3" />}
              {region.trend === 'stable' && <Minus className="w-3 h-3" />}
              {region.change > 0 ? '+' : ''}{region.change}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
