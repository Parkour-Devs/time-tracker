/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com'
      },
    ]
  }
}

module.exports = nextConfig
