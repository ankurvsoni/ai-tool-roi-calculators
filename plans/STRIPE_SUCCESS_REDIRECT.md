# Stripe Payment Link Success Redirect (Required)

For toolkit link, set payment link success URL to:

`https://roi.orkolabs.com/toolkit/access?session_id={CHECKOUT_SESSION_ID}`

This ensures only verified paid sessions can access download.

## Environment variables required
- `STRIPE_SECRET_KEY` (live)
- `STRIPE_TEST_SECRET_KEY` (optional but recommended for test-mode verification)

Session routing:
- `cs_test_...` sessions are verified with `STRIPE_TEST_SECRET_KEY`
- live sessions are verified with `STRIPE_SECRET_KEY`
