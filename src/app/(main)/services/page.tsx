import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import SmoothHashScroll from "@/components/SmoothHashScroll";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Création de sites vitrine, e-commerce, applications web sur mesure pour les artisans, commerçants et indépendants - découvrez les formules proposées par Farga, pour développer votre présence en ligne.",
};

export default function PageServices() {
  return (
    <div>
      <SmoothHashScroll />
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