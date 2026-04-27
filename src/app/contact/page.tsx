import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";

export default function PageContact() {
  return (
    <div>
      <section className="h-screen bg-fonderie flex items-center">
        <div className="px-100 py-30 flex">

          <div className="w-[50%] px-10">
            <SectionHeader eyebrow="Travaillons ensemble" title="Parlons de votre" highlight="projet." />
            <p className="font-dm-sans text-ivoire/66 mt-10">Devis gratuit sous 48h. Pas d&apos;engagement, pas de jargon — juste une réponse claire sur ce que je peux faire pour vous.</p>

            <ul className="mt-5 text-ivoire/66 font-dm-sans">
              <li><span className="text-cuivre mr-2">•</span>contact@forja.fr</li>
              <li><span className="text-cuivre mr-2">•</span>+33 6 XX XX XX XX</li>
              <li><span className="text-cuivre mr-2">•</span>Intervention Sud-Ouest</li>
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