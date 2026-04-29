"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    title: "Ébénisterie Vidal",
    tagline: "Artisan — Toulouse",
    type: "Vitrine",
  },
  {
    title: "La Miellerie du Gers",
    tagline: "Producteur — Gers",
    type: "E-commerce",
  },
  {
    title: "Atelier Ferron",
    tagline: "Forgeron — Bordeaux",
    type: "One-page",
  },
  // {
  //   title: "Boulangerie Cassan",
  //   tagline: "Artisan — Montauban",
  //   type: "Vitrine",
  // },
  // {
  //   title: "Resto Le Calandre",
  //   tagline: "Restaurateur — Albi",
  //   type: "App mobile",
  // },
  // {
  //   title: "Savonnerie Aumont",
  //   tagline: "Artisan — Auch",
  //   type: "E-commerce",
  // },
];

export default function ProductionsGrid() {
  const { ref, visible } = useScrollReveal(0.5);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-3 gap-0.5 mt-30">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`relative h-62 cursor-pointer bg-acier overflow-hidden group transition-colors ${visible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: `${i * 0.10}s` }}
        >

          <div className="absolute top-2 right-2 text-ivoire/33 font-dm-sans tagline text-xs border border-ivoire/33 px-2 py-1 bg-fonderie">{card.type}</div>

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
            <h3 className="font-bebas-neue text-2xl uppercase text-ivoire">{card.title}</h3>
            <p className="font-dm-sans text-xs text-cuivre tagline">{card.tagline}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
