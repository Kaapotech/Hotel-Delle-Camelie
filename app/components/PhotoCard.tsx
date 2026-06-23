"use client";

import Image from "next/image";
import Camellia from "./Camellia";

type PhotoCardProps = {
  src: string;
  label: string;
  variant: "pink" | "green";
  className?: string;
  span?: string;
};

export default function PhotoCard({
  src,
  label,
  variant,
  className = "",
  span = "",
}: PhotoCardProps) {
  const isPink = variant === "pink";
  
  // Culori inspirate din MockPhoto.tsx
  const bgColor = isPink ? "bg-[#b76e79]" : "bg-[#2e4636]";
  const flowerColor = isPink ? "text-cream/40" : "text-cream/30";

  return (
    <div className={`flex flex-col group ${span} ${className}`}>
      {/* Container Imagine */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-sm shadow-md">
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay subtil */}
        <div className="absolute inset-0 bg-forest/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Container Colorat (Suport) */}
      <div className={`relative px-6 py-6 ${bgColor} rounded-b-sm shadow-lg overflow-hidden`}>
        {/* Floarea decorativă - inspirată din MockPhoto */}
        <Camellia
          className={`absolute -right-4 -bottom-4 h-20 w-20 rotate-12 ${flowerColor}`}
          petals={9}
        />
        
        <div className="relative z-10 flex items-center justify-between">
          <span className="font-display text-xs uppercase tracking-[0.2em] text-cream/90">
            Hotel Delle Camelie
          </span>
        </div>
      </div>
    </div>
  );
}
