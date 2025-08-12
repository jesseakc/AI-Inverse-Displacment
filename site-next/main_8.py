// lib/analytics.ts
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export function AnalyticsProvider() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

// lib/web-vitals.ts
export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV !== 'production') return;
  
  // Send to analytics
  analytics.track('Web Vital', {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
  });
}