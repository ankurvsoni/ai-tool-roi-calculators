export default function Audit(){
  return <main className="wrap"><h1>Book AI Tool ROI Audit</h1><div className="box"><p className="muted">Tell us your current tools, monthly spend, and goals. We will send a tailored ROI action plan.</p>
  <form action="https://formspree.io/f/xojkajbg" method="POST">
    <input type="hidden" name="form_type" value="roi_audit" />
    <label>Name</label><input name="name" placeholder="Your name" required />
    <label>Email</label><input name="email" type="email" placeholder="you@company.com" required />
    <label>Current monthly AI tool spend ($)</label><input name="monthly_spend" type="number" placeholder="500" />
    <label>Team size</label><input name="team_size" type="number" placeholder="5" />
    <label>Biggest challenge</label><input name="challenge" placeholder="Too many tools, unclear ROI" />
    <button className="btn" type="submit">Submit Audit Request</button>
  </form></div><div className="success">Form is now live via Formspree. Submissions will go to your configured inbox.</div></main>
}