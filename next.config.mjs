/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/portfolio/" : "",
  basePath: isProd ? "/portfolio" : "",
  output: "export",
};

export default nextConfig;
