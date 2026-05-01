"use client";

import React from "react";
import {
  Leaf,
  Recycle,
  Globe,
  Sun,
  Droplets,
  Truck,
  Wind,
  CheckCircle,
  ArrowUpRight,
  Infinity,
} from "lucide-react";

// --- Sustainability Data ---

const ecoInitiatives = [
  {
    title: "Carbon-Reduced Mixes",
    icon: Leaf,
    desc: "We utilize Fly Ash and Slag cement replacements to reduce the embodied carbon of our concrete by up to 40% compared to standard mixes.",
    impact: "-40% CO2",
  },
  {
    title: "Recycled Aggregates",
    icon: Recycle,
    desc: "Whenever possible, we source crushed recycled concrete for sub-base preparation, diverting thousands of tons from landfills annually.",
    impact: "Zero Waste Goal",
  },
  {
    title: "Local Sourcing",
    icon: Truck,
    desc: "Our raw materials are sourced within a 50-mile radius of our project sites, drastically reducing transport-related emissions.",
    impact: "Low Logistical Footprint",
  },
  {
    title: "Permeable Paving",
    icon: Droplets,
    desc: "We offer advanced pervious concrete solutions that allow rainwater to filter directly into the water table, reducing urban runoff.",
    impact: "Stormwater Management",
  },
];

const sustainabilityStats = [
  { label: "CO2 Diverted Annually", value: "12,400 Tons" },
  { label: "Recycled Content Usage", value: "35%" },
  { label: "Local Supplier Network", value: "90%" },
  { label: "LEED Certified Projects", value: "150+" },
];

export default function SustainabilityPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-20">
      {/* --- Eco Hero --- */}
      <section className="relative py-24 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Nature and industry"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-3 py-1 px-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-sm">
              <Globe size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Environmental Responsibility
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              GREENER <br />
              GROUNDWORK.
            </h1>
            <p className="text-xl text-emerald-100/70 font-light max-w-2xl leading-relaxed">
              Steel Bird is committed to decarbonizing the concrete industry. We
              combine traditional structural integrity with modern
              eco-innovation to build a future that lasts as long as the planet.
            </p>
          </div>
        </div>
      </section>

      {/* --- Stats Ribbon --- */}
      <section className="py-12 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityStats.map((stat, i) => (
              <div key={i} className="border-l border-emerald-700 pl-6">
                <p className="text-3xl font-black mb-1">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Initiatives Grid --- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">
              Our Methods
            </h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white">
              Paving a path to <br />
              Net Zero.
            </h3>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-sm italic border-l-2 border-emerald-500 pl-6">
            "Sustainability isn't a feature; it's a structural requirement for
            the 21st century."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ecoInitiatives.map((item, i) => (
            <div
              key={i}
              className="group p-10 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-emerald-600 text-white rounded-sm shadow-lg shadow-emerald-600/20">
                  <item.icon size={28} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1">
                  Impact: {item.impact}
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                Learn about the tech <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Circular Economy Section --- */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 relative">
            <div className="absolute -top-10 -left-10 text-emerald-500/10 pointer-events-none">
              <Infinity size={300} strokeWidth={1} />
            </div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl font-black tracking-tight">
                The Circular Concrete Model
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-lg leading-relaxed">
                We believe in a closed-loop system. When we tear out an old
                driveway, it doesn't end up in a pit. We crush it, grade it, and
                use it as the foundation for the next project.
              </p>
              <ul className="space-y-4">
                {[
                  "100% Diversion of demolition waste",
                  "Closed-loop water recycling on site",
                  "Biodegradable form-release agents",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-emerald-500" />
                    <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1518005020250-675f0f0fd134?auto=format&fit=crop&q=80"
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Solar"
              />
              <div className="p-8 bg-zinc-900 text-white">
                <Sun className="text-emerald-500 mb-4" />
                <h5 className="font-bold">Renewable Sites</h5>
                <p className="text-xs text-zinc-400">
                  Our site lighting and modular offices are 100% solar powered.
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="p-8 bg-emerald-600 text-white">
                <Wind className="text-emerald-100 mb-4" />
                <h5 className="font-bold">Dust Mitigation</h5>
                <p className="text-xs text-emerald-100/70">
                  Advanced HEPA filtration used during all cutting and grinding
                  phases.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Eco Office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- LEED & Certification --- */}
      <section className="py-24 max-w-5xl mx-auto px-8 text-center space-y-12">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center rounded-full">
            <CheckCircle size={40} className="text-emerald-600" />
          </div>
          <h2 className="text-3xl font-black">LEED Credit Assistance</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl">
            We work with architects and builders to maximize LEED points through
            Recycled Content (MRc4) and Regional Materials (MRc5) tracking.
          </p>
        </div>
        <button className="bg-emerald-600 text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20">
          Download Our Eco-Spec Sheet
        </button>
      </section>
    </div>
  );
}
