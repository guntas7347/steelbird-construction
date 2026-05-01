"use client";

import React from "react";
import {
  Dna,
  Ruler,
  Microscope,
  ThermometerSnowflake,
  Wind,
  Waves,
  Scaling,
  Zap,
  CheckCircle,
  FileText,
  Activity,
  Drill,
} from "lucide-react";

// --- Engineering Data ---

const techSpecs = [
  {
    title: "Structural Reinforcement",
    icon: Dna,
    description:
      "We utilize Grade 60 epoxy-coated rebar and high-tensile fiber mesh to prevent lateral shifting and internal stress fractures.",
    stats: ["Tensile Strength: 60k PSI", "Corrosion Resistance: High"],
  },
  {
    title: "Mix Design Optimization",
    icon: Microscope,
    description:
      "Every pour is customized for its environment. We adjust air entrainment and water-cement ratios based on local humidity and load expectations.",
    stats: ["Slump Range: 3-5 Inches", "Air Content: 5-7%"],
  },
  {
    title: "Thermal Management",
    icon: ThermometerSnowflake,
    description:
      "Our curing protocols account for heat of hydration. We monitor internal temperatures to prevent thermal cracking in mass pours.",
    stats: ["Max Temp Diff: 35°F", "Curing Blankets: Standard"],
  },
  {
    title: "Soil Mechanics",
    icon: Drill,
    description:
      "A slab is only as good as the ground it sits on. We perform sub-grade compaction testing (Proctor Test) before every pour.",
    stats: ["Compaction: 95% Modified", 'Sub-base: 4-6" Granular'],
  },
];

const complianceItems = [
  "ASTM C39 (Compressive Strength Testing)",
  "ASTM C143 (Slump of Hydraulic-Cement)",
  "ACI 318 (Building Code Requirements)",
  "ASTM C94 (Ready-Mixed Concrete Standards)",
  "ADA Standard for Accessible Design",
];

export default function EngineeringPage() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen pt-20">
      {/* --- Technical Hero --- */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-3 py-1 px-3 border border-amber-500/30 bg-amber-500/10 text-amber-500 rounded-sm">
              <Activity size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Structural Analysis Dept
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              THE SCIENCE <br />
              OF STRENGTH.
            </h1>
            <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
              At Steel Bird, we treat concrete as a precision-engineered
              composite material. Our methodology integrates advanced chemical
              mix-design with rigorous geotechnical standards.
            </p>
          </div>
        </div>
      </section>

      {/* --- Engineering Pillars --- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
          {techSpecs.map((spec, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-950 p-12 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group"
            >
              <div className="mb-8 p-4 w-fit bg-zinc-900 text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-all">
                <spec.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white tracking-tight">
                {spec.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8 font-light">
                {spec.description}
              </p>
              <div className="space-y-2">
                {spec.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2 border-b border-zinc-100 dark:border-zinc-800"
                  >
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">
                      Metric
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-600">
                      {stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Detailed Methodology Section --- */}
      <section className="py-24 bg-white dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight">
                Technical Compliance
              </h2>
              <p className="text-zinc-500 font-light">
                We operate in strict adherence to ACI and ASTM standards,
                providing full transparency in our batch reports.
              </p>
            </div>

            <div className="grid gap-4">
              {complianceItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950"
                >
                  <FileText className="text-amber-600" size={20} />
                  <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 p-12 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <Scaling size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-6 italic">
              Engineering Beyond the Slab
            </h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 text-amber-500 mt-1">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2">
                    Ground Vibration Mitigation
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Our proprietary sub-base layering reduces transmission of
                    heavy machinery vibrations in industrial environments.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 text-amber-500 mt-1">
                  <Wind size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Permeability Modeling</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Advanced pitch calculations to ensure 100% water diversion,
                    protecting your foundation and landscape from erosion.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 text-amber-500 mt-1">
                  <Waves size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Sulphate Resistance</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Chemical additives included for areas with high soil acidity
                    or coastal salt exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Testing & Quality Control --- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black tracking-tighter">
            Quality Control Pipeline
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            We verify our work at every phase. If it doesn't meet the PSI
            requirement, we don't sign off on it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "Pre-Pour",
              action: "Laser-Transit leveling and soil moisture check.",
            },
            {
              step: "In-Progress",
              action: "Randomized slump testing and cylinder casting.",
            },
            {
              step: "Post-Pour",
              action: "3, 7, and 28-day compression break analysis.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 group overflow-hidden"
            >
              <span className="absolute -bottom-4 -right-4 text-6xl font-black text-zinc-100 dark:text-zinc-900 group-hover:text-amber-500/10 transition-colors">
                0{i + 1}
              </span>
              <h4 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4">
                {item.step}
              </h4>
              <p className="text-zinc-700 dark:text-zinc-300 font-medium relative z-10">
                {item.action}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Technical CTA --- */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
            Request a Structural Consultation
          </h2>
          <p className="text-zinc-400 font-light">
            Need more than just a driveway? Our engineering team provides
            detailed spec sheets for commercial bids and high-complexity
            residential builds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-amber-600 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-amber-500 transition-all flex items-center justify-center gap-3">
              Consult an Engineer <Ruler size={18} />
            </button>
            <button className="border border-zinc-700 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">
              Request Spec Sheet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
