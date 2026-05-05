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
    canonical: `/${slugifyLocation("Marchwood")}`,
  },
} satisfies Metadata;

export default function LocationPage() {
  const locationLinks = buildLocationLinks("Marchwood");
  const heroImage = { src: "/images/location3-image1.jpeg", alt: "Rental van on a road near Marchwood and the Waterside area" };
  const supportImage = { src: "/images/location3-image2.jpeg", alt: "Hire vehicle travelling through Marchwood near local industrial routes" };
  const faqs = [
    { question: "Do you provide vehicle hire in Eastleigh for private and business customers?", answer: "Yes, we offer Eastleigh vehicle hire for both personal and business use, subject to availability and booking details." },
    { question: "Can I hire a vehicle in Eastleigh for more than a few days?", answer: "Yes, depending on the vehicle and your plans, longer hire periods can usually be arranged." },
    { question: "What types of vehicles can I hire in Eastleigh?", answer: "Our fleet includes vans, cars, minibuses and trucks, so we can help with different transport needs." },
    { question: "Is delivery and collection available around Eastleigh?", answer: "In many cases, yes. Delivery and collection can make the process easier, especially for busy households and businesses." },
    { question: "What licence do I need to hire a vehicle in Eastleigh?", answer: "A standard driving licence is often enough for many vehicles, but requirements vary by category and driver details." },
  ];
  const trustCards = [
    { title: "Useful fleet variety", description: "A broad selection of vehicles means we can support everything from simple local trips to larger transport jobs.", icon: ShieldCheck },
    { title: "Hire that works around you", description: "Flexible rental arrangements make it easier to book around work schedules, move dates and changing plans.", icon: Star },
    { title: "Straightforward support", description: "We focus on practical help, maintained vehicles and clear service rather than overcomplicating the booking.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Cars for everyday travel, business journeys and airport runs." },
    { value: "Van Hire", label: "Vans suited to moving, collections, deliveries and trade work." },
    { value: "Minibus Hire", label: "Minibuses for group outings, team travel and event transport." },
    { value: "Truck Hire", label: "Trucks for heavier loads and larger commercial transport tasks." },
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
    { icon: BadgePoundSterling, title: "Choice that fits the job", description: "Choose the right size vehicle without paying for more space than you need.", detail: "From compact cars to larger vans, minibuses and trucks, the aim is to match the booking to the job properly." },
    { icon: Clock3, title: "Hire terms with flexibility", description: "Vehicle hire can work around planned moves, business workloads and last-minute transport gaps.", detail: "Short and longer rental periods help if you need cover for a day, a project or seasonal demand." },
    { icon: CheckCircle2, title: "Straightforward from start to finish", description: "Good support and clear arrangements help keep the process straightforward from booking to return.", detail: "That means practical guidance, maintained vehicles and less unnecessary hassle on the day." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Reliable vehicle hire in Marchwood"}</h1>
                <p className="text-xl text-white">{"Van, car, minibus and truck hire for Marchwood, with maintained vehicles, flexible rental periods and practical service for personal and business use."}</p>
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
                  {"Easy booking for Eastleigh"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Straightforward vehicle hire in Marchwood"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Booking vehicle hire in Marchwood should be clear and efficient. We help arrange suitable vans, cars, minibuses and trucks for domestic jobs, commercial work and longer-distance travel without unnecessary complications."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Free delivery and collection"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Flexible self-drive hire"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A dependable option for Marchwood drivers"}</h2>
            <p className="text-lg text-muted-foreground">{"Marchwood customers rely on us for well-maintained vehicles, useful booking support and a straightforward rental service that suits real transport jobs."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Our hire range"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Vehicle rental options in Marchwood"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Our Marchwood vehicle hire service covers everyday transport, commercial support and larger-capacity needs with a broad self-drive fleet."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why hire with us"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Flexible hire for Marchwood work and travel"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Southern Van Hire supports customers in Marchwood with self-drive vehicles for both planned and last-minute transport needs. Whether you are moving stock, handling a home move or covering temporary business demand, we offer practical options across several vehicle types."}</p>
            <p>{"Marchwood is well connected for routes into Southampton and across the Waterside area, making it a useful base for local trade work, deliveries and collection runs. Many customers need vehicles that can cope with frequent loading, daily mileage and reliable access to nearby industrial and residential areas."}</p>
            <p>{"Van hire is a strong part of what we do in Marchwood, but it is not the whole picture. Cars are useful for personal travel and temporary replacement needs, minibuses suit group journeys, and trucks can help where a larger carrying capacity is required."}</p>
            <p>{"For customers in Marchwood, that means practical vehicle hire without unnecessary complication. Whether you need a van for a move, a car for short-term travel, a minibus for a group booking or a truck for heavier work, the focus is on supplying the right vehicle in a straightforward, dependable way."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Practical advantages"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Why Marchwood customers choose us"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Marchwood customers often need dependable transport for port-related work, local moving jobs and everyday business use. Our hire service focuses on practical vehicle choice, flexible terms and straightforward support."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Nearby hire areas around Marchwood"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If you are based in Marchwood, you may also want to explore nearby vehicle hire coverage across other Waterside and Southampton-side locations."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Options for Different Jobs"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"A broad fleet means you can book a vehicle that suits local errands, business travel, removals, group trips or heavier transport work."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Prepared for the Road"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"We aim to keep vehicles in good condition so customers can book with confidence for day-to-day self-drive use."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Built Around Convenience"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"With flexible booking periods and practical support, the service is designed to work around real schedules and workloads."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving around Marchwood"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful driving notes for planning vehicle hire around Marchwood and the surrounding routes."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Marchwood works well for practical vehicle hire because local trips often start on village roads before joining wider Southampton and New Forest routes. If you are collecting furniture, moving equipment or heading out for deliveries, it helps to plan a quieter departure time and allow a little extra room on local stretches such as Hythe Road."}</p>
            <p className="text-base leading-8 text-slate-600">{"Main Road is one of the useful through routes for getting in and out of Marchwood, especially if you want a straightforward link towards surrounding areas without weaving through smaller residential roads. For larger vans or trucks, a steady route plan is usually better than relying on last-minute turns through tighter side streets."}</p>
            <p className="text-base leading-8 text-slate-600">{"If your hire is for business use, site work or regular drop-offs, Marchwood is a sensible base because you can get loaded and underway without dealing with city-centre traffic straight away. Many drivers hiring here are looking for simple self-drive transport for tools, stock, event items or household loads, so choosing the right size vehicle can make local access much easier."}</p>
            <p className="text-base leading-8 text-slate-600">{"Before setting off, it is worth checking your unloading point, parking space and turning room, especially if you are taking a longer wheelbase van or anything larger. Around Marchwood, the easiest journeys are usually the ones planned with local road width, loading time and return access in mind rather than just the shortest distance on a map."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Eastleigh hire FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Marchwood vehicle hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Common questions about hiring a vehicle in Marchwood, including booking flexibility, vehicle types and practical local use."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Book a Marchwood hire vehicle"}</h2>
          <p className="mb-8 text-lg text-white/85">{"If you need a rental vehicle in Marchwood, we can help you choose a suitable option for business use, moving jobs or general self-drive transport."}</p>
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




