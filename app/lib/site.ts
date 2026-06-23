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

  // Mappa (embed Google Maps senza chiave API)
  mapEmbed:
    "https://maps.google.com/maps?q=Via%20Di%20Barbano%2010%2C%2050129%20Firenze%2C%20Italia&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Via+Di+Barbano+10%2C+50129+Firenze%2C+Italia",
} as const;

export const navLinks = [
  { label: "L'Hotel", href: "#about" },
  { label: "Camere", href: "#prices" },
  { label: "Servizi", href: "#facilities" },
  { label: "Posizione", href: "#location" },
  { label: "Recensioni", href: "#testimonials" },
] as const;

/** Punti di forza mostrati subito sotto l'hero (regola 1 + trust). */
export const perks = [
  {
    icon: "shield",
    title: "Prenotazione diretta",
    text: "Miglior prezzo garantito rispetto ai portali.",
  },
  {
    icon: "calendar",
    title: "Cancellazione gratuita",
    text: "Flessibilità fino a 48 ore prima dell'arrivo.",
  },
  {
    icon: "coffee",
    title: "Colazione inclusa",
    text: "Prodotti freschi e dolci fatti in casa ogni mattina.",
  },
  {
    icon: "pin",
    title: "Nel cuore di Firenze",
    text: "A pochi passi da San Lorenzo e dal Duomo.",
  },
] as const;

/** Servizi dell'hotel (regola 7). */
export const amenities = [
  { icon: "wifi", label: "Wi-Fi gratuito" },
  { icon: "coffee", label: "Colazione inclusa" },
  { icon: "snowflake", label: "Aria condizionata" },
  { icon: "bell", label: "Reception 24 ore" },
  { icon: "bed", label: "Pulizia giornaliera" },
  { icon: "parking", label: "Parcheggio convenzionato" },
  { icon: "paw", label: "Animali ammessi" },
  { icon: "sparkle", label: "Welcome kit di benvenuto" },
] as const;

/** Politiche e condizioni (regola 7 + trust). */
export const policies = [
  {
    title: "Cancellazione gratuita",
    text: "Annulli senza costi fino a 48 ore prima dell'arrivo sulle tariffe flessibili.",
  },
  {
    title: "Check-in / Check-out",
    text: "Check-in dalle 14:00, check-out entro le 11:00. Deposito bagagli gratuito.",
  },
  {
    title: "Pagamento sicuro",
    text: "Transazioni protette e nessun addebito nascosto: paghi quanto vedi.",
  },
] as const;

/** Cosa c'è nei dintorni (regola 7). */
export const nearby = [
  { place: "Mercato di San Lorenzo", distance: "350 m" },
  { place: "Cappelle Medicee", distance: "400 m" },
  { place: "Duomo di Firenze", distance: "750 m" },
  { place: "Galleria dell'Accademia", distance: "850 m" },
  { place: "Stazione Santa Maria Novella", distance: "900 m" },
  { place: "Ponte Vecchio", distance: "1,4 km" },
] as const;
