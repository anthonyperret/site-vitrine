"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

export default function ProcessGrid() {
  const { ref, visible } = useScrollReveal(0.5);

  return(
    <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-4 gap-1 mt-20">
      <div className={`${visible ? "animate-fade-up" : "opacity-0"} flex flex-col gap-3 border-r border-ivoire/33 p-7`} style={{ animationDelay: "0.2s" }}>
        <span className="text-cuivre/33 font-bebas-neue text-6xl">01</span>
        <h3 className="uppercase text-ivoire font-bebas-neue text-3xl">Découverte</h3>
        <p className="font-dm-sans text-ivoire/66 text-sm">On se rencontre pour comprendre votre métier, vos clients, vos objectifs. Pas de jargon, juste une conversation simple.</p>
      </div>

      <div className={`${visible ? "animate-fade-up" : "opacity-0"} flex flex-col gap-3 border-r border-ivoire/33 p-7`} style={{ animationDelay: "0.4s" }}>
        <span className="text-cuivre/33 font-bebas-neue text-6xl">02</span>
        <h3 className="uppercase text-ivoire font-bebas-neue text-3xl">Conception</h3>
        <p className="font-dm-sans text-ivoire/66 text-sm">Je conçois la maquette de votre site et vous la présente avant tout développement. Vous validez, on ajuste.</p>
      </div>

      <div className={`${visible ? "animate-fade-up" : "opacity-0"} flex flex-col gap-3 border-r border-ivoire/33 p-7`} style={{ animationDelay: "0.6s" }}>
        <span className="text-cuivre/33 font-bebas-neue text-6xl">03</span>
        <h3 className="uppercase text-ivoire font-bebas-neue text-3xl">Développement</h3>
        <p className="font-dm-sans text-ivoire/66 text-sm">Je construis votre site avec soin, en respectant les délais convenus. Vous suivez l&apos;avancement en temps réel.</p>
      </div>

      <div className={`${visible ? "animate-fade-up" : "opacity-0"} flex flex-col gap-3 p-7`} style={{ animationDelay: "0.8s" }}>
        <span className="text-cuivre/33 font-bebas-neue text-6xl">04</span>
        <h3 className="uppercase text-ivoire font-bebas-neue text-3xl">Livraison</h3>
        <p className="font-dm-sans text-ivoire/66 text-sm">Mise en ligne, formation à l&apos;outil, support post-livraison. Votre site vous appartient entièrement.</p>
      </div>

    </div>
  )
}