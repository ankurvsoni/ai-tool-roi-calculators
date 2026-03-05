import Link from 'next/link';
import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Pricing(){
  return <main className="wrap"><h1>Offers</h1><p className="muted">Choose a self-serve toolkit or request a tailored ROI review.</p><div className="grid">
    <div className="card"><h3>Free ROI Review</h3><p className="muted"><strong>$0</strong> · share your stack details and receive a practical recommendation.</p><ul><li>Current-state snapshot</li><li>Initial ROI scenario</li><li>Suggested next step</li></ul><Link className="btn" href="/audit">Request Free Review</Link></div>
    <div className="card"><h3>Custom ROI Audit</h3><p className="muted">For teams that want a deeper, tailored implementation plan.</p><ul><li>Use-case and workflow analysis</li><li>Prioritized recommendations</li><li>Delivery timeline after scoping</li></ul><Link className="btn" href="/audit">Request Audit Scope</Link></div>
    <div className="card"><h3>AI ROI Toolkit</h3><p className="muted"><strong>$19</strong> · spreadsheet + templates + stakeholder deck.</p><ul><li>ROI calculator template</li><li>Assumptions library</li><li>Pilot checklist</li></ul><a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer">Pay & Get Toolkit ($19)</a></div>
  </div><p className="footer">Need a custom engagement? Start with the free review form and we’ll propose the right scope.</p></main>
}
