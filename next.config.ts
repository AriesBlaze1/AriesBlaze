import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/project.html', destination: '/work', permanent: true },
      { source: '/blog.html', destination: '/writing', permanent: true },
      { source: '/hire.html', destination: '/contact', permanent: true },
      { source: '/capability.html', destination: '/about', permanent: true },
      {
        source: '/work/:slug.html',
        destination: '/work/:slug',
        permanent: true,
      },
      { source: '/blog/:slug.html', destination: '/writing', permanent: true },
    ];
  },
};
export default config;
