type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 9h2.2V6.2h-2.4c-2 0-3.3 1.2-3.3 3.3V11H8.4v2.8h2.1V21h2.9v-7.2h2.2l.4-2.8h-2.6V9.9c0-.6.3-.9 1-.9z" />
    </svg>
  );
}

export function PinterestIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3.2A8.8 8.8 0 0 0 8.7 20.2c-.07-.7-.13-1.78.03-2.55.14-.67.93-4.27.93-4.27s-.24-.48-.24-1.18c0-1.1.64-1.93 1.43-1.93.68 0 1 .5 1 1.12 0 .68-.43 1.7-.66 2.65-.19.79.4 1.44 1.18 1.44 1.42 0 2.5-1.5 2.5-3.65 0-1.9-1.37-3.24-3.33-3.24-2.27 0-3.6 1.7-3.6 3.46 0 .68.26 1.42.59 1.82a.24.24 0 0 1 .05.23c-.06.25-.2.79-.22.9-.04.15-.12.18-.28.11-1.05-.49-1.7-2.02-1.7-3.25 0-2.65 1.92-5.08 5.55-5.08 2.91 0 5.17 2.08 5.17 4.85 0 2.9-1.82 5.22-4.35 5.22-.85 0-1.65-.44-1.92-.96l-.52 2c-.19.73-.7 1.64-1.04 2.2A8.8 8.8 0 1 0 12 3.2z" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/** Occhi stilizzati: richiamo al gufo di TripAdvisor. */
export function OwlIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 24" fill="none" className={className} aria-hidden="true">
      <circle cx="13" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="35" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="13" cy="12" r="3.4" fill="currentColor" />
      <circle cx="35" cy="12" r="3.4" fill="currentColor" />
    </svg>
  );
}
