import type { NextConfig } from 'next';
import withPWA from '@ducanh2912/next-pwa';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sqlservertutorial.net',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  turbopack: {},
};

const pwaConfig = {
  dest: 'public',
  register: false,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_ENABLE_PWA_DEV !== 'true',
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
};

export default withPWA(pwaConfig)(nextConfig);
