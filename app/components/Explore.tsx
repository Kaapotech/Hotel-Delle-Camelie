import Image from "next/image";
import Link from "next/link";
import Divider from "./Divider";
import Reveal from "./Reveal";
import { ArrowIcon } from "./Icons";

const cards = [
  { href: "/hotel", title: "L'Hotel", text: "La nostra storia dal 1921", img: "/room1.jpg" },
  { href: "/camere", title: "Camere & Tariffe", text: "Sei tipologie, colazione inclusa", img: "/room2.jpg" },
  { href: "/galleria", title: "Galleria", text: "Atmosfere da vivere", img: "/room4.jpg" },
  { href: "/servizi", title: "Servizi", text: "Tutto il comfort che serve", img: "/room5.jpg" },
  { href: "/posizione", title: "Posizione", text: "Nel cuore di Firenze", img: "/room6.jpg" },
  { href: "/recensioni", title: "Recensioni", text: "La parola ai nostri ospiti", img: "/room3.jpg" },
];

/** Griglia di card che invita a esplorare le pagine del sito (homepage). */
export default function Explore() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center" from="up">
          <p className="eyebrow text-rose">Esplora</p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            Scopri l&apos;hotel
          </h2>
          <Divider className="mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.href} delay={(i % 3) * 0.1} from="up">
              <Link
                href={c.href}
                className="group relative block h-72 overflow-hidden rounded-sm border border-gold/20 shadow-lg shadow-forest/10"
              >
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                  <h3 className="font-display text-2xl">{c.title}</h3>
                  <p className="mt-1 text-sm text-cream/80">{c.text}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-light">
                    Scopri
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
