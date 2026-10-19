import type { NextConfig } from 'next';
import withPWA from '@ducanh2912/next-pwa';

const nextConfig: NextConfig = {
  // Legacy category URLs: .NET content moved from /dotnet → /backend and
  // Cloud content from /cloud → /devops. Keep old links working.
  async redirects() {
    return [
      { source: '/dotnet/:path*', destination: '/backend/:path*', permanent: true },
      { source: '/cloud/:path*', destination: '/devops/:path*', permanent: true },
    ];
  },
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
  cacheComponents: true,
  experimental: {
    staticGenerationMaxConcurrency: 8,
    useOffline: true,
  },
};

const pwaConfig = {
  dest: 'public',
  register: false,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_ENABLE_PWA_DEV !== 'true',
  maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
};

export default withPWA(pwaConfig)(nextConfig);
