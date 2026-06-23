import Camellia from "./Camellia";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  PinterestIcon,
} from "./Icons";
import { navLinks, site } from "../lib/site";

const socials = [
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "Pinterest", href: site.social.pinterest, Icon: PinterestIcon },
];

export default function Footer() {
  return (
    <footer className="relative bg-espresso text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 text-cream">
              <Camellia className="h-9 w-9 text-rose" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl">Delle Camelie</span>
                <span className="text-[0.6rem] uppercase tracking-[0.4em] text-cream/60">
                  Hotel
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              Un rifugio dal fascino vintage dove ogni soggiorno diventa un
              ricordo prezioso.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-all duration-300 hover:-translate-y-1 hover:border-rose hover:bg-rose hover:text-cream"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigazione */}
          <div>
            <h3 className="font-display text-lg text-cream">Naviga</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/70 transition-colors hover:text-gold-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="font-display text-lg text-cream">Contatti</h3>
            <ul className="mt-5 space-y-4 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-gold-light" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 shrink-0 text-gold-light" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Tutti i diritti riservati.
          </p>
          <p className="font-script text-base text-rose-light">
            Eleganza senza tempo
          </p>
        </div>
      </div>
    </footer>
  );
}
