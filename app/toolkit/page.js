import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Toolkit(){
  return <main className="wrap"><h1>AI ROI Toolkit</h1>
  <div className="box">
    <p className="muted">A customer-friendly decision toolkit for choosing AI tools with confidence.</p>
    <ul>
      <li>Downloadable self-contained web app (works offline in browser)</li>
      <li>Guided input flow with role presets and scenario mode</li>
      <li>Clear recommendation output in plain language</li>
      <li>Decision memo export for stakeholder sharing</li>
      <li>Bonus templates folder (examples, planner, checklist, memo formats)</li>
    </ul>
    <a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer">Pay $10 and Access Toolkit</a>
  </div>
  <div className="success">Secure access: after payment, you’ll download the toolkit web app ZIP plus bonus templates.</div>
  </main>
}
