import Link from 'next/link';

export default function Pricing(){
  return <main className="wrap"><h1>Pricing</h1><div className="grid">
    <div className="card"><h3>ROI Audit — Starter</h3><p className="muted">$149 · 45-min review + baseline savings report.</p><Link className="btn" href="/audit">Book Starter Audit</Link></div>
    <div className="card"><h3>ROI Audit — Advanced</h3><p className="muted">$399 · full stack analysis + 30-day action plan.</p><Link className="btn" href="/audit">Book Advanced Audit</Link></div>
    <div className="card"><h3>AI ROI Toolkit</h3><p className="muted">$29 · spreadsheet + templates + stakeholder deck.</p><Link className="btn" href="/toolkit">Get Toolkit</Link></div>
  </div><p className="footer">Payments integration can be enabled with Stripe in the next step.</p></main>
}