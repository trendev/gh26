// Bloc « À propos » : titre, paragraphe, photo et 4 valeurs différenciantes.
export type AproposPoint = { title: string; description: string };

export const apropos = {
  eyebrow: 'À propos',
  title: 'Un partenaire technique, pas un simple fournisseur.',
  description:
    "Depuis plus de 15 ans, GH26 accompagne les industriels et les gestionnaires de sites tertiaires sur leurs projets thermiques et énergétiques. Nos équipes interviennent partout en France, du dimensionnement à la mise en service, jusqu'à la maintenance long terme.",
  image: '/gh26/img/apropos.webp',
  imageAlt: 'Technicien GH26 en intervention sur un équipement thermique',
  ctaLabel: 'Découvrir notre savoir-faire',
  ctaHref: '#contact',
  points: [
    {
      title: 'Expertise terrain',
      description:
        'Des ingénieurs et techniciens issus du métier, formés à toutes les technologies en service.',
    },
    {
      title: 'Accompagnement de A à Z',
      description:
        'Étude, conception, installation, mise en service et exploitation : un seul interlocuteur.',
    },
    {
      title: 'Performance énergétique',
      description:
        'Choix de solutions à haut rendement et suivi des économies via télémesure.',
    },
    {
      title: 'Conformité & sécurité',
      description:
        'Respect strict des normes (PIC/PED, ATEX, F-gaz, RT) et des règles HSE sur site.',
    },
  ] satisfies AproposPoint[],
};
