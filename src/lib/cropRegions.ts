// Major agricultural regions with approximate bounding box polygons
// These represent actual geographic crop-producing areas

export interface CropRegion {
  id: string;
  name: string;
  country: string;
  crop: string;
  polygon: number[][][]; // GeoJSON polygon coordinates [lng, lat]
  risk: number;
  confidence: number;
  area_ha: number;
}

// Major crop-producing regions worldwide with polygon boundaries
export const cropRegions: CropRegion[] = [
  // USA - Corn Belt
  {
    id: 'us-iowa',
    name: 'Iowa',
    country: 'USA',
    crop: 'Corn',
    risk: 72,
    confidence: 85,
    area_ha: 5200000,
    polygon: [[
      [-96.6, 43.5], [-91.2, 43.5], [-90.1, 42.5], [-90.1, 40.4],
      [-91.4, 40.4], [-96.6, 40.6], [-96.6, 43.5]
    ]]
  },
  {
    id: 'us-illinois',
    name: 'Illinois',
    country: 'USA',
    crop: 'Corn',
    risk: 68,
    confidence: 82,
    area_ha: 4800000,
    polygon: [[
      [-91.5, 42.5], [-87.5, 42.5], [-87.5, 39.0], [-88.0, 37.0],
      [-89.1, 36.9], [-90.6, 37.0], [-91.5, 38.5], [-91.5, 42.5]
    ]]
  },
  {
    id: 'us-nebraska',
    name: 'Nebraska',
    country: 'USA',
    crop: 'Corn',
    risk: 58,
    confidence: 80,
    area_ha: 4100000,
    polygon: [[
      [-104.0, 43.0], [-96.5, 43.0], [-96.0, 42.0], [-95.3, 40.0],
      [-102.0, 40.0], [-104.0, 41.0], [-104.0, 43.0]
    ]]
  },
  // USA - Wheat Belt (Kansas)
  {
    id: 'us-kansas',
    name: 'Kansas',
    country: 'USA',
    crop: 'Wheat',
    risk: 71,
    confidence: 82,
    area_ha: 3800000,
    polygon: [[
      [-102.0, 40.0], [-94.6, 40.0], [-94.6, 37.0], [-102.0, 37.0], [-102.0, 40.0]
    ]]
  },
  {
    id: 'us-northdakota',
    name: 'North Dakota',
    country: 'USA',
    crop: 'Wheat',
    risk: 45,
    confidence: 78,
    area_ha: 3200000,
    polygon: [[
      [-104.0, 49.0], [-96.5, 49.0], [-96.5, 45.9], [-104.0, 45.9], [-104.0, 49.0]
    ]]
  },
  // Brazil - Soy regions
  {
    id: 'br-matogrosso',
    name: 'Mato Grosso',
    country: 'Brazil',
    crop: 'Soy',
    risk: 82,
    confidence: 75,
    area_ha: 11000000,
    polygon: [[
      [-61.5, -7.5], [-50.0, -7.5], [-50.0, -18.0], [-61.5, -18.0], [-61.5, -7.5]
    ]]
  },
  {
    id: 'br-parana',
    name: 'Paraná',
    country: 'Brazil',
    crop: 'Soy',
    risk: 65,
    confidence: 80,
    area_ha: 5600000,
    polygon: [[
      [-54.6, -22.5], [-48.0, -22.5], [-48.0, -26.0], [-54.6, -26.0], [-54.6, -22.5]
    ]]
  },
  {
    id: 'br-goias',
    name: 'Goiás',
    country: 'Brazil',
    crop: 'Soy',
    risk: 55,
    confidence: 77,
    area_ha: 3800000,
    polygon: [[
      [-51.0, -13.0], [-46.0, -13.0], [-46.0, -19.0], [-51.0, -19.0], [-51.0, -13.0]
    ]]
  },
  // Argentina - Pampas
  {
    id: 'ar-buenosaires',
    name: 'Buenos Aires Province',
    country: 'Argentina',
    crop: 'Wheat',
    risk: 48,
    confidence: 79,
    area_ha: 4200000,
    polygon: [[
      [-63.0, -33.0], [-57.0, -33.0], [-57.0, -40.0], [-63.0, -40.0], [-63.0, -33.0]
    ]]
  },
  {
    id: 'ar-cordoba',
    name: 'Córdoba',
    country: 'Argentina',
    crop: 'Corn',
    risk: 65,
    confidence: 79,
    area_ha: 3600000,
    polygon: [[
      [-65.8, -29.5], [-62.0, -29.5], [-62.0, -35.0], [-65.8, -35.0], [-65.8, -29.5]
    ]]
  },
  {
    id: 'ar-santafe',
    name: 'Santa Fe',
    country: 'Argentina',
    crop: 'Soy',
    risk: 52,
    confidence: 76,
    area_ha: 3100000,
    polygon: [[
      [-62.0, -28.0], [-59.5, -28.0], [-59.5, -34.0], [-62.0, -34.0], [-62.0, -28.0]
    ]]
  },
  // Ukraine - Grain regions
  {
    id: 'ua-kherson',
    name: 'Kherson Oblast',
    country: 'Ukraine',
    crop: 'Wheat',
    risk: 78,
    confidence: 55,
    area_ha: 1800000,
    polygon: [[
      [32.0, 47.5], [36.0, 47.5], [36.0, 45.5], [32.0, 45.5], [32.0, 47.5]
    ]]
  },
  {
    id: 'ua-poltava',
    name: 'Poltava Oblast',
    country: 'Ukraine',
    crop: 'Corn',
    risk: 62,
    confidence: 60,
    area_ha: 1500000,
    polygon: [[
      [32.0, 50.1], [35.5, 50.1], [35.5, 48.5], [32.0, 48.5], [32.0, 50.1]
    ]]
  },
  // India - Major crop regions
  {
    id: 'in-punjab',
    name: 'Punjab',
    country: 'India',
    crop: 'Wheat',
    risk: 42,
    confidence: 75,
    area_ha: 3500000,
    polygon: [[
      [73.8, 32.5], [76.8, 32.5], [76.8, 29.5], [73.8, 29.5], [73.8, 32.5]
    ]]
  },
  {
    id: 'in-maharashtra',
    name: 'Maharashtra',
    country: 'India',
    crop: 'Cotton',
    risk: 78,
    confidence: 68,
    area_ha: 4200000,
    polygon: [[
      [72.5, 22.0], [80.5, 22.0], [80.5, 16.0], [72.5, 16.0], [72.5, 22.0]
    ]]
  },
  {
    id: 'in-uttarpradesh',
    name: 'Uttar Pradesh',
    country: 'India',
    crop: 'Rice',
    risk: 35,
    confidence: 72,
    area_ha: 5800000,
    polygon: [[
      [77.0, 30.5], [84.5, 30.5], [84.5, 24.0], [77.0, 24.0], [77.0, 30.5]
    ]]
  },
  // China - Major grain regions
  {
    id: 'cn-henan',
    name: 'Henan',
    country: 'China',
    crop: 'Wheat',
    risk: 38,
    confidence: 72,
    area_ha: 5400000,
    polygon: [[
      [110.3, 36.4], [116.6, 36.4], [116.6, 31.4], [110.3, 31.4], [110.3, 36.4]
    ]]
  },
  {
    id: 'cn-heilongjiang',
    name: 'Heilongjiang',
    country: 'China',
    crop: 'Corn',
    risk: 32,
    confidence: 70,
    area_ha: 6200000,
    polygon: [[
      [121.0, 53.5], [135.0, 53.5], [135.0, 43.5], [121.0, 43.5], [121.0, 53.5]
    ]]
  },
  {
    id: 'cn-jiangsu',
    name: 'Jiangsu',
    country: 'China',
    crop: 'Rice',
    risk: 28,
    confidence: 74,
    area_ha: 2200000,
    polygon: [[
      [116.3, 35.0], [121.9, 35.0], [121.9, 30.8], [116.3, 30.8], [116.3, 35.0]
    ]]
  },
  // Australia
  {
    id: 'au-newsouthwales',
    name: 'New South Wales',
    country: 'Australia',
    crop: 'Wheat',
    risk: 68,
    confidence: 71,
    area_ha: 4100000,
    polygon: [[
      [141.0, -29.0], [153.6, -29.0], [153.6, -37.5], [141.0, -37.5], [141.0, -29.0]
    ]]
  },
  {
    id: 'au-westernaustralia',
    name: 'Western Australia',
    country: 'Australia',
    crop: 'Wheat',
    risk: 72,
    confidence: 68,
    area_ha: 4800000,
    polygon: [[
      [115.0, -26.0], [129.0, -26.0], [129.0, -35.0], [115.0, -35.0], [115.0, -26.0]
    ]]
  },
  // France
  {
    id: 'fr-beauce',
    name: 'Beauce',
    country: 'France',
    crop: 'Wheat',
    risk: 25,
    confidence: 88,
    area_ha: 2200000,
    polygon: [[
      [0.8, 48.8], [2.8, 48.8], [2.8, 47.5], [0.8, 47.5], [0.8, 48.8]
    ]]
  },
  {
    id: 'fr-champagne',
    name: 'Champagne',
    country: 'France',
    crop: 'Wheat',
    risk: 22,
    confidence: 85,
    area_ha: 1800000,
    polygon: [[
      [3.3, 49.8], [5.5, 49.8], [5.5, 48.0], [3.3, 48.0], [3.3, 49.8]
    ]]
  },
  // Canada
  {
    id: 'ca-saskatchewan',
    name: 'Saskatchewan',
    country: 'Canada',
    crop: 'Wheat',
    risk: 35,
    confidence: 80,
    area_ha: 6500000,
    polygon: [[
      [-110.0, 60.0], [-102.0, 60.0], [-102.0, 49.0], [-110.0, 49.0], [-110.0, 60.0]
    ]]
  },
  {
    id: 'ca-manitoba',
    name: 'Manitoba',
    country: 'Canada',
    crop: 'Wheat',
    risk: 38,
    confidence: 78,
    area_ha: 3200000,
    polygon: [[
      [-102.0, 60.0], [-95.0, 60.0], [-95.0, 49.0], [-102.0, 49.0], [-102.0, 60.0]
    ]]
  },
  // Russia
  {
    id: 'ru-krasnodar',
    name: 'Krasnodar Krai',
    country: 'Russia',
    crop: 'Wheat',
    risk: 42,
    confidence: 65,
    area_ha: 3800000,
    polygon: [[
      [36.5, 46.8], [41.5, 46.8], [41.5, 43.5], [36.5, 43.5], [36.5, 46.8]
    ]]
  },
  {
    id: 'ru-rostov',
    name: 'Rostov Oblast',
    country: 'Russia',
    crop: 'Wheat',
    risk: 48,
    confidence: 62,
    area_ha: 3200000,
    polygon: [[
      [38.0, 50.2], [44.0, 50.2], [44.0, 46.0], [38.0, 46.0], [38.0, 50.2]
    ]]
  },
  // Thailand - Rice
  {
    id: 'th-central',
    name: 'Central Plains',
    country: 'Thailand',
    crop: 'Rice',
    risk: 30,
    confidence: 70,
    area_ha: 2800000,
    polygon: [[
      [99.5, 16.5], [101.5, 16.5], [101.5, 13.5], [99.5, 13.5], [99.5, 16.5]
    ]]
  },
  // Vietnam - Rice
  {
    id: 'vn-mekong',
    name: 'Mekong Delta',
    country: 'Vietnam',
    crop: 'Rice',
    risk: 45,
    confidence: 68,
    area_ha: 4100000,
    polygon: [[
      [104.5, 11.5], [107.0, 11.5], [107.0, 8.5], [104.5, 8.5], [104.5, 11.5]
    ]]
  },
  // Indonesia - Rice
  {
    id: 'id-java',
    name: 'Java',
    country: 'Indonesia',
    crop: 'Rice',
    risk: 38,
    confidence: 65,
    area_ha: 3200000,
    polygon: [[
      [105.0, -5.8], [114.5, -5.8], [114.5, -8.8], [105.0, -8.8], [105.0, -5.8]
    ]]
  },
  // Pakistan
  {
    id: 'pk-punjab',
    name: 'Punjab',
    country: 'Pakistan',
    crop: 'Wheat',
    risk: 55,
    confidence: 70,
    area_ha: 6800000,
    polygon: [[
      [69.5, 33.5], [75.5, 33.5], [75.5, 28.0], [69.5, 28.0], [69.5, 33.5]
    ]]
  },
  // Nigeria - Maize
  {
    id: 'ng-northcentral',
    name: 'North Central',
    country: 'Nigeria',
    crop: 'Corn',
    risk: 58,
    confidence: 55,
    area_ha: 2100000,
    polygon: [[
      [6.0, 11.0], [10.0, 11.0], [10.0, 7.5], [6.0, 7.5], [6.0, 11.0]
    ]]
  },
  // South Africa
  {
    id: 'za-freestate',
    name: 'Free State',
    country: 'South Africa',
    crop: 'Corn',
    risk: 52,
    confidence: 72,
    area_ha: 1800000,
    polygon: [[
      [24.5, -26.5], [30.0, -26.5], [30.0, -31.0], [24.5, -31.0], [24.5, -26.5]
    ]]
  },
];

// Color mapping for crop types
export const cropColors: Record<string, string> = {
  'Corn': '#f59e0b',    // amber
  'Wheat': '#eab308',   // yellow
  'Soy': '#22c55e',     // green
  'Rice': '#3b82f6',    // blue
  'Cotton': '#a855f7',  // purple
};

// Get risk color
export function getRiskColor(risk: number): string {
  if (risk >= 70) return '#ef4444'; // red
  if (risk >= 50) return '#f97316'; // orange
  if (risk >= 30) return '#eab308'; // yellow
  return '#22c55e'; // green
}

// Get risk opacity based on score
export function getRiskOpacity(risk: number): number {
  return 0.3 + (risk / 100) * 0.5;
}

// Convert regions to GeoJSON FeatureCollection
export function regionsToGeoJSON(regions: CropRegion[]) {
  return {
    type: 'FeatureCollection' as const,
    features: regions.map(region => ({
      type: 'Feature' as const,
      id: region.id,
      properties: {
        id: region.id,
        name: region.name,
        country: region.country,
        crop: region.crop,
        risk: region.risk,
        confidence: region.confidence,
        area_ha: region.area_ha,
        color: getRiskColor(region.risk),
        opacity: getRiskOpacity(region.risk),
      },
      geometry: {
        type: 'Polygon' as const,
        coordinates: region.polygon,
      }
    }))
  };
}
