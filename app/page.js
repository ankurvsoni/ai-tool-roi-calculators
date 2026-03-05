import Link from 'next/link';
import { getCalculators } from '@/lib/calculators';

export default function Home() {
  const calculators = getCalculators();
  return (
    <main className="wrap">
      <h1>AI Tool Cost & ROI Calculators</h1>
      <p className="muted">Choose a calculator and estimate savings, ROI, payback period, and break-even volume.</p>
      <div className="grid">
        {calculators.map(c => (
          <Link key={c.slug} href={`/calculators/${c.slug}`} className="card">
            <strong>{c.title}</strong>
            <p className="muted">{c.slug.replaceAll('-', ' ')}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
