// next.config.js
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fakestoreapi.com', 'via.placeholder.com'],
  },
  experimental: {
    appDir: true,
  },
};
