import Divider from "./Divider";
import MockPhoto from "./MockPhoto";
import Reveal from "./Reveal";

const stats = [
  { value: "1921", label: "Anno di fondazione" },
  { value: "24", label: "Camere & suite" },
  { value: "5★", label: "Ospitalità autentica" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center" from="up">
          <p className="eyebrow text-rose">La nostra storia</p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            Un&apos;ospitalità coltivata nel tempo
          </h2>
          <Divider className="mt-6" />
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Immagini */}
          <Reveal from="right" className="relative">
            <MockPhoto
              label="La facciata storica"
              variant={0}
              className="aspect-[4/5] w-full rounded-sm shadow-2xl shadow-forest/20"
            />
            <MockPhoto
              label="Il giardino delle camelie"
              variant={1}
              className="absolute -bottom-10 -right-6 hidden aspect-square w-44 rounded-sm border-4 border-cream shadow-xl sm:block lg:w-56"
            />
          </Reveal>

          {/* Testo */}
          <Reveal from="left">
            <p className="font-script text-4xl text-rose">Benvenuti</p>
            <p className="mt-4 text-lg leading-relaxed text-espresso-soft">
              Dimora d&apos;altri tempi nel cuore di Firenze, l&apos;Hotel Delle
              Camelie custodisce dal 1921 l&apos;arte di un&apos;ospitalità
              discreta e raffinata. Tra arredi d&apos;epoca, velluti e profumo
              di fiori, ogni dettaglio racconta una storia.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-espresso-soft">
              Le nostre camere uniscono il fascino vintage al comfort
              contemporaneo: parquet originale, tessuti pregiati e finestre che
              si aprono su giardini fioriti di camelie. Un luogo dove rallentare,
              respirare e sentirsi a casa.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-gold/30 pt-8">
              {stats.map((s, i) => (
                <Reveal as="div" key={s.label} delay={i * 0.12} from="up">
                  <dt className="font-display text-3xl text-forest sm:text-4xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-espresso-soft">
                    {s.label}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
