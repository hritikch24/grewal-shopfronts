import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from common external sources used in the project
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
      },
    ],
    // Serve modern formats where supported
    formats: ["image/avif", "image/webp"],
  },

  trailingSlash: false,

  // Strict mode catches common bugs during development
  reactStrictMode: true,

  // Compress responses
  compress: true,

  // Improve build output logging
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === "development",
    },
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'grewalshopfrontandshutters.co.uk' }],
        destination: 'https://www.grewalshopfrontandshutters.co.uk/:path*',
        permanent: true,
      },
      // Old PHP static pages
      { source: '/contact.php', destination: '/contact', permanent: true },
      { source: '/about.php', destination: '/about', permanent: true },
      { source: '/terms.php', destination: '/terms', permanent: true },
      { source: '/privacy.php', destination: '/privacy-policy', permanent: true },
      { source: '/blog.php', destination: '/blog', permanent: true },
      { source: '/portfolio.php', destination: '/gallery', permanent: true },
      { source: '/repair.php', destination: '/services/shopfront-repairs', permanent: true },
      { source: '/blog-single.php', destination: '/blog', permanent: true },
      // Old PHP service-detail pages with specific slug mappings
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'toughened-glass-shopfront' }], destination: '/services/glass-shopfronts', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'electric-roller-shutter' }], destination: '/services/roller-shutters', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'wicket-doors' }], destination: '/services/security-doors', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'sectional-overhead-doors' }], destination: '/services/roller-shutters', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'pedestrian-access-doors' }], destination: '/services/security-doors', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'pa-doors' }], destination: '/services/security-doors', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'automatic-shopfront' }], destination: '/services/automatic-doors', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'pvc-strip-curtains' }], destination: '/services/curtain-walling', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'fire-doors' }], destination: '/services/fire-doors', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'automatic-sliding-doors' }], destination: '/services/automatic-doors', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'steel-security-doors' }], destination: '/services/security-doors', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'aluminium-roller-shutter' }], destination: '/services/roller-shutters', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'security-roller-shutter' }], destination: '/services/roller-shutters', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'roller-shutter-doors' }], destination: '/services/roller-shutters', permanent: true },
      { source: '/service-detail.php', has: [{ type: 'query', key: 'slug', value: 'aluminium-shopfront' }], destination: '/services/aluminium-shopfronts', permanent: true },
      // Fallback for any other service-detail.php
      { source: '/service-detail.php', destination: '/services', permanent: true },
    ];
  },

  // Security headers applied to every route
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
