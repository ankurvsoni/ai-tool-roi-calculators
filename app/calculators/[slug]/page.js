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

  return (
    <main className="wrap">
      <Link href="/">← Back to all calculators</Link>
      <CalculatorClient title={c.title} defaults={c.defaultInputs} />
    </main>
  );
}
