/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname:"images.pexels.com"}
        ],
    },
    // basePath: '/app',
};

export default nextConfig;
