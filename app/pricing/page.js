import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Pricing(){
  return <main className="wrap"><h1>Pricing</h1><p className="muted">Simple paid options with clear deliverables.</p><div className="grid">
    <div className="card"><h3>AI ROI Toolkit</h3><p className="muted"><strong>$19</strong> · instant self-serve toolkit.</p><ul><li>ROI spreadsheet + assumptions library</li><li>Role presets + KPI tracker</li><li>Decision memo + pilot checklist</li></ul><a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer">Pay & Get Toolkit ($19)</a></div>
    <div className="card"><h3>Starter ROI Audit</h3><p className="muted"><strong>$79</strong> · focused audit with practical next steps.</p><ul><li>Current-state snapshot</li><li>Conservative/base/aggressive ROI model</li><li>14-day action plan</li></ul><a className="btn" href={PAYMENT_LINKS.starter} target="_blank" rel="noopener noreferrer">Pay & Book Starter ($79)</a></div>
    <div className="card"><h3>Advanced ROI Audit</h3><p className="muted"><strong>$249</strong> · full-stack analysis and roadmap.</p><ul><li>Keep/replace/drop recommendations</li><li>30-60-90 rollout plan</li><li>KPI dashboard template</li></ul><a className="btn" href={PAYMENT_LINKS.advanced} target="_blank" rel="noopener noreferrer">Pay & Book Advanced ($249)</a></div>
  </div><p className="footer">Need something custom? Reply after checkout and we’ll scope upgrades.</p></main>
}
