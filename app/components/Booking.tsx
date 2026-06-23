import Camellia from "./Camellia";
import Divider from "./Divider";
import Reveal from "./Reveal";
import { ArrowIcon, OwlIcon } from "./Icons";
import { site } from "../lib/site";

const platforms = [
  {
    name: "Booking.com",
    desc: "Disponibilità in tempo reale, conferma immediata e cancellazione gratuita su tariffe selezionate.",
    href: site.booking.bookingCom,
    cta: "Prenota su Booking",
    mark: <span className="font-display text-3xl font-bold tracking-tight">Booking.</span>,
  },
  {
    name: "Tripadvisor",
    desc: "Leggi le recensioni dei nostri ospiti e prenota con la garanzia del miglior prezzo.",
    href: site.booking.tripadvisor,
    cta: "Prenota su Tripadvisor",
    mark: <OwlIcon className="h-8 w-16" />,
  },
];

export default function Booking() {
  return (
    <section
      id="booking"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      {/* sfondo verde profondo */}
      <div className="absolute inset-0 bg-forest" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(183,110,121,0.25),transparent_55%)]" />
      <Camellia className="absolute -right-20 -top-16 h-96 w-96 text-cream/5" petals={11} />
      <Camellia className="absolute -left-24 bottom-0 h-80 w-80 text-rose/10" petals={10} />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal className="text-center text-cream">
          <p className="eyebrow text-gold-light">Prenota</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Il tuo soggiorno tra le camelie
          </h2>
          <Divider className="mt-6" tone="text-rose-light" />
          <p className="mx-auto mt-6 max-w-xl text-cream/80">
            Scegli la piattaforma che preferisci: in pochi clic la tua camera
            sarà confermata. Per richieste speciali, scrivici direttamente.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {platforms.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.15} from={i === 0 ? "right" : "left"}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-sm border border-cream/15 bg-cream/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:bg-cream/[0.08]"
              >
                <div>
                  <div className="flex h-12 items-center text-cream">
                    {p.mark}
                  </div>
                  <p className="mt-5 text-cream/75">{p.desc}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-gold-light">
                  {p.cta}
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center text-sm text-cream/70">
          <p>
            Preferisci il contatto diretto?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-gold-light underline-offset-4 hover:underline"
            >
              {site.email}
            </a>{" "}
            ·{" "}
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="text-gold-light underline-offset-4 hover:underline"
            >
              {site.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
