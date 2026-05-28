import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  ReactNode,
} from 'react';

const baseInput =
  'w-full rounded-btn border border-border bg-input-bg px-4 py-3 text-[15px] text-navy placeholder-placeholder transition focus:border-azure focus:outline-none focus:ring-2 focus:ring-azure/30';

function Label({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-[13px] font-medium text-navy">
      {children}
    </label>
  );
}

// Champ texte / email (input).
export function TextField({
  label,
  id,
  ...rest
}: { label: string; id: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input id={id} className={baseInput} {...rest} />
    </div>
  );
}

// Liste déroulante.
export function SelectField({
  label,
  id,
  children,
  ...rest
}: { label: string; id: string; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <select id={id} className={`${baseInput} appearance-none pr-10`} {...rest}>
        {children}
      </select>
    </div>
  );
}

// Zone de texte multi-lignes.
export function TextareaField({
  label,
  id,
  rows = 4,
  ...rest
}: { label: string; id: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <textarea id={id} rows={rows} className={`${baseInput} resize-y`} {...rest} />
    </div>
  );
}
