import { slugifyLocation } from "@/lib/utils";

export const mainLocationLink = {
  label: "{{MAIN_LOCATION_NAME}}",
  href: "/",
};

const LOCATION_NAMES = [
  "{{LOCATION_1_NAME}}",
  "{{LOCATION_2_NAME}}",
  "{{LOCATION_3_NAME}}",
  "{{LOCATION_4_NAME}}",
  "{{LOCATION_5_NAME}}",
  "{{LOCATION_6_NAME}}",
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
