import type { Metadata } from "next";
import Facilities from "../components/Facilities";

export const metadata: Metadata = {
  title: "Servizi — Hotel Delle Camelie",
  description:
    "Wi-Fi gratuito, colazione inclusa, aria condizionata, reception 24 ore e altri servizi pensati per il tuo soggiorno a Firenze.",
};

export default function Page() {
  return (
    <div className="pt-24">
      <Facilities />
    </div>
  );
}
