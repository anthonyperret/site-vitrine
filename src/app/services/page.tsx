import SectionHeader from "@/components/SectionHeader";
import ServicesGrid from "@/components/ServicesGrid";

export default function PageServices() {
  return (
    <div>
      <section className="bg-acier">
        <div className="px-100 py-40">
          <SectionHeader eyebrow="Ce que je créé" title="Mes" highlight="services." />

          <ServicesGrid />
        </div>
      </section>

      <section className="h-screen bg-fonderie">
        <div className="px-100 py-40">
          <SectionHeader eyebrow="Comment ça marche" title="Mon" highlight="processus." />
        </div>
      </section>
    </div>
  )
}