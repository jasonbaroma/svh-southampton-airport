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
  const locationLinks = buildLocationLinks("Hedge End");
  const heroImage = { src: "/images/location2-image1.jpeg", alt: "Long-wheelbase hire van on a modern road near a retail park in Hedge End" };
  const supportImage = { src: "/images/location2-image2.jpeg", alt: "Open hire van with neatly packed boxes in a clean parking area in Hedge End" };
  const faqs = [
    { question: "Can I book a hire vehicle in Hedge End?", answer: "Yes, we can arrange vehicle hire for Hedge End customers, with practical options for local collection or delivery depending on the booking." },
    { question: "How long can I hire a vehicle for in Hedge End?", answer: "We offer flexible rental periods in Hedge End, so you can book for a day, a weekend, a week or longer depending on availability and vehicle type." },
    { question: "What types of vehicles can I hire in Hedge End?", answer: "Customers often hire for coastal stays, home moves, local collections, airport runs and short-term business transport." },
    { question: "Is business vehicle hire available in Hedge End?", answer: "Yes, we offer booking flexibility for short hires and longer rental periods." },
    { question: "Can you deliver and collect hire vehicles in Hedge End?", answer: "Yes, businesses can hire vehicles for deliveries, staff travel and temporary transport cover." },
  ];
  const trustCards = [
    { title: "Maintained vehicles", description: "A well-kept fleet helps keep your journey straightforward, whether you need a car, van, minibus or truck.", icon: ShieldCheck },
    { title: "Convenient local service", description: "Free delivery and collection helps customers around Netley arrange hire with less disruption to the day.", icon: Star },
    { title: "Hire that fits the job", description: "From one-off domestic jobs to ongoing business use, bookings can be arranged to suit the work in hand.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Vans for household jobs, collections, move-ins and practical local transport." },
    { value: "Van Hire", label: "Cars for coastal stays, local travel and convenient replacement transport." },
    { value: "Minibus Hire", label: "Minibuses for group outings, family events and organised travel." },
    { value: "Truck Hire", label: "Trucks for larger loads, business use and heavier transport work." },
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
    { icon: BadgePoundSterling, title: "Transport that fits the journey", description: "Choose a vehicle that suits local driving, group outings, home jobs or business transport.", detail: "From smaller trips to larger loads, having the right vehicle makes planning easier." },
    { icon: Clock3, title: "Flexible around your schedule", description: "Flexible booking periods help with weekend use, single-day jobs and longer planned hires.", detail: "That is especially useful for customers balancing travel plans, events or moving dates." },
    { icon: CheckCircle2, title: "Simple and dependable", description: "We keep the service straightforward with maintained vehicles and practical collection or delivery arrangements.", detail: "A sensible option for Netley residents, local businesses and visitors staying nearby." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Reliable vehicle hire in Hedge End"}</h1>
                <p className="text-xl text-white">{"Self-drive van, car, minibus and truck hire in Netley with flexible booking, maintained vehicles and practical support."}</p>
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
                  {"Netley bookings made easy"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Straightforward vehicle hire for Netley customers"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Hiring a vehicle in Netley should be easy to arrange. We help customers book suitable vans, cars, minibuses and trucks for local use, coastal journeys, business travel and larger one-off jobs."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Flexible self-drive options"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Helpful local support"}
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
            <h2 className="mb-4 text-4xl font-bold">{"Why customers choose us in Netley"}</h2>
            <p className="text-lg text-muted-foreground">{"We focus on practical vehicle hire, reliable preparation and straightforward support for customers booking in and around Netley."}</p>
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
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Hire options for Netley and the surrounding area"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Netley customers book a wide range of vehicles depending on whether they need everyday transport, extra carrying space or group capacity."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Netley vehicle hire"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle hire in Netley for coastal travel, local jobs and business use"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Netley combines village roads, waterfront access and useful links towards Southampton, Hamble and the M27, making it a practical location for self-drive vehicle hire. Customers here often need transport that works for both local errands and longer regional trips."}</p>
            <p>{"Van hire is a common choice in Netley for moving items, furniture collection and home improvement jobs, while car hire suits temporary replacement needs and general travel. We also provide minibuses and trucks for group transport and heavier loads."}</p>
            <p>{"Because access in coastal and residential areas can vary, it helps to have a booking service that is flexible and clear. We focus on practical arrangements, dependable vehicles and straightforward advice on choosing the right option."}</p>
            <p>{"Whether you are based in Netley year-round or staying nearby and need temporary transport, our service is built to be convenient, realistic and easy to use."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why hire in Netley"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Useful vehicle hire for coastal villages and onward travel"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A practical service for Netley customers who need local convenience and dependable vehicle choice."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Areas near Netley we also serve"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Netley is convenient for you, we also cover other nearby communities around the eastern side of Southampton."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"A fleet for different jobs"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Choose from practical cars, roomy vans, minibuses and larger trucks for personal or business use."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Flexible hire terms"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Short and longer rental periods are available, making it easier to book around move dates, deliveries or project work."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Ready for the road"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Vehicles are prepared for self-drive use with a focus on reliability, presentation and straightforward handover."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving guide for Hedge End hirers"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local route notes for collecting, loading and travelling in and around Hedge End with a hire vehicle."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Hedge End works well for practical vehicle hire because you can get in and out without needing to drive straight through the busiest parts of Southampton. For local jobs, plan a little extra time around school-run periods and the main shopping hours, especially if you are collecting furniture, making deliveries or moving between residential streets and retail areas."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are heading beyond Hedge End, use the main local routes early in your journey so you can settle into the vehicle before joining faster traffic. That is especially useful in a larger van, minibus or truck where lane choice and turning space matter more. For airport runs, trade jobs and business deliveries, Hedge End gives you a practical starting point for reaching the wider Eastleigh and Southampton area."}</p>
            <p className="text-base leading-8 text-slate-600">{"For longer drives, it is worth checking fuel, washer fluid and your load security before you set off. A nearby stop such as Broad Oak Service Station can be handy for a quick pause, directions or final checks before continuing. If you are carrying bulky items, take a moment to confirm access at the delivery point so you are not trying to reverse or unload in a tight space."}</p>
            <p className="text-base leading-8 text-slate-600">{"When returning your hire vehicle from Hedge End, allow time for local traffic rather than cutting things fine. That makes handover easier and gives you time to remove personal items, clear the cab and check the load area properly. If your trip includes several stops, planning the route in a simple loop usually saves time and keeps the day more manageable."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Netley FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Questions about hiring in Netley"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Common booking questions from customers looking for vehicle hire in Netley."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Need to hire a vehicle in Netley?"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Tell us what you need to carry, where you need to go and how long you need the vehicle, and we will help with a suitable Netley booking."}</p>
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




