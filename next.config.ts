import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 31536000,
    formats: ["image/webp"],
    deviceSizes: [640, 1080, 1920],
    imageSizes: [128, 256, 384],
  },
};

export default nextConfig;
