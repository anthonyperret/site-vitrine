import ProductionsGrid from "@/components/ProductionsGrid";
import SectionHeader from "@/components/SectionHeader";

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