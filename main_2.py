// src/lib/utils.ts - Utility functions
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// SEO helper
export function generateMetadata({
  title,
  description,
  image = '/og-image.jpg',
  noIndex = false,
}: {
  title: string
  description: string
  image?: string
  noIndex?: boolean
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  }
}