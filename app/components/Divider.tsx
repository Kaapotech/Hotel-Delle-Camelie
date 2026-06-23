import Camellia from "./Camellia";

type DividerProps = {
  className?: string;
  /** Colore Tailwind del fiore, es. "text-rose" */
  tone?: string;
};

/** Separatore ornamentale: una linea sottile con una camelia al centro. */
export default function Divider({
  className = "",
  tone = "text-gold",
}: DividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60 sm:w-28" />
      <Camellia className={`h-6 w-6 ${tone}`} petals={8} />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60 sm:w-28" />
    </div>
  );
}
