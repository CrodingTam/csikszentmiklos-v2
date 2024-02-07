/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // toDo: remove it
  images: {
    remotePatterns: [{ protocol: "https", hostname: "source.unsplash.com" }],
  },
};

module.exports = nextConfig;
