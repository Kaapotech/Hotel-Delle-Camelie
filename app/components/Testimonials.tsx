"use client";

import Divider from "./Divider";
import Reveal from "./Reveal";
import { StarIcon } from "./Icons";

const reviews = [
  {
    name: "Elena Rossi",
    location: "Milano, Italia",
    text: "Un'oasi di pace e raffinatezza. La cura dei dettagli e l'atmosfera d'altri tempi rendono il soggiorno indimenticabile. La colazione in veranda è magica.",
    rating: 5,
  },
  {
    name: "Thomas Weber",
    location: "Berlino, Germania",
    text: "Soggiorno perfetto in una suite meravigliosa nel centro di Firenze. Il personale è di una gentilezza rara. Ritorneremo sicuramente per la fioritura delle camelie.",
    rating: 5,
  },
  {
    name: "Giulia Bianchi",
    location: "Roma, Italia",
    text: "Eleganza senza tempo è il nome perfetto. Arredi splendidi e un giardino incantevole. Sembra di vivere in un romanzo del secolo scorso.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    location: "Parigi, Francia",
    text: "Posizione impeccabile, a due passi dal Duomo. La camera con balcone era luminosa e curata nei minimi dettagli. Un piccolo gioiello fiorentino.",
    rating: 5,
  },
  {
    name: "James Whitfield",
    location: "Londra, Regno Unito",
    text: "Booked directly and got the best rate. Charming vintage rooms, spotless and quiet. The breakfast alone is worth the stay. Highly recommended.",
    rating: 5,
  },
  {
    name: "Marta Sánchez",
    location: "Madrid, Spagna",
    text: "Personale gentilissimo e sempre disponibile per consigli sulla città. L'atmosfera è romantica e accogliente. Torneremo senza dubbio.",
    rating: 5,
  },
  {
    name: "Lukas Novák",
    location: "Praga, Repubblica Ceca",
    text: "Ottimo rapporto qualità-prezzo nel cuore di Firenze. Wi-Fi veloce, letti comodissimi e una colazione abbondante. Soggiorno davvero piacevole.",
    rating: 4,
  },
  {
    name: "Hiroshi Tanaka",
    location: "Tokyo, Giappone",
    text: "Un'esperienza autentica lontana dai grandi alberghi anonimi. Ci siamo sentiti ospiti di casa. Il giardino delle camelie è semplicemente poetico.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-24 py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center" from="up">
          <p className="eyebrow text-rose">Recensioni</p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            Parola ai nostri ospiti
          </h2>
          <Divider className="mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.15} from="up">
              <div className="flex flex-col h-full p-8 rounded-sm border border-gold/20 bg-cream-dark/20 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-gold" />
                  ))}
                </div>
                <blockquote className="flex-1">
                  <p className="text-espresso-soft italic leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </blockquote>
                <div className="mt-8 pt-6 border-t border-gold/10">
                  <p className="font-display text-lg text-forest">{review.name}</p>
                  <p className="text-xs uppercase tracking-widest text-espresso-soft/70 mt-1">
                    {review.location}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
