/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  async headers() {
     return [
        {
           source: '/:path*',
           headers: [
              { key: 'referrer-policy', value: 'no-referrer'}
           ]
        }
     ]
  },
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
  })
}

module.exports = nextConfig
