/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // output: 'export', // Removed to enable SSR and API routes
};

export default nextConfig;
