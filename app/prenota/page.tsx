import type { Metadata } from "next";
import Booking from "../components/Booking";

export const metadata: Metadata = {
  title: "Prenota — Hotel Delle Camelie",
  description:
    "Prenota direttamente il tuo soggiorno all'Hotel Delle Camelie: miglior prezzo garantito, cancellazione gratuita e pagamento sicuro.",
};

export default function Page() {
  return (
    <div className="pt-24">
      <Booking />
    </div>
  );
}
