const nextConfig = {
  distDir: "next-build",
  outputFileTracingRoot: process.cwd(),
  experimental: {
    webpackBuildWorker: false,
  },
};

export default nextConfig;
