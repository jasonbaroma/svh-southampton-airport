"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  return (
    <HomePage
      heroImage={{ slot: "image1", src: "/images/image1.jpeg", alt: "{{IMAGE_1_ALT}}" }}
      supportImage={{ slot: "image2", src: "/images/image2.jpeg", alt: "{{IMAGE_2_ALT}}" }}
    />
  );
}
