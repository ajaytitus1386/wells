/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "wells.hopto.org",
            },
          ],
          destination: "/asimov",
        }
      ]
    }
    }
}

module.exports = nextConfig
