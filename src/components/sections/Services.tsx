import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services, servicesCta } from '@/content/services';

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Nos services"
          title="Une offre intégrée pour vos sites tertiaires et industriels."
          lead="Cinq pôles d'expertise qui couvrent l'ensemble du cycle de vie de vos installations thermiques."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-btn bg-pill text-azure">
                <Icon name={s.icon} size={22} />
              </span>
              <h3 className="mt-5 text-[19px] font-semibold text-navy">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">
                {s.description}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-azure hover:text-azure-dark"
              >
                En savoir plus
                <Icon name="arrow-right" size={16} />
              </a>
            </Card>
          ))}

          {/* Tuile CTA navy à la fin de la grille */}
          <div className="rounded-card bg-navy p-7 text-white shadow-card">
            <h3 className="text-[19px] font-semibold">{servicesCta.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-footer-muted">
              {servicesCta.description}
            </p>
            <ButtonLink
              href={servicesCta.buttonHref}
              variant="primary"
              className="mt-6"
            >
              {servicesCta.buttonLabel}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
