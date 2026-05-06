import type { Metadata } from "next";
import Img from "@/components/Image";
import SectionHeader from "@/components/SectionHeader";
import Paragraph from "@/components/Paragraph";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Anthony Perret, développeur web freelance basé à Tarbes et fondateur de Farga. Développement web et design au service des artisans, commerçants et indépendants.",
};

export default function PageAPropos() {

  return (
    <div>

      <section className="md:h-screen bg-fonderie xl:px-20 lg:px-40 md:px-30 lg:py-20 py-10 px-5 flex flex-col items-center justify-center">

        <div className="xl:w-2/3 lg:w-full md:w-full flex lg:flex-row md:flex-row flex-col-reverse lg:gap-10 md:gap-10 gap-5">
      
          <div className="lg:w-1/3 md:w-1/3">

            <Img
              src="/photo_de_profil.png"
              alt="Anthony Perret"
              width={1024}
              height={1536} />
            
          </div>
    
          <div className="lg:w-2/3 md:w-2/3 flex flex-col justify-center">

            <SectionHeader title="Mon" highlight="parcours." />

            <Paragraph i={0}>
              Je m&apos;appelle <strong>Anthony Perret</strong>, développeur web avec <strong>4 ans d&apos;expérience </strong>dans plusieurs entreprises, où j&apos;ai travaillé pour des clients très variés — domaines skiables, parcs d&apos;attractions, lieux de tourisme, organismes sociaux. Cette diversité m&apos;a appris à m&apos;adapter vite et à comprendre un métier avant d&apos;en coder la vitrine.
            </Paragraph>

            <Paragraph i={1}>
              Pour compléter mon profil technique, j&apos;ai suivi une <strong>formation en design UI</strong>, qui m&apos;a ouvert sur des compétences aujourd&apos;hui au cœur de ma façon de travailler : <strong>identité visuelle, référencement, stratégie de positionnement et réseaux sociaux</strong>. Pas juste livrer un site — construire une présence en ligne cohérente et efficace.
            </Paragraph>

            <Paragraph i={2}>
              Avec cette vision, j&apos;ai fondé <strong>Farga</strong> pour accompagner les artisans, commerçants et entrepreneurs dans leurs ambitions digitales. Farga, c&apos;est l&apos;art de la forge : transformer le métal brut en arme <strong>solide, précise et affûtée</strong>. Une exigence que j&apos;apporterai à chacun de vos projets.
            </Paragraph>

          </div>

        </div>
            
      </section>

    </div>
  )
}