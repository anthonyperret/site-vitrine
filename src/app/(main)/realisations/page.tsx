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
    <div>

      <div className="lg:hidden pt-20 bg-fonderie"></div>
      <Section bg="fonderie" eyebrow="Portfolio" title="Dernières" highlight="réalisations.">
        <ProductionsGrid limit={6} />
      </Section>

    </div>
  )
}