'use client'

import Link from 'next/link'
import { 
  ArrowLeft, ExternalLink, Shield, Database, Satellite,
  BarChart3, AlertCircle, CheckCircle, Clock, Globe
} from 'lucide-react'

const dataSources = [
  {
    name: 'Sentinel-2',
    provider: 'ESA Copernicus',
    type: 'Satellite Imagery',
    resolution: '10m',
    cadence: '5 days',
    coverage: 'Global',
    link: 'https://sentinel.esa.int/web/sentinel/missions/sentinel-2',
    description: 'Primary source for vegetation indices (NDVI, EVI, NDWI)',
  },
  {
    name: 'WorldCereal',
    provider: 'ESA/VITO',
    type: 'Cropland Mask',
    resolution: '10m',
    cadence: 'Seasonal',
    coverage: 'Global',
    link: 'https://worldcereal.org',
    description: 'Dynamic cropland/crop type classification',
  },
  {
    name: 'GFSAD',
    provider: 'NASA/USGS',
    type: 'Crop Dominance',
    resolution: '1km',
    cadence: 'Annual',
    coverage: 'Global',
    link: 'https://earthdata.nasa.gov',
    description: 'Global crop type baseline and irrigation status',
  },
  {
    name: 'MapSPAM',
    provider: 'IFPRI',
    type: 'Crop Allocation',
    resolution: '~10km',
    cadence: 'Periodic',
    coverage: 'Global',
    link: 'https://mapspam.info',
    description: 'Statistical crop area allocation by type',
  },
  {
    name: 'Fields of The World',
    provider: 'Clark University et al.',
    type: 'Field Boundaries',
    resolution: 'Field-level',
    cadence: 'Static',
    coverage: 'Partial',
    link: 'https://fieldsofthe.world',
    description: 'AI-ready field boundary polygons (select regions)',
  },
  {
    name: 'Open-Meteo',
    provider: 'Open-Meteo',
    type: 'Weather',
    resolution: '~25km',
    cadence: 'Hourly',
    coverage: 'Global',
    link: 'https://open-meteo.com',
    description: 'Temperature, precipitation, VPD, soil moisture',
  },
]

const validationMetrics = {
  auroc: { value: 0.87, ci: [0.72, 0.88], description: 'Area Under ROC Curve' },
  prauc: { value: 0.48, ci: [0.20, 0.70], description: 'Precision-Recall AUC (2.6× baseline)' },
  recall: { value: 0.51, description: 'Recall at 10% False Positive Rate' },
  pvalue: { value: 0.005, description: 'Permutation test p-value' },
}

const limitations = [
  {
    region: 'Sub-Saharan Africa',
    issue: 'Limited field boundary data',
    impact: 'H3 grid cells used instead of true fields',
  },
  {
    region: 'Southeast Asia',
    issue: 'High cloud cover frequency',
    impact: 'Lower confidence scores during monsoon',
  },
  {
    region: 'Specialty Crops',
    issue: 'Sparse training labels',
    impact: 'Probability-based detection only',
  },
  {
    region: 'Small Holdings (<1 ha)',
    issue: 'Below satellite resolution',
    impact: 'Aggregated to nearest grid cell',
  },
]

export default function DataPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Map
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Data & Methodology</h1>
          <p className="text-gray-400">
            Transparency is core to our mission. Here&apos;s exactly how AgriSentinel works.
          </p>
        </div>

        {/* Trust Banner */}
        <div className="glass-panel rounded-xl p-6 mb-8 bg-gradient-to-r from-crop-green/10 to-transparent border-crop-green/20">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-crop-green flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-crop-green mb-2">Our Commitment to Transparency</h2>
              <p className="text-sm text-gray-300">
                We show confidence levels for every prediction. We never pretend to have data we don&apos;t have.
                Our validation methodology is peer-review ready: Leave-One-Year-Out cross-validation with 
                refit block bootstrap confidence intervals.
              </p>
            </div>
          </div>
        </div>

        {/* Data Sources */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-crop-green" />
            Data Sources
          </h2>
          <p className="text-gray-400 mb-6">
            AgriSentinel uses 100% open and freely available data. No proprietary datasets required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataSources.map((source) => (
              <a
                key={source.name}
                href={source.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel rounded-xl p-4 hover:bg-white/5 transition group"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold flex items-center gap-2">
                      {source.name}
                      <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-white transition" />
                    </h3>
                    <p className="text-xs text-gray-500">{source.provider}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-white/10 rounded">{source.type}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{source.description}</p>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span>📐 {source.resolution}</span>
                  <span>🔄 {source.cadence}</span>
                  <span>🌍 {source.coverage}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Validation Methodology */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-crop-green" />
            Validation Results
          </h2>
          <p className="text-gray-400 mb-6">
            Our model is validated using rigorous Leave-One-Year-Out (LOYO) cross-validation 
            to prevent temporal leakage. Confidence intervals are computed via refit block bootstrap.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="glass-panel rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-crop-green">{validationMetrics.auroc.value}</p>
              <p className="text-xs text-gray-400 mt-1">AUROC</p>
              <p className="text-xs text-gray-500">[{validationMetrics.auroc.ci.join('–')}]</p>
            </div>
            <div className="glass-panel rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-crop-green">{validationMetrics.prauc.value}</p>
              <p className="text-xs text-gray-400 mt-1">PR-AUC</p>
              <p className="text-xs text-gray-500">2.6× baseline</p>
            </div>
            <div className="glass-panel rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-crop-green">{(validationMetrics.recall.value * 100).toFixed(0)}%</p>
              <p className="text-xs text-gray-400 mt-1">Recall</p>
              <p className="text-xs text-gray-500">@ 10% FPR</p>
            </div>
            <div className="glass-panel rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-crop-green">p={validationMetrics.pvalue.value}</p>
              <p className="text-xs text-gray-400 mt-1">Significance</p>
              <p className="text-xs text-gray-500">Permutation test</p>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6">
            <h3 className="font-semibold mb-4">Validation Protocol</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm text-crop-green font-medium mb-2">Cross-Validation</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-crop-green mt-0.5" />
                    Leave-One-Year-Out (LOYO) for temporal independence
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-crop-green mt-0.5" />
                    Nested preprocessing (scaling inside CV folds)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-crop-green mt-0.5" />
                    Past-only trend fitting (no future leakage)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm text-crop-green font-medium mb-2">Statistical Tests</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-crop-green mt-0.5" />
                    Within-year label permutation (200 iterations)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-crop-green mt-0.5" />
                    Refit block bootstrap for CIs (1000 resamples)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-crop-green mt-0.5" />
                    Contiguity test for spatial effects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Known Limitations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-stress-yellow" />
            Known Limitations
          </h2>
          <p className="text-gray-400 mb-6">
            No system is perfect. Here&apos;s where AgriSentinel has reduced accuracy or coverage.
          </p>

          <div className="space-y-3">
            {limitations.map((limit, i) => (
              <div key={i} className="glass-panel rounded-xl p-4 border-l-4 border-stress-yellow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{limit.region}</h3>
                    <p className="text-sm text-gray-400 mt-1">{limit.issue}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-stress-yellow/20 text-stress-yellow rounded">
                    {limit.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Update Cadence */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-crop-green" />
            Update Frequency
          </h2>

          <div className="glass-panel rounded-xl p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm text-crop-green font-medium mb-2">Satellite Data</h3>
                <p className="text-2xl font-bold">5 days</p>
                <p className="text-sm text-gray-400">Sentinel-2 revisit time</p>
              </div>
              <div>
                <h3 className="text-sm text-crop-green font-medium mb-2">Risk Scores</h3>
                <p className="text-2xl font-bold">Weekly</p>
                <p className="text-sm text-gray-400">Aggregated from latest imagery</p>
              </div>
              <div>
                <h3 className="text-sm text-crop-green font-medium mb-2">Cropland Masks</h3>
                <p className="text-2xl font-bold">Seasonal</p>
                <p className="text-sm text-gray-400">Updated with WorldCereal releases</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Paper Link */}
        <section className="mb-8">
          <div className="glass-panel rounded-xl p-6 bg-gradient-to-r from-crop-green/5 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-1">Read the Research</h2>
                <p className="text-sm text-gray-400">
                  Full methodology paper: &quot;Early Detection of Crop Yield Stress via Satellite-Derived Spatial Heterogeneity Collapse&quot;
                </p>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-crop-green text-white rounded-lg hover:bg-crop-green-dark transition"
              >
                View Paper
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
