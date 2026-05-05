import ProcessItem from "./ProcessItem";

export default function ProcessGrid() {

  return(
    <div className="grid lg:grid-cols-4 gap-1 lg:mt-30 mt-10">

      <ProcessItem number="01" title="Découverte" desc="On se rencontre pour comprendre votre métier, vos clients et vos objectifs. Un échange simple pour poser les bonnes bases." i={0} />

      <ProcessItem number="02" title="Conception" desc="Je conçois la maquette de votre site et vous la présente avant tout développement. On ajuste, vous validez." i={1} />

      <ProcessItem number="03" title="Développement" desc="Je construis votre site avec soin, en respectant les délais convenus. Vous êtes tenu informé à chaque étape clé." i={2} />

      <ProcessItem number="04" title="Livraison" desc="Mise en ligne, formation à l'outil si nécessaire et support post-livraison. Votre site vous appartient entièrement." i={3} />

    </div>
  )
}