import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static site: no SSR, no API routes, no middleware. Emits ./out for Firebase Hosting.
  output: 'export',
  // Directory URLs (/ and /404/) so Firebase's cleanUrls serves them without a redirect.
  trailingSlash: true,
  // next/image needs a server-side optimizer, which a static export has no room for.
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
