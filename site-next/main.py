// lib/analytics/performance.ts
import { unstable_cache } from 'next/cache'
import { headers } from 'next/headers'

export interface PerformanceMetrics {
  ttfb: number
  fcp: number
  lcp: number
  cls: number
  fid: number
  navigationType: string
}

export const trackPerformance = unstable_cache(
  async (route: string, metrics: Partial<PerformanceMetrics>) => {
    const headersList = await headers()
    const userAgent = headersList.get('user-agent') || ''
    
    // Log to your analytics service
    await fetch('https://api.analytics.com/performance', {
      method: 'POST',
      body: JSON.stringify({
        route,
        metrics,
        userAgent,
        timestamp: new Date().toISOString(),
      }),
    })
    
    return true
  },
  ['performance-tracking'],
  {
    revalidate: 3600, // Cache for 1 hour
    tags: ['analytics'],
  }
)