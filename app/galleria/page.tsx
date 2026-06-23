import type { Metadata } from "next";
import Gallery from "../components/Gallery";

export const metadata: Metadata = {
  title: "Galleria — Hotel Delle Camelie",
  description:
    "Le immagini delle nostre camere e degli spazi raffinati, dove l'eleganza storica incontra il comfort moderno.",
};

export default function Page() {
  return (
    <div className="pt-24">
      <Gallery />
    </div>
  );
}
