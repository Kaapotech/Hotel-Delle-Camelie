type CamelliaProps = {
  className?: string;
  /** Numero di petali per anello */
  petals?: number;
};

/**
 * Motivo floreale stilizzato di una camelia.
 * Usa `currentColor`, così erediti il colore dal genitore via `text-*`.
 */
export default function Camellia({ className, petals = 8 }: CamelliaProps) {
  const ring = (count: number, radius: number, length: number, offset = 0) =>
    Array.from({ length: count }).map((_, i) => {
      const angle = (360 / count) * i + offset;
      return (
        <ellipse
          key={`${radius}-${i}`}
          cx="50"
          cy={50 - radius}
          rx={length * 0.42}
          ry={length}
          transform={`rotate(${angle} 50 50)`}
        />
      );
    });

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      role="presentation"
    >
      {/* anello esterno */}
      <g opacity="0.55">{ring(petals, 20, 17)}</g>
      {/* anello intermedio (sfalsato) */}
      <g opacity="0.8">{ring(petals, 13, 13, 360 / petals / 2)}</g>
      {/* anello interno */}
      <g>{ring(Math.max(5, petals - 2), 7, 9)}</g>
      {/* cuore del fiore */}
      <circle cx="50" cy="50" r="6" opacity="0.9" />
    </svg>
  );
}
