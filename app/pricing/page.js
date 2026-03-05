import Link from 'next/link';
import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Pricing(){
  return <main className="wrap"><h1>Simple Launch Pricing</h1><p className="muted">Low-friction pricing to help you get results fast.</p><div className="grid">
    <div className="card"><h3>ROI Audit — Starter</h3><p className="muted"><strong>$79</strong> · 45-min review + baseline savings report.</p><ul><li>Current-state snapshot</li><li>ROI scenario model</li><li>14-day action plan</li></ul><a className="btn" href={PAYMENT_LINKS.starter} target="_blank" rel="noopener noreferrer">Pay & Book Starter Audit ($79)</a></div>
    <div className="card"><h3>ROI Audit — Advanced</h3><p className="muted"><strong>$249</strong> · full stack analysis + 30-day action plan.</p><ul><li>Keep/replace recommendations</li><li>Savings forecast</li><li>KPI dashboard template</li></ul><a className="btn" href={PAYMENT_LINKS.advanced} target="_blank" rel="noopener noreferrer">Pay & Book Advanced Audit ($249)</a></div>
    <div className="card"><h3>AI ROI Toolkit</h3><p className="muted"><strong>$19</strong> · spreadsheet + templates + stakeholder deck.</p><ul><li>ROI calculator template</li><li>Assumptions library</li><li>Pilot checklist</li></ul><a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer">Pay & Get Toolkit ($19)</a></div>
  </div><p className="footer">Intro launch pricing. We may increase pricing after first 10 customer outcomes.</p><p className="muted"><Link href="/audit">Need custom scope first? Submit the audit intake form.</Link></p></main>
}
