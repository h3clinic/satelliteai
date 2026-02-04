# AgriSentinel 🛰️

**Global Crop Risk Monitoring Platform**

AgriSentinel uses satellite-derived vegetation indices and machine learning to detect crop stress before yield impacts become visible.

## Features

- 🗺️ **Global Overview** - Real-time crop risk heatmap across all monitored regions
- 🌾 **Crop Explorer** - Filter by crop type (Maize, Wheat, Soybeans, Rice, etc.)
- 📍 **Region Drilldown** - Detailed analytics for any administrative region
- 🔬 **Unit Detail** - "Truth page" for individual H3 hexagon cells
- 🔔 **Alert Center** - Configurable notifications for risk thresholds
- ⚖️ **Compare Mode** - Side-by-side year-over-year comparison
- 📊 **Data & Trust** - Full methodology transparency and validation metrics

## Validation Results

| Metric | Value |
|--------|-------|
| AUROC | 0.87 [0.72–0.88] |
| PR-AUC | 0.48 (2.6× baseline) |
| Recall @ 10% FPR | 51% |
| p-value | 0.005 |

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Maps**: MapLibre GL
- **Grid**: H3 hexagonal tessellation
- **Icons**: Lucide React

## Data Sources

- 🛰️ Sentinel-2 (ESA Copernicus) - Vegetation indices
- 🌍 WorldCereal (ESA/VITO) - Cropland masks
- 📊 GFSAD (NASA/USGS) - Crop type baseline
- 🗺️ MapSPAM (IFPRI) - Crop allocation
- 🌤️ Open-Meteo - Weather data

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Global Overview (landing)
│   ├── crops/            # Crop Explorer
│   ├── region/[id]/      # Region Drilldown
│   ├── unit/[id]/        # Unit Detail
│   ├── alerts/           # Alert Center
│   ├── compare/          # Compare Mode
│   └── data/             # Data & Trust
├── components/
│   ├── GlobalMap.tsx     # MapLibre map component
│   ├── KPICard.tsx       # Metric cards
│   ├── TimelineScrubber.tsx
│   ├── CropSelector.tsx
│   └── TopRiskTable.tsx
└── lib/
    └── (utils)
```

## License

Proprietary - AgriSentinel Inc.

---

*Built on validated research methodology: Leave-One-Year-Out cross-validation with refit block bootstrap confidence intervals.*
