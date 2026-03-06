async function fetchSessionWithKey(sessionId, key) {
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

export async function fetchCheckoutSession(sessionId) {
  const liveKey = process.env.STRIPE_SECRET_KEY;
  const testKey = process.env.STRIPE_TEST_SECRET_KEY;
  if (!sessionId) throw new Error('Missing session_id');

  // Stripe test checkout sessions usually start with cs_test_
  if (sessionId.startsWith('cs_test_')) {
    if (!testKey) throw new Error('Missing STRIPE_TEST_SECRET_KEY for test session verification');
    return fetchSessionWithKey(sessionId, testKey);
  }

  if (!liveKey) throw new Error('Missing STRIPE_SECRET_KEY');
  return fetchSessionWithKey(sessionId, liveKey);
}

export function isPaidSession(session) {
  return session?.payment_status === 'paid' || session?.status === 'complete';
}
