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
    canonical: `/${slugifyLocation("Hedge End")}`,
  },
} satisfies Metadata;

export default function LocationPage() {
  const locationLinks = buildLocationLinks("Hedge End");
  const heroImage = { src: "/images/location4-image1.jpeg", alt: "Hire van on a main road near Hedge End" };
  const supportImage = { src: "/images/location4-image2.jpeg", alt: "Rental vehicle near retail and business routes in Hedge End" };
  const faqs = [
    { question: "Can I book short or longer vehicle hire in Romsey?", answer: "Yes, we can often arrange short-term and longer bookings in Romsey depending on the vehicle required." },
    { question: "What vehicles are available for hire around Romsey?", answer: "We offer cars, vans, minibuses and trucks for a range of personal and business transport needs." },
    { question: "What do people usually hire vehicles for in Romsey?", answer: "Many customers hire for home moves, furniture pickup, local deliveries, exhibitions and temporary business cover." },
    { question: "Do you offer delivery and collection in the Romsey area?", answer: "Yes, delivery and collection can often be arranged to make the booking more convenient." },
    { question: "Are licence requirements the same for every vehicle?", answer: "Requirements vary by vehicle type and driver details, so it is best to confirm that at the time of booking." },
  ];
  const trustCards = [
    { title: "Vehicle choice that makes sense", description: "A broad fleet helps us support anything from simple local errands to more demanding transport work.", icon: ShieldCheck },
    { title: "Straightforward customer service", description: "Our service is designed to be practical and clear, with less unnecessary admin and more useful support.", icon: Star },
    { title: "Convenient local hire", description: "Flexible booking and convenient delivery options help customers fit hire around real schedules.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Cars for everyday driving, appointments and business travel." },
    { value: "Van Hire", label: "Vans for removals, collections, deliveries and trade use." },
    { value: "Minibus Hire", label: "Minibuses for organised group trips and shared travel." },
    { value: "Truck Hire", label: "Trucks for larger loads and commercial transport jobs." },
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
    { icon: BadgePoundSterling, title: "The right vehicle available", description: "Get a suitable vehicle for moving, travel, delivery work or heavier jobs without overcomplicating the process.", detail: "We cover cars, vans, minibuses and trucks so the hire can suit the load, route and number of passengers involved." },
    { icon: Clock3, title: "Useful rental flexibility", description: "Flexible booking options help if you need transport for a day, a weekend, a work project or a longer period.", detail: "That is useful for home moves, temporary cover, exhibitions, trade work and seasonal business demand." },
    { icon: CheckCircle2, title: "Less stress on the day", description: "Good preparation and clear arrangements can save time when you have a busy schedule to work around.", detail: "We keep the service practical, with maintained vehicles and support that helps you get on the road with less hassle." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle hire in Hedge End that works around you"}</h1>
                <p className="text-xl text-white">{"Self-drive van, car, minibus and truck hire in Hedge End, with flexible booking, maintained vehicles and practical support for local and longer trips."}</p>
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
                  {"Simple Romsey bookings"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Easy vehicle hire for Hedge End"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Arranging vehicle hire in Hedge End should be simple. We help local customers book vans, cars, minibuses and trucks for everything from weekend jobs to business cover and longer-distance travel."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Maintained self-drive vehicles"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Free delivery and collection"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A trusted hire service for Hedge End"}</h2>
            <p className="text-lg text-muted-foreground">{"Hedge End customers choose us for straightforward booking, maintained vehicles and practical support that suits busy households and local businesses alike."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Vehicle types"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Hire options available in Hedge End"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Our Hedge End fleet support covers a broad range of self-drive needs, from everyday transport and local moving jobs to larger commercial requirements."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local hire support"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Practical rental support in Hedge End"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Southern Van Hire offers practical vehicle rental for Hedge End, helping customers handle moving jobs, collections, commercial transport and general travel without unnecessary hassle. Our range covers smaller and larger requirements, so you can choose what suits the day properly."}</p>
            <p>{"Hedge End is a busy and well-connected area, with quick access towards the M27, Southampton and surrounding business parks. That makes it a common base for customers who need short-term transport for local deliveries, retail collection, trade work or temporary fleet support."}</p>
            <p>{"Van hire remains a key service in Hedge End, especially for house moves, equipment runs and bulky items. We also provide cars for personal journeys, minibuses for group travel and trucks for larger commercial tasks where extra carrying capacity is needed."}</p>
            <p>{"The aim is to keep everything straightforward: maintained vehicles, clear booking arrangements and flexible hire periods that work for both personal and business use in Hedge End."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Helpful reasons to book"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Why Hedge End drivers hire with us"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Hedge End customers often want quick, practical access to a suitable rental vehicle for home, work or business transport. We focus on flexible booking, useful vehicle choice and service that fits around busy local schedules."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Nearby vehicle hire areas to Hedge End"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If you are booking from Hedge End, you may also want to look at nearby service areas for surrounding villages and smaller communities linked by the same road network."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Vehicles for Everyday Use"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our fleet gives customers a practical choice of rental vehicles for moving, travelling, delivering goods or handling larger transport tasks."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Prepared and Dependable"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"We aim to provide well maintained hire vehicles that are ready for regular self-drive use across local and longer-distance routes."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Simple to Arrange"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"From first enquiry to return, the focus is on keeping the hire process clear, flexible and easy to manage."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving Around Hedge End"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful driving pointers for hiring in Hedge End, from timing your journey well to planning fuel and stops before setting off."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Hedge End is a practical place to start a hire if you need quick access to the wider Eastleigh and Southampton area. The local road layout makes it useful for short collection runs, home moves, trade jobs and retail pickups, especially when you want to avoid heading straight into busier city-centre traffic."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are driving a larger vehicle, it helps to plan your route before setting off and leave a little extra time around school-run and commuter periods. Main local routes can get busy at peak times, so an earlier collection or a quieter mid-morning departure often makes loading, parking and turning much easier."}</p>
            <p className="text-base leading-8 text-slate-600">{"For longer trips, make sure fuel, sat nav and load security are sorted before you leave Hedge End. Broad Oak Service Station is a handy nearby stop for a quick pause, and it can be useful if you want to check directions, refreshments or basic travel essentials before joining the wider road network."}</p>
            <p className="text-base leading-8 text-slate-600">{"Many customers hiring in Hedge End are travelling for house moves, furniture collection, business deliveries or family transport across Hampshire. Whether you are staying local or heading further afield, choosing the right size vehicle and keeping your route simple usually saves time and avoids unnecessary stress on the day."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Romsey vehicle hire help"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Hedge End hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Helpful answers for customers planning vehicle hire in Hedge End, from choosing the right vehicle to understanding how bookings can work."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Arrange your Hedge End vehicle hire"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Looking for vehicle hire in Hedge End? We can help you arrange a suitable van, car, minibus or truck for a straightforward and practical booking."}</p>
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




