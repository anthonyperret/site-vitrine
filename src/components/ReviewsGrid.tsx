"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    client: "Marc Vidal",
    text: "Mon site a été livré en deux semaines, exactement comme je l'avais imaginé. Depuis, je reçois des demandes de clients qui m'ont trouvé sur Google — ce qui n'arrivait jamais avant.",
    job: "Ébéniste — Toulouse",
  },
  {
    client: "Sophie Aumont",
    text: "Très à l'écoute, patient avec mes questions techniques, et un résultat vraiment pro. Ma boutique en ligne tourne parfaitement, même sur téléphone.",
    job: "Savonnière artisanale — Auch",
  },
  {
    client: "Pierre Cassan",
    text: "Je ne savais pas par où commencer. Il a tout pris en charge, du nom de domaine au design, en expliquant chaque étape clairement. Je recommande sans hésiter.",
    job: "Boulanger — Montauban",
  },
];

export default function ReviewsGrid() {
  const { ref, visible } = useScrollReveal(0.5);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex gap-0.5 mt-30">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`flex-1 cursor-pointer bg-fonderie text-ivoire px-10 pt-10 pb-10 flex flex-col gap-5 border-t-3 border-transparent hover:border-cuivre hover:bg-fonderie/80 transition-colors ${visible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: `${i * 0.20}s` }}
        >
          <span className="text-cuivre text-4xl font-bebas-neue">&quot;</span>
          <p className="font-dm-sans text-ivoire/66 text-sm italic">{card.text}</p>
          <div className="mt-auto">
            <p className="text-ivoire text-xs mb-1">{card.client}</p>
            <p className="uppercase text-xs text-ivoire/33 tracking-widest [word-spacing:0.3em]">{card.job}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
}
