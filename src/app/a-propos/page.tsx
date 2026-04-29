import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function PageAPropos() {
  return (
    <div>
      <section className="bg-fonderie flex justify-center items-center relative overflow-hidden">

        <div className="px-100 py-40 flex z-10">

          <div className="w-[50%] px-10">
            <Image src="/photo_de_profil.png" alt="Anthony Perret" width={1024} height={1536} className="w-full h-auto rounded-md" />
          </div>

          <div className="w-[50%] px-10 flex flex-col justify-center">
            <SectionHeader eyebrow="Qui je suis" title="Anthony" highlight="Perret." />
            <p className="font-dm-sans text-ivoire/66 mt-10">Développeur web avec 4 ans d&apos;expérience en entreprise, j&apos;ai choisi de me lancer en freelance pour travailler autrement : en direct, sans intermédiaire, avec des clients qui ont un vrai projet à concrétiser.
            </p>
            <p className="font-dm-sans text-ivoire/66 mt-5">J&apos;ai créé Farga en mai 2026 pour accompagner artisans, commerçants et entrepreneurs dans leur présence en ligne — avec une approche qui va au-delà du simple site web.</p>
          </div>
          
        </div>
      </section>

      <section className="bg-acier">
        <div className="px-100 py-40">
          <SectionHeader eyebrow="Parcours" title="Concepteur &" highlight="développeur." />
          
          <div className="flex flex-col gap-4 font-dm-sans text-ivoire/66 mt-10">
            <p>Je m&apos;appelle Anthony. Avant de créer Farga, j&apos;ai passé 4 ans en entreprise en tant que développeur web et logiciel, après 3 ans de formation en informatique. Des années qui m&apos;ont permis de travailler sur des projets très variés — domaines skiables, parcs d&apos;attractions, sites touristiques culturels et industriels, lieux de culte, organismes sociaux. Des secteurs et des contraintes différentes, mais à chaque fois la même exigence : livrer quelque chose qui fonctionne vraiment, pour des utilisateurs réels.
            </p>

            <p>Cette diversité, c&apos;est ce qui m&apos;a appris à m&apos;adapter vite, à comprendre un métier avant d&apos;en coder la vitrine.</p>
            
            <p>Avec l&apos;envie de travailler en direct avec mes clients et de piloter des projets de bout en bout, j&apos;ai décidé de me lancer à mon compte. Avant ça, j&apos;ai suivi une formation de concepteur designer UI pour compléter mon profil technique avec une vraie dimension design. Parce qu&apos;un développeur qui comprend l&apos;expérience utilisateur, ça change tout dans le résultat final.</p>

            <p>Cette formation m&apos;a aussi ouvert sur des compétences complémentaires qui font aujourd&apos;hui partie intégrante de ma façon de travailler : étude de marché, stratégie de positionnement, création d&apos;identité visuelle, visibilité sur les réseaux sociaux, et référencement web. Autant d&apos;outils qui permettent de ne pas juste livrer un site, mais de construire une présence en ligne cohérente et efficace.</p>

            <p>Farga, ce n&apos;est pas un nom choisi au hasard. Il représente l&apos;art ancestral de la forge, là où le métal brut devient, sous la chaleur et les coups répétés, une arme solide, précise, faite pour trancher. C&apos;est cette même exigence que j&apos;apporte à chaque projet web.</p>

            <p>C&apos;est l&apos;image que je me fais du travail : celui des artisans et des entrepreneurs qui construisent leur réussite à la sueur de leurs efforts, jour après jour, coup après coup. Et c&apos;est aussi la promesse que je vous fais : mettre un savoir-faire précieux au service de votre projet — pour vous forger une présence en ligne solide, taillée pour durer.</p>
          </div>
          
        </div>
        
      </section>
    </div>
  )
}