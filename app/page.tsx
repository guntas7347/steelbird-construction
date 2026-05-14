"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Droplets,
  HardHat,
  Layers,
  MapPin,
  Maximize,
  MessageSquare,
  MoveRight,
  ShieldCheck,
  Star,
  Timer,
  Warehouse,
  Construction,
  Factory,
  House,
} from "lucide-react";
import Link from "next/link";

// --- Structured Data for Mapping ---

const services = [
  {
    title: "Driveways",
    desc: "Reinforced, high-PSI concrete driveways engineered for durability and heavy vehicle traffic.",
    icon: Construction,
    features: ["Stamped & Decorative", "Exposed Aggregate"],
  },
  {
    title: "Basement Slabs",
    desc: "Level, moisture-protected structural slabs built for long-term strength and stability.",
    icon: Layers,
    features: ["Vapor Barrier Install", "Fiber Reinforced"],
  },
  {
    title: "Garage Floors",
    desc: "Heavy-duty concrete garage floors with smooth finishing and optional coating preparation.",
    icon: Warehouse,
    features: ["Epoxy Ready", "Chemical Resistant"],
  },
  {
    title: "Machine Shops",
    desc: "Industrial-grade concrete flooring designed to support heavy machinery and constant use.",
    icon: Factory,
    features: ["High Load Capacity", "Precision Level Finish"],
  },
  {
    title: "House Foundations",
    desc: "Strong and accurately poured concrete foundations ensuring structural reliability.",
    icon: House,
    features: ["Footings & Pads", "Rebar Reinforcement"],
  },
];

const workProcess = [
  {
    step: "01",
    title: "Site Preparation",
    desc: "We clear the area and excavate to the required depth, ensuring a stable sub-base.",
    icon: Maximize,
  },
  {
    step: "02",
    title: "Forming & Rebar",
    desc: "Precision wood forming and steel reinforcement (rebar) are set to ensure structural integrity.",
    icon: HardHat,
  },
  {
    step: "03",
    title: "The Pour",
    desc: "High-quality concrete is poured, leveled, and floated to achieve the desired texture.",
    icon: Droplets,
  },
  {
    step: "04",
    title: "Curing & Sealing",
    desc: "We apply curing compounds to prevent cracks and seal the surface for long-term protection.",
    icon: ShieldCheck,
  },
];

const stats = [
  { label: "Projects Completed", value: "700+" },
  { label: "Cubic Yards Poured", value: "25k" },
  { label: "Years in Business", value: "10+" },
  { label: "Customer Rating", value: "4.9/5" },
];

export default function Home() {
  return (
    <main className="pt-0">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-50 grayscale-[20%]"
            alt="Professional concrete finishing"
            src="https://images.pexels.com/photos/15109999/pexels-photo-15109999.jpeg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/20 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                Industrial Strength Concrete
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              Concrete & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">
                FOUNDATIONS
              </span>
            </h1>

            <p className="text-xl text-zinc-300 max-w-xl font-light leading-relaxed">
              We provide quality concrete services for residential and
              commercial projects, including foundations, driveways, sidewalks,
              garage slabs, shops, mechanic shops, and more.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="/contact"
                className="group bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 font-bold uppercase tracking-widest transition-all flex items-center gap-3"
              >
                Get Your Estimate
                <MoveRight
                  className="group-hover:translate-x-2 transition-transform"
                  size={20}
                />
              </Link>{" "}
              <Link
                href="/projects"
                className="group bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 font-bold uppercase tracking-widest transition-all flex items-center gap-3"
              >
                Our Works
                <MoveRight
                  className="group-hover:translate-x-2 transition-transform"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="text-4xl font-black text-zinc-900 dark:text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">
                What We Do
              </h2>
              <h3 className="text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
                Our Specialties.
              </h3>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-sm">
              We specialize in high-durability pours that withstand temperature
              fluctuations and heavy usage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative p-10 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-900 dark:hover:bg-amber-600 hover:text-white transition-all duration-500"
              >
                <div className="mb-8 text-amber-600 group-hover:text-white transition-colors">
                  <service.icon size={48} strokeWidth={1} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-300 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-amber-500 group-hover:text-white"
                      />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Overview / Process Section */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Step-by-Step
            </h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
              The Pour Process
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-24 left-0 w-full h-px bg-zinc-800 z-0" />

            {workProcess.map((item, i) => (
              <div key={i} className="relative z-10 space-y-6 group">
                <div className="w-16 h-16 bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <div className="space-y-2">
                  <span className="text-amber-500 font-mono text-sm font-bold">
                    {item.step}
                  </span>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Maintenance Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-zinc-500">
              Everything you need to know about your new concrete.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long until I can drive on my new driveway?",
                a: "For standard vehicles, we recommend waiting 7 full days. For heavy trucks or RVs, wait 14-28 days to ensure full structural curing.",
              },
              {
                q: "Will my concrete crack?",
                a: "All concrete shrinks slightly as it cures. We minimize visible cracking by using strategic expansion joints and fiber-mesh reinforcement.",
              },
              {
                q: "Do you offer stamped or colored concrete?",
                a: "Yes, we offer a wide range of patterns (slate, brick, stone) and integral colors to match your home's aesthetic.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-6 border border-zinc-100 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer group"
              >
                <div className="flex justify-between items-center">
                  <h5 className="font-bold text-zinc-900 dark:text-white flex items-center gap-3">
                    <MessageSquare size={18} className="text-amber-600" />{" "}
                    {faq.q}
                  </h5>
                  <ArrowRight
                    size={16}
                    className="text-zinc-300 group-hover:text-amber-600 transition-colors"
                  />
                </div>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <h3 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
                Trusted by our Neighbors.
              </h3>
              <p className="text-zinc-500">
                See why Steel Bird is the highest-rated concrete contractor in
                the region.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Robert M.",
                  text: "Steel Bird replaced our 30-year-old driveway in just 3 days. The broom finish is perfect and the drainage is exactly what we needed.",
                },
                {
                  name: "Sarah J.",
                  text: "Professional crew and excellent communication. They handled our basement slab pour with zero mess. Highly recommended.",
                },
              ].map((review, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-zinc-950 p-8 shadow-sm border border-zinc-100 dark:border-zinc-800"
                >
                  <p className="text-zinc-600 dark:text-zinc-400 italic mb-6">
                    "{review.text}"
                  </p>
                  <p className="font-bold text-sm uppercase tracking-widest">
                    — {review.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-8 md:p-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto bg-amber-600 p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <img
              src="https://www.transparenttextures.com/patterns/carbon-fibre.png"
              alt="pattern"
              className="w-full h-full object-repeat"
            />
          </div>
          <div className="relative z-10 text-white max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 italic">
              Ready to pour?
            </h2>
            <p className="text-amber-100 text-lg">
              Book your free on-site measurement today. No hidden fees, just
              honest work.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-zinc-900 text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center gap-3 shadow-2xl">
              Free Consultation <Timer size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
