"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  return (
    <HomePage
      heroImage={{ slot: "image1", src: "/images/image1.jpeg", alt: "Rental van parked near Southampton Airport with coastal Hampshire surroundings" }}
      supportImage={{ slot: "image2", src: "/images/image2.jpeg", alt: "Mixed vehicle hire fleet ready for collection near Southampton Airport" }}
    />
  );
}
