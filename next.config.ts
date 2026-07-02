import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/k666-game",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
