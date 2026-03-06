import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Toolkit(){
  return <main className="wrap"><h1>AI ROI Toolkit</h1>
  <div className="box">
    <p className="muted">A practical toolkit to help you make confident AI software decisions without guesswork.</p>
    <ul>
      <li>ROI calculator template (ready for Google Sheets)</li>
      <li>Assumptions library with role-based benchmarks</li>
      <li>Role presets (creator, freelancer, agency, growth team)</li>
      <li>Implementation cost planner</li>
      <li>KPI tracker template for weekly monitoring</li>
      <li>Decision memo + stakeholder deck outline</li>
      <li>14-day pilot checklist + quickstart guide</li>
    </ul>
    <a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer">Pay $10 and Access Toolkit</a>
  </div>
  <div className="success">Secure access: after payment, you’ll get both a modern web app experience and ZIP download option.</div>
  </main>
}
