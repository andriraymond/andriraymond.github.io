import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ["avatars.githubusercontent.com",
      "andriraymond.vercel.app",
      "www.gravatar.com",
      "academy.katalon.com",
      "udemy-certificate.s3.amazonaws.com",
      "media.licdn.com",
      "res.cloudinary.com"
    ]
  }
};

export default nextConfig;
