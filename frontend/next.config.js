const { withNx } = require('@nx/next');
const withPWA = require('next-pwa');

const nextConfig = withNx(withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
}));

module.exports = nextConfig;