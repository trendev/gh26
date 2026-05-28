import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { realisations } from '@/content/realisations';

export function Realisations() {
  return (
    <section id="realisations" className="bg-mist py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Réalisations"
          title="Des projets concrets, des résultats mesurés."
          lead="Trois interventions récentes qui illustrent l'étendue de notre savoir-faire."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {realisations.map((r) => (
            <Card key={r.title} className="overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden bg-border">
                <img
                  src={r.image}
                  alt={r.imageAlt}
                  width={900}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center rounded-pill bg-pill px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.05em] text-azure">
                  {r.tag}
                </span>
                <h3 className="mt-4 text-[18px] font-semibold leading-snug text-navy">
                  {r.title}
                </h3>
                <p className="mt-3 text-[14px] font-medium text-copper">{r.metric}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-azure hover:text-azure-dark"
          >
            Voir toutes nos réalisations
            <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}
