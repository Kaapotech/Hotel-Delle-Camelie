import Camellia from "./Camellia";

type MockPhotoProps = {
  label: string;
  /** Indice usato per variare la combinazione di colori */
  variant?: number;
  className?: string;
};

/**
 * Segnaposto fotografico elegante (mock-up).
 * Da sostituire con <Image> e foto reali quando disponibili.
 */
const palettes = [
  { from: "#2e4636", to: "#4f6b56", flower: "text-cream/30" }, // verde foglia
  { from: "#b76e79", to: "#d9a7ad", flower: "text-cream/40" }, // rosa camelia
  { from: "#6b5c4f", to: "#b08d57", flower: "text-cream/30" }, // seppia / oro
  { from: "#3a2f28", to: "#6b5c4f", flower: "text-gold-light/40" }, // espresso
  { from: "#4f6b56", to: "#b08d57", flower: "text-cream/30" }, // salvia / oro
];

export default function MockPhoto({
  label,
  variant = 0,
  className = "",
}: MockPhotoProps) {
  const p = palettes[variant % palettes.length];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(140deg, ${p.from}, ${p.to})`,
      }}
      role="img"
      aria-label={`${label} (immagine dimostrativa)`}
    >
      {/* filigrana floreale */}
      <Camellia
        className={`absolute -right-8 -bottom-8 h-44 w-44 rotate-12 ${p.flower}`}
        petals={9}
      />
      <Camellia
        className={`absolute -left-6 -top-6 h-24 w-24 ${p.flower} opacity-70`}
        petals={7}
      />

      {/* vignettatura + grana */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.35))]" />

      {/* etichetta in stile cartolina */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="font-display text-xs uppercase tracking-[0.35em] text-cream/70">
          Foto · mock-up
        </span>
        <span className="font-display text-xl text-cream drop-shadow sm:text-2xl">
          {label}
        </span>
      </div>
    </div>
  );
}
