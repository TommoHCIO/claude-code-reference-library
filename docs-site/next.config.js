/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/components/:path*',
        destination: '/docs/components/:path*',
      },
    ]
  },
}

module.exports = nextConfig