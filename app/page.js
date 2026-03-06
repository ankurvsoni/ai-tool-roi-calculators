import Link from 'next/link';
import { getCalculators } from '@/lib/calculators';

export default function Home() {
  const calculators = getCalculators();
  return (
    <main className="wrap">
      <section className="hero">
        <span className="badge">Orko Labs · ROI OS</span>
        <h1>AI Tool ROI Calculators</h1>
        <p className="muted">Model cost, savings, payback, and break-even before you commit to any subscription.</p>
        <div className="ctaRow">
          <Link className="btn" href="/pricing">See Pricing</Link>
          <Link className="btn" href="/toolkit">Get Toolkit</Link>
        </div>
      </section>

      <div className="notice" style={{margin:'12px 0 16px'}}>Use conservative, base, and aggressive assumptions for realistic decisions.</div>

      <div className="grid">
        {calculators.map(c => (
          <Link key={c.slug} href={`/calculators/${c.slug}`} className="card">
            <h3>{c.title}</h3>
            <p className="muted">{c.description}</p>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              <span className="badge">Calculator</span>
              <span className="badge" style={{background:c.toolColor}}>{c.toolLabel || 'Tool'}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="footer">Built for fast decision-making by founders, creators, and small teams.</div>
    </main>
  );
}
