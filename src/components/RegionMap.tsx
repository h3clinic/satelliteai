'use client'

import { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'

interface RegionMapProps {
  center: { lat: number; lng: number }
  bbox: number[]
  regionName: string
  risk: number
  selectedLayer: 'truecolor' | 'ndvi' | 'moisture'
}

export default function RegionMap({ center, bbox, regionName, risk, selectedLayer }: RegionMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<maplibregl.Map | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    // Calculate zoom level from bbox
    const [minLng, minLat, maxLng, maxLat] = bbox
    const lngDiff = maxLng - minLng
    const latDiff = maxLat - minLat
    const maxDiff = Math.max(lngDiff, latDiff)
    const zoom = Math.max(4, Math.min(10, Math.log2(360 / maxDiff) - 1))

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
        sources: {
          // Satellite base layer from ESRI
          'esri-satellite': {
            type: 'raster',
            tiles: [
              'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            ],
            tileSize: 256,
            attribution: '© Esri, Maxar, Earthstar Geographics',
            maxzoom: 18,
          },
          // Sentinel-2 cloudless for comparison
          'sentinel-cloudless': {
            type: 'raster',
            tiles: [
              'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2020_3857/default/GoogleMapsCompatible/{z}/{y}/{x}.jpg'
            ],
            tileSize: 256,
            attribution: '© EOX, Sentinel-2 cloudless',
            maxzoom: 14,
          },
          // OpenStreetMap for labels
          'osm-labels': {
            type: 'raster',
            tiles: [
              'https://a.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}@2x.png'
            ],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: 'satellite-layer',
            type: 'raster',
            source: 'esri-satellite',
            minzoom: 0,
            maxzoom: 18,
          },
          {
            id: 'labels-layer',
            type: 'raster',
            source: 'osm-labels',
            minzoom: 0,
            maxzoom: 18,
            paint: {
              'raster-opacity': 0.8,
            },
          },
        ],
      },
      center: [center.lng, center.lat],
      zoom: zoom,
      maxZoom: 16,
      minZoom: 3,
    })

    map.current.addControl(new maplibregl.NavigationControl(), 'top-left')
    map.current.addControl(new maplibregl.ScaleControl({ maxWidth: 200 }), 'bottom-right')

    map.current.on('load', () => {
      if (!map.current) return

      // Add region boundary
      map.current.addSource('region-boundary', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: { name: regionName },
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [minLng, minLat],
              [maxLng, minLat],
              [maxLng, maxLat],
              [minLng, maxLat],
              [minLng, minLat],
            ]],
          },
        },
      })

      // Add boundary outline
      map.current.addLayer({
        id: 'region-boundary-outline',
        type: 'line',
        source: 'region-boundary',
        paint: {
          'line-color': risk >= 70 ? '#ef4444' : risk >= 50 ? '#f97316' : risk >= 30 ? '#eab308' : '#22c55e',
          'line-width': 3,
          'line-dasharray': [2, 2],
        },
      })

      // Add sample stress hotspots (simulated points within the region)
      const hotspots: GeoJSON.Feature<GeoJSON.Point>[] = []
      for (let i = 0; i < 15; i++) {
        const lng = minLng + Math.random() * (maxLng - minLng)
        const lat = minLat + Math.random() * (maxLat - minLat)
        const spotRisk = Math.random() * 100
        hotspots.push({
          type: 'Feature',
          properties: { risk: spotRisk, id: i },
          geometry: { type: 'Point', coordinates: [lng, lat] },
        })
      }

      map.current.addSource('stress-hotspots', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: hotspots } as GeoJSON.FeatureCollection,
      })

      // Add heatmap layer for stress visualization
      map.current.addLayer({
        id: 'stress-heatmap',
        type: 'heatmap',
        source: 'stress-hotspots',
        maxzoom: 12,
        paint: {
          'heatmap-weight': ['/', ['get', 'risk'], 100],
          'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 4, 1, 12, 3],
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(0, 0, 0, 0)',
            0.2, 'rgba(34, 197, 94, 0.3)',
            0.4, 'rgba(234, 179, 8, 0.4)',
            0.6, 'rgba(249, 115, 22, 0.5)',
            0.8, 'rgba(239, 68, 68, 0.6)',
            1, 'rgba(220, 38, 38, 0.8)',
          ],
          'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 4, 30, 12, 50],
          'heatmap-opacity': 0.7,
        },
      })

      // Add circle markers for individual hotspots at higher zoom
      map.current.addLayer({
        id: 'stress-points',
        type: 'circle',
        source: 'stress-hotspots',
        minzoom: 8,
        paint: {
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 8, 6, 14, 15],
          'circle-color': [
            'case',
            ['>=', ['get', 'risk'], 70], '#ef4444',
            ['>=', ['get', 'risk'], 50], '#f97316',
            ['>=', ['get', 'risk'], 30], '#eab308',
            '#22c55e'
          ],
          'circle-opacity': 0.8,
          'circle-stroke-width': 2,
          'circle-stroke-color': 'white',
        },
      })

      setMapLoaded(true)
    })

    return () => {
      map.current?.remove()
      map.current = null
    }
  }, [center, bbox, regionName, risk])

  // Update layer based on selection
  useEffect(() => {
    if (!map.current || !mapLoaded) return

    const satellite = map.current.getLayer('satellite-layer')
    const heatmap = map.current.getLayer('stress-heatmap')

    if (satellite) {
      // Apply filter effects based on layer type
      if (selectedLayer === 'ndvi') {
        map.current.setPaintProperty('satellite-layer', 'raster-hue-rotate', 60)
        map.current.setPaintProperty('satellite-layer', 'raster-saturation', 0.3)
      } else if (selectedLayer === 'moisture') {
        map.current.setPaintProperty('satellite-layer', 'raster-hue-rotate', -30)
        map.current.setPaintProperty('satellite-layer', 'raster-saturation', -0.2)
        map.current.setPaintProperty('satellite-layer', 'raster-brightness-max', 0.9)
      } else {
        map.current.setPaintProperty('satellite-layer', 'raster-hue-rotate', 0)
        map.current.setPaintProperty('satellite-layer', 'raster-saturation', 0)
        map.current.setPaintProperty('satellite-layer', 'raster-brightness-max', 1)
      }
    }

    if (heatmap) {
      map.current.setLayoutProperty('stress-heatmap', 'visibility', 
        selectedLayer === 'ndvi' || selectedLayer === 'moisture' ? 'visible' : 'none')
    }
  }, [selectedLayer, mapLoaded])

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Map overlay info */}
      <div className="absolute top-3 left-3 glass-panel rounded-lg px-3 py-2 z-10">
        <div className="text-sm font-medium">{regionName}</div>
        <div className="text-xs text-gray-400">
          {center.lat.toFixed(2)}°, {center.lng.toFixed(2)}°
        </div>
      </div>

      {/* Layer indicator */}
      <div className="absolute top-3 right-3 glass-panel rounded-lg px-3 py-2 z-10">
        <div className="text-xs text-gray-400">
          {selectedLayer === 'truecolor' && 'Satellite Imagery'}
          {selectedLayer === 'ndvi' && 'NDVI Analysis'}
          {selectedLayer === 'moisture' && 'Moisture Index'}
        </div>
      </div>

      {/* Legend for stress overlay */}
      <div className="absolute bottom-3 left-3 glass-panel rounded-lg p-2 z-10">
        <div className="text-[10px] text-gray-400 mb-1">Stress Level</div>
        <div className="flex gap-1">
          <div className="w-6 h-2 rounded-sm bg-green-500" title="Low" />
          <div className="w-6 h-2 rounded-sm bg-yellow-500" title="Elevated" />
          <div className="w-6 h-2 rounded-sm bg-orange-500" title="Medium" />
          <div className="w-6 h-2 rounded-sm bg-red-500" title="High" />
        </div>
      </div>
    </div>
  )
}
