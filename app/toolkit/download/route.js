import fs from 'fs';
import path from 'path';
import { fetchCheckoutSession, isPaidSession } from '@/lib/stripe';

export const runtime = 'nodejs';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return new Response('Missing session_id', { status: 400 });
  }

  try {
    const session = await fetchCheckoutSession(sessionId);
    if (!isPaidSession(session)) {
      return new Response('Payment not completed', { status: 403 });
    }

    const filePath = path.join(process.cwd(), 'secure-assets/toolkit/ai-roi-toolkit-v1.zip');
    if (!fs.existsSync(filePath)) {
      return new Response('File not found', { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="ai-roi-toolkit-v1.zip"',
        'Cache-Control': 'private, no-store',
      },
    });
  } catch (e) {
    return new Response('Verification failed', { status: 500 });
  }
}
