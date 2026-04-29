export interface Service {
  number: string;
  title: string;
  desc1: string;
  desc2: string;
  price: number;
  featured: boolean;
  items: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Site One-page",
    desc1: "La solution rapide et efficace. Tout ce qu'il faut pour exister en ligne et convaincre.",
    desc2: "Parfait pour lancer rapidement une activité, présenter un événement ou tester une idée. La one-page regroupe l'essentiel de votre projet dans un format épuré, moderne et pensé pour aller à l'essentiel.",
    price: 399,
    featured: false,
    items: [
      "Jusqu'à 5 sections", "Design sur mesure", "Compatible mobile", "Référencement local", "Hébergement offert 1 an", "Nom de domaine offert 1 an"
    ]
  },
  {
    number: "02",
    title: "Site vitrine",
    desc1: "La solution professionnelle. Un site soigné qui reflète votre sérieux et donne envie d'aller plus loin.",
    desc2: "Un site vitrine multi-pages pour présenter votre activité sous son meilleur jour. Chaque page est pensée pour guider le visiteur, valoriser votre expertise et vous démarquer de la concurrence.",
    price: 799,
    featured: true,
    items: [
      "Jusqu'à 5 pages", "Design sur mesure", "Compatible mobile", "Référencement local", "Hébergement offert 1 an", "Nom de domaine offert 1 an"
    ]
  },
  {
    number: "03",
    title: "Site E-commerce",
    desc1: "La solution complète pour lancer votre boutique en ligne et commencer à vendre rapidement.",
    desc2: "Une solution e-commerce complète pour vendre vos produits en ligne simplement. Catalogue clair, tunnel d'achat optimisé, paiement sécurisé et gestion des stocks intégrée.",
    price: 1399,
    featured: false,
    items: [
      "Catalogue produits", "Paiement sécurisé", "Gestion des stocks", "Design sur mesure", "Compatible mobile", "Référencement local", "Hébergement offert 1 an", "Nom de domaine offert 1 an"
    ]
  },
  {
    number: "04",
    title: "App web/mobile",
    desc1: "La solution sur mesure. De l'idée au produit final, on construit ce dont vous avez vraiment besoin.",
    desc2: "Backoffice, application mobile, plateforme métier, outil interne — chaque projet est unique et mérite une solution adaptée. On part de votre besoin et on construit ensemble quelque chose qui y répond vraiment.",
    price: 0,
    featured: false,
    items: [
      "Application mobile iOS / Android", "Backoffice & outils internes", "Plateforme métier", "Interface dynamique & temps réel", "API & intégrations", "Base de données & logique serveur"
    ]
  },
];
