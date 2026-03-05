import Link from 'next/link';
import { getCalculators } from '@/lib/calculators';

export default function Home() {
  const calculators = getCalculators();
  return (
    <main className="wrap">
      <h1>AI Tool Cost & ROI Calculators</h1>
      <p className="muted">Estimate monthly savings, ROI percentage, payback period, and break-even output for common AI software decisions.</p>
      <div className="notice" style={{margin:'12px 0 16px'}}>Tip: start with your current workflow numbers, then run conservative/base/aggressive scenarios.</div>
      <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:14}}>
        <Link className="btn" href="/pricing">See Pricing</Link>
        <Link className="btn" href="/audit">Book ROI Audit</Link>
        <Link className="btn" href="/toolkit">Buy ROI Toolkit</Link>
      </div>
      <div className="grid">
        {calculators.map(c => (
          <Link key={c.slug} href={`/calculators/${c.slug}`} className="card">
            <h3>{c.title}</h3>
            <p className="muted">{c.slug.replaceAll('-', ' ')}</p>
            <span className="badge">Calculator</span>
          </Link>
        ))}
      </div>
      <div className="footer">Need a shareable summary? Open any calculator and use the copy summary button.</div>
    </main>
  );
}
