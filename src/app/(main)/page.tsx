import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import SectionHeader from "@/components/SectionHeader";
import ReviewsGrid from "@/components/ReviewsGrid";
import ProductionsGrid from "@/components/ProductionsGrid";
import Button from "@/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FARGA - Forgez votre présence en ligne",
  description:
    "Farga crée des sites vitrine, e-commerce et applications sur mesure pour les artisans, commerçants et indépendants. Accompagnement personnalisé et tarifs adaptés aux petites structures.",
};

export default function Home() {
  return (
    <div>
      <section className="h-screen bg-fonderie flex justify-center items-center relative overflow-hidden">

        <span
          className="absolute top-38 select-none font-bebas-neue text-[40vw] leading-none"
          style={{ color: "transparent", WebkitTextStroke: "1px var(--ivoire)", opacity: 0.07 }}
          aria-hidden="true"
        >
          FARGA
        </span>

        <div className="flex flex-col gap-5 relative z-10 width-2/3 mt-20">
          <div>
            <p className="animate-fade-up text-sm text-cuivre tagline mb-4" style={{ animationDelay: "0.1s" }}>Agence web — sud-ouest</p>
            <h1 className="animate-fade-up text-9xl font-bold uppercase mb-6 text-white font-bebas-neue w-4xl" style={{ animationDelay: "0.25s" }}>Forgez votre présence <span className="text-cuivre">en ligne.</span></h1>
          </div>
          <div>
            <p className="animate-fade-up w-2xl font-dm-sans text-ivoire/66" style={{ animationDelay: "0.45s" }}>Sites vitrine, e-commerce, applications — conçus sur mesure pour les artisans, commerçants et indépendants qui veulent enfin exister là où leurs clients les cherchent.</p>
            <div className="animate-fade-up flex gap-5 mt-10" style={{ animationDelay: "0.6s" }}>
              <Button type="primary" label="Découvrir les services" path="/services"></Button>
              <Button type="secondary" label="Voir les réalisations" path="/realisations"></Button>
            </div>
          </div>
          
          
        </div>
        
      </section>

      <section className="bg-acier">
        <div className="px-100 py-30">
          <SectionHeader eyebrow="Ce que je créé" title="Mes" highlight="services." />
          <ServicesGrid />
          <div className="w-full flex justify-center mt-15">
            <Button type="primary" label="Découvrir tous les services" path="/services"></Button>
          </div>
        </div>
      </section>

      <section className="bg-fonderie">
        <div className="px-100 py-30">
          <SectionHeader eyebrow="Portfolio" title="Dernières" highlight="réalisations." />
          <ProductionsGrid />
          <div className="w-full flex justify-center mt-15">
            <Button type="secondary" label="Voir les réalisations" path="/realisations"></Button>
          </div>
        </div>
      </section>

      <section className="bg-acier">
        <div className="px-100 py-30">
          <SectionHeader eyebrow="Ce qu'ils disent" title="Ils m'ont fait" highlight="confiance." />
          <ReviewsGrid />
          <div className="w-full flex justify-center mt-15">
            <Button type="primary" label="Soyez le prochain" path="/contact"></Button>
          </div>
        </div>
      </section>

    </div>
  );
}
