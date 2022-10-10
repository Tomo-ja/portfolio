/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    EMAIL_KEY: process.env.EMAIL_KEY
  }
}

module.exports = nextConfig
