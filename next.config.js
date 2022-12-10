/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoicGV0aGVyZW0iLCJhIjoiY2t0bDdsZjNjMDZ5ZzJ1bzZzOTVrcThtcCJ9.RPfTeUsfK5Xzl09POvuPgw'
  }
}

module.exports = nextConfig
