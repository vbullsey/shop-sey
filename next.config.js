/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ["."],
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["mediumrare.imgix.net", "images.unsplash.com"],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
});
