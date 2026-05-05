export interface Review {
  client: string;
  text: string;
  job: string;
}

export const reviews: Review[] = [
  {
    client: "Marc Vidal",
    text: "Mon site a été livré en deux semaines, exactement comme je l'avais imaginé. Depuis, je reçois des demandes de clients qui m'ont trouvé sur Google.",
    job: "Ébéniste — Toulouse",
  },
  {
    client: "Sophie Aumont",
    text: "Très à l'écoute, patient avec mes questions techniques, et un résultat vraiment pro. Ma boutique en ligne tourne parfaitement, même sur téléphone.",
    job: "Savonnière artisanale — Auch",
  },
  {
    client: "Pierre Cassan",
    text: "Je ne savais pas par où commencer. Il a tout pris en charge, du nom de domaine au design, en expliquant chaque étape clairement. Je recommande sans hésiter.",
    job: "Boulanger — Montauban",
  },
];
