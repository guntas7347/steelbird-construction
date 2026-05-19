"use client";

import React, { useState } from "react";
import {
  Maximize2,
  MapPin,
  Calendar,
  Filter,
  CheckCircle2,
  ExternalLink,
  Box,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import {
  belowGradeEnterance,
  otherProjects,
  plainConcreteProjects,
} from "@/lib/data";

const categories = ["All", "Plain Concrete", "Below Grade Entrance", "Other"];

const projectImages: Record<string, string[]> = {
  "Plain Concrete": plainConcreteProjects,
  "Below Grade Entrance": belowGradeEnterance,
  Other: otherProjects,
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? Object.entries(projectImages).flatMap(([category, images]) =>
          images.map((image, index) => ({
            id: `${category}-${index}`,
            category,
            image,
          })),
        )
      : (projectImages[activeFilter] || []).map((image, index) => ({
          id: `${activeFilter}-${index}`,
          category: activeFilter,
          image,
        }));
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
                In Color.
              </h1>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light">
                Explore our portfolio of high-durability installations.
              </p>
            </div>

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
          {filteredProjects.map((project: any, idx) => (
            <div
              key={project.id || idx}
              className="group flex flex-col h-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-2xl"
            >
              {/* Image Container - Always visible if image exists */}
              <div
                className={`relative overflow-hidden ${!project.title && !project.description ? "aspect-square" : "aspect-[4/5]"} bg-zinc-200 dark:bg-zinc-800`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title || "Steel Bird Project"}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Box size={48} className="text-zinc-400 opacity-20" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                  <Link href={project.image} target="_blank">
                    <ExternalLink
                      size={30}
                      className="bg-amber-600 text-white p-2 shadow-xl"
                    />
                  </Link>
                </div>

                {project.category && (
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-600 px-2 py-1">
                      {project.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Container - Only renders if there is text data available */}
              {(project.title ||
                project.description ||
                project.location ||
                project.specs ||
                project.date) && (
                <div className="p-8 flex-1 flex flex-col">
                  {(project.title || project.location) && (
                    <div className="mb-4">
                      {project.title && (
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-amber-600 transition-colors">
                          {project.title}
                        </h3>
                      )}
                      {project.location && (
                        <div className="flex items-center gap-2 text-zinc-500 text-xs">
                          <MapPin size={12} className="text-amber-600" />
                          {project.location}
                        </div>
                      )}
                    </div>
                  )}

                  {project.description && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 font-light line-clamp-3">
                      {project.description}
                    </p>
                  )}

                  {/* Metrics Row */}
                  {(project.specs || project.date) && (
                    <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800 grid grid-cols-2 gap-4">
                      {project.specs && (
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">
                            Scale
                          </p>
                          <p className="text-xs font-bold dark:text-white">
                            {project.specs}
                          </p>
                        </div>
                      )}
                      {project.date && (
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">
                            Completed
                          </p>
                          <p className="text-xs font-bold dark:text-white">
                            {project.date}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* --- Performance Summary --- */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              QUALITY <br /> WITHOUT LIMITS.
            </h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              We treat every pour with the same level of obsessive detail,
              whether it's a multi-acre logistics center or a single residential
              entryway.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-zinc-800 p-8 flex flex-col justify-center gap-4">
              <Calendar className="text-amber-600" />
              <h4 className="font-bold uppercase tracking-tighter text-sm">
                Reliable Timeline
              </h4>
              <p className="text-xs text-zinc-500">
                Scheduled precision to keep your project moving.
              </p>
            </div>
            <div className="aspect-square bg-amber-600 p-8 flex flex-col justify-center gap-4 text-white">
              <Filter size={32} strokeWidth={1} />
              <h4 className="font-bold uppercase tracking-tighter text-sm">
                Material Control
              </h4>
              <p className="text-xs text-amber-100">
                Strict sourcing for maximum slab longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-4xl font-black tracking-tight mb-6">
            Want to see your project here?
          </h2>
          <button className="bg-amber-600 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-amber-700 transition-all flex items-center gap-3 mx-auto">
            Book a Site Visit <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
