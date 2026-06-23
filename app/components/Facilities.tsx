import Divider from "./Divider";
import Reveal from "./Reveal";
import {
  BellIcon,
  BedIcon,
  CoffeeIcon,
  ParkingIcon,
  PawIcon,
  SnowflakeIcon,
  SparkleIcon,
  WifiIcon,
} from "./Icons";
import { amenities } from "../lib/site";

const icons = {
  wifi: WifiIcon,
  coffee: CoffeeIcon,
  snowflake: SnowflakeIcon,
  bell: BellIcon,
  bed: BedIcon,
  parking: ParkingIcon,
  paw: PawIcon,
  sparkle: SparkleIcon,
} as const;

/** Servizi e dotazioni dell'hotel (regola 7). */
export default function Facilities() {
  return (
    <section
      id="facilities"
      className="relative scroll-mt-24 bg-cream-dark/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center" from="up">
          <p className="eyebrow text-rose">Servizi</p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            Tutto ciò che serve
          </h2>
          <Divider className="mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-espresso-soft">
            Comfort moderno avvolto da un&apos;atmosfera d&apos;altri tempi.
            Ogni servizio è pensato per rendere il soggiorno semplice e sereno.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {amenities.map((a, i) => {
            const Icon = icons[a.icon];
            return (
              <Reveal key={a.label} delay={(i % 4) * 0.08} from="up">
                <div className="group flex h-full flex-col items-center gap-4 rounded-sm border border-gold/20 bg-cream p-6 text-center shadow-sm shadow-forest/5 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-lg hover:shadow-forest/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/5 text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-cream">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-medium text-espresso">
                    {a.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
