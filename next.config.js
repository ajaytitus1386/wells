/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/asimov{/}?",
          destination: "https://wells.hopto.org",
        }
      ]
    }
    }
}

module.exports = nextConfig
