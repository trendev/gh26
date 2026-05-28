import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Icon } from '@/components/ui/Icon';
import { apropos } from '@/content/apropos';

export function APropos() {
  return (
    <section id="a-propos" className="py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-card border border-border shadow-card">
              <img
                src={apropos.image}
                alt={apropos.imageAlt}
                width={1200}
                height={800}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <Eyebrow>{apropos.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-h2-mobile text-navy lg:text-h2-desktop">
              {apropos.title}
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-slate">
              {apropos.description}
            </p>

            <ul className="mt-7 grid gap-5 sm:grid-cols-2">
              {apropos.points.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pill text-azure">
                    <Icon name="check" size={16} />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-navy">{p.title}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-slate">
                      {p.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={apropos.ctaHref}
              className="mt-7 inline-flex items-center gap-1.5 text-[15px] font-semibold text-azure hover:text-azure-dark"
            >
              {apropos.ctaLabel}
              <Icon name="arrow-right" size={16} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
