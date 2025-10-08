/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export configuration for Vercel
  images: {
    domains: ['localhost']
  }
}

module.exports = nextConfig
