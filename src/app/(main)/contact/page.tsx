import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Un projet en tête ? Contactez Farga pour un devis gratuit et sans engagement. Développement web et design pour commerçants, artisans et indépendants.",
};

export default function PageContact() {
  return (
    <div>
      <section className="bg-fonderie flex justify-center items-center relative overflow-hidden">

        <div className="px-100 py-70 flex z-10">

          <div className="w-[50%] px-10">
            <SectionHeader eyebrow="Travaillons ensemble" title="Parlons de votre" highlight="projet." />
            <p className="font-dm-sans text-ivoire/66 mt-10">Devis gratuit et sans engagement. Je vous réponds dans les meilleurs délais avec une réponse claire et adaptée à votre projet.</p>

            <ul className="mt-5 text-ivoire/66 font-dm-sans">
              <li><span className="text-cuivre mr-2">•</span>contact@farga.fr</li>
              <li><span className="text-cuivre mr-2">•</span>07 50 27 97 42</li>
              <li><span className="text-cuivre mr-2">•</span>Tarbes — Hautes-Pyrénées</li>
            </ul>
            
          </div>

          <div className="w-[50%] px-10">
            <ContactForm />
          </div>
          
        </div>
      </section>
    </div>
  )
}