const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "commerceplate.netlify.app",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
