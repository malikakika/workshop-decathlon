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
  trailingSlash: true, // ✅ Ajoute un `/` à la fin des URLs pour éviter les erreurs de routage
  output: 'standalone', // ✅ Utile si tu utilises un hébergement type Render, Vercel ou Netlify
}));

module.exports = nextConfig;
