import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Orko Labs — AI Tool ROI Calculators',
  description: 'AI tool cost and ROI calculators with transparent assumptions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1733768466473341"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <div className="wrap nav">
          <Link href="/" className="brand">Orko Labs ROI</Link>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <Link href="/pricing">Pricing</Link>
            <Link href="/toolkit">Toolkit</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/refund-policy">Refund</Link>
            <a href="https://www.orkolabs.com">All Projects</a>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
