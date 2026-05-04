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
  const locationLinks = buildLocationLinks("Eastleigh");
  const heroImage = { src: "/images/location1-image1.jpeg", alt: "Modern hire van parked on a tidy urban street in Eastleigh" };
  const supportImage = { src: "/images/location1-image2.jpeg", alt: "Customer beside a hire car in Eastleigh checking directions with keys in hand" };
  const faqs = [
    { question: "What types of vehicle can I hire in Fair Oak?", answer: "Yes, Fair Oak customers can arrange vans, cars, minibuses and trucks depending on availability and booking needs." },
    { question: "Can the vehicle be delivered to Fair Oak?", answer: "Yes, delivery and collection can often be arranged to make hiring more convenient." },
    { question: "What is Fair Oak van hire usually used for?", answer: "Van hire is popular for house moves, furniture collection, tip runs and trade tools or materials." },
    { question: "Do you offer business hire in Fair Oak?", answer: "Yes, business users can hire for deliveries, temporary cover and project-based transport." },
    { question: "Can I book a vehicle in Fair Oak for more than a day?", answer: "Yes, we offer flexible hire periods from short bookings to longer arrangements." },
  ];
  const trustCards = [
    { title: "Maintained vehicles", description: "A well-kept fleet ready for practical self-drive use across personal and business bookings.", icon: ShieldCheck },
    { title: "Straightforward guidance", description: "Helpful support on vehicle choice, hire length and local booking arrangements.", icon: Star },
    { title: "Designed around convenience", description: "Convenient service features including delivery and collection to help save time.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Vans for moving jobs, local collections, trade work and day-to-day transport tasks." },
    { value: "Van Hire", label: "Cars for personal travel, airport runs and temporary replacement needs around Fair Oak." },
    { value: "Minibus Hire", label: "Minibuses for family events, team transport and small group journeys." },
    { value: "Truck Hire", label: "Trucks for larger loads, site work and heavier-duty transport requirements." },
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
    { icon: BadgePoundSterling, title: "Choice that suits the task", description: "Hire the vehicle type that fits your trip, whether you are moving house, collecting stock or arranging transport for a group.", detail: "That helps keep costs sensible and avoids the inconvenience of choosing a vehicle that is too small or unnecessarily large." },
    { icon: Clock3, title: "Hire terms that fit around you", description: "Flexible rental periods work well for one-day jobs, weekend plans and longer bookings.", detail: "Useful if your timescale changes or you need transport beyond an initial short hire." },
    { icon: CheckCircle2, title: "Straightforward local service", description: "We focus on maintained vehicles, clear communication and practical delivery and collection support.", detail: "That makes hiring in Fair Oak easier whether you are booking for home or for business." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Eastleigh vehicle hire made simple"}</h1>
                <p className="text-xl text-white">{"Flexible self-drive van, car, minibus and truck hire for Fair Oak with maintained vehicles and practical local support."}</p>
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
                  {"Easy booking for Fair Oak"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Book vehicle hire in Fair Oak without the runaround"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"If you need a rental vehicle in Fair Oak, we keep the process clear and practical. Tell us what you need to move, where you are travelling and how long you need the vehicle for, and we will help you arrange a suitable hire."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Convenient delivery options"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Vans, cars, minibuses and trucks"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A dependable hire option for Fair Oak"}</h2>
            <p className="text-lg text-muted-foreground">{"We aim to make hiring in Fair Oak simple, dependable and suitable for real day-to-day transport needs."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Available to hire"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"A full range of hire vehicles for Fair Oak"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Fair Oak customers use us for a wide range of self-drive hire needs, from simple local runs to larger transport jobs."}</p>
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
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle hire in Fair Oak for home, work and everyday transport needs"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Fair Oak is a busy village area with a mix of residential roads, local trade demand and easy links towards Eastleigh, Bishopstoke and Winchester. That makes it a common place for van hire, car hire and temporary business vehicle cover."}</p>
            <p>{"Customers in Fair Oak often hire for home moves, DIY projects, furniture pickup and short delivery work, especially when a standard car just is not practical enough. We also provide minibuses and trucks for larger transport needs."}</p>
            <p>{"Because Fair Oak sits close to key routes without feeling heavily industrial, convenience matters. Delivery and collection can save time, particularly if you are trying to manage a move, an event or a work schedule in the same day."}</p>
            <p>{"Our aim is to provide a dependable self-drive hire service that feels easy to use, with modern, well-maintained vehicles and flexible rental options for local residents and businesses alike."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why Fair Oak customers book"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Reliable vehicle hire for local journeys and bigger plans"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A practical hire service for Fair Oak customers who want straightforward booking and a vehicle that suits the job."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Other hire areas near Fair Oak"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Fair Oak is not the most convenient spot for your booking, we also cover nearby areas that are regularly used for local collections, deliveries and onward travel."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Suitable options for different journeys"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Whether you need a compact car, a practical van, a group vehicle or a larger truck, we can help match the hire to the job."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Prepared for reliable use"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our vehicles are prepared for dependable everyday use, whether the booking is for personal plans or business transport."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Useful for common local tasks"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Fair Oak customers often book for moves, collections, events, trade work and short-term cover when extra transport is needed."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Eastleigh driving and stop planning"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local driving notes for getting the most from your Eastleigh vehicle hire."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Eastleigh is a practical base for vehicle hire because local journeys can quickly spread in several directions, from town-centre collections and home moves to business runs across the wider Hampshire area. When planning your route, allow a little extra time around the busiest parts of town, especially if you are collecting furniture, making multiple drops, or driving a larger vehicle for the first time."}</p>
            <p className="text-base leading-8 text-slate-600">{"For straightforward stop planning, Eastleigh Service Station is a useful nearby option for fuel before return, and there are also BP and Esso petrol stations close to the town area. Topping up early usually makes the end of the hire easier, particularly if you have been on a longer day of deliveries, moving house, or travelling out beyond Eastleigh."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are using a van, minibus, car or truck for a full day, it helps to think about comfort breaks and vehicle checks as part of the trip. Eastleigh Service Station can work well for a quick reset, while drivers heading further out may find another stop useful later in the journey rather than leaving everything until the return leg."}</p>
            <p className="text-base leading-8 text-slate-600">{"Many Eastleigh bookings are for practical jobs rather than leisure, so simple route planning matters. Check access at the property, think about where you will load and unload, and choose a vehicle size that suits the streets and parking available. That approach usually makes Eastleigh vehicle hire smoother, quicker and less stressful on the day."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Fair Oak FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Helpful information for Fair Oak bookings"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Answers to common questions about hiring a vehicle in Fair Oak."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Looking for Fair Oak vehicle hire?"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Speak to us about the kind of vehicle you need in Fair Oak and we will help you arrange a practical, flexible booking."}</p>
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




