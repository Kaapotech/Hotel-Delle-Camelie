"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/site";
import Camellia from "./Camellia";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Solo la home ha l'hero scuro a tutta pagina: lì la navbar parte trasparente
  // e diventa solida allo scroll. Su tutte le altre route è sempre solida,
  // altrimenti il testo crema sarebbe invisibile su sfondo chiaro.
  const isHome = pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`navbar-in fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "border-b border-gold/20 bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* logo */}
        <Link
          href="/"
          className={`group flex items-center gap-3 transition-colors ${
            solid ? "text-espresso" : "text-cream"
          }`}
        >
          <Camellia className="h-8 w-8 text-rose transition-transform duration-700 group-hover:rotate-90" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide">
              Delle Camelie
            </span>
            <span
              className={`text-[0.6rem] uppercase tracking-[0.4em] ${
                solid ? "text-espresso-soft" : "text-cream/70"
              }`}
            >
              Hotel
            </span>
          </span>
        </Link>

        {/* desktop links */}
        <ul
          className={`hidden items-center gap-9 md:flex ${
            solid ? "text-espresso" : "text-cream"
          }`}
        >
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group relative text-sm uppercase tracking-[0.18em]"
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/prenota"
              className="rounded-full border border-gold bg-gold/10 px-5 py-2 text-sm uppercase tracking-[0.18em] text-gold transition-colors duration-300 hover:bg-gold hover:text-cream"
            >
              Prenota
            </Link>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden ${
            solid ? "text-espresso" : "text-cream"
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

      {/* mobile menu — apertura con la tecnica CSS grid-rows 0fr→1fr:
          funziona (si apre) anche sui browser che non sanno animarla, perché
          non dipende da misurazioni JS dell'altezza. */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`grid overflow-hidden bg-cream/95 backdrop-blur-md transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 text-espresso">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className={`block border-b border-gold/15 py-3 text-sm uppercase tracking-[0.2em] ${
                    pathname === l.href ? "text-gold" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/prenota"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="block rounded-full bg-forest py-3 text-center text-sm uppercase tracking-[0.2em] text-cream"
              >
                Prenota ora
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
