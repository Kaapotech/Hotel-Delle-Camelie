"use client";

import { motion } from "framer-motion";
import Divider from "./Divider";
import PhotoCard from "./PhotoCard";

const photos = [
  { label: "Double Room with Balcony", src: "/room1.jpg" },
  { label: "Dettagli Single Room", src: "/room2.jpg" },
  { label: "Colazione in veranda", src: "/room3.jpg" },
  { label: "Triple Room Balcony", src: "/room4.jpg" },
  { label: "Quadruple Room Family", src: "/room5.jpg" },
  { label: "Dettagli d'epoca", src: "/room6.jpg" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 bg-cream-dark/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="eyebrow text-rose">Galleria</p>
          <h2 className="mt-4 font-display text-4xl text-forest sm:text-5xl">
            Atmosfere da vivere
          </h2>
          <Divider className="mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-espresso-soft">
            O incursiune vizuală prin camerele și spațiile noastre rafinate,
            unde eleganța istorică întâlnește confortul modern.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {photos.map((photo, i) => (
            <motion.div key={photo.src} variants={item}>
              <PhotoCard
                src={photo.src}
                label={photo.label}
                variant={i % 2 === 0 ? "pink" : "green"}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
