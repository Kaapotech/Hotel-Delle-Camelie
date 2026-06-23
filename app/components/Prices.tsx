import Link from "next/link";
import Camellia from "./Camellia";
import Divider from "./Divider";
import Reveal from "./Reveal";

const rooms = [
  {
    name: "Single Room",
    price: "90",
    note: "a notte · colazione inclusa",
    features: [
      "Letto singolo comfort",
      "Arredi d'epoca",
      "Vista giardino interno",
      "Wi-Fi & aria condizionata",
    ],
    featured: false,
  },
  {
    name: "Double or Twin Room",
    price: "130",
    note: "a notte · colazione inclusa",
    features: [
      "Letto matrimoniale o due singoli",
      "Soffitti affrescati",
      "Minibar e cassaforte",
      "Wi-Fi & smart TV",
    ],
    featured: true,
  },
  {
    name: "Triple Room",
    price: "170",
    note: "a notte · colazione inclusa",
    features: [
      "Tre letti singoli o matrimoniale + singolo",
      "Spaziosa zona notte",
      "Bagno privato in marmo",
      "Wi-Fi & aria condizionata",
    ],
    featured: false,
  },
  {
    name: "Quadruple Room",
    price: "210",
    note: "a notte · colazione inclusa",
    features: [
      "Ideale per famiglie",
      "Arredi classici fiorentini",
      "Doppio lavabo in bagno",
      "Wi-Fi & smart TV",
    ],
    featured: false,
  },
  {
    name: "Double Room with Balcony",
    price: "155",
    note: "a notte · colazione inclusa",
    features: [
      "Balcone privato fiorito",
      "Vista sulle vie storiche",
      "Letto king size",
      "Welcome kit premium",
    ],
    featured: false,
  },
  {
    name: "Triple Room with Balcony",
    price: "195",
    note: "a notte · colazione inclusa",
    features: [
      "Ampio balcone arredato",
      "Perfetta per piccoli gruppi",
      "Zona living integrata",
      "Wi-Fi & aria condizionata",
    ],
    featured: false,
  },
];

export default function Prices() {
  return (
    <section id="prices" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="eyebrow text-rose">Tariffe</p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            Camere & suite
          </h2>
          <Divider className="mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-espresso-soft">
            Tariffe indicative per notte. Sconti dedicati per soggiorni lunghi e
            per chi prenota direttamente.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <Reveal key={room.name} delay={i * 0.12} from="up">
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-sm border p-8 transition-all duration-500 hover:-translate-y-2 ${
                  room.featured
                    ? "border-gold bg-forest text-cream shadow-2xl shadow-forest/30"
                    : "border-gold/25 bg-cream shadow-lg shadow-forest/10 hover:border-gold/60"
                }`}
              >
                {room.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-espresso">
                    Più richiesta
                  </span>
                )}

                <Camellia
                  className={`h-10 w-10 ${
                    room.featured ? "text-rose-light" : "text-rose"
                  }`}
                  petals={8}
                />

                <h3
                  className={`mt-5 font-display text-2xl ${
                    room.featured ? "text-cream" : "text-forest"
                  }`}
                >
                  {room.name}
                </h3>

                <p className="mt-4 flex items-baseline gap-1">
                  <span
                    className={`font-display text-5xl ${
                      room.featured ? "text-gold-light" : "text-forest"
                    }`}
                  >
                    €{room.price}
                  </span>
                </p>
                <p
                  className={`text-sm ${
                    room.featured ? "text-cream/70" : "text-espresso-soft"
                  }`}
                >
                  {room.note}
                </p>

                <ul
                  className={`mt-8 flex-1 space-y-3 text-sm ${
                    room.featured ? "text-cream/90" : "text-espresso-soft"
                  }`}
                >
                  {room.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Camellia
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                          room.featured ? "text-gold-light" : "text-gold"
                        }`}
                        petals={6}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/prenota"
                  className={`mt-8 block rounded-full py-3 text-center text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${
                    room.featured
                      ? "bg-rose text-cream hover:bg-rose-light hover:text-espresso"
                      : "border border-forest text-forest hover:bg-forest hover:text-cream"
                  }`}
                >
                  Prenota
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
