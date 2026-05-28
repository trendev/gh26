// Colonnes de liens et mentions légales du footer.
export type FooterLink = { label: string; href: string };
export type FooterColumn = { title: string; links: FooterLink[] };

export const footerColumns: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Chauffage industriel', href: '#services' },
      { label: 'Climatisation', href: '#services' },
      { label: 'Solutions énergétiques', href: '#services' },
      { label: 'Maintenance', href: '#services' },
    ],
  },
  {
    title: 'Société',
    links: [
      { label: 'À propos', href: '#a-propos' },
      { label: 'Réalisations', href: '#realisations' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Demander un devis', href: '#contact' },
      { label: 'Documentation', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
];

export const footerLegal: FooterLink[] = [
  { label: 'Mentions légales', href: '#' },
  { label: 'Confidentialité', href: '#' },
  { label: 'CGV', href: '#' },
];

export const footerCopyright = '© 2026 GH26 — Tous droits réservés.';

export const footerDescription =
  "GH26 conçoit, installe et maintient les solutions thermiques et énergétiques des entreprises françaises. Performance, fiabilité, accompagnement.";
