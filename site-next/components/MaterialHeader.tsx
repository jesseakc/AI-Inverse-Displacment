'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Theory', href: '/ai-displacement-theory' },
  { name: 'Statistics', href: '/ai-displacement-statistics' },
  { name: 'Market Data', href: '/ai-job-market-data' },
  { name: 'Career Guide', href: '/ai-career-transition-guide' },
  { name: 'Calculator', href: '/ai-exposure-calculator' },
];

export default function MaterialHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b border-gray-200" role="banner">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="material-icons text-indigo-600 text-2xl">psychology</span>
              <span className="text-xl font-bold text-gray-900">
                AI Inverse Displacement
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open main menu</span>
              <span className="material-icons">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'AI Inverse Displacement Theory',
            url: 'https://inversedisplacement.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://inversedisplacement.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })
        }}
      />
    </header>
  );
}