/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "api.qrserver.com",
            },
        ],
    },
};

export default nextConfig;
