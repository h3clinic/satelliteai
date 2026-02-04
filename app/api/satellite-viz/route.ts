import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

// Generate a simple NDVI visualization as SVG
function generateNDVIGrid(records: any[]): string {
  const width = 400;
  const height = 300;
  
  // Group by month
  const byMonth = new Map<number, any[]>();
  records.forEach(r => {
    const list = byMonth.get(r.month) || [];
    list.push(r);
    byMonth.set(r.month, list);
  });
  
  // Sort months
  const months = Array.from(byMonth.keys()).sort((a, b) => a - b);
  
  // NDVI color scale
  const ndviColor = (ndvi: number): string => {
    if (ndvi < 0.2) return '#8B4513'; // Brown - bare
    if (ndvi < 0.3) return '#CD853F'; // Peru
    if (ndvi < 0.4) return '#DAA520'; // Goldenrod
    if (ndvi < 0.5) return '#9ACD32'; // Yellow green
    if (ndvi < 0.6) return '#32CD32'; // Lime green
    if (ndvi < 0.7) return '#228B22'; // Forest green
    return '#006400'; // Dark green
  };
  
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">`;
  svg += `<rect width="${width}" height="${height}" fill="#1a1a2e"/>`;
  
  // Title
  svg += `<text x="${width/2}" y="25" text-anchor="middle" fill="white" font-size="14" font-family="sans-serif">`;
  svg += `Monthly NDVI Time Series</text>`;
  
  // Draw bars for each month
  const barWidth = (width - 80) / Math.max(months.length, 1);
  const maxHeight = height - 80;
  
  months.forEach((month, i) => {
    const monthRecords = byMonth.get(month) || [];
    const avgNdvi = monthRecords.reduce((s, r) => s + r.ndvi_mean, 0) / monthRecords.length;
    const barHeight = (avgNdvi + 0.2) / 1.2 * maxHeight; // Scale 0-1 to bar height
    
    const x = 50 + i * barWidth;
    const y = height - 40 - barHeight;
    
    // Bar
    svg += `<rect x="${x}" y="${y}" width="${barWidth - 4}" height="${barHeight}" fill="${ndviColor(avgNdvi)}" rx="2"/>`;
    
    // Month label
    const monthNames = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    svg += `<text x="${x + barWidth/2}" y="${height - 20}" text-anchor="middle" fill="#888" font-size="10">${monthNames[month]}</text>`;
    
    // NDVI value
    svg += `<text x="${x + barWidth/2}" y="${y - 5}" text-anchor="middle" fill="white" font-size="9">${avgNdvi.toFixed(2)}</text>`;
  });
  
  svg += `</svg>`;
  return svg;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const adminCode = searchParams.get('admin_code');
  const year = searchParams.get('year');
  
  if (!adminCode) {
    return NextResponse.json({ error: 'admin_code required' }, { status: 400 });
  }
  
  try {
    // On Vercel, process.cwd() points to the project root where files are bundled
    const dataPath = join(process.cwd(), 'data/global/satellite_stats_v2.jsonl');
    
    if (!existsSync(dataPath)) {
      return NextResponse.json({ 
        error: 'Satellite data not available in this deployment',
        svg: null 
      }, { status: 404 });
    }
    
    const content = readFileSync(dataPath, 'utf-8');
    const allRecords = content
      .trim()
      .split('\n')
      .filter(line => line.trim())
      .map(line => JSON.parse(line));
    
    // Filter by admin_code and optionally year
    let records = allRecords.filter(r => r.admin_code === adminCode);
    if (year) {
      records = records.filter(r => r.year === parseInt(year));
    }
    
    if (records.length === 0) {
      return NextResponse.json({ error: 'No data for this region' }, { status: 404 });
    }
    
    // Generate SVG visualization
    const svg = generateNDVIGrid(records);
    
    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
    
  } catch (error) {
    console.error('Error generating visualization:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
