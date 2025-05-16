import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    minimumCacheTTL: 2678400,
    formats: ["image/webp"],
  },
};

export default nextConfig;
