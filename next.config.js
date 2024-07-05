const withExportImages = require("next-export-optimize-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  swcMinify: true,
  trailingSlash: true,
};

module.exports = withExportImages(nextConfig);
