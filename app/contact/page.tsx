"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  FileText,
  Hammer,
} from "lucide-react";

export default function ContactPage() {
  const [isTechnical, setIsTechnical] = useState(false);

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-20">
      {/* --- Header --- */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              LET'S TALK <br />
              FOUNDATIONS.
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              Whether you're looking for a residential driveway estimate or a
              commercial structural consultation, our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* --- Contact Info Sidebar --- */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-amber-600 transition-colors">
                  <Phone className="text-amber-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-xs mb-1">
                    Call Us
                  </h4>
                  <p className="text-lg font-black text-zinc-800 dark:text-zinc-200">
                    (800) 555-CONC
                  </p>
                  <p className="text-xs text-zinc-500">
                    Mon-Fri: 7am — 5pm EST
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-amber-600 transition-colors">
                  <Mail className="text-amber-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-xs mb-1">
                    Email
                  </h4>
                  <p className="text-lg font-black text-zinc-800 dark:text-zinc-200">
                    estimates@steelbird.com
                  </p>
                  <p className="text-xs text-zinc-500">
                    24/7 Response within 1 business day
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-amber-600 transition-colors">
                  <MapPin className="text-amber-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-xs mb-1">
                    Office
                  </h4>
                  <p className="text-zinc-800 dark:text-zinc-200 text-sm leading-relaxed">
                    1200 Industrial Way, Suite 400
                    <br />
                    Asheville, NC 28801
                  </p>
                </div>
              </div>
            </div>

            {/* --- Trust Badge --- */}
            <div className="p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm space-y-4">
              <ShieldCheck className="text-amber-600" size={32} />
              <h5 className="font-black tracking-tight">
                The Precision Guarantee
              </h5>
              <p className="text-xs text-zinc-500 leading-relaxed">
                All inquiries are reviewed by a licensed project manager. We
                provide firm, no-obligation quotes valid for 30 calendar days.
              </p>
            </div>
          </div>

          {/* --- Inquiry Form --- */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 md:p-12 shadow-2xl shadow-zinc-200/50 dark:shadow-none">
              <form className="space-y-8">
                {/* Form Header / Type Toggle */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-8 border-b border-zinc-100 dark:border-zinc-800">
                  <h3 className="text-2xl font-black tracking-tight">
                    Project Inquiry
                  </h3>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest ${!isTechnical ? "text-amber-600" : "text-zinc-400"}`}
                    >
                      Residential
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsTechnical(!isTechnical)}
                      className="w-12 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full relative transition-colors"
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 rounded-full transition-all ${isTechnical ? "left-7 bg-amber-600" : "left-1 bg-zinc-400"}`}
                      />
                    </button>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest ${isTechnical ? "text-amber-600" : "text-zinc-400"}`}
                    >
                      Engineering / B2B
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 focus:border-amber-600 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 focus:border-amber-600 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 focus:border-amber-600 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Project Type
                    </label>
                    <select className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 focus:border-amber-600 outline-none transition-all text-sm appearance-none">
                      <option>Select Option</option>
                      <option>New Driveway</option>
                      <option>Replacement Slab</option>
                      <option>Commercial Foundation</option>
                      <option>Decorative / Stamped</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Project Details / SQ FT
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe the current condition and desired outcome..."
                    className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 focus:border-amber-600 outline-none transition-all text-sm resize-none"
                  ></textarea>
                </div>

                {isTechnical && (
                  <div className="p-6 bg-zinc-900 border-l-4 border-amber-600 flex items-start gap-4">
                    <FileText className="text-amber-500 mt-1" size={20} />
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-white uppercase tracking-widest">
                        Technical Attachment Required
                      </p>
                      <p className="text-[10px] text-zinc-400">
                        Please have your site plans (PDF/CAD) ready for the
                        follow-up email from our engineers.
                      </p>
                    </div>
                  </div>
                )}

                <button className="w-full bg-amber-600 text-white font-black uppercase tracking-[0.2em] py-5 flex items-center justify-center gap-3 hover:bg-amber-500 transition-all shadow-xl shadow-amber-900/20 active:scale-[0.98]">
                  Submit Inquiry <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- Secondary CTA / Visit Office --- */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
            <div className="bg-white dark:bg-zinc-950 p-12 space-y-6">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 w-fit">
                <Hammer className="text-amber-600" />
              </div>
              <h4 className="text-2xl font-bold tracking-tight">
                Visit the Showroom
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                Want to see stamp patterns and color samples in person? Visit
                our Asheville headquarters to touch and feel our various
                concrete finishes before you commit.
              </p>
              <div className="flex items-center gap-2 text-amber-600 font-bold text-[10px] uppercase tracking-widest">
                Get Directions <Send size={14} />
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-950 p-12 space-y-6">
              <div className="p-3 bg-zinc-100 dark:bg-zinc-900 w-fit">
                <Clock className="text-amber-600" />
              </div>
              <h4 className="text-2xl font-bold tracking-tight">
                Emergency Repair
              </h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                We offer structural stabilization and emergency patching for
                high-risk commercial failures. Our teams are available for rapid
                mobilization 24/7.
              </p>
              <div className="flex items-center gap-2 text-amber-600 font-bold text-[10px] uppercase tracking-widest">
                Call Emergency Line <Phone size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
