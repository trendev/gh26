import { Container } from '@/components/ui/Container';
import { stats } from '@/content/stats';

// Bandeau chiffres clés (fond mist clair). Reprend les mêmes données que le Hero
// mais avec un traitement visuel différent (séparé, plus lisible isolé).
export function Stats() {
  return (
    <section aria-label="Chiffres clés" className="border-b border-border bg-mist">
      <Container>
        <dl className="grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-4 lg:py-14">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="text-[28px] font-bold text-navy lg:text-[34px]">
                {s.value}
              </dt>
              <dd className="mt-1 text-[14px] text-slate">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
