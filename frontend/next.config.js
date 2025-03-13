const { withNx } = require('@nx/next');
const withPWA = require('next-pwa');

const nextConfig = withNx(withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
  },
  images: {
    domains: ['your-image-host.com'], // Assure-toi que toutes les images proviennent de sources autorisées
  },
  experimental: {
    forceSwcTransforms: true, // Optimisation supplémentaire
  },
}));

module.exports = nextConfig;
