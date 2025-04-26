import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Якщо використовуєш <Image />, інакше воно не буде працювати
  },
  basePath: '/amznukraine.git', // !!! Якщо твій репозиторій НЕ на custom domain
  assetPrefix: '/amznukraine.git',
};

export default nextConfig;
