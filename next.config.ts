import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  agentRules: false,
  allowedDevOrigins: ["127.0.0.1"],
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/field-and-form",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
