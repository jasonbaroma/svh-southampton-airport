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
    canonical: `/${slugifyLocation("Hamble-le-Rice")}`,
  },
} satisfies Metadata;

export default function LocationPage() {
  const locationLinks = buildLocationLinks("Hamble-le-Rice");
  const heroImage = { src: "/images/location2-image1.jpeg", alt: "Hire van near the waterfront in Hamble-le-Rice" };
  const supportImage = { src: "/images/location2-image2.jpeg", alt: "Rental vehicle on a road leading into Hamble-le-Rice" };
  const faqs = [
    { question: "Do you provide vehicle hire for Hamble-le-Rice?", answer: "Yes, we can help arrange vehicle hire for Hamble-le-Rice, including vans, cars, minibuses and trucks subject to availability and booking details." },
    { question: "What type of hire vehicle suits Hamble-le-Rice roads best?", answer: "Yes, many people hire a van for collecting furniture, DIY supplies, or larger purchases from nearby retail areas." },
    { question: "Can I book a van in Hamble-le-Rice for marina or boatyard work?", answer: "In many cases, yes. We aim to offer flexible rental lengths for both short-term and longer bookings." },
    { question: "Is longer vehicle hire available in Hamble-le-Rice?", answer: "Yes, many Hamble-le-Rice customers hire for more than a day. The best option depends on the vehicle type, dates and intended use." },
    { question: "How do I know what vehicle size to book?", answer: "Think about load size, passenger numbers, route type, and parking space at both ends of the journey. We can help if you are unsure." },
  ];
  const trustCards = [
    { title: "Convenient Local Service", description: "Free delivery and collection helps keep vehicle hire convenient around Hamble and nearby areas.", icon: ShieldCheck },
    { title: "Flexible Hire Terms", description: "From one-day bookings to longer business use, we offer rental periods that fit the job.", icon: Star },
    { title: "More Than Just Vans", description: "Our range covers small practical vehicles through to larger options for heavier transport needs.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Vans for retail collections, moving jobs, business deliveries, and practical local use." },
    { value: "Van Hire", label: "Cars for commuting, appointments, airport travel, and everyday flexibility." },
    { value: "Minibus Hire", label: "Minibuses for events, family groups, team transport, and shared travel plans." },
    { value: "Truck Hire", label: "Trucks for larger carrying jobs and heavier-duty transport requirements." },
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
    { icon: BadgePoundSterling, title: "Flexible vehicle range", description: "Choose a vehicle that suits shopping collections, home projects, business journeys, or larger transport needs.", detail: "From a simple car booking to a van, minibus, or truck, the aim is to match the hire to the actual task." },
    { icon: Clock3, title: "Convenience that matters", description: "Useful for Hamble-le-Rice bookings where timing, space and easy local access all matter.", detail: "Delivery and collection options can be especially useful when schedules are tight." },
    { icon: CheckCircle2, title: "Well connected for travel", description: "A practical option for Hamble-le-Rice residents, marine businesses and customers travelling beyond the peninsula.", detail: "That is valuable for customers moving goods, travelling for work, or organising group journeys across the South." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle Hire in Hamble-le-Rice"}</h1>
                <p className="text-xl text-white">{"Self-drive van, car, minibus and truck hire for Hamble-le-Rice, with maintained vehicles, flexible rental options and straightforward support."}</p>
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
                  {"Quick to arrange"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Easy booking for Hamble-le-Rice vehicle hire"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Arranging vehicle hire in Hamble-le-Rice should feel straightforward. We help customers book suitable vans, cars, minibuses and trucks for local journeys, business tasks and longer trips, with flexible rental periods and clear support."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Well suited to busy schedules"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Broad self-drive choice"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A reliable choice for Hamble-le-Rice hire"}</h2>
            <p className="text-lg text-muted-foreground">{"Customers in Hamble-le-Rice value practical advice, dependable vehicles and a rental service that understands local access needs as well as wider travel requirements."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Vehicle types available"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Hire vehicles available for Hamble-le-Rice"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"From compact cars to practical vans, minibuses and trucks, our Hamble-le-Rice service gives customers access to the right type of vehicle for the journey or workload ahead."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Hamble-le-Rice vehicle hire"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Practical hire solutions for Hamble-le-Rice"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Southern Van Hire provides practical self-drive vehicle hire for Hamble-le-Rice, covering everything from small personal jobs to more demanding business use. Whether you need a van for tools and equipment, a car for reliable travel or a larger vehicle for specialist transport, we keep the process simple."}</p>
            <p>{"Because Hamble-le-Rice sits on a narrower peninsula route, choosing the right vehicle matters. Customers often need something easy to manage around local streets, waterside properties and marina access points, while still having enough load space for the job."}</p>
            <p>{"Hire demand in Hamble-le-Rice is often linked to boating, maintenance work, home improvement, event logistics and airport or station transfers for groups. That means flexibility is important, and we aim to offer rental periods that fit real schedules rather than forcing a one-size-fits-all approach."}</p>
            <p>{"Our service is also useful for businesses around Hamble-le-Rice that need extra transport at short notice or for planned periods. With maintained vehicles and straightforward support, we help keep personal and commercial bookings manageable from the outset."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Hamble-le-Rice advantages"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Why hire with us in Hamble-le-Rice"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Hamble-le-Rice customers often need a rental vehicle that works around marina access, home projects and straightforward travel plans. We focus on useful vehicle choice, flexible hire terms and service that keeps things moving."}</p>
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
                  <Image src={vehicle.src} alt={vehicle.alt} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Other hire areas near Hamble-le-Rice"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Hamble-le-Rice is not your only option, we also cover nearby areas that are practical for the south side of Southampton and the eastern waterside villages."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Wide Vehicle Choice"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Choose from practical cars, vans, minibuses and trucks for short local jobs, planned trips or longer business use."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Well Maintained Fleet"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our hire vehicles are prepared to a good working standard so you can book with confidence for everyday transport needs."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Simple, Flexible Booking"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"We keep the process straightforward, with flexible hire periods and helpful support for both personal and business customers."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving and hire tips for Hamble-le-Rice"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local driving notes for planning vehicle hire around Hamble-le-Rice, from village roads to practical loading and onward travel."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Hamble-le-Rice is a practical place to collect a hire vehicle if you need easy access around the village and out toward the wider South Hampshire road network. Local trips often begin on smaller roads, so it helps to allow a little extra time when setting off, especially if you are driving a larger van, minibus or truck for the first time."}</p>
            <p className="text-base leading-8 text-slate-600">{"Within Hamble-le-Rice, roads such as Beaulieu Road, Baron Road and Coach Road are useful local references when planning collection, delivery or loading arrangements. These village routes can be tighter and quieter than main through roads, so careful parking and sensible route planning make the day much easier, particularly for home moves, furniture collection and trade jobs."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are hiring for marina access, household clear-outs or business transport, it is worth thinking ahead about where you will stop, turn and unload before you travel. In Hamble-le-Rice, a smaller vehicle can suit local errands and passenger trips, while a medium or larger van is often the better option when you need more carrying space without making multiple runs."}</p>
            <p className="text-base leading-8 text-slate-600">{"For longer journeys beyond Hamble-le-Rice, many drivers prefer to get organised before leaving the village by checking fuel, loading security and directions in advance. That simple preparation is especially helpful when you are on a timed job, heading to an event, or making onward deliveries where a straightforward, no-hassle journey matters."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Hamble-le-Rice questions"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Hamble-le-Rice vehicle hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Answers to common questions about arranging vehicle hire in Hamble-le-Rice, including suitable vehicle types and typical booking needs."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Arrange your Hamble-le-Rice booking"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Need a hire vehicle in Hamble-le-Rice? We offer practical options for local residents, marine businesses and customers travelling across the wider Southampton area."}</p>
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




