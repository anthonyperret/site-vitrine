import type { Metadata } from "next";
import ProductionsGrid from "@/components/ProductionsGrid";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez les projets web réalisés par Farga - sites vitrine, e-commerce et applications sur mesure pour artisans, commerçants et indépendants.",
};

export default function PageRealisation() {
  return (
    <div>
      <section className="bg-fonderie">
				<div className="px-100 py-40">
					<SectionHeader eyebrow="Portfolio" title="Dernières" highlight="réalisations." />

					<ProductionsGrid />
				</div>
			</section>
    </div>
  )
}