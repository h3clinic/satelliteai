'use client';

import React, { useEffect, useState, useRef } from 'react';

interface RegionData {
  admin_code: string;
  country: string;
  crop: string;
  year: number;
  month: number;
  centroid_lat: number;
  centroid_lon: number;
  ndvi_mean: number;
  ndvi_max: number;
  ndvi_min: number;
  ndvi_p10: number;
  ndvi_p50: number;
  ndvi_p90: number;
  evi_mean: number;
  ndwi_mean: number;
  cloud_pct: number;
  scene_count: number;
  valid_pixels: number;
}

interface LabelData {
  [key: string]: {
    country: string;
    crop: string;
    centroid: [number, number];
    years: {
      [year: string]: {
        yield: number;
        stress?: number;
      };
    };
  };
}

// NDVI color scale
function ndviColor(ndvi: number): string {
  if (ndvi < 0.2) return '#8B4513';
  if (ndvi < 0.3) return '#CD853F';
  if (ndvi < 0.4) return '#DAA520';
  if (ndvi < 0.5) return '#9ACD32';
  if (ndvi < 0.6) return '#32CD32';
  if (ndvi < 0.7) return '#228B22';
  return '#006400';
}

// Generate NDVI heatmap grid
function NDVIHeatmap({ records, title }: { records: RegionData[], title: string }) {
  // Group by year and month
  const years = Array.from(new Set(records.map(r => r.year))).sort();
  const months = [10, 11, 12, 1, 2, 3, 4, 5, 6, 7]; // Growing season order
  
  const getData = (year: number, month: number) => {
    return records.find(r => r.year === year && r.month === month);
  };
  
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-sm font-semibold mb-3 text-gray-300">{title}</h3>
      <div className="overflow-x-auto">
        <table className="text-xs">
          <thead>
            <tr>
              <th className="px-2 py-1 text-gray-500">Year</th>
              {months.map(m => (
                <th key={m} className="px-1 py-1 text-gray-500 text-center">
                  {['', 'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][m]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {years.map(year => (
              <tr key={year}>
                <td className="px-2 py-1 text-gray-400">{year}</td>
                {months.map(month => {
                  const data = getData(year, month);
                  return (
                    <td key={month} className="px-1 py-1">
                      {data ? (
                        <div
                          className="w-6 h-6 rounded cursor-pointer hover:ring-2 hover:ring-white"
                          style={{ backgroundColor: ndviColor(data.ndvi_mean) }}
                          title={`${year}-${month.toString().padStart(2, '0')}\nNDVI: ${data.ndvi_mean.toFixed(3)}\nEVI: ${data.evi_mean.toFixed(3)}\nNDWI: ${data.ndwi_mean.toFixed(3)}\nCloud: ${data.cloud_pct.toFixed(1)}%`}
                        />
                      ) : (
                        <div className="w-6 h-6 rounded bg-gray-700" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// NDVI time series chart
function NDVIChart({ records }: { records: RegionData[] }) {
  const sorted = [...records].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.month - b.month;
  });
  
  const maxNdvi = Math.max(...sorted.map(r => r.ndvi_max), 1);
  const minNdvi = Math.min(...sorted.map(r => r.ndvi_min), -0.2);
  const range = maxNdvi - minNdvi;
  
  const width = 500;
  const height = 150;
  const padding = 40;
  
  const scaleX = (i: number) => padding + (i / (sorted.length - 1)) * (width - padding * 2);
  const scaleY = (v: number) => height - padding - ((v - minNdvi) / range) * (height - padding * 2);
  
  // Create path for mean line
  const meanPath = sorted.map((r, i) => 
    `${i === 0 ? 'M' : 'L'} ${scaleX(i)} ${scaleY(r.ndvi_mean)}`
  ).join(' ');
  
  // Create area for p10-p90 range
  const areaPath = sorted.map((r, i) => 
    `${i === 0 ? 'M' : 'L'} ${scaleX(i)} ${scaleY(r.ndvi_p90)}`
  ).join(' ') + 
  sorted.slice().reverse().map((r, i) => 
    `L ${scaleX(sorted.length - 1 - i)} ${scaleY(r.ndvi_p10)}`
  ).join(' ') + ' Z';
  
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40">
      {/* Background */}
      <rect width={width} height={height} fill="#1f2937" rx="8" />
      
      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map(v => (
        <g key={v}>
          <line 
            x1={padding} y1={scaleY(v)} 
            x2={width - padding} y2={scaleY(v)} 
            stroke="#374151" strokeWidth="1" 
          />
          <text x={padding - 5} y={scaleY(v) + 4} fill="#6b7280" fontSize="10" textAnchor="end">
            {v.toFixed(1)}
          </text>
        </g>
      ))}
      
      {/* P10-P90 range area */}
      <path d={areaPath} fill="#22c55e" opacity="0.2" />
      
      {/* Mean line */}
      <path d={meanPath} fill="none" stroke="#22c55e" strokeWidth="2" />
      
      {/* Data points */}
      {sorted.map((r, i) => (
        <circle 
          key={i}
          cx={scaleX(i)} 
          cy={scaleY(r.ndvi_mean)} 
          r="4"
          fill={ndviColor(r.ndvi_mean)}
          stroke="white"
          strokeWidth="1"
        >
          <title>{`${r.year}-${r.month.toString().padStart(2, '0')}: ${r.ndvi_mean.toFixed(3)}`}</title>
        </circle>
      ))}
      
      {/* Title */}
      <text x={width / 2} y={20} fill="white" fontSize="12" textAnchor="middle">
        NDVI Time Series (with P10-P90 range)
      </text>
    </svg>
  );
}

// Spectral indices comparison
function SpectralIndices({ records }: { records: RegionData[] }) {
  const avgNdvi = records.reduce((s, r) => s + r.ndvi_mean, 0) / records.length;
  const avgEvi = records.reduce((s, r) => s + r.evi_mean, 0) / records.length;
  const avgNdwi = records.reduce((s, r) => s + r.ndwi_mean, 0) / records.length;
  
  const indices = [
    { name: 'NDVI', value: avgNdvi, color: '#22c55e', desc: 'Vegetation Health' },
    { name: 'EVI', value: avgEvi, color: '#3b82f6', desc: 'Enhanced Vegetation' },
    { name: 'NDWI', value: avgNdwi, color: '#06b6d4', desc: 'Water Content' },
  ];
  
  return (
    <div className="grid grid-cols-3 gap-3">
      {indices.map(idx => (
        <div key={idx.name} className="bg-gray-800 rounded-lg p-3 text-center">
          <div className="text-xs text-gray-500 mb-1">{idx.desc}</div>
          <div className="text-2xl font-bold" style={{ color: idx.color }}>
            {idx.value.toFixed(3)}
          </div>
          <div className="text-sm text-gray-400">{idx.name}</div>
        </div>
      ))}
    </div>
  );
}

export default function CoveragePage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const [satelliteData, setSatelliteData] = useState<RegionData[]>([]);
  const [labels, setLabels] = useState<LabelData>({});
  const [loading, setLoading] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalRegions: 0,
    totalObservations: 0,
    stressRegions: 0,
    avgNdvi: 0,
    countries: {} as Record<string, number>,
  });

  // Load data
  useEffect(() => {
    async function loadData() {
      try {
        const satRes = await fetch('/api/satellite-coverage');
        const satData = await satRes.json();
        setSatelliteData(satData.records || []);

        const labelRes = await fetch('/api/training-labels');
        const labelData = await labelRes.json();
        setLabels(labelData.labels || {});

        const records = satData.records || [];
        const uniqueRegions = new Set(records.map((r: RegionData) => r.admin_code));
        const countries: Record<string, number> = {};
        let totalNdvi = 0;

        records.forEach((r: RegionData) => {
          countries[r.country] = (countries[r.country] || 0) + 1;
          totalNdvi += r.ndvi_mean;
        });

        const stressCount = Object.values(labelData.labels || {}).filter((l: any) =>
          Object.values(l.years || {}).some((y: any) => y.stress === 1)
        ).length;

        setStats({
          totalRegions: uniqueRegions.size,
          totalObservations: records.length,
          stressRegions: stressCount,
          avgNdvi: records.length > 0 ? totalNdvi / records.length : 0,
          countries,
        });

        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    }

    loadData();
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    import('maplibre-gl').then((maplibreModule) => {
      if (!document.getElementById('maplibre-css')) {
        const link = document.createElement('link');
        link.id = 'maplibre-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/maplibre-gl@4.0.0/dist/maplibre-gl.css';
        document.head.appendChild(link);
      }

      const maplibregl = maplibreModule.default;

      const map = new maplibregl.Map({
        container: mapContainer.current!,
        style: {
          version: 8,
          sources: {
            'satellite': {
              type: 'raster',
              tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
              tileSize: 256,
            },
          },
          layers: [{ id: 'satellite-layer', type: 'raster', source: 'satellite' }]
        },
        center: [-55, -15],
        zoom: 4,
      });

      map.addControl(new maplibregl.NavigationControl(), 'top-right');
      mapRef.current = { map, maplibregl };
      map.on('load', () => setMapLoaded(true));
    });

    return () => {
      if (mapRef.current?.map) {
        mapRef.current.map.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Add markers
  useEffect(() => {
    if (!mapRef.current || !mapLoaded || satelliteData.length === 0) return;

    const { map, maplibregl } = mapRef.current;
    document.querySelectorAll('.region-marker').forEach(el => el.remove());

    const regionLatest = new Map<string, RegionData>();
    satelliteData.forEach(r => {
      const key = `${r.admin_code}:${r.crop}`;
      const existing = regionLatest.get(key);
      if (!existing || (r.year > existing.year) || (r.year === existing.year && r.month > existing.month)) {
        regionLatest.set(key, r);
      }
    });

    regionLatest.forEach((region, key) => {
      const labelInfo = labels[key];
      const hasStress = labelInfo?.years && Object.values(labelInfo.years).some((y: any) => y.stress === 1);

      const el = document.createElement('div');
      el.className = 'region-marker';
      el.style.cssText = `
        width: 20px; height: 20px; border-radius: 50%;
        background: ${ndviColor(region.ndvi_mean)};
        border: 2px solid ${hasStress ? '#ef4444' : '#ffffff'};
        cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      `;
      el.onclick = () => setSelectedRegion(key);

      new maplibregl.Marker({ element: el })
        .setLngLat([region.centroid_lon, region.centroid_lat])
        .addTo(map);
    });
  }, [satelliteData, labels, mapLoaded]);

  // Get selected region data
  const getRegionRecords = (key: string) => {
    const adminCode = key.split(':')[0];
    return satelliteData.filter(r => r.admin_code === adminCode);
  };

  const selectedRecords = selectedRegion ? getRegionRecords(selectedRegion) : [];
  const selectedLabel = selectedRegion ? labels[selectedRegion] : null;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">🛰️ Satellite Data Visualization</h1>
            <p className="text-gray-400 text-sm">Real Sentinel-2 NDVI/EVI/NDWI from {stats.totalObservations} observations</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-green-400">{stats.totalRegions} regions</span>
            <span className="text-red-400">{stats.stressRegions} stress events</span>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-72px)]">
        {/* Map */}
        <div className="w-1/2 relative">
          <div ref={mapContainer} className="absolute inset-0" />
          
          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-gray-800/90 rounded-lg p-3 text-xs z-10">
            <div className="font-semibold mb-2">NDVI</div>
            <div className="flex gap-1">
              {[0.1, 0.25, 0.4, 0.55, 0.7, 0.85].map(v => (
                <div key={v} className="text-center">
                  <div className="w-5 h-5 rounded" style={{ background: ndviColor(v) }} />
                  <div className="text-gray-500 mt-1">{v.toFixed(1)}</div>
                </div>
              ))}
            </div>
          </div>

          {(loading || !mapLoaded) && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-2 rounded-full text-sm z-10">
              Loading...
            </div>
          )}
        </div>

        {/* Data Panel */}
        <div className="w-1/2 bg-gray-850 border-l border-gray-700 overflow-y-auto p-4">
          {selectedRegion && selectedRecords.length > 0 ? (
            <div className="space-y-4">
              {/* Region header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">{selectedRegion.split(':')[0]}</h2>
                  <p className="text-gray-400 text-sm">
                    {selectedLabel?.country} · {selectedLabel?.crop} · {selectedRecords.length} observations
                  </p>
                </div>
                <button onClick={() => setSelectedRegion(null)} className="text-gray-500 hover:text-white">✕</button>
              </div>

              {/* Spectral indices */}
              <SpectralIndices records={selectedRecords} />

              {/* Time series chart */}
              <div className="bg-gray-800 rounded-lg p-4">
                <NDVIChart records={selectedRecords} />
              </div>

              {/* Heatmap grid */}
              <NDVIHeatmap records={selectedRecords} title="Monthly NDVI Observations" />

              {/* Raw data table */}
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold mb-3 text-gray-300">Raw Satellite Data</h3>
                <div className="overflow-x-auto max-h-60">
                  <table className="text-xs w-full">
                    <thead className="sticky top-0 bg-gray-800">
                      <tr className="text-gray-500">
                        <th className="px-2 py-1 text-left">Date</th>
                        <th className="px-2 py-1">NDVI</th>
                        <th className="px-2 py-1">EVI</th>
                        <th className="px-2 py-1">NDWI</th>
                        <th className="px-2 py-1">Cloud%</th>
                        <th className="px-2 py-1">Pixels</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedRecords
                        .sort((a, b) => a.year === b.year ? a.month - b.month : a.year - b.year)
                        .map((r, i) => (
                        <tr key={i} className="border-t border-gray-700">
                          <td className="px-2 py-1 text-gray-300">{r.year}-{r.month.toString().padStart(2, '0')}</td>
                          <td className="px-2 py-1 text-center" style={{ color: ndviColor(r.ndvi_mean) }}>{r.ndvi_mean.toFixed(3)}</td>
                          <td className="px-2 py-1 text-center text-blue-400">{r.evi_mean.toFixed(3)}</td>
                          <td className="px-2 py-1 text-center text-cyan-400">{r.ndwi_mean.toFixed(3)}</td>
                          <td className="px-2 py-1 text-center text-gray-400">{r.cloud_pct.toFixed(1)}%</td>
                          <td className="px-2 py-1 text-center text-gray-500">{r.valid_pixels.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🛰️</div>
                <h3 className="text-xl font-semibold mb-2">Select a Region</h3>
                <p className="text-sm">Click a marker on the map to view satellite data</p>
                <div className="mt-8 grid grid-cols-2 gap-4 text-left max-w-md mx-auto">
                  <div className="bg-gray-800 rounded p-3">
                    <div className="text-2xl font-bold text-blue-400">{stats.totalRegions}</div>
                    <div className="text-xs text-gray-500">Regions</div>
                  </div>
                  <div className="bg-gray-800 rounded p-3">
                    <div className="text-2xl font-bold text-green-400">{stats.totalObservations}</div>
                    <div className="text-xs text-gray-500">Observations</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
