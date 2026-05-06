import type { Metadata } from "next";
import ProductionsGrid from "@/components/ProductionsGrid";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez les projets web réalisés par Farga - sites vitrine, e-commerce et applications sur mesure pour artisans, commerçants et indépendants.",
};

export default function PageRealisation() {
  return (
    <div className="md:h-screen">

      <Section bg="fonderie" title="Dernières" highlight="réalisations.">
        <ProductionsGrid limit={6} />
      </Section>

    </div>
  )
}