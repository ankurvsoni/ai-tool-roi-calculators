export default function Audit(){
  return <main className="wrap"><h1>Book AI Tool ROI Audit</h1><div className="box"><p className="muted">Tell us your current tools, monthly spend, and goals. We will send a tailored ROI action plan.</p>
  <form>
    <label>Name</label><input placeholder="Your name" />
    <label>Email</label><input placeholder="you@company.com" />
    <label>Current monthly AI tool spend ($)</label><input type="number" placeholder="500" />
    <label>Team size</label><input type="number" placeholder="5" />
    <label>Biggest challenge</label><input placeholder="Too many tools, unclear ROI" />
    <button className="btn" type="button">Submit Audit Request</button>
  </form></div><div className="notice">This is an MVP intake form. We can connect it to Notion/Formspree/CRM next.</div></main>
}