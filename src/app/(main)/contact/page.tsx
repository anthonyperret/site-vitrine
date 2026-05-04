import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import Paragraph from "@/components/Paragraph";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Un projet en tête ? Contactez Farga pour un devis gratuit et sans engagement. Développement web et design pour commerçants, artisans et indépendants.",
};

export default function PageContact() {
  return (
    <div>
      <section className="h-screen bg-fonderie px-100 py-70 flex justify-center items-center">

        <div className="w-1/2 px-10">

          <SectionHeader eyebrow="Travaillons ensemble" title="Parlons de votre" highlight="projet." />

          <Paragraph i={0}>
            Devis gratuit et sans engagement. Je reviens vers vous dans les meilleurs délais avec une réponse adaptée à votre projet.
          </Paragraph>

          <Paragraph i={1}>
            <span className="text-cuivre mr-2">•</span>contact@farga.fr<br/>
            <span className="text-cuivre mr-2">•</span>07 50 27 97 42<br/>
            <span className="text-cuivre mr-2">•</span>Tarbes - Hautes-Pyrénées<br/>
          </Paragraph>

          
        </div>

        <div className="w-1/2 px-10">
          <ContactForm />
        </div>
          

      </section>
    </div>
  )
}