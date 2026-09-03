import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
      },
      {
        protocol: 'https',
        hostname: 'i1.sndcdn.com',
      },
    ],
  },
};

export default nextConfig;