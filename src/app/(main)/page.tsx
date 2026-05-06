import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import ReviewsGrid from "@/components/ReviewsGrid";
import ProductionsGrid from "@/components/ProductionsGrid";
import Button from "@/components/Button";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: {                                                
    absolute: "FARGA - Forgez votre présence en ligne",
  },
  description:
    "Farga crée des sites vitrine, e-commerce et applications sur mesure pour les artisans, commerçants et indépendants. Accompagnement personnalisé et tarifs adaptés aux petites structures.",
};

export default function Home() {
  return (
    <div>
      <HeroSection />

      <Section bg="acier" title="Nos" highlight="services.">
        <ServicesGrid />
        <div className="w-full flex justify-center lg:mt-15 mt-10">
          <Button type="primary" label="Découvrir tous les services" path="/services"></Button>
        </div>
      </Section>

      <Section bg="fonderie" title="Dernières" highlight="réalisations.">
        <ProductionsGrid limit={3} />
        <div className="w-full flex justify-center lg:mt-15 mt-10">
          <Button type="secondary" label="Voir toutes les réalisations" path="/realisations"></Button>
        </div>
      </Section>

      {/* <Section bg="acier" title="Ils m'ont fait" highlight="confiance.">
        <ReviewsGrid />

        <div className="w-full flex justify-center lg:mt-15 mt-10">
          <Button type="primary" label="Je me lance" path="/contact"></Button>
        </div>
      </Section> */}

    </div>
  );
}
