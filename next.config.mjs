/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com'],
    },
    experimental: {
        appDir: true,
    },
    async redirects() {
        return [
            {
                source: '/b10gs/:slug',
                destination: '/blogs/:slug',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
