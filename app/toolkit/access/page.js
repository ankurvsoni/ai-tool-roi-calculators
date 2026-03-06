import Link from 'next/link';
import { fetchCheckoutSession, isPaidSession } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export default async function ToolkitAccessPage({ searchParams }) {
  const sessionId = searchParams?.session_id;

  if (!sessionId) {
    return (
      <main className="wrap">
        <h1>Payment confirmation needed</h1>
        <div className="notice">We couldn’t find your checkout session. Please return to the payment page and complete checkout.</div>
        <p><Link className="btn" href="/toolkit">Back to Toolkit</Link></p>
      </main>
    );
  }

  try {
    const session = await fetchCheckoutSession(sessionId);
    const paid = isPaidSession(session);

    if (!paid) {
      return (
        <main className="wrap">
          <h1>Payment not completed</h1>
          <div className="notice">Your payment is not marked complete yet. If this looks wrong, contact support with your email and timestamp.</div>
          <p><Link className="btn" href="/toolkit">Back to Toolkit</Link></p>
        </main>
      );
    }

    return (
      <main className="wrap">
        <h1>Payment confirmed ✅</h1>
        <div className="success">Thanks! Your toolkit access is unlocked.</div>
        <div style={{marginTop:12,display:'flex',gap:10,flexWrap:'wrap'}}>
          <a className="btn" href={`/toolkit/download?session_id=${encodeURIComponent(sessionId)}`}>Download Toolkit Web App (ZIP)</a>
        </div>
      </main>
    );
  } catch (e) {
    return (
      <main className="wrap">
        <h1>Verification error</h1>
        <div className="notice">We couldn’t verify payment automatically. Please contact support and we’ll resolve it quickly.</div>
        <p><Link className="btn" href="/toolkit">Back to Toolkit</Link></p>
      </main>
    );
  }
}
