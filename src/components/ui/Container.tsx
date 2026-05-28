import type { ReactNode } from 'react';

// Conteneur centré (max 1200px) avec padding horizontal cohérent.
export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
