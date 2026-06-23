import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingBar from "./components/BookingBar";
import Perks from "./components/Perks";
import About from "./components/About";
import Prices from "./components/Prices";
import Gallery from "./components/Gallery";
import Facilities from "./components/Facilities";
import Location from "./components/Location";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
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
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BookingBar />
        <Perks />
        <About />
        <Prices />
        <Gallery />
        <Facilities />
        <Location />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
