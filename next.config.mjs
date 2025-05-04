import withTM from 'next-transpile-modules';

const withTranspileModules = withTM(['react-markdown', 'framer-motion', 'react-syntax-highlighter']);

/** @type {import('next').NextConfig} */
const nextConfig = withTranspileModules({
  basePath: '/sovanthoeun-portfolio',
  assetPrefix: '/sovanthoeun-portfolio',
  output: 'export',
  images: {
    unoptimized: true,
  },
});

export default nextConfig;