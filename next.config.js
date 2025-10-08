/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper configuration for Vercel
  images: {
    unoptimized: false,
    domains: ['localhost', 'vercel.app']
  },
  // Ensure proper routing
  trailingSlash: false,
  // Enable experimental features if needed
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
