import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Audit(){
  return <main className="wrap"><h1>Book AI Tool ROI Audit</h1><div className="box"><p className="muted">Best path: pay now to lock your slot and trigger automated delivery emails.</p><div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:14}}><a className="btn" href={PAYMENT_LINKS.starter} target="_blank" rel="noopener noreferrer">Pay Starter ($79)</a><a className="btn" href={PAYMENT_LINKS.advanced} target="_blank" rel="noopener noreferrer">Pay Advanced ($249)</a></div><p className="muted">Need custom scope first? Submit this request form and we’ll reply manually.</p>
  <form action="https://formspree.io/f/xojkajbg" method="POST">
    <input type="hidden" name="form_type" value="roi_audit" />
    <input type="hidden" name="_subject" value="New ROI Audit Request" />
    <input type="hidden" name="_next" value="https://roi.orkolabs.com/thanks" />
    <label>Name</label><input name="name" placeholder="Your name" required />
    <label>Email</label><input name="email" type="email" placeholder="you@company.com" required />
    <label>Current monthly AI tool spend ($)</label><input name="monthly_spend" type="number" placeholder="500" />
    <label>Team size</label><input name="team_size" type="number" placeholder="5" />
    <label>Biggest challenge</label><input name="challenge" placeholder="Too many tools, unclear ROI" />
    <button className="btn" type="submit">Submit Audit Request</button>
  </form></div><div className="success">Payment links are fully live via Stripe. Form is kept for custom-scope inquiries.</div></main>
}