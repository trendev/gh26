// Icônes : noms de symboles SVG inline (cf. components/ui/Icon.tsx)
export type ServiceIcon =
  | 'flame'
  | 'snowflake'
  | 'bolt'
  | 'wrench'
  | 'cog';

export type Service = {
  icon: ServiceIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: 'flame',
    title: 'Chauffage industriel',
    description:
      'Chaudières, réseaux de chaleur, brûleurs gaz et fioul : dimensionnement, installation et mise en service pour sites tertiaires et industriels.',
  },
  {
    icon: 'snowflake',
    title: 'Climatisation',
    description:
      'Climatisation et traitement d’air pour bureaux, commerces et process industriels. Solutions DRV, rooftops et armoires de précision.',
  },
  {
    icon: 'bolt',
    title: 'Solutions énergétiques',
    description:
      'Pompes à chaleur, récupération de chaleur, géothermie. Audit énergétique et plans d’économie sur la durée.',
  },
  {
    icon: 'wrench',
    title: 'Maintenance',
    description:
      'Contrats de maintenance préventive et curative, dépannage 7/7, télésurveillance des installations critiques.',
  },
  {
    icon: 'cog',
    title: 'Installations techniques',
    description:
      'Tuyauterie industrielle, GTC/GTB, désenfumage et automation. Intervention partout en France métropolitaine.',
  },
];

// Tuile CTA placée à la fin de la grille de services (fond navy).
export const servicesCta = {
  title: 'Un besoin spécifique ?',
  description:
    'Décrivez-nous votre projet : nous revenons vers vous sous 48 h avec une première analyse.',
  buttonLabel: 'Nous contacter',
  buttonHref: '#contact',
};
