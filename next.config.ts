import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://vincent-vuram.vercel.app',
        permanent: true, // 308 redirect (SEO friendly)
      },
    ]
  },
};

export default nextConfig;
