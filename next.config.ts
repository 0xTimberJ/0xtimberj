import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pocketbase.0xtimberj.com",
      },
    ],
  },
};

export default nextConfig;
