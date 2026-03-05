import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCalculator, getCalculators } from '@/lib/calculators';
import CalculatorClient from './CalculatorClient';

export async function generateStaticParams() {
  return getCalculators().map((c) => ({ slug: c.slug }));
}

export default async function Page({ params }) {
  const c = getCalculator(params.slug);
  if (!c) return notFound();
  const related = getCalculators().filter(x => x.slug !== c.slug).slice(0,3);

  return (
    <main className="wrap">
      <Link href="/">← Back to all calculators</Link>
      <CalculatorClient title={c.title} defaults={c.defaultInputs} />

      <div className="box">
        <h3>How to use this result</h3>
        <p className="muted">Use this calculator as a decision-support tool. Validate assumptions with a 14-day pilot before scaling seats or annual plans.</p>
      </div>

      <div className="box">
        <h3>Related calculators</h3>
        <div className="grid">
          {related.map(r => <Link key={r.slug} className="card" href={`/calculators/${r.slug}`}>{r.title}</Link>)}
        </div>
      </div>

      <p className="footer">No financial advice. Always verify current pricing and implementation costs.</p>
    </main>
  );
}
