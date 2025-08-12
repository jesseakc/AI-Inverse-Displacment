// Enhanced next.config.ts for migration
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
    ppr: true, // Partial Prerendering for optimal performance
  },
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY || 'default',
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL || 'http://localhost:3001'}/api/:path*`
      }
    ]
  }
}