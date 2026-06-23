import Link from "next/link";
import Hero from "./components/Hero";
import BookingBar from "./components/BookingBar";
import Perks from "./components/Perks";
import Explore from "./components/Explore";
import Camellia from "./components/Camellia";
import { nearby, site } from "./lib/site";

// Dati strutturati per i motori di ricerca (regola 10: SEO + direct booking).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: site.name,
  description:
    "Hotel boutique dal fascino vintage nel cuore di Firenze: camere raffinate, colazione inclusa e ospitalità autentica.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Di Barbano 10",
    postalCode: "50129",
    addressLocality: "Firenze",
    addressCountry: "IT",
  },
  telephone: site.phone,
  email: site.email,
  priceRange: "€€",
  starRating: { "@type": "Rating", ratingValue: "4" },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Colazione inclusa", value: true },
    { "@type": "LocationFeatureSpecification", name: "Aria condizionata", value: true },
    { "@type": "LocationFeatureSpecification", name: "Reception 24 ore", value: true },
  ],
  containsPlace: nearby.map((n) => ({ "@type": "TouristAttraction", name: n.place })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <BookingBar />
      <Perks />
      <Explore />

      {/* CTA finale */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="absolute inset-0 bg-forest" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(183,110,121,0.25),transparent_55%)]" />
        <Camellia className="absolute -left-16 -bottom-16 h-80 w-80 text-cream/5" petals={11} />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-cream">
          <p className="eyebrow text-gold-light">Prenotazione diretta</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Pronti ad accogliervi tra le camelie
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-cream/80">
            Miglior prezzo garantito, cancellazione gratuita e l&apos;ospitalità
            autentica di una dimora fiorentina dal 1921.
          </p>
          <Link
            href="/prenota"
            className="mt-9 inline-block rounded-full bg-rose px-9 py-3.5 text-sm uppercase tracking-[0.2em] text-cream shadow-lg shadow-rose/30 transition-colors duration-300 hover:bg-rose-light hover:text-espresso"
          >
            Prenota il soggiorno
          </Link>
        </div>
      </section>
    </>
  );
}
