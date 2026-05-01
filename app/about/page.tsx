"use client";

import React from "react";
import {
  History,
  Users,
  Trophy,
  Target,
  MapPin,
  Briefcase,
  Award,
  CheckCircle2,
  ArrowRight,
  HardHat,
} from "lucide-react";

// --- About Data ---

const milestones = [
  {
    year: "1984",
    event: "Steel Bird Founded",
    desc: "Started as a small residential masonry crew in Asheville with one truck and a mixer.",
  },
  {
    year: "1995",
    event: "Industrial Expansion",
    desc: "Acquired our first laser-screed and began bidding on regional warehouse logistics centers.",
  },
  {
    year: "2010",
    event: "Engineering Division",
    desc: "Brought structural engineers in-house to offer design-build services for complex slabs.",
  },
  {
    year: "2024",
    event: "Sustainability Milestone",
    desc: "Achieved 40% carbon reduction across all standard residential mix designs.",
  },
];

const values = [
  {
    title: "Uncompromising Integrity",
    icon: CheckCircle2,
    desc: "We never bury mistakes. If a pour isn't perfect, we fix it—at our cost, not yours.",
  },
  {
    title: "Engineering First",
    icon: HardHat,
    desc: "Every project is a structural challenge. We apply scientific principles to everyday concrete.",
  },
  {
    title: "Client Partnership",
    icon: Users,
    desc: "We act as consultants, not just contractors. Your project's longevity is our shared goal.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-20">
      {/* --- Heritage Hero --- */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-30">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Vintage construction"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">
              Our Story
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              FORTY YEARS <br />
              IN THE MUD.
            </h1>
            <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
              We started with a simple belief: concrete shouldn't just be a
              foundation; it should be a legacy. Four decades later, we're still
              building them.
            </p>
          </div>
        </div>
      </section>

      {/* --- Mission Statement --- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
              Poured with purpose. <br />
              Driven by data.
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
              Steel Bird isn't your average concrete crew. We are a team of
              project managers, structural specialists, and seasoned finishers
              who view every driveway, sidewalk, and slab as an engineering
              feat.
            </p>
            <div className="grid gap-6">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
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
          <div className="relative">
            <div className="aspect-[4/5] bg-zinc-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Construction site"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-amber-600 p-12 text-white shadow-2xl hidden md:block">
              <History size={40} className="mb-4" />
              <p className="text-sm font-bold uppercase tracking-widest">
                Since 1984
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Timeline Section --- */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black tracking-tighter italic">
              The Evolution of Steel Bird
            </h2>
            <p className="text-zinc-500">
              How we became a leader in structural concrete solutions.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-zinc-800 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {milestones.map((item, i) => (
                <div key={i} className="space-y-6 group">
                  <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 font-black text-xl group-hover:bg-amber-600 group-hover:text-white transition-all">
                    {item.year}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">{item.event}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Leadership Section --- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">
              Leadership
            </h2>
            <h3 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
              Expertise in the Field.
            </h3>
          </div>
          <button className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs hover:text-amber-600 transition-colors">
            Join Our Team <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              name: "Elias Vance",
              role: "Founder & CEO",
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
            },
            {
              name: "Marcus Thorne",
              role: "Head of Engineering",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
            },
            {
              name: "Elena Rossi",
              role: "Sustainability Lead",
              img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
            },
          ].map((person, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 mb-6 border border-zinc-200 dark:border-zinc-800">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
              <h4 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                {person.name}
              </h4>
              <p className="text-amber-600 font-bold text-xs uppercase tracking-widest mt-1">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Awards & Accreditation --- */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-4">
            <Award className="text-amber-600" size={48} strokeWidth={1} />
            <div>
              <p className="font-black text-2xl tracking-tight">
                Voted #1 Masonry Crew
              </p>
              <p className="text-zinc-500 text-sm">
                Carolina Builders Association 2023
              </p>
            </div>
          </div>
          <div className="h-12 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
          <div className="flex items-center gap-8 opacity-40 grayscale">
            {/* Placeholder for Logos */}
            <span className="font-black text-2xl tracking-tighter">ACI</span>
            <span className="font-black text-2xl tracking-tighter">ASTM</span>
            <span className="font-black text-2xl tracking-tighter">ASCE</span>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-8 space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white">
            Ready to build a legacy?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg font-light leading-relaxed">
            Whether it's a residential driveway or a commercial slab, we bring
            the same level of obsession to every project. Let's talk about your
            foundation.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-amber-600 text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-amber-700 transition-all shadow-xl shadow-amber-900/20">
              Get an Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
