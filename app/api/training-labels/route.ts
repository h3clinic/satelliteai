import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    // On Vercel, process.cwd() points to the project root where files are bundled
    const dataPath = join(process.cwd(), 'data/global/training_labels.json');

    if (!existsSync(dataPath)) {
      // Return empty data gracefully if file doesn't exist
      return NextResponse.json({ 
        labels: {}, 
        count: 0,
        stressCount: 0,
        message: 'Training labels not available in this deployment'
      });
    }

    const content = readFileSync(dataPath, 'utf-8');

    const labels = JSON.parse(content);

    // Compute stats
    const stressCount = Object.values(labels).filter((l: any) =>
      Object.values(l.years || {}).some((y: any) => y.stress === 1)
    ).length;

    return NextResponse.json({ 
      labels,
      count: Object.keys(labels).length,
      stressCount,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error loading training labels:', error);
    return NextResponse.json({ labels: {}, error: String(error) }, { status: 500 });
  }
}
