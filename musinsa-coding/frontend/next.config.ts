import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  rewrites: async () => [
    { source: "/api/:path*", destination: "http://localhost:3001/api/:path*" },
  ],
};

export default withVanillaExtract(nextConfig);
