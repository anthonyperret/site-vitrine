import ProcessItem from "./ProcessItem";

export default function ProcessGrid() {

  return(
    <div className="grid grid-cols-4 gap-1 mt-30">

      <ProcessItem number="01" title="Découverte" desc="On se rencontre pour comprendre votre métier, vos clients, vos objectifs. Pas de jargon, juste une conversation simple." i={0} />

      <ProcessItem number="02" title="Conception" desc="Je conçois la maquette de votre site et vous la présente avant tout développement. Vous validez, on ajuste." i={1} />

      <ProcessItem number="03" title="Développement" desc="Je construis votre site avec soin, en respectant les délais convenus. Vous suivez l'avancement en temps réel." i={2} />

      <ProcessItem number="04" title="Livraison" desc="Mise en ligne, formation à l'outil, support post-livraison. Votre site vous appartient entièrement." i={3} />

    </div>
  )
}