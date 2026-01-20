/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the default output so that API route handlers (app/api/*) work on Vercel.
  // Removing `output: "export"` enables serverless functions, which are required
  // for the /api/send-message Telegram integration.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
