/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Set to true only if you use static export or a host that can't run Next image optimization
    unoptimized: false,
  },
}

export default nextConfig
