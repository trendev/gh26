import { useState, type FormEvent } from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Icon } from '@/components/ui/Icon';
import {
  SelectField,
  TextField,
  TextareaField,
} from '@/components/ui/Field';
import { besoinOptions, contact } from '@/content/contact';

type FormValues = {
  nom: string;
  societe: string;
  email: string;
  besoin: string;
  message: string;
};

const initial: FormValues = {
  nom: '',
  societe: '',
  email: '',
  besoin: besoinOptions[0],
  message: '',
};

export function Contact() {
  const [values, setValues] = useState<FormValues>(initial);

  // Construit le mailto: avec sujet + corps pré-remplis, et déclenche l'ouverture
  // du client mail de l'utilisateur. Pas de back-end nécessaire (GitHub Pages).
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { nom, societe, email, besoin, message } = values;
    const subject = `Demande de devis — ${besoin} — ${societe || nom}`;
    const body =
      `Nom : ${nom}\n` +
      `Société : ${societe}\n` +
      `Email : ${email}\n` +
      `Type de besoin : ${besoin}\n\n` +
      `Message :\n${message}\n`;
    window.location.href =
      `mailto:${contact.email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  function bind<K extends keyof FormValues>(key: K) {
    return {
      value: values[key],
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
      ) => setValues((prev) => ({ ...prev, [key]: e.target.value })),
    };
  }

  return (
    <section id="contact" className="bg-navy-deep py-16 text-white lg:py-24">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow variant="on-dark">Contact</Eyebrow>
            <h2 className="mt-4 text-h2-mobile lg:text-h2-desktop">
              Un projet thermique ou énergétique ? Parlons-en.
            </h2>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-footer-muted">
              Décrivez-nous votre besoin et nous revenons vers vous sous 48 h
              avec une première analyse, gratuite et sans engagement.
            </p>

            <ul className="mt-8 space-y-4 text-[15px]">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-btn bg-white/10 text-white">
                  <Icon name="phone" size={18} />
                </span>
                <a className="hover:underline" href={contact.phoneHref}>
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-btn bg-white/10 text-white">
                  <Icon name="mail" size={18} />
                </span>
                <a className="hover:underline" href={contact.emailHref}>
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-btn bg-white/10 text-white">
                  <Icon name="map-pin" size={18} />
                </span>
                <span>{contact.coverage}</span>
              </li>
            </ul>
          </div>

          <Card className="p-7 lg:p-8">
            <h3 className="text-[19px] font-semibold text-navy">Demande de devis</h3>
            <p className="mt-1 text-[13px] text-slate">
              Champs marqués d'un * obligatoires.
            </p>
            <form onSubmit={handleSubmit} className="mt-5 grid gap-4" noValidate={false}>
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                  id="nom"
                  label="Nom *"
                  required
                  autoComplete="name"
                  {...bind('nom')}
                />
                <TextField
                  id="societe"
                  label="Société"
                  autoComplete="organization"
                  {...bind('societe')}
                />
              </div>
              <TextField
                id="email"
                label="Email professionnel *"
                type="email"
                required
                autoComplete="email"
                {...bind('email')}
              />
              <SelectField
                id="besoin"
                label="Type de besoin *"
                required
                {...bind('besoin')}
              >
                {besoinOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </SelectField>
              <TextareaField
                id="message"
                label="Votre message *"
                required
                rows={5}
                placeholder="Décrivez votre projet, vos contraintes, vos délais…"
                {...bind('message')}
              />

              <Button type="submit" variant="primary" fullWidth className="mt-2">
                Envoyer ma demande
              </Button>
              <p className="text-center text-[12px] text-slate">
                Le formulaire ouvre votre client mail. Vous pouvez aussi écrire
                directement à{' '}
                <a className="text-azure hover:underline" href={contact.emailHref}>
                  {contact.email}
                </a>
                .
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
