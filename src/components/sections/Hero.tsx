import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { stats } from '@/content/stats';

// Hero : 2 colonnes desktop (texte + visuel), empilé en mobile.
// Sur mobile, les deux CTA passent en pleine largeur.
export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-hero-navy text-white"
    >
      <Container>
        <div className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-12 lg:py-24">
          <div>
            <Eyebrow variant="on-dark">Solutions thermiques pro</Eyebrow>
            <h1 className="mt-5 text-h1-mobile font-bold lg:text-h1-desktop">
              Solutions thermiques et énergétiques pour les{' '}
              <span className="text-azure">professionnels.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-footer-muted">
              GH26 conçoit, installe et maintient les équipements de chauffage,
              climatisation et performance énergétique des sites industriels et
              tertiaires. Une expertise de terrain au service de votre facture
              et de votre confort.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contact" variant="primary" fullWidth className="sm:w-auto">
                Demander un devis
              </ButtonLink>
              <ButtonLink
                href="#services"
                variant="secondary-on-dark"
                fullWidth
                className="sm:w-auto"
              >
                Découvrir nos services
              </ButtonLink>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-y-5 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-[22px] font-bold text-white">{s.value}</dt>
                  <dd className="text-[13px] text-footer-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-card border border-white/10 shadow-float">
              <img
                src="/gh26/img/hero.webp"
                alt="Local technique avec équipements de chauffage industriel"
                width={1400}
                height={933}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Carte flottante « −30 % » */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-card bg-white px-5 py-4 text-navy shadow-float sm:flex sm:items-center sm:gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pill text-azure">
                <Icon name="bolt" size={20} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[20px] font-bold">−30 %</span>
                <span className="text-[12px] text-slate">sur la facture énergétique</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
