import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Якщо використовуєш <Image />, інакше воно не буде працювати
  },
  basePath: '/amznukraine', // !!! Якщо твій репозиторій НЕ на custom domain
  assetPrefix: '/amznukraine',
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
