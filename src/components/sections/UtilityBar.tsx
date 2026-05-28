import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { contact } from '@/content/contact';

// Fine barre supérieure (téléphone + horaires) sur fond navy.
export function UtilityBar() {
  return (
    <div className="hidden bg-navy text-white/85 lg:block">
      <Container>
        <div className="flex h-9 items-center justify-end gap-6 text-[13px]">
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Icon name="phone" size={14} />
            <span>{contact.phone}</span>
          </a>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-copper" />
            Lun – Ven · 8 h – 18 h
          </span>
        </div>
      </Container>
    </div>
  );
}
