/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/about",
        has: [
          {
            type: "host",
            value: "wells.hopto.org"
          },
        ],
        destination: "/asimov",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "wells.hopto.org"
          },
        ],
        destination: "/asimov",
      },
      ],
    }

    // return {
    //   afterFiles: [
    //     {
    //       source: "/",
    //       destination: "/asimov",
    //     },
    //     {
    //       source: "/asimov",
    //       destination: "/asimov",
    //     },
        
    //   ]
    // }
    }
}

module.exports = nextConfig
