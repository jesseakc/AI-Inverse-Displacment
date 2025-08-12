// components/experiment-provider.tsx
'use client';
import { GrowthBookProvider } from '@growthbook/growthbook-react';

export function ExperimentProvider({ children }: { children: React.ReactNode }) {
  return (
    <GrowthBookProvider>
      {children}
    </GrowthBookProvider>
  );
}

// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ExperimentProvider>
          {children}
        </ExperimentProvider>
      </body>
    </html>
  );
}