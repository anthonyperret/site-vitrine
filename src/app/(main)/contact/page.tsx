import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Un projet en tête ? Contactez Farga pour un devis gratuit et sans engagement. Développement web et design pour commerçants, artisans et indépendants.",
};

export default function PageContact() {
  return (
    <div>

      <section className="bg-fonderie xl:px-20 lg:px-40 md:px-30 lg:py-20 py-10 px-5 flex flex-col lg:justify-center lg:items-center gap-5">

        <div className="xl:w-1/3 lg:w-2/3">

          <SectionHeader title="Parlons de votre" highlight="projet." />

          <Paragraph i={0}>
            Devis gratuit et sans engagement. Je reviens vers vous dans les meilleurs délais avec une réponse adaptée à votre projet.
            <a className="text-cuivre ml-1" href="mailto:contact@farga.fr">contact@farga.fr</a>
          </Paragraph>
          
        </div>

        <div className="xl:w-1/3 lg:w-2/3">
          <ContactForm />
        </div>
          

      </section>
    </div>
  )
}