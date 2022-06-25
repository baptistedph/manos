/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = {
  reactStrictMode: false,
  pwa: {
    dest: 'public',
  },
}

module.exports = withPWA(nextConfig)
