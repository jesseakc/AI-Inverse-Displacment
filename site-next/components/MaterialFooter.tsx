import Link from 'next/link';

const footerLinks = {
  theory: [
    { name: 'Inverse Displacement Theory', href: '/ai-displacement-theory' },
    { name: 'Research Methodology', href: '/ai-displacement-theory#methodology' },
    { name: 'Case Studies', href: '/ai-displacement-theory#case-studies' },
  ],
  data: [
    { name: 'Real-time Statistics', href: '/ai-displacement-statistics' },
    { name: 'Job Market Data', href: '/ai-job-market-data' },
    { name: 'Salary Trends', href: '/ai-job-market-data#salaries' },
  ],
  tools: [
    { name: 'AI Exposure Calculator', href: '/ai-exposure-calculator' },
    { name: 'Career Transition Guide', href: '/ai-career-transition-guide' },
    { name: 'Software Engineer Impact', href: '/ai-software-engineer-jobs' },
  ],
  company: [
    { name: 'About Jesse Campbell', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function MaterialFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200" role="contentinfo">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="material-icons text-indigo-600 text-2xl">psychology</span>
              <span className="text-xl font-bold text-gray-900">
                AI Inverse Displacement
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Understanding why AI will disrupt knowledge work before manual labor, 
              based on groundbreaking research by Jesse Campbell.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/inversedisplacement" 
                className="text-gray-400 hover:text-indigo-600 transition-colors"
                aria-label="Follow on Twitter"
              >
                <span className="material-icons">twitter</span>
              </a>
              <a 
                href="https://linkedin.com/company/inversedisplacement" 
                className="text-gray-400 hover:text-indigo-600 transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <span className="material-icons">linkedin</span>
              </a>
              <a 
                href="https://github.com/jesseakc/ai-inverse-displacement" 
                className="text-gray-400 hover:text-indigo-600 transition-colors"
                aria-label="View on GitHub"
              >
                <span className="material-icons">code</span>
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-indigo-600 text-sm transition-colors"
                      aria-label={`Navigate to ${link.name}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 AI Inverse Displacement Theory. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-indigo-600 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-indigo-600 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
            },
            foundingDate: '2024',
            founder: {
              '@type': 'Person',
              name: 'Jesse Campbell',
              url: 'https://inversedisplacement.com/about'
            }
          })
        }}
      />

      {/* Schema.org WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'AI Inverse Displacement Theory',
            description: 'Understanding AI\'s impact on knowledge work and employment displacement',
            url: 'https://inversedisplacement.com',
            lastReviewed: new Date().toISOString(),
            reviewedBy: {
              '@type': 'Person',
              name: 'Jesse Campbell'
            }
          })
        }}
      />
    </footer>
  );
}