export default function Contact(){
  return <main className="wrap"><h1>Contact</h1><div className="box"><p className="muted">For audits, partnerships, and custom ROI workflows.</p>
  <form action="https://formspree.io/f/xojkajbg" method="POST">
    <input type="hidden" name="form_type" value="contact" />
    <input type="hidden" name="_subject" value="New Contact Message" />
    <input type="hidden" name="_next" value="https://roi.orkolabs.com/thanks" />
    <label>Name</label><input name="name" placeholder="Your name" required />
    <label>Email</label><input type="email" name="email" placeholder="you@company.com" required />
    <label>Message</label><input name="message" placeholder="How can we help?" required />
    <button className="btn" type="submit">Send Message</button>
  </form></div></main>
}