export interface Service {
  number: string;
  title: string;
  titleAccent?: string;
  tagline?: string;
  desc1: string;
  desc2: string;
  price: number;
  featured: boolean;
  items: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Site ",
    titleAccent: "one-page",
    desc1: "Tout ce qu'il faut pour exister en ligne, dans un format rapide et efficace.",
    desc2: "Tout ce qu'il faut pour exister en ligne, dans un format rapide et efficace. Idéal pour lancer une activité, présenter un événement ou tester une idée — la one-page regroupe l'essentiel dans un design épuré et pensé pour convaincre.",
    price: 399,
    featured: false,
    items: [
      "Jusqu'à 5 sections", "Design sur mesure", "Compatible mobile", "Référencement local", "Hébergement offert 1 an", "Nom de domaine offert 1 an"
    ]
  },
  {
    number: "02",
    title: "Site ",
    titleAccent: "vitrine",
    desc1: "Un site soigné, multi-pages, qui reflète votre sérieux et donne envie d'aller plus loin.",
    desc2: "Un site soigné, multi-pages, qui reflète votre sérieux et donne envie d'aller plus loin. Chaque page est pensée pour guider le visiteur, valoriser votre expertise et vous démarquer de la concurrence.",
    price: 799,
    featured: true,
    items: [
      "Jusqu'à 5 pages", "Design sur mesure", "Compatible mobile", "Référencement local", "Hébergement offert 1 an", "Nom de domaine offert 1 an"
    ]
  },
  {
    number: "03",
    title: "Site ",
    titleAccent: "e-commerce",
    desc1: "Une boutique en ligne complète pour vendre vos produits simplement et efficacement.",
    desc2: "Une boutique en ligne complète pour vendre vos produits simplement et efficacement. Catalogue clair, tunnel d'achat optimisé, paiement sécurisé et gestion des stocks — tout est prêt pour que vous puissiez vous concentrer sur votre business.",
    price: 1399,
    featured: false,
    items: [
      "Catalogue produits", "Paiement sécurisé", "Gestion des stocks", "Design sur mesure", "Compatible mobile", "Référencement local", "Hébergement offert 1 an", "Nom de domaine offert 1 an"
    ]
  },
  {
    number: "04",
    title: "Solution ",
    titleAccent: "métier",
    desc1: "De l'idée au produit final, on construit ensemble ce dont vous avez vraiment besoin.",
    desc2: "De l'idée au produit final, on construit ensemble ce dont vous avez vraiment besoin. Application mobile, backoffice, plateforme métier ou outil interne — chaque projet est unique et mérite une approche sur mesure.",
    price: 0,
    featured: false,
    items: [
      "Application mobile iOS / Android", "Backoffice & outils internes", "Plateforme métier", "Interface dynamique & temps réel", "API & intégrations", "Base de données & logique serveur"
    ]
  },
];
