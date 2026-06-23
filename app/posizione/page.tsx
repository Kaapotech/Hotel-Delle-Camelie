import type { Metadata } from "next";
import Location from "../components/Location";

export const metadata: Metadata = {
  title: "Posizione — Hotel Delle Camelie",
  description:
    "Nel cuore di Firenze, a pochi passi da San Lorenzo e dal Duomo. Mappa, dintorni e politiche dell'hotel.",
};

export default function Page() {
  return (
    <div className="pt-24">
      <Location />
    </div>
  );
}
