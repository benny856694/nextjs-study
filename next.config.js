// next.config.js
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['fakestoreapi.com'],
    },
    experimental: {
        appDir: true
    }
}