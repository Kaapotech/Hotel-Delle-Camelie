import type { Metadata } from "next";
import About from "../components/About";

export const metadata: Metadata = {
  title: "L'Hotel — Hotel Delle Camelie",
  description:
    "La storia dell'Hotel Delle Camelie: una dimora dal fascino vintage nel cuore di Firenze, ospitalità autentica dal 1921.",
};

export default function Page() {
  return (
    <div className="pt-24">
      <About />
    </div>
  );
}
