/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: false,
  pwa: {
    dest: 'public',
  },
  images: {
    domains: ['thispersondoesnotexist.com'],
  },
}

module.exports = withPWA(nextConfig)
