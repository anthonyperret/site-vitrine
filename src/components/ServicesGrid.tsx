"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    number: "01",
    title: "One-page",
    description: "L'essentiel de votre activité en une page bien construite — idéal pour lancer rapidement une activité ou un évènement.",
    price: "à partir de 500€",
  },
  {
    number: "02",
    title: "Site vitrine",
    description: "Une présence en ligne élégante et professionnelle qui reflète votre savoir-faire et convainc vos visiteurs dès les premières secondes.",
    price: "à partir de 800€",
  },
  {
    number: "03",
    title: "E-commerce",
    description: "Vendez en ligne 24h/24 avec une boutique conçue pour convertir — catalogue, paiement sécurisé, gestion de stocks.",
    price: "à partir de 1300€",
  },
  {
    number: "04",
    title: "App web/mobile",
    description: "Une application sur mesure pour iOS et Android — système de réservation, fidélité, commande en ligne ou outil interne.",
    price: "sur devis",
  },
];

export default function ServicesGrid() {
  const { ref, visible } = useScrollReveal(0.5);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex gap-0.5 mt-30">
      {cards.map((card, i) => (
        <div
          key={card.number}
          className={`flex-1 cursor-pointer bg-fonderie text-ivoire px-10 pt-20 pb-10 flex flex-col gap-5 border-t-3 border-transparent hover:border-cuivre hover:bg-fonderie/80 transition-colors ${visible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: `${i * 0.20}s` }}
        >
          <span className="text-acier font-bebas-neue text-6xl">{card.number}</span>
          <h3 className="uppercase font-bebas-neue text-3xl">{card.title}</h3>
          <p className="font-dm-sans text-ivoire/66 text-sm">{card.description}</p>
          <div className="mt-auto w-max border border-ivoire/33 px-2 py-1 text-cuivre tagline font-dm-sans text-xs">{card.price}</div>
        </div>
      ))}
    </div>
  );
}
