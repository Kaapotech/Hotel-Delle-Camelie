import Divider from "./Divider";
import Reveal from "./Reveal";
import { ArrowIcon, CheckIcon, MapPinIcon } from "./Icons";
import { nearby, policies, site } from "../lib/site";

/** Posizione, dintorni e politiche (regola 7). */
export default function Location() {
  return (
    <section id="location" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center" from="up">
          <p className="eyebrow text-rose">Posizione</p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            Nel cuore di Firenze
          </h2>
          <Divider className="mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-espresso-soft">
            A pochi passi dai luoghi simbolo della città, tra mercati storici,
            musei e vie eleganti.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Mappa */}
          <Reveal from="right">
            <div className="overflow-hidden rounded-sm border border-gold/25 shadow-xl shadow-forest/10">
              <iframe
                src={site.mapEmbed}
                title={`Mappa — ${site.name}`}
                className="h-[360px] w-full lg:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-forest hover:text-rose"
            >
              <MapPinIcon className="h-4 w-4" />
              {site.address}
              <ArrowIcon className="h-4 w-4" />
            </a>
          </Reveal>

          {/* Dintorni + politiche */}
          <Reveal from="left">
            <h3 className="font-display text-2xl text-forest">Nei dintorni</h3>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {nearby.map((n) => (
                <li
                  key={n.place}
                  className="flex items-center justify-between gap-3 border-b border-gold/15 pb-2 text-sm"
                >
                  <span className="flex items-center gap-2 text-espresso">
                    <MapPinIcon className="h-4 w-4 shrink-0 text-rose" />
                    {n.place}
                  </span>
                  <span className="shrink-0 text-espresso-soft">{n.distance}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-2xl text-forest">
              Politiche & condizioni
            </h3>
            <div className="mt-5 space-y-4">
              {policies.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-espresso-soft">
                    <span className="font-medium text-espresso">{p.title}.</span>{" "}
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
