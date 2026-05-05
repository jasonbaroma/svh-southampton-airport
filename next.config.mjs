import path from "node:path";
import { fileURLToPath } from "node:url";

const templateRoot = path.dirname(fileURLToPath(import.meta.url));
const locationNames = [
  "Bursledon",
  "Hamble-le-Rice",
  "Marchwood",
  "Hedge End",
  "Netley",
  "Botley",
];

function slugifyLocation(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: templateRoot,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return locationNames.map((locationName, index) => ({
      source: `/location${index + 1}`,
      destination: `/${slugifyLocation(locationName)}`,
      permanent: true,
    }));
  },
}

export default nextConfig
