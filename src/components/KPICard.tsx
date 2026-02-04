import { ReactNode } from 'react'

interface KPICardProps {
  label: string
  value: string
  icon: ReactNode
  color?: 'default' | 'green' | 'orange' | 'red'
}

export default function KPICard({ label, value, icon, color = 'default' }: KPICardProps) {
  const colorClasses = {
    default: 'text-white',
    green: 'text-crop-green',
    orange: 'text-stress-orange',
    red: 'text-stress-red',
  }

  return (
    <div className="bg-white/5 rounded-xl p-3">
      <div className="flex items-center gap-2 text-gray-400 mb-1">
        {icon}
        <span className="text-[10px] uppercase tracking-wider">{label}</span>
      </div>
      <p className={`text-lg font-bold ${colorClasses[color]}`}>{value}</p>
    </div>
  )
}
