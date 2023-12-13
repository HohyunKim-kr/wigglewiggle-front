/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID: process.env.WEB3_AUTH_CLIENT_ID,
  },
};

module.exports = nextConfig;
