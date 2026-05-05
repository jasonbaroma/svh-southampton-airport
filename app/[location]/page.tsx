import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LocationPage1 from "@/app/location1/page";
import LocationPage2 from "@/app/location2/page";
import LocationPage3 from "@/app/location3/page";
import LocationPage4 from "@/app/location4/page";
import LocationPage5 from "@/app/location5/page";
import LocationPage6 from "@/app/location6/page";
import { locationSlugEntries } from "@/lib/location-links";

const locationPages = [
  LocationPage1,
  LocationPage2,
  LocationPage3,
  LocationPage4,
  LocationPage5,
  LocationPage6,
];

export function generateStaticParams() {
  return locationSlugEntries.map((entry) => ({
    location: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;

  return {
    alternates: {
      canonical: `/${location}`,
    },
  };
}

export default async function LocationSlugPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const match = locationSlugEntries.find((entry) => entry.slug === location);

  if (!match) {
    notFound();
  }

  const PageComponent = locationPages[match.index - 1];
  return <PageComponent />;
}
