export default function Audit(){
  return <main className="wrap"><h1>Request ROI Review</h1><div className="box"><p className="muted">Share your current stack details and we’ll respond with clear, practical recommendations.</p>
  <form action="https://formspree.io/f/xojkajbg" method="POST">
    <input type="hidden" name="form_type" value="roi_audit" />
    <input type="hidden" name="_subject" value="New ROI Review Request" />
    <input type="hidden" name="_next" value="https://roi.orkolabs.com/thanks" />
    <label>Name</label><input name="name" placeholder="Your name" required />
    <label>Email</label><input name="email" type="email" placeholder="you@company.com" required />
    <label>Current monthly AI tool spend ($)</label><input name="monthly_spend" type="number" placeholder="500" />
    <label>Team size</label><input name="team_size" type="number" placeholder="5" />
    <label>Biggest challenge</label><input name="challenge" placeholder="Too many tools, unclear ROI" />
    <button className="btn" type="submit">Submit Review Request</button>
  </form></div><div className="success">Thanks — we’ll review your details and follow up with recommended next steps.</div></main>
}
