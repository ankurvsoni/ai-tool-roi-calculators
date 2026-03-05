import Link from 'next/link';

export default function Pricing(){
  return <main className="wrap"><h1>Simple Launch Pricing</h1><p className="muted">Low-friction pricing to help you get results fast.</p><div className="grid">
    <div className="card"><h3>ROI Audit — Starter</h3><p className="muted"><strong>$79</strong> · 45-min review + baseline savings report.</p><ul><li>Current-state snapshot</li><li>ROI scenario model</li><li>14-day action plan</li></ul><Link className="btn" href="/audit">Book Starter Audit ($79)</Link></div>
    <div className="card"><h3>ROI Audit — Advanced</h3><p className="muted"><strong>$249</strong> · full stack analysis + 30-day action plan.</p><ul><li>Keep/replace recommendations</li><li>Savings forecast</li><li>KPI dashboard template</li></ul><Link className="btn" href="/audit">Book Advanced Audit ($249)</Link></div>
    <div className="card"><h3>AI ROI Toolkit</h3><p className="muted"><strong>$19</strong> · spreadsheet + templates + stakeholder deck.</p><ul><li>ROI calculator template</li><li>Assumptions library</li><li>Pilot checklist</li></ul><Link className="btn" href="/toolkit">Get Toolkit ($19)</Link></div>
  </div><p className="footer">Intro launch pricing. We may increase pricing after first 10 customer outcomes.</p></main>
}
