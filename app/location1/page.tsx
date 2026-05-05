"use client";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { mainLocationName } from "@/lib/company";
import { phoneDisplay, phoneHref } from "@/lib/contact";
import { buildLocationLinks } from "@/lib/location-links";
import { slugifyLocation } from "@/lib/utils";
import {
  BadgePoundSterling,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export const metadata = {
  alternates: {
    canonical: `/${slugifyLocation("Bursledon")}`,
  },
} satisfies Metadata;

export default function LocationPage() {
  const locationLinks = buildLocationLinks("Bursledon");
  const heroImage = { src: "/images/location1-image1.jpeg", alt: "Rental van parked near the waterfront area in Bursledon" };
  const supportImage = { src: "/images/location1-image2.jpeg", alt: "Hire vehicle on a local road through Bursledon" };
  const faqs = [
    { question: "What can I hire in Bishopstoke?", answer: "Yes, Bishopstoke customers can arrange vans, cars, minibuses, and trucks depending on the type of journey or job." },
    { question: "Can the vehicle be delivered in Bishopstoke?", answer: "Yes, delivery and collection can often be arranged, which is useful if you want to avoid extra travel before or after the hire." },
    { question: "What are Bishopstoke hires commonly used for?", answer: "Many Bishopstoke hires are for home moves, furniture pickup, business deliveries, airport-related travel, and temporary transport cover." },
    { question: "Is longer vehicle hire available in Bishopstoke?", answer: "In many cases, yes. We can usually help with both shorter bookings and longer rental periods, subject to availability." },
    { question: "How do I choose the right hire vehicle?", answer: "Choose based on what you are carrying, the distance, and the roads involved. If you are unsure, we can help you select a sensible option." },
  ];
  const trustCards = [
    { title: "Maintained vehicles", description: "Vehicles are prepared with reliability and everyday usability in mind, whether the hire is personal or business-related.", icon: ShieldCheck },
    { title: "Straightforward service", description: "We help keep the booking process clear so Bishopstoke customers can arrange transport without unnecessary complications.", icon: Star },
    { title: "Flexible hire support", description: "From short local jobs to longer runs across the region, we offer practical flexibility where possible.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Vans suited to moves, deliveries, and bulky collections around Bishopstoke and beyond." },
    { value: "Van Hire", label: "Cars for everyday travel, local appointments, and practical short-notice transport." },
    { value: "Minibus Hire", label: "Minibuses for family trips, sports travel, and organised group journeys." },
    { value: "Truck Hire", label: "Trucks for larger loads, business transport, and jobs that need extra carrying capacity." },
  ];
  const vehicleCards = [
    { src: "/images/smallvan1.jpg", alt: "Small van hire vehicle", title: "Small Vans" },
    { src: "/images/mediumvan1.jpg", alt: "Medium van hire vehicle", title: "Medium Vans" },
    { src: "/images/largevan1.jpg", alt: "Large van hire vehicle", title: "Large Vans" },
    { src: "/images/lutonboxvan.jpg", alt: "Luton box van hire vehicle", title: "Box Van With Tail Lift" },
    { src: "/images/tippervan.jpg", alt: "Tipper van hire vehicle", title: "Tipper Van" },
    { src: "/images/dropsidevan1.jpg", alt: "Dropside van hire vehicle", title: "Dropside Van" },
    { src: "/images/12seaterminibushire.jpg", alt: "12 seater minibus hire vehicle", title: "Minibus Hire" },
    { src: "/images/7.5tonnecurtainsidehire.jpg", alt: "7.5 tonne curtainside truck hire vehicle", title: "Truck Hire" },
  ];
  const benefits = [
    { icon: BadgePoundSterling, title: "Right-sized vehicle choice", description: "Get a vehicle that suits the task, whether it is a house move, a furniture collection, or business transport.", detail: "That includes vans for bulky loads, cars for everyday travel, minibuses for group trips, and trucks where more capacity is needed." },
    { icon: Clock3, title: "Convenient scheduling", description: "Local customers often need a hire that fits around work, family commitments, or moving dates rather than fixed depot routines.", detail: "Flexible booking periods and convenient arrangements help make that easier." },
    { icon: CheckCircle2, title: "Useful local access", description: "Bishopstoke is well placed for Eastleigh, Southampton, and Winchester routes, so a dependable hire vehicle makes a real difference on busy days.", detail: "We focus on maintained vehicles and straightforward support so you can get on the road with confidence." },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-white">
          <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
            <Image
              src="/images/SouthernVanHireLogo.png"
              alt="Southern Van Hire"
              width={208}
              height={52}
              className="h-[3.25rem] w-auto"
            />
            <span className="text-[#00B395]">{mainLocationName}</span>
          </a>
          <div className="hidden items-center gap-3 md:flex">
            <details className="group relative z-50">
              <summary className="inline-flex h-9 cursor-pointer list-none items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20">
                <MapPin className="h-4 w-4" />
                Locations
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-md border bg-white p-1 text-slate-900 shadow-lg">
                {locationLinks.map((location) => (
                  <Link key={location.href} href={location.href} className="block rounded-sm px-3 py-2 text-sm transition hover:bg-slate-100">
                    {location.label}
                  </Link>
                ))}
              </div>
            </details>
            <Button className="bg-[#00B395] text-white hover:bg-[#00997f]" asChild>
              <a href={phoneHref} className="inline-flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                <span>Book Now</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden pb-20 pt-32 text-white">
        <Image src={heroImage.src} alt={heroImage.alt} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-900/45" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle hire in Bursledon made simple"}</h1>
                <p className="text-xl text-white">{"Flexible self-drive van, car, minibus and truck hire for Bursledon, with practical service, maintained vehicles and straightforward booking support."}</p>
                <Button size="lg" className="w-fit bg-[#00B395] text-white hover:bg-[#00997f]" asChild>
                  <a href={phoneHref}>Book Now</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-[#0f6b31]/30">
                <Image src={supportImage.src} alt={supportImage.alt} fill className="object-cover" sizes="420px" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-12 px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border border-[#00B395]/15 bg-[#eefcf8] shadow-[0_24px_60px_-24px_rgba(0,179,149,0.35)]">
            <div className="flex flex-col gap-6 p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00B395]/25 bg-white px-3 py-1 text-sm font-medium text-[#00B395]">
                  <PhoneCall className="h-4 w-4" />
                  {"Simple local booking"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Simple vehicle hire for Bursledon"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Booking vehicle hire in Bursledon should be clear and practical. We help arrange the right van, car, minibus or truck for the job, with flexible rental periods and support that works around local homes, businesses and travel plans."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Delivery and collection available"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Short and longer hires"}
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full rounded-full bg-[#00B395] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#00B395]/25 transition hover:-translate-y-0.5 hover:bg-[#00997f] md:w-auto" asChild>
                <a href={phoneHref}>Call Us Now: {phoneDisplay}</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="trust" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">{"Trusted by drivers in Bursledon"}</h2>
            <p className="text-lg text-muted-foreground">{"Bursledon customers choose us for practical service, well-kept vehicles and flexible hire support that suits both domestic and business bookings."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {trustCards.map((item) => (
              <Card key={item.title} className="border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]">
                <div className="mb-6 inline-flex rounded-2xl bg-[#00B395]/10 p-4 text-[#00B395]">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#00B395]">{item.title}</h3>
                <p className="mb-5 text-base leading-7 text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Hire options in Bishopstoke"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Vehicle types available in Bursledon"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Our Bursledon service covers more than standard van rental, giving local drivers and businesses access to a broader mix of self-drive vehicles for different jobs."}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#00B395] text-white hover:bg-[#00997f]" asChild>
                <a href={phoneHref}>No Hassle Booking {phoneDisplay}</a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureStats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]">
                <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local vehicle hire"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Dependable hire options across Bursledon"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"If you need vehicle hire in Bursledon, Southern Van Hire offers a practical range for everyday transport, business use and one-off jobs. From small vans for local collections to larger vehicles for heavier loads, the focus is on matching you with something useful rather than overcomplicating the booking."}</p>
            <p>{"Bursledon is well placed for travel between Southampton, Fareham and the M27 corridor, so customers often hire for furniture pickup, equipment runs, temporary fleet support and planned house moves. We keep the process straightforward, with flexible hire periods and vehicles prepared for reliable self-drive use."}</p>
            <p>{"We also support Bursledon customers who need more than van hire. Cars are ideal when your own vehicle is unavailable or when you need a clean, dependable option for local and longer-distance travel. Minibuses can help with group transport, while trucks are available for larger commercial tasks where extra capacity matters."}</p>
            <p>{"What matters most is dependable service. That means well-maintained vehicles, sensible booking support and hire options that work for both personal and business customers in Bursledon without unnecessary hassle."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why Bishopstoke customers book"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Why Bursledon drivers book with us"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Bursledon customers often need a hire vehicle that fits around work, home moves and day-to-day transport without wasted time. Our service is built to keep booking simple, vehicle choice practical and collection arrangements straightforward."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(0,179,149,0.35)]">
                <div className="mb-6 flex w-full items-center gap-3 rounded-2xl bg-[#00B395]/10 px-4 py-4 text-left text-[#00B395] transition group-hover:bg-[#00B395] group-hover:text-white">
                  <item.icon className="h-7 w-7 shrink-0" />
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                </div>
                <p className="flex-1 text-base leading-7 text-slate-600">{item.description}</p>
                <p className="mt-6 text-base leading-7 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {vehicleCards.map((vehicle) => (
              <div key={vehicle.title} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.2)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={vehicle.src}
                    alt={vehicle.alt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <h3 className="min-h-[4rem] text-2xl font-bold tracking-tight text-slate-950">{vehicle.title}</h3>
                  <a href={phoneHref} className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#00B395] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00997f]">
                    <PhoneCall className="h-4 w-4" />
                    <span>Reserve Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Nearby Locations"}</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Other hire areas near Bursledon"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Bursledon is your base, you may also want to compare nearby hire coverage for surrounding villages and small towns along the Southampton and Fareham side of the M27."}</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {locationLinks.map((location) => (
              <Link key={location.href} href={location.href} className="rounded-full border border-[#00B395] bg-slate-50 px-6 py-3 text-base font-medium text-slate-700 transition hover:bg-[#00B395]/10">
                {location.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Useful for local and regional travel"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Bishopstoke customers hire vehicles for everything from quick local collections to larger jobs across Hampshire and beyond."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Prepared for the job ahead"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"A maintained hire vehicle helps reduce hassle when you are working to a move date, delivery slot, or business schedule."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Booking to match your timetable"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Flexible booking lengths make it easier to arrange transport for a day, a weekend, or a longer planned requirement."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving around Bursledon"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local driving notes for planning vehicle hire around Bursledon and its surrounding routes."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Bursledon works well for practical vehicle hire because it sits between village roads and wider connecting routes. If you are collecting for a home move, furniture pickup or work run, Bridge Road and West End Road are the most useful starting points for getting in and out without unnecessary detours."}</p>
            <p className="text-base leading-8 text-slate-600">{"Around the centre of Bursledon, roads such as Manley Road and Oak Road can feel narrower and more residential, so it helps to allow a little extra time when loading or turning a larger van. For smaller cars and short-wheelbase vans, local access is usually straightforward, especially when journeys are planned outside the busiest school and commuter periods."}</p>
            <p className="text-base leading-8 text-slate-600">{"For longer trips, many drivers use West End Road or Botley Road to join wider routes across this part of Hampshire. That makes Bursledon a practical base for jobs that start locally and then continue towards business parks, retail areas or residential addresses across the wider Southampton side of the region."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are hiring for deliveries or a one-day move, it is worth checking your loading point in advance, particularly on residential streets where parked cars can reduce space. A vehicle sized to the job, a clear route out towards Bridge Road or West End Road, and a little extra time for loading can make Bursledon collections and drop-offs much easier."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Bishopstoke FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Bursledon hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Useful answers for customers arranging vehicle hire in Bursledon, from booking and vehicle choice to practical collection and usage questions."}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 shadow-sm">
            {faqs.map((item, index) => (
              <details key={item.question} className="group border-b border-slate-200 last:border-b-0" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left text-lg font-semibold text-slate-950">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 text-base leading-7 text-slate-600">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#00B395] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold">{"Book your Bursledon hire vehicle"}</h2>
          <p className="mb-8 text-lg text-white/85">{"If you are planning vehicle hire in Bursledon, we can help you find a suitable option for personal or business use with practical booking support from start to finish."}</p>
          <Button size="lg" className="bg-white text-[#00B395] hover:bg-gray-100" asChild>
            <a href={phoneHref}>Book Now</a>
          </Button>
        </div>
      </section>

      <footer id="contact" className="border-t bg-gray-900 px-6 py-12 text-gray-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <Image
            src="/images/SouthernVanHireLogo.png"
            alt="Southern Van Hire"
            width={286}
            height={72}
            className="h-[4.55rem] w-auto"
          />
          <div className="flex items-center gap-3">
            <h4 className="text-2xl font-bold text-[#00B395]">{mainLocationName}</h4>
          </div>
          <p className="mt-4 max-w-md text-sm">{phoneDisplay}</p>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} SVH {mainLocationName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}




