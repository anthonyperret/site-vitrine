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
    title: "One-page",
    desc1: "L'essentiel de votre activité en une page bien construite — idéal pour lancer rapidement une activité ou un évènement.",
    desc2: "L'essentiel de votre activité en une page bien construite — idéal pour lancer rapidement une activité ou un évènement.",
    price: 399,
    featured: false,
    items: [
      "Jusqu'à 5 sections", "Design sur mesure", "Compatible mobile", "Référencement local", "Hébergement offert 1 an", "Nom de domaine offert 1 an"
    ]
  },
  {
    number: "02",
    title: "Site vitrine",
    desc1: "Une présence en ligne élégante et professionnelle qui reflète votre savoir-faire et convainc vos visiteurs dès les premières secondes.",
    desc2: "Une présence en ligne élégante et professionnelle qui reflète votre savoir-faire et convainc vos visiteurs dès les premières secondes.",
    price: 799,
    featured: true,
    items: [
      "Jusqu'à 5 pages", "Design sur mesure", "Compatible mobile", "Référencement local", "Hébergement offert 1 an", "Nom de domaine offert 1 an"
    ]
  },
  {
    number: "03",
    title: "E-commerce",
    desc1: "Vendez en ligne 24h/24 avec une boutique conçue pour convertir — catalogue, paiement sécurisé, gestion de stocks.",
    desc2: "Vendez en ligne 24h/24 avec une boutique conçue pour convertir — catalogue, paiement sécurisé, gestion de stocks.",
    price: 1399,
    featured: false,
    items: [
      "Catalogue produits", "Paiement sécurisé", "Gestion des stocks", "Design sur mesure", "Compatible mobile", "Référencement local", "Hébergement offert 1 an", "Nom de domaine offert 1 an"
    ]
  },
];
