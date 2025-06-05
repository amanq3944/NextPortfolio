/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.icons8.com', 'cdn.pixabay.com'],
  },
  experimental: {
    externalDir: true,
  },
  transpilePackages: ["framer-motion"],
};

module.exports = nextConfig;
