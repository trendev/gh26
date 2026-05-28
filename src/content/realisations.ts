// Études de cas affichées dans la section Réalisations.
export type Realisation = {
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
  metric: string;
};

export const realisations: Realisation[] = [
  {
    image: '/gh26/img/real1.webp',
    imageAlt: 'Chaudières industrielles installées sur un site logistique',
    tag: 'Chauffage industriel',
    title: 'Réseau de chaleur — site logistique',
    metric: '−28 % de consommation gaz sur 12 mois',
  },
  {
    image: '/gh26/img/real2.webp',
    imageAlt: 'Centrale de traitement d’air d’une usine agroalimentaire',
    tag: 'Climatisation',
    title: "Traitement d'air — site agroalimentaire",
    metric: 'Hygiène et stabilité +20 °C / −5 °C',
  },
  {
    image: '/gh26/img/real3.webp',
    imageAlt: 'Atelier équipé d’un système de récupération de chaleur',
    tag: 'Solutions énergétiques',
    title: 'Récupération de chaleur — atelier',
    metric: '180 MWh récupérés par an',
  },
];
