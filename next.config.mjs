/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['clsx'],
  },
  images: { unoptimized: true }, // simple starter; can switch to Next/Image later
};
export default nextConfig;
