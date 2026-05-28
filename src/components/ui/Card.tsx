import type { ReactNode } from 'react';

// Carte de base : fond blanc, bordure douce, ombre et rayon 15 px.
export function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-card border border-border bg-white shadow-card ${className}`}
    >
      {children}
    </div>
  );
}
