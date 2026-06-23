import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const garamond = EB_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Delle Camelie — Eleganza senza tempo",
  description:
    "Un rifugio elegante dal fascino vintage immerso tra le camelie. Camere raffinate, ospitalità autentica e momenti indimenticabili.",
  keywords: [
    "Hotel Delle Camelie",
    "hotel vintage",
    "boutique hotel",
    "soggiorno elegante",
    "camelie",
  ],
  openGraph: {
    title: "Hotel Delle Camelie",
    description:
      "Un rifugio elegante dal fascino vintage immerso tra le camelie.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${playfair.variable} ${garamond.variable} ${pinyon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-espresso font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
