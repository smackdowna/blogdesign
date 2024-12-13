// next.config.js
const nextConfig  = {
    images: {
      domains: ['images.pexels.com', 'ik.imagekit.io'],
      formats: ['image/webp'],
    },
    reactStrictMode: true,
    experimental: {
      appDir: true, // Required for the app router
    },
  };

  export default nextConfig;