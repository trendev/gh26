// Coordonnées et options du formulaire de devis.
export const contact = {
  phone: '01 23 45 67 89',
  // Lien tel: en format E.164 simplifié (à confirmer avec le client)
  phoneHref: 'tel:+33123456789',
  email: 'contact@gh26.fr',
  emailHref: 'mailto:contact@gh26.fr',
  coverage: 'Intervention partout en France',
};

// Options du select « Type de besoin » dans le formulaire mailto.
export const besoinOptions = [
  'Chauffage',
  'Climatisation',
  'Maintenance',
  'Solutions énergétiques',
  'Autre',
] as const;

export type BesoinOption = (typeof besoinOptions)[number];
