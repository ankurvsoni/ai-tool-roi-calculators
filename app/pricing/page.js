import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Pricing(){
  return <main className="wrap"><h1>Pricing</h1><p className="muted">A practical decision system for AI tool purchases.</p><div className="grid">
    <div className="card"><h3>AI ROI Toolkit</h3><p className="muted"><strong>$10</strong> · downloadable self-contained web app + bonus templates.</p><ul><li>Offline Toolkit Web App (`index.html`) with guided ROI workflow</li><li>Scenario analysis: conservative / base / aggressive</li><li>Exportable decision memo</li><li>Bonus templates: examples, presets, planner, checklist, and memo files</li></ul><a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer">Pay & Get Toolkit ($10)</a></div>
  </div><p className="footer">You are paying for a reusable decision system, not just a single calculator page.</p></main>
}
