import type { ReactNode } from 'react';

type EyebrowVariant = 'on-light' | 'on-dark';

// Pastille « eyebrow » : utilise uniquement du padding (jamais de hauteur fixe)
// pour épouser la hauteur du contenu (cf. piège § 4 de CLAUDE.md).
export function Eyebrow({
  children,
  variant = 'on-light',
  className = '',
}: {
  children: ReactNode;
  variant?: EyebrowVariant;
  className?: string;
}) {
  const styles =
    variant === 'on-dark'
      ? 'bg-[rgba(30,115,224,0.18)] text-[#A9C7F5]'
      : 'bg-pill text-azure';

  return (
    <span
      className={`inline-flex items-center rounded-pill px-3 py-1 text-eyebrow uppercase tracking-[0.08em] ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
