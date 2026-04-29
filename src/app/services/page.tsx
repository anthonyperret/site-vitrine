import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function PageServices() {
  return (
    <div>
      <section className="bg-fonderie">
        <div className="px-100 py-40">
          <SectionHeader eyebrow="mes services" title="Choissisez votre" highlight="formule." />

          <div className="flex flex-col gap-5 mt-30">

            {services.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}

          </div>
        </div>
      </section>

      <section className="bg-acier">
        <div className="px-100 py-40">
          <SectionHeader eyebrow="Comment ça marche" title="Mon" highlight="processus." />
        </div>
      </section>
    </div>
  )
}