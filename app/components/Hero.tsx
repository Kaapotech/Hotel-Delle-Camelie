"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "../lib/site";
import Camellia from "./Camellia";
import { StarIcon } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    // Tutti gli elementi animati in entrata. Servono anche come rete di
    // sicurezza: se la timeline non dovesse completarsi (StrictMode/HMR,
    // ticker fermo, ecc.) li forziamo comunque visibili.
    const introTargets =
      ".hero-eyebrow, .hero-line, .hero-script, .hero-sub, .hero-cta, .hero-scroll";

    const ctx = gsap.context(() => {
      // Stato iniziale (nascosto) impostato in modo ESPLICITO: così l'ordine
      // di render è deterministico e nessun elemento può "restare nascosto"
      // come succedeva con i .from() su StrictMode/HMR.
      gsap.set(".hero-eyebrow", { y: 24, opacity: 0 });
      gsap.set(".hero-line", { yPercent: 120, opacity: 0 });
      gsap.set(".hero-script", { scale: 0.8, opacity: 0 });
      gsap.set(".hero-sub", { y: 20, opacity: 0 });
      gsap.set(".hero-cta", { y: 20, opacity: 0 });
      gsap.set(".hero-scroll", { opacity: 0 });

      // Timeline d'ingresso
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.35,
        onComplete: () => {
          // Stato finale pulito: niente opacity/transform residui inline
          gsap.set(introTargets, { clearProps: "opacity,transform" });
        },
      });

      tl.to(".hero-eyebrow", { y: 0, opacity: 1, duration: 0.9 })
        .to(
          ".hero-line",
          { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.12 },
          "-=0.4",
        )
        .to(
          ".hero-script",
          { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.6)" },
          "-=0.7",
        )
        .to(".hero-sub", { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
        // I due pulsanti compaiono INSIEME (nessuno stagger)
        .to(".hero-cta", { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
        .to(".hero-scroll", { opacity: 1, duration: 1 }, "-=0.3");

      // Parallax al variare dello scroll
      gsap.to(".hero-bg", {
        yPercent: 22,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-content", {
        yPercent: -12,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-petal", {
        rotate: 40,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, root);

    // Rete di sicurezza: qualunque cosa accada all'animazione, dopo 4.5s il
    // contenuto (titolo, sottotitolo, pulsanti) deve essere visibile.
    // (la timeline normale finisce intorno ai 3.8s)
    const failsafe = window.setTimeout(() => {
      gsap.set(introTargets, {
        opacity: 1,
        y: 0,
        yPercent: 0,
        scale: 1,
        clearProps: "transform",
      });
    }, 4500);

    return () => {
      window.clearTimeout(failsafe);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Sfondo: foto reale con parallax */}
      <div className="hero-bg absolute inset-0 scale-110">
        <Image
          src="/room1.jpg"
          alt="Una camera elegante dell'Hotel Delle Camelie a Firenze"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Velatura scura per la leggibilità del testo */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-forest/55 to-espresso/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(176,141,87,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_85%,rgba(183,110,121,0.25),transparent_55%)]" />

      {/* Camelie decorative */}
      <Camellia className="hero-petal absolute -left-24 top-10 h-80 w-80 text-cream/5" petals={10} />
      <Camellia className="hero-petal absolute -right-28 bottom-0 h-[28rem] w-[28rem] text-rose/10" petals={11} />

      {/* vignettatura inferiore per la transizione */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream/90 to-transparent" />

      {/* Contenuto */}
      <div className="hero-content relative z-10 mx-auto max-w-4xl px-6 text-center text-cream">
        <div className="hero-eyebrow flex items-center justify-center gap-3">
          <span className="flex gap-0.5 text-gold-light" aria-label="Quattro stelle">
            {[0, 1, 2, 3].map((i) => (
              <StarIcon key={i} className="h-3.5 w-3.5" />
            ))}
          </span>
          <span className="eyebrow text-gold-light">{site.location}</span>
        </div>

        <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block overflow-hidden">
            <span className="hero-line block">Hotel</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-script block py-2 font-script text-6xl text-rose-light sm:text-8xl lg:text-9xl">
              Delle Camelie
            </span>
          </span>
        </h1>

        <p className="hero-sub mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/90 sm:text-xl">
          Camere eleganti a due passi dal Duomo. Colazione inclusa e
          <span className="text-gold-light"> miglior prezzo garantito</span>.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/prenota"
            className="hero-cta rounded-full bg-rose px-9 py-4 text-center text-sm uppercase tracking-[0.2em] text-cream shadow-lg shadow-rose/30 transition-colors duration-300 hover:bg-rose-light hover:text-espresso"
          >
            Prenota ora
          </Link>
          <Link
            href="/camere"
            className="hero-cta rounded-full border border-cream/40 px-9 py-4 text-center text-sm uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:border-gold hover:text-gold-light"
          >
            Scopri le camere
          </Link>
        </div>

        {/* Micro trust signals */}
        <p className="hero-sub mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.18em] text-cream/75">
          <span>Cancellazione gratuita</span>
          <span className="text-gold-light">·</span>
          <span>Prenotazione diretta</span>
          <span className="text-gold-light">·</span>
          <span>Wi-Fi gratuito</span>
        </p>
      </div>

      {/* indicatore di scorrimento */}
      <div className="hero-scroll absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/70">
        <span className="text-[0.6rem] uppercase tracking-[0.4em]">Esplora</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cream/80" />
        </span>
      </div>
    </section>
  );
}
