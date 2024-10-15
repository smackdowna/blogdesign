/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/**',
            },
        ],
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