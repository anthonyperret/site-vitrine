import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import SmoothHashScroll from "@/components/SmoothHashScroll";
import { services } from "@/data/services";
import ProcessGrid from "@/components/ProcessGrid";
import Button from "@/components/Button";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Création de sites vitrine, e-commerce, applications web sur mesure pour les artisans, commerçants et indépendants - découvrez les formules proposées par Farga, pour développer votre présence en ligne.",
};

export default function PageServices() {
  return (
    <div>
      <SmoothHashScroll />

      <Section bg="fonderie" title="Choissisez votre" highlight="formule.">

        <div className="flex flex-col gap-5 lg:mt-30 mt-10">

          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}

          </div>
      </Section>


      <Section bg="acier" title="Mon" highlight="processus.">
        <ProcessGrid />
        <div className="w-full flex justify-center lg:mt-15 mt-10">
          <Button type="primary" label="Je demande mon devis" path="/contact"></Button>
        </div>
      </Section>

    </div>
  )
}