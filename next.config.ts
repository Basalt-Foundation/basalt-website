import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/basalt-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
