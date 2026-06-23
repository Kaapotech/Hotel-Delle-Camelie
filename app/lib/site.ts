/**
 * Configurazione centrale dei contenuti del sito.
 * Sostituisci i link segnaposto (#) con gli URL reali quando disponibili.
 */
export const site = {
  name: "Hotel Delle Camelie",
  tagline: "Eleganza senza tempo",
  location: "Firenze, Italia",
  email: "info@hoteldellecamelie.it",
  phone: "+39 055 472 856",
  address: "Via Di Barbano 10, 50129 Florence, Italy",

  // Piattaforme di prenotazione
  booking: {
    tripadvisor: "https://www.tripadvisor.com/",
    bookingCom: "https://www.booking.com/hotel/it/delle-camelie.en-gb.html",
  },

  // Social media
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    pinterest: "https://www.pinterest.com/",
  },
} as const;

export const navLinks = [
  { label: "L'Hotel", href: "#about" },
  { label: "Galleria", href: "#gallery" },
  { label: "Recensioni", href: "#testimonials" },
  { label: "Tariffe", href: "#prices" },
  { label: "Prenota", href: "#booking" },
] as const;
