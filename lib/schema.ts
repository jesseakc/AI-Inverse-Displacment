import { Metadata } from 'next';

export interface SchemaOrgData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  [key: string]: unknown;
}

export const createWebSiteSchema = (): SchemaOrgData => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AI Inverse Displacement Theory',
  description: 'Understanding why AI will disrupt knowledge work before manual labor, based on Jesse Campbell\'s groundbreaking research.',
  url: 'https://inversedisplacement.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://inversedisplacement.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
});

export const createArticleSchema = (
  title: string,
  description: string,
  url: string,
  image?: string,
  author?: string,
  datePublished?: string,
  dateModified?: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description: description,
  image: image || 'https://inversedisplacement.com/og-default.jpg',
  url: url,
  author: {
    '@type': 'Person',
    name: author || 'Jesse Campbell',
    url: 'https://inversedisplacement.com/about'
  },
  publisher: {
    '@type': 'Organization',
    name: 'AI Inverse Displacement Theory',
    logo: {
      '@type': 'ImageObject',
      url: 'https://inversedisplacement.com/logo.png'
    }
  },
  datePublished: datePublished || new Date().toISOString(),
  dateModified: dateModified || new Date().toISOString(),
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url
  }
});

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AI Inverse Displacement Theory',
  url: 'https://inversedisplacement.com',
  logo: 'https://inversedisplacement.com/logo.png',
  description: 'Research and insights on AI\'s impact on knowledge work and employment displacement patterns.',
  sameAs: [
    'https://twitter.com/inversedisplacement',
    'https://linkedin.com/company/inversedisplacement',
    'https://github.com/jesseakc/ai-inverse-displacement'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'technical support',
    email: 'hello@inversedisplacement.com',
    url: 'https://inversedisplacement.com/contact'
  }
});

export const createMetadata = (
  title: string,
  description: string,
  keywords: string[] = []
): Metadata => ({
  title,
  description,
  keywords: [
    'AI displacement',
    'knowledge work automation',
    'job displacement theory',
    'AI impact on employment',
    'inverse displacement theory',
    ...keywords
  ],
  authors: [{ name: 'Jesse Campbell' }],
  creator: 'Jesse Campbell',
  publisher: 'AI Inverse Displacement Theory',
  openGraph: {
    title,
    description,
    url: 'https://inversedisplacement.com',
    siteName: 'AI Inverse Displacement Theory',
    images: [
      {
        url: 'https://inversedisplacement.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Inverse Displacement Theory'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['https://inversedisplacement.com/twitter-card.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'google-site-verification-code'
  }
});