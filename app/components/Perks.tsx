import Reveal from "./Reveal";
import { CalendarIcon, CoffeeIcon, MapPinIcon, ShieldCheckIcon } from "./Icons";
import { perks } from "../lib/site";

const icons = {
  shield: ShieldCheckIcon,
  calendar: CalendarIcon,
  coffee: CoffeeIcon,
  pin: MapPinIcon,
} as const;

/**
 * Striscia di punti di forza: comunica subito perché scegliere l'hotel
 * (regola 1) e funge da trust signal (regola 8).
 */
export default function Perks() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, i) => {
            const Icon = icons[perk.icon];
            return (
              <Reveal key={perk.title} delay={i * 0.1} from="up">
                <div className="flex h-full flex-col items-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-cream-dark/30 text-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-forest">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso-soft">
                    {perk.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
