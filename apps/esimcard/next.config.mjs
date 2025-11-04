/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui", "@workspace/core"],
  reactCompiler: true,
  images: {
    qualities: [50, 60, 70, 80, 90],
    remotePatterns: [
      new URL("https://flagcdn.com/**"),
      new URL("https://portal.esimcard.com/**"),
    ],
  },
};

export default nextConfig;
