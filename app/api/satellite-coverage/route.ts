import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    // On Vercel, process.cwd() points to the project root where files are bundled
    const dataPath = join(process.cwd(), 'data/global/satellite_stats_v2.jsonl');

    if (!existsSync(dataPath)) {
      // Return empty data gracefully if file doesn't exist
      return NextResponse.json({ 
        records: [], 
        message: 'Satellite data not available in this deployment'
      });
    }

    const content = readFileSync(dataPath, 'utf-8');

    const records = content
      .trim()
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        try {
          return JSON.parse(line);
        } catch {
          return null;
        }
      })
      .filter(Boolean);

    return NextResponse.json({ 
      records,
      count: records.length,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error loading satellite data:', error);
    return NextResponse.json({ records: [], error: String(error) }, { status: 500 });
  }
}
