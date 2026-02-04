'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import maplibregl from 'maplibre-gl'
import { cropRegions, regionsToGeoJSON, getRiskColor } from '@/lib/cropRegions'
import { realFarms, getFarmRiskColor, farmTypeColors, Farm, getCropColor, cropColors } from '@/lib/realFarms'

interface GlobalMapProps {
  selectedCrop?: string | null
  weekOffset?: number
}

function farmsToGeoJSON(farms: Farm[]) {
  return {
    type: 'FeatureCollection' as const,
    features: farms.map((farm, index) => ({
      type: 'Feature' as const,
      id: index,
      properties: {
        id: farm.id,
        name: farm.name,
        type: farm.type,
        crop: farm.crop,
        country: farm.location.country,
        state: farm.location.regionName || farm.location.region || '',
        area_ha: farm.area_ha,
        risk: farm.risk,
        confidence: farm.confidence,
        ndviMean: farm.ndviMean,
        dataSource: farm.dataSource || 'model',
      },
      geometry: {
        type: 'Point' as const,
        coordinates: [farm.location.lng, farm.location.lat],
      }
    }))
  }
}

export default function GlobalMap({ selectedCrop = 'wheat' }: GlobalMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<maplibregl.Map | null>(null)
  const popup = useRef<maplibregl.Popup | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  const getFilteredRegions = useCallback(() => {
    if (!selectedCrop || selectedCrop === 'all') return cropRegions
    return cropRegions.filter(r => r.crop.toLowerCase() === selectedCrop.toLowerCase())
  }, [selectedCrop])

  const getFilteredFarms = useCallback(() => {
    if (!selectedCrop || selectedCrop === 'all') return realFarms
    return realFarms.filter(f => f.crop.toLowerCase().includes(selectedCrop.toLowerCase()))
  }, [selectedCrop])

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
        sources: {
          'carto-dark': {
            type: 'raster',
            tiles: [
              'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
              'https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
              'https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
            ],
            tileSize: 256,
            attribution: '© OpenStreetMap © CARTO',
          },
        },
        layers: [{
          id: 'carto-dark-layer',
          type: 'raster',
          source: 'carto-dark',
          minzoom: 0,
          maxzoom: 19,
        }],
      },
      center: [0, 20],
      zoom: 2,
      maxZoom: 18,
      minZoom: 1,
    })

    map.current.addControl(new maplibregl.NavigationControl(), 'top-left')

    popup.current = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
      maxWidth: '300px',
    })

    map.current.on('load', () => {
      if (!map.current) return

      // Add crop regions source and layers
      map.current.addSource('crop-regions', {
        type: 'geojson',
        data: regionsToGeoJSON(cropRegions),
      })

      map.current.addLayer({
        id: 'crop-regions-fill',
        type: 'fill',
        source: 'crop-regions',
        paint: {
          'fill-color': ['get', 'color'],
          'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.6, 0.35],
        },
      })

      map.current.addLayer({
        id: 'crop-regions-outline',
        type: 'line',
        source: 'crop-regions',
        paint: {
          'line-color': ['case', ['boolean', ['feature-state', 'hover'], false], '#ffffff', ['get', 'color']],
          'line-width': ['case', ['boolean', ['feature-state', 'hover'], false], 2.5, 1],
          'line-opacity': 0.8,
        },
      })

      // Add farms with CLUSTERING for performance
      map.current.addSource('farms', {
        type: 'geojson',
        data: farmsToGeoJSON(realFarms),
        cluster: true,
        clusterMaxZoom: 10,
        clusterRadius: 50,
      })

      // Cluster circles
      map.current.addLayer({
        id: 'farm-clusters',
        type: 'circle',
        source: 'farms',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#3b82f6',
            5, '#8b5cf6',
            10, '#f59e0b',
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            18,
            5, 24,
            10, 30,
          ],
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff',
        },
      })

      // Cluster count labels
      map.current.addLayer({
        id: 'farm-cluster-count',
        type: 'symbol',
        source: 'farms',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['Open Sans Bold'],
          'text-size': 12,
        },
        paint: {
          'text-color': '#ffffff',
        },
      })

      // Individual farm markers (circles - always visible, no font dependency)
      map.current.addLayer({
        id: 'farm-markers',
        type: 'circle',
        source: 'farms',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-radius': [
            'interpolate', ['linear'], ['zoom'],
            1, 5,
            4, 7,
            8, 10,
            12, 14
          ],
          'circle-color': [
            'case',
            ['>=', ['get', 'risk'], 70], '#ef4444',
            ['>=', ['get', 'risk'], 50], '#f97316',
            ['>=', ['get', 'risk'], 30], '#eab308',
            '#22c55e'
          ],
          'circle-stroke-width': [
            'interpolate', ['linear'], ['zoom'],
            1, 1,
            8, 2,
            12, 3
          ],
          'circle-stroke-color': [
            'match',
            ['get', 'crop'],
            'Wheat', '#f59e0b',
            'Corn', '#eab308',
            'Rice', '#84cc16',
            'Soy', '#22c55e',
            'Cotton', '#f9fafb',
            'Sorghum', '#dc2626',
            'Millet', '#a855f7',
            'Groundnut', '#92400e',
            'Sugarcane', '#10b981',
            '#ffffff'
          ],
        },
      })

      // Crop type indicator (inner dot showing crop)
      map.current.addLayer({
        id: 'farm-type-indicator',
        type: 'circle',
        source: 'farms',
        filter: ['!', ['has', 'point_count']],
        minzoom: 4,
        paint: {
          'circle-radius': [
            'interpolate', ['linear'], ['zoom'],
            4, 2,
            8, 3,
            12, 4
          ],
          'circle-color': [
            'match',
            ['get', 'crop'],
            'Wheat', '#f59e0b',
            'Corn', '#eab308',
            'Rice', '#84cc16',
            'Soy', '#22c55e',
            'Cotton', '#f9fafb',
            'Sorghum', '#dc2626',
            'Millet', '#a855f7',
            'Groundnut', '#92400e',
            'Sugarcane', '#10b981',
            '#ffffff'
          ],
        },
      })

      // Farm labels at higher zoom
      map.current.addLayer({
        id: 'farm-labels',
        type: 'symbol',
        source: 'farms',
        filter: ['!', ['has', 'point_count']],
        minzoom: 6,
        layout: {
          'text-field': ['get', 'name'],
          'text-font': ['Open Sans Regular'],
          'text-size': [
            'interpolate', ['linear'], ['zoom'],
            6, 9,
            10, 12,
          ],
          'text-offset': [0, 1.5],
          'text-anchor': 'top',
          'text-max-width': 12,
          'text-optional': true,
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': 'rgba(0,0,0,0.9)',
          'text-halo-width': 1.5,
        },
      })

      // Event handlers
      let hoveredRegionId: string | number | null = null

      // Region hover
      map.current.on('mouseenter', 'crop-regions-fill', () => {
        if (map.current) map.current.getCanvas().style.cursor = 'pointer'
      })

      map.current.on('mousemove', 'crop-regions-fill', (e) => {
        if (!map.current || !e.features || e.features.length === 0) return

        if (hoveredRegionId !== null) {
          map.current.setFeatureState({ source: 'crop-regions', id: hoveredRegionId }, { hover: false })
        }
        hoveredRegionId = e.features[0].id as string
        map.current.setFeatureState({ source: 'crop-regions', id: hoveredRegionId }, { hover: true })

        const props = e.features[0].properties
        const region = cropRegions.find(r => r.id === props.id)
        if (region && popup.current) {
          popup.current
            .setLngLat(e.lngLat)
            .setHTML(`
              <div style="background: rgba(10,10,10,0.95); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 12px; color: white; font-family: system-ui;">
                <div style="font-weight: 600; margin-bottom: 4px;">${region.name}</div>
                <div style="font-size: 11px; color: #9ca3af; margin-bottom: 8px;">${region.country}</div>
                <div style="font-size: 12px;">Risk: <span style="color: ${getRiskColor(region.risk)}; font-weight: 500;">${region.risk}%</span></div>
                <div style="font-size: 12px;">Crop: ${region.crop}</div>
                <div style="font-size: 12px;">Area: ${(region.area_ha / 1000000).toFixed(1)}M ha</div>
                <div style="font-size: 10px; color: #6b7280; margin-top: 8px;">Click for details</div>
              </div>
            `)
            .addTo(map.current)
        }
      })

      map.current.on('mouseleave', 'crop-regions-fill', () => {
        if (!map.current) return
        map.current.getCanvas().style.cursor = ''
        if (hoveredRegionId !== null) {
          map.current.setFeatureState({ source: 'crop-regions', id: hoveredRegionId }, { hover: false })
        }
        hoveredRegionId = null
        popup.current?.remove()
      })

      map.current.on('click', 'crop-regions-fill', (e) => {
        if (!e.features || e.features.length === 0) return
        const props = e.features[0].properties
        window.location.href = '/region/' + props.id
      })

      // Cluster click - zoom in
      map.current.on('click', 'farm-clusters', (e) => {
        if (!map.current || !e.features || e.features.length === 0) return
        const feature = e.features[0]
        const clusterId = feature.properties?.cluster_id
        const source = map.current.getSource('farms') as maplibregl.GeoJSONSource
        const geometry = feature.geometry as GeoJSON.Point
        
        // Use getClusterExpansionZoom with promise-style
        source.getClusterExpansionZoom(clusterId).then((zoom: number) => {
          if (!map.current) return
          map.current.easeTo({
            center: geometry.coordinates as [number, number],
            zoom: zoom || 5,
          })
        }).catch(() => {
          // Fallback zoom
          if (map.current) {
            map.current.easeTo({
              center: geometry.coordinates as [number, number],
              zoom: 5,
            })
          }
        })
      })

      // Farm marker hover
      map.current.on('mouseenter', 'farm-markers', () => {
        if (map.current) map.current.getCanvas().style.cursor = 'pointer'
      })

      map.current.on('mousemove', 'farm-markers', (e) => {
        if (!map.current || !e.features || e.features.length === 0) return

        const props = e.features[0].properties as Record<string, unknown>
        const farm = realFarms.find(f => f.id === props.id)
        
        if (farm && popup.current) {
          const area = farm.area_ha ?? 0
          const areaText = area >= 1000000 
            ? (area / 1000000).toFixed(1) + 'M ha'
            : area >= 1000 
              ? (area / 1000).toFixed(0) + 'k ha'
              : area > 0 ? area + ' ha' : 'Cooperative'

          const isModelData = farm.dataSource === 'model'
          const dataSourceBadge = isModelData
            ? '<span style="background: #22c55e20; color: #22c55e; padding: 2px 6px; border-radius: 4px; font-size: 10px;">✓ From Model</span>'
            : '<span style="background: #f9731620; color: #f97316; padding: 2px 6px; border-radius: 4px; font-size: 10px;">⚠ Simulated</span>'

          popup.current
            .setLngLat(e.lngLat)
            .setHTML(`
              <div style="background: rgba(10,10,10,0.95); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 12px; color: white; font-family: system-ui; min-width: 220px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <div style="width: 12px; height: 12px; border-radius: 50%; background: ${getFarmRiskColor(farm.risk)}; border: 2px solid ${farmTypeColors[farm.type]};"></div>
                  <span style="font-weight: 600; font-size: 14px;">${farm.name}</span>
                </div>
                <div style="font-size: 11px; color: #9ca3af; margin-bottom: 10px;">${farm.location.regionName || farm.location.region}, ${farm.location.countryName || farm.location.country}</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 12px;">
                  <div>Type: <span style="color: ${farmTypeColors[farm.type]}; text-transform: capitalize;">${farm.type}</span></div>
                  <div>Risk: <span style="color: ${getFarmRiskColor(farm.risk)}; font-weight: 600;">${farm.risk}%</span></div>
                  <div>Crop: ${farm.crop}</div>
                  <div>Area: ${areaText}</div>
                  <div>NDVI: <span style="color: #22c55e;">${farm.ndviMean?.toFixed(3) || 'N/A'}</span></div>
                  <div>Conf: <span style="color: #60a5fa;">${farm.confidence}%</span></div>
                </div>
                <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
                  ${dataSourceBadge}
                  <span style="font-size: 10px; color: #6b7280;">Click for details</span>
                </div>
              </div>
            `)
            .addTo(map.current)
        }
      })

      map.current.on('mouseleave', 'farm-markers', () => {
        if (!map.current) return
        map.current.getCanvas().style.cursor = ''
        popup.current?.remove()
      })

      map.current.on('click', 'farm-markers', (e) => {
        if (!e.features || e.features.length === 0) return
        const props = e.features[0].properties as Record<string, unknown>
        window.location.href = '/unit/' + props.id
      })

      // Cluster hover
      map.current.on('mouseenter', 'farm-clusters', () => {
        if (map.current) map.current.getCanvas().style.cursor = 'pointer'
      })
      
      map.current.on('mouseleave', 'farm-clusters', () => {
        if (map.current) map.current.getCanvas().style.cursor = ''
      })

      setMapLoaded(true)
    })

    return () => {
      popup.current?.remove()
      map.current?.remove()
      map.current = null
    }
  }, [])

  useEffect(() => {
    if (!map.current || !mapLoaded) return
    
    const regionsSource = map.current.getSource('crop-regions') as maplibregl.GeoJSONSource
    if (regionsSource) regionsSource.setData(regionsToGeoJSON(getFilteredRegions()))
    
    const farmsSource = map.current.getSource('farms') as maplibregl.GeoJSONSource
    if (farmsSource) farmsSource.setData(farmsToGeoJSON(getFilteredFarms()))
  }, [selectedCrop, mapLoaded, getFilteredRegions, getFilteredFarms])

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 glass-panel rounded-lg p-3 z-10 max-w-[220px]">
        <div className="text-xs font-semibold mb-2 text-gray-300">NDVI Anomaly Severity</div>
        <div className="space-y-1">
          {[
            { color: '#ef4444', label: 'Severe Deficit (70%+)' },
            { color: '#f97316', label: 'Moderate Deficit (50-69%)' },
            { color: '#eab308', label: 'Slight Deficit (30-49%)' },
            { color: '#22c55e', label: 'Normal (<30%)' },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-4 h-3 rounded-full" style={{ background: color }} />
              <span className="text-[10px] text-gray-400">{label}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-3 pt-2 border-t border-white/10">
          <div className="text-xs font-semibold mb-2 text-gray-300">Crop Type (border color)</div>
          <div className="grid grid-cols-2 gap-1">
            {[
              { color: '#f59e0b', type: 'Wheat' },
              { color: '#eab308', type: 'Corn' },
              { color: '#84cc16', type: 'Rice' },
              { color: '#22c55e', type: 'Soy' },
              { color: '#f9fafb', type: 'Cotton' },
              { color: '#dc2626', type: 'Sorghum' },
              { color: '#a855f7', type: 'Millet' },
              { color: '#92400e', type: 'Groundnut' },
              { color: '#10b981', type: 'Sugarcane' },
              { color: '#fb923c', type: 'Mango' },
              { color: '#f97316', type: 'Orange' },
              { color: '#fde047', type: 'Banana' },
              { color: '#ef4444', type: 'Apple' },
              { color: '#7c3aed', type: 'Grape' },
              { color: '#78350f', type: 'Coffee' },
              { color: '#451a03', type: 'Cocoa' },
            ].map(({ color, type }) => (
              <div key={type} className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: color, background: 'rgba(255,255,255,0.1)' }} />
                <span className="text-[9px] text-gray-400">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-30" />
    </div>
  )
}
