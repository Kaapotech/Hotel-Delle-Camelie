"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../lib/site";
import Camellia from "./Camellia";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-gold/20 bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* logo */}
        <a
          href="#top"
          className={`group flex items-center gap-3 transition-colors ${
            scrolled ? "text-espresso" : "text-cream"
          }`}
        >
          <Camellia className="h-8 w-8 text-rose transition-transform duration-700 group-hover:rotate-90" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide">
              Delle Camelie
            </span>
            <span
              className={`text-[0.6rem] uppercase tracking-[0.4em] ${
                scrolled ? "text-espresso-soft" : "text-cream/70"
              }`}
            >
              Hotel
            </span>
          </span>
        </a>

        {/* desktop links */}
        <ul
          className={`hidden items-center gap-9 md:flex ${
            scrolled ? "text-espresso" : "text-cream"
          }`}
        >
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm uppercase tracking-[0.18em]"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#booking"
              className="rounded-full border border-gold bg-gold/10 px-5 py-2 text-sm uppercase tracking-[0.18em] text-gold transition-colors duration-300 hover:bg-gold hover:text-cream"
            >
              Prenota
            </a>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri il menu"
          aria-expanded={open}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden ${
            scrolled ? "text-espresso" : "text-cream"
          }`}
        >
          <span
            className={`h-px w-7 bg-current transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-7 bg-current transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-7 bg-current transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-cream/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4 text-espresso">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-gold/15 py-3 text-sm uppercase tracking-[0.2em]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-forest py-3 text-center text-sm uppercase tracking-[0.2em] text-cream"
                >
                  Prenota ora
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
