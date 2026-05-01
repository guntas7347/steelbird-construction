"use client";

import React, { useState } from "react";
import {
  Maximize2,
  MapPin,
  Calendar,
  ArrowRight,
  Filter,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

// --- Project Data ---

const categories = [
  "All",
  "Driveways",
  "Basements",
  "Commercial",
  "Decorative",
];

const projects = [
  {
    id: 1,
    title: "The Oak Ridge Driveway",
    location: "Asheville, NC",
    category: "Driveways",
    image:
      "https://images.unsplash.com/photo-1590079015191-f569a6a26c8e?auto=format&fit=crop&q=80",
    description:
      "Full tear-out and replacement with a custom 4,500 PSI broom finish and picture-frame borders.",
    specs: "3,200 SQ FT",
    date: "March 2026",
  },
  {
    id: 2,
    title: "Industrial Logistics Slab",
    location: "Greenville, SC",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
    description:
      "Laser-leveled high-tolerance floor for a 50,000 sq ft distribution center.",
    specs: "52,000 SQ FT",
    date: "Jan 2026",
  },
  {
    id: 3,
    title: "Modernist Pool Deck",
    location: "Charleston, SC",
    category: "Decorative",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
    description:
      "Sand-washed finish with integrated drainage and slip-resistant texture.",
    specs: "1,800 SQ FT",
    date: "Nov 2025",
  },
  {
    id: 4,
    title: "Luxury Estate Basement",
    location: "Charlotte, NC",
    category: "Basements",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
    description:
      "Structural slab featuring radiant heat tubing and vapor barrier protection.",
    specs: "4,500 SQ FT",
    date: "Dec 2025",
  },
  {
    id: 5,
    title: "Stamped Slate Entry",
    location: "Spartanburg, SC",
    category: "Decorative",
    image:
      "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80",
    description:
      "Ashlar slate pattern with charcoal antiquing and high-gloss sealer.",
    specs: "900 SQ FT",
    date: "Feb 2026",
  },
  {
    id: 6,
    title: "Retail Hub Walkway",
    location: "Rock Hill, SC",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    description:
      "ADA-compliant pedestrian network for a high-traffic shopping district.",
    specs: "12,000 SQ FT",
    date: "Sept 2025",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-20">
      {/* --- Page Header --- */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs">
                Project Gallery
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white">
                Our Work <br />
                In Concrete.
              </h1>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light">
                Explore our portfolio of high-durability installations across
                residential and industrial sectors.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                    activeFilter === cat
                      ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20"
                      : "bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Project Grid --- */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col h-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                  <div className="bg-amber-600 text-white p-3 shadow-xl">
                    <Maximize2 size={20} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-600 px-2 py-1">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs">
                      <MapPin size={12} className="text-amber-600" />
                      {project.location}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 font-light line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800 grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">
                      Dimensions
                    </p>
                    <p className="text-xs font-bold dark:text-white">
                      {project.specs}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">
                      Completed
                    </p>
                    <p className="text-xs font-bold dark:text-white">
                      {project.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Performance Overview Section --- */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
          <CheckCircle2 size={400} />
        </div>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Engineered <br />
              to Endure.
            </h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              Every project in our gallery represents a commitment to technical
              standards. We don't just pour concrete; we manage the chemical and
              structural integrity of your environment.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-black text-amber-500">Zero</p>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Structural Failures
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-amber-500">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  On-Time Delivery
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square bg-zinc-800 border border-zinc-700 p-8 flex flex-col justify-center gap-4">
                <Calendar className="text-amber-600" />
                <h4 className="font-bold">20+ Years</h4>
                <p className="text-xs text-zinc-400">
                  Average lifespan of our driveway installations.
                </p>
              </div>
              <div className="aspect-square overflow-hidden grayscale">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
                  className="w-full h-full object-cover"
                  alt="Detail"
                />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-square overflow-hidden grayscale">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
                  className="w-full h-full object-cover"
                  alt="Detail"
                />
              </div>
              <div className="aspect-square bg-amber-600 p-8 flex flex-col justify-center gap-4 text-white">
                <Filter className="text-white" />
                <h4 className="font-bold italic">ISO Certified</h4>
                <p className="text-xs text-amber-100">
                  Meeting international standards for raw material sourcing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-24 max-w-7xl mx-auto px-8 text-center">
        <div className="bg-zinc-100 dark:bg-zinc-900 p-16 md:p-24 border border-zinc-200 dark:border-zinc-800 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white italic underline decoration-amber-600 underline-offset-8">
            See enough? Let's build yours.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Our estimates are detailed, transparent, and valid for 30 days. No
            pressure, just a professional plan for your property.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-zinc-950 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center gap-3">
              Request Free Quote <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
