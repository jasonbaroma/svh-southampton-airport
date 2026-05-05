"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { mainLocationName } from "@/lib/company";
import { phoneDisplay, phoneHref } from "@/lib/contact";
import { buildLocationLinks } from "@/lib/location-links";
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

type HomePageProps = {
  currentLocationLabel?: string;
  heroImage: {
    src: string;
    alt: string;
  };
  supportImage: {
    src: string;
    alt: string;
  };
};

export function HomePage({
  currentLocationLabel,
  heroImage,
  supportImage,
}: HomePageProps) {
  const locationLinks = buildLocationLinks(currentLocationLabel);
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
  const faqs = [
    {
      question: "What types of vehicles can I hire?",
      answer: "Yes, we offer vans, cars, minibuses, and trucks, so you can book according to the job rather than settling for a one-size-fits-all option.",
    },
    {
      question: "Can I hire a vehicle for more than one day?",
      answer: "Hire periods can usually be arranged for short or longer durations, depending on availability and what you need the vehicle for.",
    },
    {
      question: "Do you offer delivery and collection?",
      answer: "Yes, delivery and collection can be arranged in many cases, which is especially useful for home moves and business bookings.",
    },
    {
      question: "What do people usually hire vehicles for?",
      answer: "Many customers hire for house moves, furniture collection, business deliveries, temporary fleet cover, airport runs, and group travel.",
    },
    {
      question: "What can I expect from the service?",
      answer: "We aim to provide clean, maintained vehicles and clear booking support so you can hire with confidence and get on with the journey.",
    },
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
                  <Link
                    key={location.href}
                    href={location.href}
                    className="block rounded-sm px-3 py-2 text-sm transition hover:bg-slate-100"
                  >
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
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-900/45" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold tracking-tight">
                  {"Vehicle hire near Southampton Airport made simple"}
                </h1>
                <p className="text-xl text-white">
                  {"Flexible self-drive hire for vans, cars, minibuses, and trucks, with maintained vehicles, practical support, and convenient delivery and collection options."}
                </p>
                <Button
                  size="lg"
                  className="w-fit bg-[#00B395] text-white hover:bg-[#00997f]"
                  asChild
                >
                  <a href={phoneHref}>Book Now</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-[#0f6b31]/30">
                <iframe
                  src="https://www.youtube.com/embed/YvUfUk4gqyI?si=1kju8yn40EZXn6F8"
                  title={supportImage.alt}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
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
                  {"Easy booking, practical support"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  {"Book the right vehicle without the usual hassle"}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {"Booking with Southern Van Hire is designed to be simple. Tell us what you need the vehicle for, how long you need it, and where it needs to be, and we will help arrange a suitable hire with clear, practical support from start to finish."}
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Free delivery and collection"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Flexible rental periods"}
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full rounded-full bg-[#00B395] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#00B395]/25 transition hover:-translate-y-0.5 hover:bg-[#00997f] md:w-auto"
                asChild
              >
                <a href={phoneHref}>Call Us Now: {phoneDisplay}</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="trust" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              {"A hire service you can rely on"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {"From Southampton Airport, we provide dependable self-drive hire with broad vehicle choice, flexible booking and support for both personal and business customers."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {[
              {
                title: "Well-prepared vehicles",
                description: "A maintained fleet helps keep journeys dependable whether you need a vehicle for one day, a week or longer.",
                icon: ShieldCheck,
              },
              {
                title: "Built for real-world use",
                description: "Suitable for home moves, business travel, group transport, deliveries and temporary replacement needs.",
                icon: Star,
              },
              {
                title: "Service that stays practical",
                description: "Straightforward booking, practical advice and flexible arrangements help you get moving with less hassle.",
                icon: Users,
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]"
              >
                <div className="mb-6 flex w-full items-center gap-3 rounded-2xl bg-[#00B395]/10 px-4 py-4 text-left text-[#00B395]">
                  <item.icon className="h-7 w-7 shrink-0" />
                  <h3 className="text-xl font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="mb-5 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Our hire range"}
            </p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
              {"Vans, cars, minibuses, and trucks from one reliable provider"}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {"We are strongest in van hire, but our service covers a full range of self-drive vehicles to support personal, commercial, and group travel needs."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#00B395] text-white hover:bg-[#00997f]"
                asChild
              >
                <a href={phoneHref}>No Hassle Booking {phoneDisplay}</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                value: "Car Hire",
                label: "Practical vans for moving, deliveries, trade jobs, and everyday transport tasks.",
              },
              {
                value: "Van Hire",
                label: "Comfortable car hire for local trips, business travel, and general day-to-day driving.",
              },
              {
                value: "Minibus Hire",
                label: "Minibuses that make group outings, airport runs, and event travel easier to organise.",
              },
              {
                value: "Truck Hire",
                label: "Truck hire for heavier loads, larger moves, and commercial transport requirements.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]"
              >
                <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
            {"Dependable service"}
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            {"Vehicle hire built around real day-to-day needs"}
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Southern Van Hire provides practical self-drive vehicle hire for customers who need transport that works properly and arrives ready for the job. We support everything from one-off personal hires to regular business use across a wide service area."}</p>
            <p>{"Our fleet covers vans for moving and deliveries, cars for everyday travel, minibuses for group transport, and trucks for heavier loads. Whether you are relocating, picking up stock, attending an exhibition, or covering fleet downtime, we aim to make the process straightforward."}</p>
            <p>{"We focus on maintained vehicles, flexible booking periods, and service that feels clear rather than complicated. Customers often come to us because they want a sensible option without unnecessary delays, confusing steps, or overblown promises."}</p>
            <p>{"For both private and commercial hire, we take a practical approach. That means helping you choose a vehicle that suits the journey, arranging convenient delivery and collection where needed, and keeping the whole experience as smooth as possible."}</p>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Why book with us"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {"Practical benefits for personal and business hire"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {"A straightforward hire service should save time, reduce hassle, and give you the right vehicle for the job. That is what we focus on."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: BadgePoundSterling,
                title: "Broad vehicle choice",
                description: "Choose from vans, cars, minibuses, and trucks for short-term jobs or longer requirements.",
                detail: "Useful whether you are moving house, covering business demand, collecting furniture, or arranging transport for a group.",
              },
              {
                icon: Clock3,
                title: "Hire that fits around you",
                description: "Flexible hire periods help you book for a day, a weekend, a week, or longer if needed.",
                detail: "We keep the process clear so you can match the booking to your schedule rather than forcing the job into a rigid timeslot.",
              },
              {
                icon: CheckCircle2,
                title: "Less disruption on the day",
                description: "Delivery and collection options help make hiring more convenient, especially for busy households and working businesses.",
                detail: "That means less wasted time getting to and from a depot and more time getting on with the reason you hired the vehicle.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(0,179,149,0.35)]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-[#00B395]/10 p-4 text-[#00B395] transition group-hover:bg-[#00B395] group-hover:text-white">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="flex-1 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
                <p className="mt-6 text-base leading-7 text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {vehicleCards.map((vehicle) => (
              <div
                key={vehicle.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.2)]"
              >
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
                  <a
                    href={phoneHref}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#00B395] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00997f]"
                  >
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Nearby Locations"}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              {"Nearby vehicle hire locations"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {"Browse nearby areas we cover around Southampton Airport for practical pickup, delivery and local vehicle hire support."}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {locationLinks.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="rounded-full border border-[#00B395] bg-slate-50 px-6 py-3 text-base font-medium text-slate-700 transition hover:bg-[#00B395]/10"
              >
                {location.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {"Suitable vehicles for different jobs"}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {"Whether you need a compact car for a short trip or a larger rental vehicle for a bigger job, we can help match the booking to the task."}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {"Maintained for dependable use"}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {"Our hire vehicles are prepared with day-to-day reliability in mind, helping customers travel, move goods, or transport groups with less stress."}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {"Options for short and longer hire"}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {"From one-day bookings to longer periods, we offer flexibility so your rental vehicle works around your plans rather than the other way round."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Local Guide"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {"Local driving guide for Southampton Airport"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {"Useful driving notes for planning vehicle hire around Southampton Airport and the wider Eastleigh area."}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">
              {"Southampton Airport sits on the Eastleigh side of the city, so hired vehicles are useful for quick onward trips into Southampton, Winchester and the wider Hampshire area. It is a practical pickup point for business travel, family visits and straightforward self-drive transport when you need to leave the airport and continue by road."}
            </p>
            <p className="text-base leading-8 text-slate-600">
              {"Because airport journeys often involve luggage, timed collections and unfamiliar roads, it helps to plan your first stop before setting off. If you are collecting a van, car, minibus or truck for work or a home move, give yourself a little extra time to get settled, check your route and avoid last-minute detours."}
            </p>
            <p className="text-base leading-8 text-slate-600">
              {"The area around Southampton Airport can become busier at typical flight and commuter times, especially around Eastleigh and the main local approach roads. For smoother travel, early collection windows and off-peak returns can make loading, parking and onward driving more manageable."}
            </p>
            <p className="text-base leading-8 text-slate-600">
              {"For longer runs from Southampton Airport, many drivers use the location as a convenient starting point for UK-wide travel rather than just local mileage. It works well whether you need a practical vehicle for deliveries, exhibition equipment, business support, furniture collection or a move to a new address."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Common questions"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {"Helpful answers before you book"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {"Here are a few of the questions customers ask when comparing vehicle hire options."}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 shadow-sm">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-slate-200 last:border-b-0"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left text-lg font-semibold text-slate-950">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 text-base leading-7 text-slate-600">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#00B395] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold">{"Need a vehicle hire quote?"}</h2>
          <p className="mb-8 text-lg text-white/85">
            {"Get in touch to discuss your dates, vehicle type, and delivery needs, and we will help you arrange a hire that suits the job."}
          </p>
          <Button
            size="lg"
            className="bg-white text-[#00B395] hover:bg-gray-100"
            asChild
          >
            <a href={phoneHref}>Book Now</a>
          </Button>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t bg-gray-900 px-6 py-12 text-gray-400"
      >
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




