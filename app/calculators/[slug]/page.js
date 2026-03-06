import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCalculator, getCalculators } from '@/lib/calculators';
import CalculatorClient from './CalculatorClient';

export async function generateStaticParams() {
  return getCalculators().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const c = getCalculator(params.slug);
  if (!c) return {};
  return {
    title: c.seoTitle || c.title,
    description: c.metaDescription || c.description,
  };
}

export default async function Page({ params }) {
  const c = getCalculator(params.slug);
  if (!c) return notFound();
  const related = getCalculators().filter((x) => x.slug !== c.slug).slice(0, 3);
  const ex = c.defaultInputs;
  const exSavings = (ex.users * ex.hoursSavedPerUser * ex.hourlyRate) - (ex.monthlyToolCost + ex.additionalMonthlyCost);

  return (
    <main className="wrap">
      <Link href="/">← Back to all calculators</Link>
      <div className="box">
        <div style={{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap'}}>
          <strong>What this calculator helps with</strong>
          <span className="badge" style={{background:c.toolColor}}>{c.toolLabel || 'Tool'}</span>
        </div>
        <p className="muted" style={{ marginTop: 8 }}>{c.description}</p>
        {c.useCase && <p className="muted" style={{ marginTop: 8 }}><strong>Best use case:</strong> {c.useCase}</p>}
      </div>

      <CalculatorClient title={c.title} defaults={c.defaultInputs} />

      <div className="box">
        <h3>How to use this result</h3>
        <p className="muted">Use this calculator as a decision-support tool. Validate assumptions with a 14-day pilot before scaling seats or annual plans.</p>
        {c.watchouts && <p className="muted" style={{ marginTop: 8 }}><strong>Watch out for:</strong> {c.watchouts}</p>}
        {c.reco && <p className="muted" style={{ marginTop: 8 }}><strong>Recommendation:</strong> {c.reco}</p>}
      </div>

      <div className="box">
        <h3>Example scenario</h3>
        <p className="muted">For a team of <strong>{ex.users}</strong> at <strong>${ex.hourlyRate}/hr</strong>, saving <strong>{ex.hoursSavedPerUser} hours/person/month</strong> with tool cost <strong>${ex.monthlyToolCost}/month</strong>, estimated monthly savings are <strong>${Math.round(exSavings)}</strong>.</p>
      </div>

      <div className="box">
        <h3>FAQ</h3>
        {(c.faq || []).map((f, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <strong>{f.q}</strong>
            <p className="muted" style={{ marginTop: 4 }}>{f.a}</p>
          </div>
        ))}
      </div>

      <div className="box">
        <h3>Related calculators</h3>
        <div className="grid">
          {related.map((r) => (
            <Link key={r.slug} className="card" href={`/calculators/${r.slug}`}>{r.title}</Link>
          ))}
        </div>
      </div>

      <p className="footer">No financial advice. Always verify current pricing and implementation costs. Product names are trademarks of their respective owners.</p>
    </main>
  );
}
