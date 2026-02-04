'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, Bell, Plus, Trash2, Settings, Mail, 
  MessageSquare, Webhook, AlertTriangle, TrendingUp,
  Check, X, ChevronRight
} from 'lucide-react'

const mockAlerts = [
  {
    id: 1,
    name: 'Kansas Wheat Watch',
    region: 'Kansas, USA',
    crop: 'Wheat',
    threshold: 70,
    confidence: 60,
    delivery: ['email'],
    status: 'active',
    lastTriggered: '2 hours ago',
    triggeredCount: 3,
  },
  {
    id: 2,
    name: 'Brazil Soy Monitor',
    region: 'Mato Grosso, Brazil',
    crop: 'Soybean',
    threshold: 65,
    confidence: 50,
    delivery: ['email', 'webhook'],
    status: 'active',
    lastTriggered: '1 day ago',
    triggeredCount: 7,
  },
  {
    id: 3,
    name: 'Global Corn Alert',
    region: 'Global',
    crop: 'Corn',
    threshold: 80,
    confidence: 70,
    delivery: ['email', 'sms'],
    status: 'paused',
    lastTriggered: 'Never',
    triggeredCount: 0,
  },
]

const recentAlertEvents = [
  { id: 1, alert: 'Kansas Wheat Watch', event: 'Risk crossed 70 in Riley County', time: '2 hours ago', severity: 'high' },
  { id: 2, alert: 'Brazil Soy Monitor', event: 'Risk increased 12 pts in Nova Mutum', time: '6 hours ago', severity: 'medium' },
  { id: 3, alert: 'Kansas Wheat Watch', event: 'Confidence increased to 82%', time: '1 day ago', severity: 'info' },
  { id: 4, alert: 'Brazil Soy Monitor', event: 'New high-risk area detected', time: '2 days ago', severity: 'high' },
]

export default function AlertsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Map
            </Link>
            <h1 className="text-3xl font-bold">Alert Center</h1>
            <p className="text-gray-400 mt-1">Manage your crop risk notifications</p>
          </div>

          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-crop-green text-white rounded-lg hover:bg-crop-green-dark transition"
          >
            <Plus className="w-4 h-4" />
            Create Alert
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Active Alerts */}
          <div className="col-span-2 space-y-4">
            <h2 className="text-sm text-gray-400 uppercase tracking-wider">Your Alerts</h2>

            {mockAlerts.map((alert) => (
              <div key={alert.id} className="glass-panel rounded-xl p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      alert.status === 'active' ? 'bg-crop-green/20' : 'bg-white/10'
                    }`}>
                      <Bell className={`w-5 h-5 ${alert.status === 'active' ? 'text-crop-green' : 'text-gray-500'}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{alert.name}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          alert.status === 'active' 
                            ? 'bg-crop-green/20 text-crop-green' 
                            : 'bg-white/10 text-gray-400'
                        }`}>
                          {alert.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{alert.region} • {alert.crop}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition">
                      <Settings className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition">
                      <Trash2 className="w-4 h-4 text-gray-400 hover:text-stress-red" />
                    </button>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-gray-500">Threshold: </span>
                      <span className="font-medium text-stress-red">{alert.threshold}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Min confidence: </span>
                      <span className="font-medium">{alert.confidence}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {alert.delivery.includes('email') && <Mail className="w-4 h-4 text-gray-400" />}
                      {alert.delivery.includes('sms') && <MessageSquare className="w-4 h-4 text-gray-400" />}
                      {alert.delivery.includes('webhook') && <Webhook className="w-4 h-4 text-gray-400" />}
                    </div>
                  </div>

                  <div className="text-right text-sm">
                    <p className="text-gray-500">Triggered {alert.triggeredCount} times</p>
                    <p className="text-xs text-gray-600">Last: {alert.lastTriggered}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Events */}
          <div>
            <h2 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Recent Events</h2>

            <div className="glass-panel rounded-xl divide-y divide-white/10">
              {recentAlertEvents.map((event) => (
                <div key={event.id} className="p-3 hover:bg-white/5 transition">
                  <div className="flex items-start gap-2">
                    <div className={`w-2 h-2 rounded-full mt-1.5 ${
                      event.severity === 'high' ? 'bg-stress-red' :
                      event.severity === 'medium' ? 'bg-stress-orange' : 'bg-crop-green'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400">{event.alert}</p>
                      <p className="text-sm truncate">{event.event}</p>
                      <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly Digest */}
            <div className="mt-6 glass-panel rounded-xl p-4">
              <h3 className="text-sm font-semibold mb-3">Weekly Digest</h3>
              <p className="text-sm text-gray-400 mb-3">
                Get a summary of all risk changes every Monday morning.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm">Enabled</span>
                <button className="w-12 h-6 bg-crop-green rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </button>
              </div>
            </div>

            {/* Sensitivity Guide */}
            <div className="mt-6 glass-panel rounded-xl p-4">
              <h3 className="text-sm font-semibold mb-3">Alert Sensitivity</h3>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center justify-between">
                  <span>Conservative (80+)</span>
                  <span className="text-crop-green">Few alerts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Balanced (65-79)</span>
                  <span className="text-stress-yellow">Moderate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Aggressive (&lt;65)</span>
                  <span className="text-stress-red">Many alerts</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Based on 51% recall @ 10% FPR operating point from our validation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Create Alert Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowCreateModal(false)}>
          <div className="glass-panel rounded-xl p-6 w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-6">Create New Alert</h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Alert Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., Kansas Wheat Watch"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-crop-green/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Region</label>
                  <select className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none">
                    <option>Global</option>
                    <option>United States</option>
                    <option>Brazil</option>
                    <option>India</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Crop</label>
                  <select className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none">
                    <option>All Crops</option>
                    <option>Corn</option>
                    <option>Wheat</option>
                    <option>Soybean</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Risk Threshold</label>
                <input type="range" min="0" max="100" defaultValue="70" className="w-full" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0 (alert often)</span>
                  <span className="text-stress-red font-medium">70</span>
                  <span>100 (rarely)</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Minimum Confidence</label>
                <input type="range" min="0" max="100" defaultValue="60" className="w-full" />
                <p className="text-xs text-gray-500 mt-1">Only alert when confidence ≥ this value</p>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Notification Method</label>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-crop-green/20 text-crop-green border border-crop-green/30 rounded-lg">
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 text-gray-400 border border-white/10 rounded-lg hover:bg-white/10">
                    <MessageSquare className="w-4 h-4" />
                    SMS
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 text-gray-400 border border-white/10 rounded-lg hover:bg-white/10">
                    <Webhook className="w-4 h-4" />
                    Webhook
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowCreateModal(false)}
                className="flex-1 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition"
              >
                Cancel
              </button>
              <button className="flex-1 py-2 bg-crop-green text-white rounded-lg hover:bg-crop-green-dark transition">
                Create Alert
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
