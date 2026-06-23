import type { Metadata } from "next";
import Prices from "../components/Prices";

export const metadata: Metadata = {
  title: "Camere & Tariffe — Hotel Delle Camelie",
  description:
    "Camere e suite raffinate a Firenze, colazione inclusa. Tariffe indicative e sconti per la prenotazione diretta.",
};

export default function Page() {
  return (
    <div className="pt-24">
      <Prices />
    </div>
  );
}
