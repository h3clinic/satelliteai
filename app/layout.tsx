import './globals.css';

export const metadata = {
  title: 'AgriSentinel - Satellite Crop Monitoring',
  description: 'Real-time satellite-based crop stress detection',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
