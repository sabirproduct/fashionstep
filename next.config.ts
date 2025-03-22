/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export
  images: {
    unoptimized: true, // Required for static export
  },
  // If you are not using the app directory:
  // distDir: 'out', // Output directory
};

module.exports = nextConfig;