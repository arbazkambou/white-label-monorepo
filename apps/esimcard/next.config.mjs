/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui", "@workspace/core"],
  images: {
    qualities: [50, 60, 70, 80, 90],
  },
};

export default nextConfig;
