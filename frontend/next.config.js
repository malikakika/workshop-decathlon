// @ts-check

const { composePlugins, withNx } = require('@nx/next');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // Active la PWA en production uniquement
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
};

const plugins = [withNx, withPWA];

module.exports = composePlugins(...plugins)(nextConfig);
