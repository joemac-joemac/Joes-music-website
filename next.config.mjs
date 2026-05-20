/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Set to true only if you use static export or a host that can't run Next image optimization
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: "/shows/live-music-auckland-example",
        destination: "/#shows",
        permanent: true,
      },
      {
        source: "/shows/wedding-singer-hamilton",
        destination: "/#shows",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
