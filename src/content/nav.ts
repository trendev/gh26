// Liens de navigation principaux (ancres vers les sections de la page).
export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Contact', href: '#contact' },
];

// Identité de marque utilisée dans la navbar et le footer.
export const brand = {
  name: 'GH26',
  tagline: 'THERMIQUE & ÉNERGIE',
  logoSrc: '/gh26/img/logo.webp',
  logoAlt: 'Logo GH26',
};
