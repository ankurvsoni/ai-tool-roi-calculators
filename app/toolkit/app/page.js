import Link from 'next/link';
import ToolkitAppClient from './ToolkitAppClient';
import { fetchCheckoutSession, isPaidSession } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export default async function ToolkitAppPage({ searchParams }) {
  const sessionId = searchParams?.session_id;
  if (!sessionId) {
    return (
      <main className="wrap">
        <h1>Payment confirmation needed</h1>
        <div className="notice">Please complete checkout first to access the toolkit app.</div>
        <Link className="btn" href="/toolkit">Back to Toolkit</Link>
      </main>
    );
  }

  try {
    const session = await fetchCheckoutSession(sessionId);
    if (!isPaidSession(session)) {
      return (
        <main className="wrap">
          <h1>Payment not completed</h1>
          <div className="notice">We could not confirm payment for this session.</div>
          <Link className="btn" href="/toolkit">Back to Toolkit</Link>
        </main>
      );
    }
  } catch {
    return (
      <main className="wrap">
        <h1>Verification error</h1>
        <div className="notice">We couldn’t verify this payment session.</div>
        <Link className="btn" href="/toolkit">Back to Toolkit</Link>
      </main>
    );
  }

  return <ToolkitAppClient />;
}
