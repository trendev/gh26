import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { brand, navLinks } from '@/content/nav';

// Navbar : logo + wordmark + liens + CTA Devis (desktop).
// Mobile : logo + CTA Devis + hamburger qui ouvre un panneau d'ancres.
export function Navbar() {
  const [open, setOpen] = useState(false);

  // Ferme le panneau mobile dès que l'utilisateur passe en desktop.
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    const handler = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-border">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <a href="#accueil" className="flex items-center gap-3" aria-label="Accueil GH26">
            <img
              src={brand.logoSrc}
              alt={brand.logoAlt}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-[18px] font-bold text-navy">{brand.name}</span>
              <span className="text-[10px] font-semibold tracking-[0.15em] text-azure">
                {brand.tagline}
              </span>
            </span>
          </a>

          <nav className="hidden lg:block" aria-label="Navigation principale">
            <ul className="flex items-center gap-7 text-[15px] text-slate">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a className="hover:text-navy" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="#contact" variant="primary">
              Demander un devis
            </ButtonLink>
            <button
              type="button"
              className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-btn border border-border text-navy lg:hidden"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            className="border-t border-border py-4 lg:hidden"
            aria-label="Navigation mobile"
          >
            <ul className="flex flex-col gap-3 text-[15px] text-slate">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    className="block rounded px-2 py-2 hover:bg-mist hover:text-navy"
                    href={l.href}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
