"use client";

import { useState } from "react";
import Camellia from "./Camellia";
import Divider from "./Divider";
import Reveal from "./Reveal";
import { CalendarIcon, CheckIcon, UsersIcon } from "./Icons";
import { site } from "../lib/site";

/**
 * Modulo di prenotazione SOLO front-end (non funzionante).
 * I dati raccolti (date, persone, nome, email) sono pronti per essere
 * collegati al motore Freetobook: al submit andranno inviati a
 * https://portal.freetobook.com/reservations con arrival + stay_length +
 * occupancy, mentre nome/cognome/email verranno raccolti sul checkout
 * sicuro di Freetobook. Per ora il submit mostra solo un messaggio demo.
 */
export default function Booking() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: collegare a Freetobook (w_id / w_tkn) — vedi nota in cima al file.
    setSent(true);
  };

  return (
    <section
      id="booking"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      {/* sfondo verde profondo */}
      <div className="absolute inset-0 bg-forest" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(183,110,121,0.25),transparent_55%)]" />
      <Camellia className="absolute -right-20 -top-16 h-96 w-96 text-cream/5" petals={11} />
      <Camellia className="absolute -left-24 bottom-0 h-80 w-80 text-rose/10" petals={10} />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center text-cream">
          <p className="eyebrow text-gold-light">Prenota</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Il tuo soggiorno tra le camelie
          </h2>
          <Divider className="mt-6" tone="text-rose-light" />
          <p className="mx-auto mt-6 max-w-xl text-cream/80">
            Inserisci le date e i tuoi dati: ti confermeremo la disponibilità
            con il miglior prezzo garantito per la prenotazione diretta.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-cream/15 bg-cream p-6 shadow-2xl shadow-forest/30 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Check-in" htmlFor="checkin" icon={<CalendarIcon className="h-4 w-4" />}>
                <input
                  id="checkin"
                  name="checkin"
                  type="date"
                  required
                  className={inputClass}
                />
              </Field>

              <Field label="Check-out" htmlFor="checkout" icon={<CalendarIcon className="h-4 w-4" />}>
                <input
                  id="checkout"
                  name="checkout"
                  type="date"
                  required
                  className={inputClass}
                />
              </Field>

              <Field label="Nome" htmlFor="firstName">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Mario"
                  required
                  className={inputClass}
                />
              </Field>

              <Field label="Cognome" htmlFor="lastName">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Rossi"
                  required
                  className={inputClass}
                />
              </Field>

              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="mario.rossi@email.it"
                  required
                  className={inputClass}
                />
              </Field>

              <Field label="Persone" htmlFor="guests" icon={<UsersIcon className="h-4 w-4" />}>
                <select id="guests" name="guests" defaultValue="2" className={inputClass}>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "ospite" : "ospiti"}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-rose py-3.5 text-sm uppercase tracking-[0.2em] text-cream shadow-lg shadow-rose/20 transition-colors duration-300 hover:bg-forest hover:text-cream"
            >
              Verifica disponibilità
            </button>

            {sent && (
              <p className="mt-5 flex items-center justify-center gap-2 rounded-sm bg-forest/5 py-3 text-center text-sm text-forest">
                <CheckIcon className="h-4 w-4 text-rose" />
                Grazie! Richiesta registrata (demo). Il motore di prenotazione
                Freetobook verrà collegato qui.
              </p>
            )}

            <p className="mt-4 text-center text-xs text-espresso-soft">
              Cancellazione gratuita fino a 48 ore prima · Nessun addebito
              nascosto · Pagamento sicuro
            </p>
          </form>
        </Reveal>

        <Reveal className="mt-8 text-center text-sm text-cream/70">
          <p>
            Preferisci il contatto diretto?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-gold-light underline-offset-4 hover:underline"
            >
              {site.email}
            </a>{" "}
            ·{" "}
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="text-gold-light underline-offset-4 hover:underline"
            >
              {site.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-sm border border-gold/30 bg-cream px-4 py-3 text-espresso outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";

function Field({
  label,
  htmlFor,
  icon,
  children,
}: {
  label: string;
  htmlFor: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-espresso-soft">
        {icon && <span className="text-gold">{icon}</span>}
        {label}
      </span>
      {children}
    </label>
  );
}
