/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/market-place",
        destination: "/market-place/free",
        permanent: false,
      },
    ];
  },
  env: {
    NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID: process.env.WEB3_AUTH_CLIENT_ID,
    NEXT_PUBLIC_ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
    NEXT_PUBLIC_PRIVATE_KEY: process.env.PRIVATE_KEY,
    NEXT_PUBLIC_PINATA_API_KEY: process.env.PINATA_API_KEY,
    NEXT_PUBLIC_PINATA_SECRET: process.env.PINATA_SECRET,
  },
};

module.exports = nextConfig;
