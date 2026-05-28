import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary-on-dark' | 'link';

type CommonProps = {
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

// Classes communes : padding qui laisse la hauteur épouser le contenu (pas de h-*).
const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-btn font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure focus-visible:ring-offset-2';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-btn-primary text-white px-6 py-3.5 text-[15px] shadow-sm hover:brightness-110',
  'secondary-on-dark':
    'border border-white/20 text-white px-6 py-3.5 text-[15px] hover:bg-white/10',
  link:
    'text-azure hover:text-azure-dark text-[15px] px-0 py-0 underline-offset-4 hover:underline',
};

export function Button({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
