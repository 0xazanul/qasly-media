/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['placehold.co'],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
}

module.exports = nextConfig 