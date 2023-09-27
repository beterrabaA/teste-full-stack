/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: 'https://api.punkapi.com/v2',
  },
  images: {
    domains: ['images.punkapi.com'],
  },
}

module.exports = nextConfig
