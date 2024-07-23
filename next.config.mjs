import { NextFederationPlugin } from '@module-federation/nextjs-mf'
/** @type {import('next').NextConfig} */

process.env.NEXT_PRIVATE_LOCAL_WEBPACK = true;

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'cart',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './cart': './src/components/Cart',
        },
        extraOptions: {
          exposePages: true
        },
      })
    );
    return config;
  },
};

export default nextConfig;