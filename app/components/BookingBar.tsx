"use client";

import { CalendarIcon, UsersIcon } from "./Icons";

/**
 * Barra di ricerca rapida che si sovrappone all'hero (regola 2: prenotazione
 * visibile dal primo schermo). È un elemento SOLO front-end: il pulsante
 * porta al modulo completo #booking, dove la richiesta verrà gestita.
 */
export default function BookingBar() {
  return (
    <div className="relative z-30 -mt-16 px-6 sm:-mt-20">
      <div className="mx-auto max-w-5xl rounded-sm border border-gold/20 bg-cream/95 p-4 shadow-2xl shadow-forest/20 backdrop-blur-md sm:p-5">
        <div className="grid items-end gap-4 md:grid-cols-[1fr_1fr_1fr_auto]">
          <label htmlFor="bar-checkin" className="block">
            <span className="mb-1.5 flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-espresso-soft">
              <CalendarIcon className="h-3.5 w-3.5 text-gold" />
              Check-in
            </span>
            <input id="bar-checkin" type="date" className={barInput} />
          </label>

          <label htmlFor="bar-checkout" className="block">
            <span className="mb-1.5 flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-espresso-soft">
              <CalendarIcon className="h-3.5 w-3.5 text-gold" />
              Check-out
            </span>
            <input id="bar-checkout" type="date" className={barInput} />
          </label>

          <label htmlFor="bar-guests" className="block">
            <span className="mb-1.5 flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-espresso-soft">
              <UsersIcon className="h-3.5 w-3.5 text-gold" />
              Persone
            </span>
            <select id="bar-guests" defaultValue="2" className={barInput}>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "ospite" : "ospiti"}
                </option>
              ))}
            </select>
          </label>

          <a
            href="#booking"
            className="flex items-center justify-center rounded-sm bg-rose px-7 py-3 text-sm uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:bg-forest md:h-[46px]"
          >
            Verifica disponibilità
          </a>
        </div>
      </div>
    </div>
  );
}

const barInput =
  "w-full rounded-sm border border-gold/30 bg-cream px-3 py-2.5 text-sm text-espresso outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";
