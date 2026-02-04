'use client';

import React, { useEffect, useState } from 'react';

interface SatelliteRecord {
  admin_code: string;
  country: string;
  crop: string;
  year: number;
  month: number;
  centroid_lat: number;
  centroid_lon: number;
  ndvi_mean: number;
  evi_mean: number;
  ndwi_mean: number;
  cloud_pct: number;
  scene_count: number;
}

// Generate a static map tile URL
function getMapTileUrl(lat: number, lon: number, zoom: number = 12): string {
  const x = Math.floor((lon + 180) / 360 * Math.pow(2, zoom));
  const y = Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
  return `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${zoom}/${y}/${x}`;
}

// ESRI export for larger area
function getAreaImageUrl(lat: number, lon: number): string {
  const size = 0.15;
  const bbox = `${lon - size},${lat - size},${lon + size},${lat + size}`;
  return `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export?bbox=${bbox}&bboxSR=4326&size=256,256&imageSR=4326&format=png&f=image`;
}

function ndviColor(ndvi: number): string {
  if (ndvi < 0.2) return '#8B4513';
  if (ndvi < 0.3) return '#CD853F';
  if (ndvi < 0.4) return '#DAA520';
  if (ndvi < 0.5) return '#9ACD32';
  if (ndvi < 0.6) return '#32CD32';
  if (ndvi < 0.7) return '#228B22';
  return '#006400';
}

export default function ImagesPage() {
  const [records, setRecords] = useState<SatelliteRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState<SatelliteRecord | null>(null);
  const [filterRegion, setFilterRegion] = useState<string>('all');

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/satellite-coverage');
        const data = await res.json();
        setRecords(data.records || []);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const regions = Array.from(new Set(records.map(r => r.admin_code))).sort();
  
  const filteredRecords = filterRegion === 'all' 
    ? records 
    : records.filter(r => r.admin_code === filterRegion);

  const sortedRecords = [...filteredRecords].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return b.month - a.month;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">🛰️</div>
          <p>Loading satellite imagery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">🛰️ Satellite Image Gallery</h1>
            <p className="text-gray-400 text-sm">
              {sortedRecords.length} observations from {regions.length} regions
            </p>
          </div>
          <select 
            value={filterRegion}
            onChange={(e) => setFilterRegion(e.target.value)}
            className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm"
          >
            <option value="all">All Regions ({regions.length})</option>
            {regions.slice(0, 50).map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {sortedRecords.slice(0, 100).map((record, idx) => (
            <div 
              key={`${record.admin_code}-${record.year}-${record.month}-${idx}`}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
              onClick={() => setSelectedRecord(record)}
            >
              <div className="relative aspect-square">
                <img 
                  src={getMapTileUrl(record.centroid_lat, record.centroid_lon, 10)}
                  alt={`${record.admin_code} satellite`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div 
                  className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-white"
                  style={{ backgroundColor: ndviColor(record.ndvi_mean) }}
                  title={`NDVI: ${record.ndvi_mean.toFixed(3)}`}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1 text-xs">
                  {record.year}-{record.month.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="p-2">
                <div className="text-sm font-medium truncate">{record.admin_code}</div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>NDVI: {record.ndvi_mean.toFixed(2)}</span>
                  <span>☁️ {record.cloud_pct.toFixed(0)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedRecord && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedRecord(null)}
        >
          <div 
            className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">{selectedRecord.admin_code}</h2>
                <p className="text-gray-400 text-sm">
                  {selectedRecord.country} · {selectedRecord.crop} · {selectedRecord.year}-{selectedRecord.month.toString().padStart(2, '0')}
                </p>
              </div>
              <button onClick={() => setSelectedRecord(null)} className="text-gray-500 hover:text-white text-2xl">✕</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 p-4">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={getAreaImageUrl(selectedRecord.centroid_lat, selectedRecord.centroid_lon)}
                    alt="Satellite imagery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 px-2 py-1 rounded text-sm">
                    📍 {selectedRecord.centroid_lat.toFixed(4)}, {selectedRecord.centroid_lon.toFixed(4)}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Spectral Indices</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>NDVI</span>
                        <span style={{ color: ndviColor(selectedRecord.ndvi_mean) }}>{selectedRecord.ndvi_mean.toFixed(3)}</span>
                      </div>
                      <div className="h-3 bg-gray-600 rounded overflow-hidden">
                        <div className="h-full rounded" style={{ width: `${Math.max(0, selectedRecord.ndvi_mean) * 100}%`, backgroundColor: ndviColor(selectedRecord.ndvi_mean) }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>EVI</span>
                        <span className="text-blue-400">{selectedRecord.evi_mean.toFixed(3)}</span>
                      </div>
                      <div className="h-3 bg-gray-600 rounded overflow-hidden">
                        <div className="h-full bg-blue-500 rounded" style={{ width: `${Math.max(0, selectedRecord.evi_mean) * 100}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>NDWI</span>
                        <span className="text-cyan-400">{selectedRecord.ndwi_mean.toFixed(3)}</span>
                      </div>
                      <div className="h-3 bg-gray-600 rounded overflow-hidden">
                        <div className="h-full bg-cyan-500 rounded" style={{ width: `${Math.max(0, (selectedRecord.ndwi_mean + 1) / 2) * 100}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Quality</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">{selectedRecord.cloud_pct.toFixed(1)}%</div>
                      <div className="text-xs text-gray-400">Cloud Cover</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">{selectedRecord.scene_count}</div>
                      <div className="text-xs text-gray-400">Scenes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
