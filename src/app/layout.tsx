import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgriSentinel - Global Crop Risk Monitoring',
  description: 'Real-time satellite-based crop stress detection and early warning system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
