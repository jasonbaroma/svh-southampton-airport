"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  return (
    <HomePage
      heroImage={{ slot: "image1", src: "/images/image1.jpeg", alt: "Clean lineup of modern hire vehicles near an airport access road in Southampton" }}
      supportImage={{ slot: "image2", src: "/images/image2.jpeg", alt: "Customer receiving keys during a practical van hire handover at a tidy pickup bay" }}
    />
  );
}
