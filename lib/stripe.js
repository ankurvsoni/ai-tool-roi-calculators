export async function fetchCheckoutSession(sessionId) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error('Missing STRIPE_SECRET_KEY');
  if (!sessionId) throw new Error('Missing session_id');

  const res = await fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Stripe API error: ${res.status} ${text}`);
  }

  return res.json();
}

export function isPaidSession(session) {
  return session?.payment_status === 'paid' || session?.status === 'complete';
}
