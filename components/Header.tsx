"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  { label: "About", href: "/about" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    // Added z-50 to ensure the header stays on top of page content
    <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300">
      <nav className="flex justify-between items-center px-6 md:px-8 h-20 max-w-7xl mx-auto relative z-[60]">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter"
        >
          STEEL BIRD
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium uppercase tracking-wider text-sm">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-amber-600 dark:hover:bg-amber-500 transition-all duration-200 active:scale-95"
          >
            Consultation
            <ArrowRight size={14} />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-900 dark:text-zinc-50 outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - FIXED TRANSPARENCY AND Z-INDEX */}
      <div
        className={`fixed inset-0 h-screen w-screen bg-white dark:bg-zinc-950 z-[55] transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-8 gap-8 overflow-y-auto">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${index * 75}ms` : "0ms" }}
              className={`text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 transition-all duration-500 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div
            className={`mt-auto pb-12 transition-all duration-500 delay-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          >
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-amber-600 text-white py-5 font-bold uppercase tracking-widest text-sm flex justify-center items-center gap-2 active:scale-95 transition-transform"
            >
              Start a Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
