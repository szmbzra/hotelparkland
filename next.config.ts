import type { NextConfig } from "next";

// NOTE: security headers can't be set here under output: 'export' (no server
// to attach them to) — they're applied in nginx.conf instead.

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: 'export',
  // Allows the dev server to be reached over the LAN (e.g. 192.168.18.53:3000).
  // Without this, Next.js blocks cross-origin requests for /_next/* assets in dev,
  // so the page renders but React never hydrates (toggles/sliders silently do nothing).
  allowedDevOrigins: ['192.168.18.53'],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    unoptimized: true,
  },
};

export default nextConfig;
