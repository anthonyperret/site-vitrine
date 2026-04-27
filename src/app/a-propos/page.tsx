import SectionHeader from "@/components/SectionHeader";

export default function PageAPropos() {
  return (
    <div>
      <section className="bg-fonderie">
        <div className="px-100 py-40 flex">

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
    </div>
  )
}