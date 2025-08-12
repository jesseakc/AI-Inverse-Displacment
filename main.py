// src/app/layout.tsx - Root layout optimized for migration
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: {
    template: '%s | Your Site',
    default: 'Welcome - Modern Next.js Site'
  },
  description: 'Modern, blazing-fast Next.js application migrated from your single-page website',
  keywords: ['nextjs', 'modern', 'web application', 'migration'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Company',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'Your Modern Next.js Site',
    description: 'Fast, SEO-optimized Next.js application',
    siteName: 'Your Site'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Modern Next.js Site',
    description: 'Fast, SEO-optimized Next.js application'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}