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

export default function LocationPage() {
  const locationLinks = buildLocationLinks("Netley");
  const heroImage = { src: "/images/location5-image1.jpeg", alt: "Estate hire car on a quiet coastal road in Netley" };
  const supportImage = { src: "/images/location5-image2.jpeg", alt: "Customer collecting a clean hire van from a tidy pickup bay in Netley" };
  const faqs = [
    { question: "Do you offer vehicle delivery in Netley?", answer: "Yes, delivery and collection can be arranged in Netley subject to availability and booking details." },
    { question: "What vehicles can I hire in Netley?", answer: "We supply vans, cars, minibuses and trucks, depending on the type of hire you need." },
    { question: "Can I book for a short local hire?", answer: "Yes, many customers hire for a day, a weekend, a week or longer depending on the job." },
    { question: "Can I take a hire vehicle from Netley further afield?", answer: "That will depend on the vehicle and your travel plans, so it is best to ask when booking." },
    { question: "What do I need to hire a vehicle in Netley?", answer: "Bring your driving licence, proof of address if requested, and the booking details needed for the hire." },
  ];
  const trustCards = [
    { title: "Maintained vehicles", description: "Our vehicles are prepared for hire with everyday reliability and usability in mind.", icon: ShieldCheck },
    { title: "Flexible hire periods", description: "We support one-day bookings, longer rentals and business use with practical arrangements.", icon: Star },
    { title: "Convenient local service", description: "Delivery and collection options help make hiring easier around Netley and nearby areas.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Useful van sizes for moving, collecting furniture and local delivery work." },
    { value: "Van Hire", label: "Straightforward car hire for day trips, business travel and temporary replacement use." },
    { value: "Minibus Hire", label: "Minibus options for group travel, events and family transport planning." },
    { value: "Truck Hire", label: "Truck hire for heavier loads, site work and larger transport jobs." },
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
    { icon: BadgePoundSterling, title: "More choice, less compromise", description: "Hiring is simpler when you can choose from multiple vehicle types in one place.", detail: "That is useful for comparing a car, van, minibus or truck depending on the trip, load or number of passengers." },
    { icon: Clock3, title: "Rental terms that adapt", description: "Flexible hire periods help with one-off tasks as well as longer-running personal or business needs.", detail: "Ideal for moves, stock transport, temporary demand or extended travel plans." },
    { icon: CheckCircle2, title: "Convenient from the outset", description: "Free delivery and collection adds convenience for customers based in and around Hythe.", detail: "A useful option when you want the hire fitted around your day instead of the other way round." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle Hire in Netley"}</h1>
                <p className="text-xl text-white">{"Flexible self-drive van, car, minibus and truck hire for Netley, with practical support, maintained vehicles and convenient booking options."}</p>
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
                  {"Flexible local vehicle hire"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Simple vehicle hire for Netley journeys"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Booking in Netley is kept straightforward. Tell us what you need the vehicle for, how long you need it, and whether delivery or collection would help, and we can guide you to a practical option without unnecessary fuss."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Flexible self-drive hire"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Delivery and collection available"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A dependable choice for Netley vehicle hire"}</h2>
            <p className="text-lg text-muted-foreground">{"People booking in Netley usually want a vehicle that turns up ready for the job and a hire process that does not waste time. That is where our practical approach helps."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Vehicle range"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Hire vehicles for personal and business use in Netley"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"From everyday cars to larger commercial vehicles, we help Netley customers hire the right vehicle for practical local and longer-distance use."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why people book with us"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Practical hire options around Netley"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Netley customers often need a vehicle that fits around real plans rather than fixed assumptions. That might mean a van for a house move, a car for a trip while your own vehicle is off the road, or a minibus for a family or group outing."}</p>
            <p>{"Southern Van Hire offers a broad range of self-drive vehicles, including vans, cars, minibuses and trucks, so you can book something suitable for the job instead of trying to make do with the wrong size or type."}</p>
            <p>{"Our approach is practical and dependable. Vehicles are prepared for hire, rental periods can be arranged to suit short or longer needs, and we support both private customers and businesses needing temporary transport."}</p>
            <p>{"For Netley and the surrounding area, that means a hire service that works well for coastal trips, Southampton-bound driving, local collections, trade work and planned moves across Hampshire and beyond."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Booking benefits"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"What you get with our Hythe hire service"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Key reasons customers in Hythe choose a practical, flexible vehicle hire service."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Other hire areas near Netley"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Netley is not the most convenient collection point, we also cover other nearby Hampshire locations that are practical for the same coastal and Southampton-side journeys."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"A vehicle for different kinds of travel"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Choose from a wide mix of rental vehicles for personal transport, business use, group travel and heavier-duty jobs."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Hire periods that fit the plan"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Short and longer hire periods can be arranged, helping you book a vehicle around the job instead of rushing everything into one day."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Helpful service without the runaround"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our aim is to keep vehicle hire clear and workable, with straightforward support before collection or delivery."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving and hire guide for Netley"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local driving notes for planning vehicle hire in and around Netley."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Netley is well placed for practical vehicle hire, especially if you need to move between the village, the wider Eastleigh area and the Southampton side of the water. For local driving, it helps to plan around narrower residential roads and busier periods near the waterfront, schools and commuter routes, particularly if you are collecting furniture, carrying tools or travelling in a larger van."}</p>
            <p className="text-base leading-8 text-slate-600">{"If your journey starts in Netley, many hires are used for home moves, store collections, event transport and business deliveries. A smaller van can be easier for village parking and short local runs, while a larger panel van, minibus or truck is often the better fit if you are loading bulky items or heading further afield for the day."}</p>
            <p className="text-base leading-8 text-slate-600">{"For longer trips, it is worth sorting fuel and loading before setting off so you are not stopping too early into the journey. There is an Esso within reach of the wider area, which can be useful if you want to top up before returning your vehicle or after joining the main routes out of Netley. Giving yourself a little extra time can make drop off much simpler."}</p>
            <p className="text-base leading-8 text-slate-600">{"Netley also works well as a starting point for straightforward self-drive hire when you want flexibility without relying on multiple trips in a car. Whether you are transporting household goods, collecting materials, supporting a local job or arranging travel for a small group, choosing the right vehicle size for the roads and parking available around Netley can make the whole journey more efficient."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Netley hire help"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Questions we hear from Netley customers"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Common questions about arranging vehicle hire in and around Netley."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Book a Netley hire vehicle with less hassle"}</h2>
          <p className="mb-8 text-lg text-white/85">{"If you need a hire vehicle in Netley, we can help you choose a sensible option for the journey, load and rental period."}</p>
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




