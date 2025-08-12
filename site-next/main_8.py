// lib/monitoring/vercel-analytics.tsx
'use client'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export function VercelMonitoring() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}