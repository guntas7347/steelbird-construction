"use client";

import React from "react";
import {
  History,
  Users,
  ShieldCheck,
  Zap,
  Snowflake,
  Hammer,
  ArrowRight,
  HardHat,
  Construction,
  CheckCircle2,
} from "lucide-react";

// --- Data Structures ---

const services = [
  "Concrete Driveways",
  "Basement & Garage Slabs",
  "Walkways & Steps",
  "Mid-level Warehouses",
  "Mechanic Shops",
  "Foundations & Footings",
  "Sidewalks & Curbs",
  "Residential & Commercial Flatwork",
  "Custom Concrete Finishing",
];

const whyChooseUs = [
  {
    title: "Quality Workmanship",
    icon: Hammer,
    desc: "Every project is completed with precision, durability, and attention to detail.",
  },
  {
    title: "Reliable Service",
    icon: Users,
    desc: "We work closely with homeowners, builders, and contractors to keep projects on schedule.",
  },
  {
    title: "Built for Canadian Conditions",
    icon: Snowflake,
    desc: "Designed to handle freeze-thaw cycles, heavy traffic, and long-term wear.",
  },
  {
    title: "Professional Standards",
    icon: ShieldCheck,
    desc: "We use quality materials and proper reinforcement for lasting performance.",
  },
];

const values = [
  {
    title: "Built on Trust",
    icon: CheckCircle2,
    desc: "We stand behind our work, building solutions that combine strength and functionality.",
  },
  {
    title: "Expert Preparation",
    icon: HardHat,
    desc: "Our focus is on proper excavation and forming—the invisible keys to a lasting pour.",
  },
  {
    title: "Modern Solutions",
    icon: Zap,
    desc: "Specializing in everything from residential slabs to mid-level industrial warehouses.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-20">
      {/* --- Hero Section --- */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-20">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Concrete texture"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">
              Steel Bird Construction
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              BUILT ON TRUST. <br />
              BUILT TO LAST.
            </h1>
            <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
              With over a decade of industry experience, we deliver durable,
              professionally finished concrete work designed for the toughest
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* --- Mission & Values --- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white uppercase">
              Beyond the Surface
            </h2>
            <div className="space-y-4 text-md text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
              <p>
                Steel Bird Construction is a concrete construction company
                specializing in residential and commercial flatwork,
                foundations, slabs, and custom concrete solutions.
              </p>
              <p>
                We believe concrete is more than just a surface. It is the
                foundation of every home, business, and project we help build.
                Our team focuses on quality workmanship and attention to detail
                on every project — from excavation to final finishing.
              </p>
            </div>

            <div className="grid gap-4">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 group hover:border-amber-500/50 transition-colors"
                >
                  <value.icon className="text-amber-600 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white">
                      {value.title}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative sticky top-32">
            <div className="aspect-square bg-zinc-200 overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Construction engineering"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-600 p-8 text-white shadow-2xl">
              <History size={32} className="mb-2" />
              <p className="text-xl font-black italic tracking-tighter">
                10+ YEARS
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                Of Industry Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Capabilities Grid --- */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tighter uppercase italic text-amber-500">
                What We Do
              </h2>
              <p className="text-zinc-500 leading-relaxed">
                From small residential repairs to large-scale commercial
                installations, our capabilities cover the full spectrum of
                modern concrete needs.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
                  <Construction size={16} className="text-amber-600" />
                  Full Service Contractor
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all group"
                >
                  <div className="w-1.5 h-1.5 bg-amber-600 group-hover:scale-150 transition-transform" />
                  <span className="text-sm font-medium tracking-wide uppercase">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us (Mapped) --- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs">
            The Steel Bird Edge
          </h2>
          <h3 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white uppercase">
            Why Choose Us
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className="space-y-6 p-8 border border-zinc-100 dark:border-zinc-800 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center rounded-full text-amber-600">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-24 bg-amber-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-8 space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
            Ready to Build?
          </h2>
          <p className="text-white/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Our goal is simple — deliver reliable concrete work our clients can
            trust for years to come. Let's start your project today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button className="bg-white text-amber-600 px-12 py-5 font-bold uppercase tracking-widest hover:bg-zinc-100 transition-all flex items-center justify-center gap-2 shadow-2xl">
              Get an Estimate <ArrowRight size={18} />
            </button>
            <button className="border-2 border-white text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-amber-600 transition-all">
              Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
