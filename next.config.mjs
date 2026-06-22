/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "office.amptechnology.in",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.amptechnology.in",
        port: "",
      },
      {
        hostname: "localhost",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
