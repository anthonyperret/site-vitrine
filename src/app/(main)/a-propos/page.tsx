import type { Metadata } from "next";
import Img from "@/components/Image";
import SectionHeader from "@/components/SectionHeader";
import Section from "@/components/Section";
import Paragraph from "@/components/Paragraph";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Anthony Perret, développeur web freelance basé à Tarbes et fondateur de Farga. Développement web et design au service des artisans, commerçants et indépendants.",
};

export default function PageAPropos() {

  return (
    <div>

      <section className="bg-fonderie lg:px-100 lg:py-40 px-5 py-10 pt-30 lg:flex justify-center items-center">
      
        <div className="hidden lg:block w-1/2 px-10">

          <Img
            src="/photo_de_profil.png"
            alt="Anthony Perret"
            width={1024}
            height={1536} />
          
        </div>
  
        <div className="lg:w-1/2 lg:px-10 flex flex-col justify-center">
          <SectionHeader eyebrow="Qui je suis" title="Anthony" highlight="Perret." />

          <Paragraph i={0}>
            Développeur web avec 4 ans d&apos;expérience en entreprise, j&apos;ai choisi de me lancer en freelance pour travailler autrement : en direct, sans intermédiaire, avec des clients qui ont un vrai projet à concrétiser.
          </Paragraph>

          <Paragraph i={1}>
            J&apos;ai créé Farga en mai 2026 pour accompagner artisans, commerçants et entrepreneurs dans leur présence en ligne — avec une approche qui va au-delà du simple site web.
          </Paragraph>

        </div>

        <div className="lg:hidden mt-10">

          <Img
            src="/photo_de_profil.png"
            alt="Anthony Perret"
            width={1024}
            height={1536} />
          
        </div>
            
      </section>

      <Section bg="acier" eyebrow="Parcours" title="Concepteur &" highlight="développeur." >
        <div className="mt-10">

          <Paragraph i={0}>
            Je m&apos;appelle Anthony. Avant de créer Farga, j&apos;ai passé 4 ans en entreprise en tant que développeur web et logiciel, après 3 ans de formation en informatique. Des années qui m&apos;ont permis de travailler sur des projets très variés — domaines skiables, parcs d&apos;attractions, sites touristiques culturels et industriels, lieux de culte, organismes sociaux. Des secteurs et des contraintes différentes, mais à chaque fois la même exigence : livrer quelque chose qui fonctionne vraiment, pour des utilisateurs réels.
            Cette diversité, c&apos;est ce qui m&apos;a appris à m&apos;adapter vite, à comprendre un métier avant d&apos;en coder la vitrine.
          </Paragraph>

          <Paragraph i={2}>
            Avec l&apos;envie de travailler en direct avec mes clients et de piloter des projets de bout en bout, j&apos;ai décidé de me lancer à mon compte. Avant ça, j&apos;ai suivi une formation de concepteur designer UI pour compléter mon profil technique avec une vraie dimension design. Parce qu&apos;un développeur qui comprend l&apos;expérience utilisateur, ça change tout dans le résultat final.
          </Paragraph>

          <Paragraph i={3}>
            Cette formation m&apos;a aussi ouvert sur des compétences complémentaires qui font aujourd&apos;hui partie intégrante de ma façon de travailler : étude de marché, stratégie de positionnement, création d&apos;identité visuelle, visibilité sur les réseaux sociaux, et référencement web. Autant d&apos;outils qui permettent de ne pas juste livrer un site, mais de construire une présence en ligne cohérente et efficace.
          </Paragraph>

          <Paragraph i={3.5}>
            Farga, ce n&apos;est pas un nom choisi au hasard. Il représente l&apos;art ancestral de la forge, là où le métal brut devient, sous la chaleur et les coups répétés, une arme solide, précise, faite pour trancher. C&apos;est cette même exigence que j&apos;apporte à chaque projet web.
          </Paragraph>

          <Paragraph i={4}>
            C&apos;est l&apos;image que je me fais du travail : celui des artisans et des entrepreneurs qui construisent leur réussite à la sueur de leurs efforts, jour après jour, coup après coup. Et c&apos;est aussi la promesse que je vous fais : mettre un savoir-faire précieux au service de votre projet — pour vous forger une présence en ligne solide, taillée pour durer.
          </Paragraph>

        </div>
      </Section>

      
    </div>
  )
}