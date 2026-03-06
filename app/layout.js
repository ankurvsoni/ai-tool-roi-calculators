import './globals.css';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Orko Labs ROI Calculators',
  description: 'AI tool cost and ROI calculators with transparent assumptions.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1733768466473341"
          crossOrigin="anonymous"
        />
        <div className="wrap nav">
          <Link href="/" className="brand">Orko Labs ROI</Link>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <Link href="/pricing">Pricing</Link>
            <Link href="/audit">Audit</Link>
            <Link href="/toolkit">Toolkit</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <a href="https://www.orkolabs.com">All Projects</a>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
