import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Toolkit(){
  return <main className="wrap"><h1>AI ROI Toolkit</h1>
  <div className="box">
    <p className="muted">A practical toolkit to help you make confident AI software decisions without guesswork.</p>
    <ul>
      <li>Downloadable self-contained Toolkit Web App (offline-friendly)</li>
      <li>Guided inputs with role presets (creator, freelancer, team, agency)</li>
      <li>Conservative / Base / Aggressive scenario mode</li>
      <li>Built-in recommendation and plain-language explanations</li>
      <li>Exportable decision memo for stakeholder sharing</li>
      <li>Bonus template pack (planner, KPI tracker, checklist)</li>
    </ul>
    <a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer">Pay $10 and Access Toolkit</a>
  </div>
  <div className="success">Secure access: after payment, you’ll get a downloadable self-contained web app (ZIP).</div>
  </main>
}
