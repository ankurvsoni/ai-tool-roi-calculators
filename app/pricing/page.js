import Link from 'next/link';
import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Pricing(){
  return <main className="wrap"><h1>Launch Offers</h1><p className="muted">Validation-first launch: free audit review request + low-ticket toolkit.</p><div className="grid">
    <div className="card"><h3>Free ROI Review (Launch)</h3><p className="muted"><strong>$0</strong> · submit your stack details, get a practical recommendation.</p><ul><li>Current-state snapshot</li><li>Initial ROI scenario</li><li>Suggested next step</li></ul><Link className="btn" href="/audit">Request Free Review</Link></div>
    <div className="card"><h3>Priority Audit (Waitlist)</h3><p className="muted">Paid tiers reopen after launch validation and case studies.</p><ul><li>Starter + Advanced queue</li><li>Early access priority</li><li>Founding-customer pricing</li></ul><Link className="btn" href="/audit">Join Priority Waitlist</Link></div>
    <div className="card"><h3>AI ROI Toolkit</h3><p className="muted"><strong>$19</strong> · spreadsheet + templates + stakeholder deck.</p><ul><li>ROI calculator template</li><li>Assumptions library</li><li>Pilot checklist</li></ul><a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer">Pay & Get Toolkit ($19)</a></div>
  </div><p className="footer">We’ll re-open paid audits after initial launch proofs.</p></main>
}
