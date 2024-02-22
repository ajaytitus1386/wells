/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "https://wells.hopto.org",
          destination: "/asimov",
        }
      ]
    }
    }
}

module.exports = nextConfig
