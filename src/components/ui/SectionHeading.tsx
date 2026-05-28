import type { ReactNode } from 'react';
import { Eyebrow } from './Eyebrow';

// En-tête de section : eyebrow + H2 + paragraphe optionnel.
// `align` contrôle l'alignement ; `tone` adapte les couleurs au fond.
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'on-light',
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'on-light' | 'on-dark';
}) {
  const wrapper =
    align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl';
  const titleColor = tone === 'on-dark' ? 'text-white' : 'text-navy';
  const leadColor = tone === 'on-dark' ? 'text-footer-muted' : 'text-slate';

  return (
    <header className={wrapper}>
      {eyebrow && (
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <Eyebrow variant={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-4 text-h2-mobile lg:text-h2-desktop ${titleColor}`}
      >
        {title}
      </h2>
      {lead && <p className={`mt-4 text-[16px] leading-relaxed ${leadColor}`}>{lead}</p>}
    </header>
  );
}
