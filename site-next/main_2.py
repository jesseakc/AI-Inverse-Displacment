// app/api/search/route.ts
export const runtime = 'edge';
export const preferredRegion = 'iad1'; // Closest to user base

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});

export async function GET(request: Request) {
  const { success } = await ratelimit.limit('search_api');
  if (!success) {
    return new Response('Rate limit exceeded', { status: 429 });
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  
  const results = await fetch(`${SEARCH_API}/search?q=${query}`, {
    cache: 'force-cache',
    next: { revalidate: 300 }
  });
  
  return Response.json(await results.json());
}