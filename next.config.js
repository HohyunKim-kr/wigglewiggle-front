/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID: process.env.WEB3_AUTH_CLIENT_ID,
    NEXT_PUBLIC_API_KEY: process.env.API_KEY,
    NEXT_PUBLIC_PRIVATE_KEY: process.env.PRIVATE_KEY,
  },
};

module.exports = nextConfig;
