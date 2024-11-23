/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/Portfolioo',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
