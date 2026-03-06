import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Audit(){
  return <main className="wrap"><h1>Book ROI Audit</h1><div className="box"><p className="muted">Choose the audit tier that matches your depth needs.</p><div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:8}}><a className="btn" href={PAYMENT_LINKS.starter} target="_blank" rel="noopener noreferrer">Pay Starter ($79)</a><a className="btn" href={PAYMENT_LINKS.advanced} target="_blank" rel="noopener noreferrer">Pay Advanced ($249)</a></div></div><div className="success">After payment, you’ll receive confirmation and next-step instructions by email.</div></main>
}
