import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'OrkoLabs ROI Calculators',
  description: 'AI tool cost and ROI calculators with transparent assumptions.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="wrap nav">
          <Link href="/" className="brand">OrkoLabs ROI</Link>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
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
