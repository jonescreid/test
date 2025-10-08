/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export configuration for Vercel
  images: {
    unoptimized: false,
    domains: ['localhost']
  }
}

module.exports = nextConfig
