import type { Metadata } from "next";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  title: "Recensioni — Hotel Delle Camelie",
  description:
    "La parola ai nostri ospiti: esperienze e recensioni di chi ha soggiornato all'Hotel Delle Camelie a Firenze.",
};

export default function Page() {
  return (
    <div className="pt-24">
      <Testimonials />
    </div>
  );
}
