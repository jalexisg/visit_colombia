import type { NextConfig } from "next";

// Use basePath only when NOT deploying to custom domain
// When using custom domain (www.visit-colombia.com), basePath should be empty
const useBasePath = process.env.NEXT_PUBLIC_USE_BASE_PATH === 'true';
const basePath = useBasePath ? '/visit_colombia' : '';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
