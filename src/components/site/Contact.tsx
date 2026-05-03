import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CONTACT } from "@/lib/contact";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykoggjz";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        const message =
          json?.errors?.map((er: { message: string }) => er.message).join(", ") ||
          "Une erreur est survenue. Merci de réessayer.";
        setError(message);
      }
    } catch {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-card border-t border-border py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Parlons de votre projet."
          subtitle="Un échange initial, confidentiel et sans engagement, pour comprendre vos enjeux et envisager un accompagnement."
          align="center"
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="flex items-center gap-3 text-primary">
                <Mail size={18} className="text-gold" />
                <span className="text-xs uppercase tracking-[0.2em]">Email</span>
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block mt-2 font-serif text-xl text-foreground hover:text-primary"
              >
                {CONTACT.email}
              </a>
            </div>
            <div>
              <div className="flex items-center gap-3 text-primary">
                <Phone size={18} className="text-gold" />
                <span className="text-xs uppercase tracking-[0.2em]">Téléphone</span>
              </div>
              <a
                href={`tel:${CONTACT.phone.href}`}
                className="block mt-2 font-serif text-xl text-foreground hover:text-primary"
              >
                {CONTACT.phone.display}
              </a>
            </div>
            <div>
              <div className="flex items-center gap-3 text-primary">
                <MapPin size={18} className="text-gold" />
                <span className="text-xs uppercase tracking-[0.2em]">Adresse</span>
              </div>
              <address className="mt-2 not-italic font-serif text-xl text-foreground leading-snug">
                {CONTACT.address.street}<br />{CONTACT.address.city}
              </address>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="bg-background border border-border rounded-sm p-8 lg:p-10 space-y-5"
            >
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto h-12 w-12 rounded-full border border-gold flex items-center justify-center text-gold">
                    <Send size={20} />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-primary">Message envoyé</h3>
                  <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                    Merci pour votre message. Soworks reviendra vers vous très
                    prochainement.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Nom" name="name" required />
                    <Field label="Société" name="company" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Téléphone" name="phone" type="tel" />
                  </div>
                  <Field label="Type de projet" name="type" />
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-[0.18em] text-primary mb-2"
                    >
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="Décrivez brièvement votre projet, son contexte et vos attentes…"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-destructive" role="alert">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Envoi en cours…" : "Envoyer mon message"} <Send size={16} />
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Vos informations restent strictement confidentielles.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.18em] text-primary mb-2">
        {label}{required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
      />
    </div>
  );
}
