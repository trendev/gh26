import { Container } from '@/components/ui/Container';
import { brand } from '@/content/nav';
import {
  footerColumns,
  footerCopyright,
  footerDescription,
  footerLegal,
} from '@/content/footer';

export function Footer() {
  return (
    <footer className="bg-navy-deep text-footer-muted">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-4 lg:gap-12 lg:py-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-card bg-white">
                <img
                  src={brand.logoSrc}
                  alt={brand.logoAlt}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[18px] font-bold text-white">{brand.name}</span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-azure">
                  {brand.tagline}
                </span>
              </span>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed">{footerDescription}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3 text-[14px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a className="hover:text-white" href={l.href}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <p>{footerCopyright}</p>
          <ul className="flex flex-wrap gap-4">
            {footerLegal.map((l) => (
              <li key={l.label}>
                <a className="hover:text-white" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
