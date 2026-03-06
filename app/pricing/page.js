import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Pricing(){
  return <main className="wrap"><h1>Pricing</h1><p className="muted">Simple self-serve offer.</p><div className="grid">
    <div className="card"><h3>AI ROI Toolkit</h3><p className="muted"><strong>$10</strong> · downloadable self-contained web app + practical templates.</p><ul><li>Offline ROI Toolkit Web App (guided, non-technical)</li><li>Scenario presets + recommendation engine</li><li>Exportable decision memo</li><li>Bonus ZIP templates (calculator, planner, KPI tracker)</li></ul><a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer">Pay & Get Toolkit ($10)</a></div>
  </div><p className="footer">After payment, access is verified and you can download the toolkit app immediately.</p></main>
}
