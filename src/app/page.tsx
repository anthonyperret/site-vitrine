import ServicesGrid from "@/components/ServicesGrid";
import SectionHeader from "@/components/SectionHeader";
import ReviewsGrid from "@/components/ReviewsGrid";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <section className="h-screen bg-fonderie flex justify-center items-center relative overflow-hidden">

        <span
          className="absolute top-38 select-none font-bebas-neue text-[40vw] leading-none"
          style={{ color: "transparent", WebkitTextStroke: "1px var(--ivoire)", opacity: 0.07 }}
          aria-hidden="true"
        >
          FORJA
        </span>

        <div className="flex flex-col gap-5 relative z-10 width-2/3 mt-20">
          <div>
            <p className="animate-fade-up text-sm text-cuivre uppercase mb-4 tracking-widest [word-spacing:0.3em]" style={{ animationDelay: "0.1s" }}>Agence web — sud-ouest</p>
            <h1 className="animate-fade-up text-9xl font-bold uppercase mb-6 text-white font-bebas-neue w-4xl" style={{ animationDelay: "0.25s" }}>Forgez votre présence <span className="text-cuivre">en ligne.</span></h1>
          </div>
          <div>
            <p className="animate-fade-up w-2xl font-dm-sans text-ivoire/66" style={{ animationDelay: "0.45s" }}>Sites vitrine, e-commerce, applications — conçus sur mesure pour les artisans, commerçants et indépendants qui veulent enfin exister là où leurs clients les cherchent.</p>
            <div className="animate-fade-up flex gap-5 mt-10" style={{ animationDelay: "0.6s" }}>
              <button className="bg-cuivre text-ivoire px-6 py-2 rounded-sm font-dm-sans">Voir les réalisations</button>
              <button className="border border-ivoire/66 text-ivoire/66 px-6 py-2 rounded-sm font-dm-sans">Découvrir les services</button>
            </div>
          </div>
          
          
        </div>
        
      </section>
      <section className=" bg-acier">
        <div className="px-100 py-30">
          <SectionHeader eyebrow="Ce que je créé" title="Mes" highlight="services." />

          <ServicesGrid />
        </div>
      </section>

      <section className="h-screen bg-fonderie">
        <div className="px-100 py-30">
          <SectionHeader eyebrow="Portfolio" title="Dernières" highlight="réalisations." />
        </div>
      </section>

      <section className="h-screen bg-acier">
        <div className="px-100 py-30">
          <SectionHeader eyebrow="Comment ça marche" title="Mon" highlight="processus." />
        </div>
      </section>

      <section className="bg-fonderie">
        <div className="px-100 py-30 flex">

          <div className="w-[50%] px-10">
            <div className="bg-acier rounded-sm w-full h-175">
            </div>
          </div>

          <div className="w-[50%] px-10 flex flex-col justify-center">
            <SectionHeader eyebrow="Qui je suis" title="Concepteur &" highlight="développeur." />
            <p className="font-dm-sans text-ivoire/66 mt-10">Basé dans le Sud-Ouest, je travaille en direct avec mes clients — sans intermédiaire, sans grande agence. Chaque projet est traité personnellement, de la première esquisse à la mise en ligne.</p>
            <p className="font-dm-sans text-ivoire/66 mt-5">Mon objectif : vous livrer un site qui ressemble vraiment à votre métier, qui se charge vite, qui fonctionne sur mobile, et qui génère des contacts. Pas un template copié-collé.</p>
          </div>
          
        </div>
      </section>

      <section className="bg-acier">
        <div className="px-100 py-30">
          <SectionHeader eyebrow="Ce qu'ils disent" title="Ils m'ont fait" highlight="confiance." />

          <ReviewsGrid />
        </div>
      </section>

    </div>
  );
}
