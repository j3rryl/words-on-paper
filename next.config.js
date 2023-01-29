/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async ()=>{
    return [
      {
        source: '/imagestest',
        destination: '/events',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
