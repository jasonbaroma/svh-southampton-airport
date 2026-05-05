import { slugifyLocation } from "@/lib/utils";

export const mainLocationLink = {
  label: "Southampton Airport",
  href: "/",
};

const LOCATION_NAMES = [
  "Bursledon",
  "Hamble-le-Rice",
  "Marchwood",
  "Hedge End",
  "Netley",
  "Botley",
] as const;

export const nearbyLocationLinks = LOCATION_NAMES.map((label) => ({
  label,
  href: `/${slugifyLocation(label)}`,
}));

export function buildLocationLinks(currentLocationLabel?: string) {
  const currentSlug = currentLocationLabel ? slugifyLocation(currentLocationLabel) : "";
  const filteredNearbyLinks = nearbyLocationLinks.filter(
    (location) => location.href !== `/${currentSlug}`,
  );

  return [mainLocationLink, ...filteredNearbyLinks];
}

export const locationSlugEntries = LOCATION_NAMES.map((label, index) => ({
  index: index + 1,
  label,
  slug: slugifyLocation(label),
}));
