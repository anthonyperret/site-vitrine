"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    title: "Ébénisterie Vidal",
    tagline: "Artisan — Toulouse",
  },
  {
    title: "La Miellerie du Gers",
    tagline: "Producteur — Gers",
  },
  {
    title: "Atelier Ferron",
    tagline: "Forgeron — Bordeaux",
  },
  {
    title: "Boulangerie Cassan",
    tagline: "Artisan — Montauban",
  },
  {
    title: "Resto Le Calandre",
    tagline: "Restaurateur — Albi",
  },
  {
    title: "Savonnerie Aumont",
    tagline: "Artisan — Auch",
  },
];

export default function ProductionsGrid() {
  const { ref, visible } = useScrollReveal(0.5);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-3 gap-0.5 mt-30">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`relative h-[250px] cursor-pointer bg-acier overflow-hidden group transition-colors ${visible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: `${i * 0.10}s` }}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
            <h3 className="font-bebas-neue text-2xl uppercase text-ivoire">{card.title}</h3>
            <p className="font-dm-sans text-xs text-cuivre uppercase tracking-widest">{card.tagline}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
