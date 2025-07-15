import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ["avatars.githubusercontent.com", "andriraymond.vercel.app", "www.gravatar.com"]
  }
};

export default nextConfig;
