"use client";

import React from "react";
import {
  Check,
  ArrowRight,
  HardHat,
  Droplets,
  Ruler,
  ShieldCheck,
  Wind,
  Hammer,
  Maximize2,
  Construction,
  MapPin,
  Warehouse,
  Layers,
} from "lucide-react";
import Link from "next/link";

// --- Data Structures ---

const mainServices = [
  {
    id: "driveways",
    title: "Concrete Driveways",
    icon: Construction,
    image:
      "https://images.unsplash.com/photo-1590079015191-f569a6a26c8e?auto=format&fit=crop&q=80",
    description:
      "We build high-quality concrete driveways with strong reinforcement and professional finishing.",
    details: [
      "Rebar reinforcement",
      "Expansion joints",
      "Broom and spin finish",
      "Expose aggregate",
      "Stamp concrete",
    ],
    // priceRange: "Starting at $12 / sq ft",
  },
  {
    id: "basements",
    title: "Basement & Slabs",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
    description:
      "Precision-leveled structural slabs featuring advanced vapor barriers to prevent moisture and radon entry.",
    details: [
      "Leveling within 1/8 inch tolerance",
      "10-mil Stego Wrap Vapor Barrier",
      "High-Early Strength Mix Designs",
      // "Fiber-mesh reinforcement",
    ],
    // priceRange: "Starting at $10 / sq ft",
  },
  {
    id: "garage",
    title: "Garage Flooring",
    icon: Warehouse,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
    description:
      "Heavy-duty industrial finishes designed to resist oil spills, chemical corrosion, and tire marking.",
    details: [
      "Power-Troweled Smooth Finish",
      // "Chemical Resistant Additives",
      // "Epoxy-Ready Surface Prep",
      // "Abrasion-Resistant Aggregates",
    ],
    // priceRange: "Starting at $14 / sq ft",
  },
  {
    id: "sidewalks",
    title: "Steps",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80",
    description:
      "Custom concrete steps including floating steps and finished nosing options.",
    details: [
      "Floating steps",
      "Nosing steps",
      "Broom finish",
      "Decorative boarder option",
    ],
    // priceRange: "Starting at $9 / sq ft",
  },
];

// const technicalSpecs = [
//   {
//     feature: "Compressive Strength",
//     residential: "3,500 PSI",
//     industrial: "5,000+ PSI",
//   },
//   {
//     feature: "Reinforcement",
//     residential: "Fiber Mesh / #3 Rebar",
//     industrial: "Grade 60 #4 Rebar",
//   },
//   {
//     feature: "Curing Time (Foot Traffic)",
//     residential: "24 Hours",
//     industrial: "48 Hours",
//   },
//   {
//     feature: "Curing Time (Vehicle)",
//     residential: "7 Days",
//     industrial: "14-28 Days",
//   },
// ];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-20">
      {/* --- Page Header --- */}
      <section className="relative py-24 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40 grayscale-[20%] scale-105"
            alt="Professional concrete finishing"
            src="https://images.pexels.com/photos/15109999/pexels-photo-15109999.jpeg"
          />
          {/* Fixed Gradient Overlay: Ensures text is legible regardless of the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80" />
        </div>

        {/* Content Layer: Added relative and z-10 to stay above the background */}
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-amber-600" />
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs">
                Capabilities
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[1.1]">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                Structural Excellence.
              </span>
            </h1>

            <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-light leading-relaxed">
              From residential driveways to complex industrial slabs, we provide
              the technical precision required for lifelong durability.
            </p>

            {/* Structural accent line for "Engineering" feel */}
            <div className="mt-10 h-1 w-20 bg-amber-600" />
          </div>
        </div>
      </section>

      {/* --- Detailed Services Section --- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="space-y-32">
          {mainServices.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full group relative">
                <div className="absolute -inset-4 border border-amber-600/20 translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
                <div className="relative overflow-hidden aspect-[4/3] shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute top-6 left-6 bg-zinc-900 text-white p-4">
                    <service.icon size={32} strokeWidth={1} />
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-amber-600/10 flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                        <Check
                          size={14}
                          className="text-amber-600 group-hover:text-white"
                        />
                      </div>
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">
                    {service?.priceRange || "Quote on Request"}
                  </span>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white hover:text-amber-600 transition-colors"
                  >
                    Contact Us <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Technical Comparison Table --- */}
      {/* <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-3xl font-black tracking-tighter">
              Technical Specifications
            </h3>
            <p className="text-zinc-400">
              We match our mix design to your specific usage requirements.
            </p>
          </div>

          <div className="overflow-hidden border border-zinc-800 rounded-lg shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-800/50">
                  <th className="p-6 text-amber-500 font-bold uppercase tracking-widest text-xs">
                    Requirement
                  </th>
                  <th className="p-6 text-white font-bold uppercase tracking-widest text-xs">
                    Standard Residential
                  </th>
                  <th className="p-6 text-white font-bold uppercase tracking-widest text-xs">
                    Industrial Grade
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {technicalSpecs.map((spec, i) => (
                  <tr
                    key={i}
                    className="hover:bg-zinc-800/30 transition-colors"
                  >
                    <td className="p-6 font-medium text-zinc-400">
                      {spec.feature}
                    </td>
                    <td className="p-6 text-zinc-200">{spec.residential}</td>
                    <td className="p-6 text-amber-500 font-bold">
                      {spec.industrial}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* --- Why Our Concrete Section --- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: Ruler,
              title: "Precision Forming",
              text: "Laser-leveled forms ensure water always flows away from your foundation.",
            },
            {
              icon: Droplets,
              title: "Slump Control",
              text: "We test every batch to ensure the perfect water-to-cement ratio for longevity.",
            },
            {
              icon: ShieldCheck,
              title: "Warranty Guaranteed",
              text: "All work is completed with quality workmanship and attention to detail, backed by a limited warranty in accordance with industry standards.",
            },
          ].map((item, i) => (
            <div key={i} className="space-y-4 group">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-amber-600 transition-colors">
                <item.icon className="text-amber-600" />
              </div>
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-24 bg-amber-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-8 space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic">
            Ready for a permanent solution?
          </h2>
          <p className="text-amber-100 text-lg font-light">
            Get a detailed, itemized quote for your project within 24 hours of
            our site visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-zinc-950 text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-black transition-all">
              Schedule Site Visit
            </button>
            <button className="border-2 border-white text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-amber-600 transition-all">
              Download Pricing Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
