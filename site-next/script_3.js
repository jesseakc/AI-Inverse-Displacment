// lib/performance.ts
export function measurePerformance() {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          analytics.track('LCP', { value: entry.startTime });
        }
        if (entry.entryType === 'first-input') {
          analytics.track('FID', { value: entry.processingStart - entry.startTime });
        }
        if (entry.entryType === 'layout-shift') {
          analytics.track('CLS', { value: entry.value });
        }
      }
    });
    
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
    observer.observe({ type: 'first-input', buffered: true });
    observer.observe({ type: 'layout-shift', buffered: true });
  }
}