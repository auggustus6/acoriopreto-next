/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "https://instagram.**" }],
  },
  // Enables the styled-components SWC transform
};

module.exports = nextConfig;
