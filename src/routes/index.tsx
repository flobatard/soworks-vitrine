import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Users,
  Quote,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soworks — Assistance à maîtrise d'ouvrage" },
      {
        name: "description",
        content:
          "Soworks, cabinet d'AMO indépendant : nous portons la voix du maître d'ouvrage du programme à la livraison.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const projects = [
  { img: p1, title: "Résidence Belleville", meta: "Logement collectif · 38 lots · Paris XX" },
  { img: p2, title: "Siège social Lumen", meta: "Tertiaire · 2 400 m² · Boulogne" },
  { img: p3, title: "Réhabilitation Hôtel Pereire", meta: "Patrimoine haussmannien · Paris XVII" },
  { img: p4, title: "Hôtel Maison Sage", meta: "Hôtellerie 4★ · 42 chambres · Lyon" },
];

const testimonials = [
  {
    quote:
      "Un partenaire de confiance qui a su défendre nos intérêts à chaque étape. La rigueur et la pédagogie de l'équipe ont été déterminantes.",
    name: "Hélène Marchand",
    role: "Directrice immobilière, Groupe Verlaine",
  },
  {
    quote:
      "Soworks nous a apporté une lecture experte de notre projet et une sérénité précieuse face à la complexité du chantier.",
    name: "Pierre Lacombe",
    role: "Président, SCI Lumen",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section id="accueil" className="relative overflow-hidden scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 fade-in-up">
            <Eyebrow>Assistance à maîtrise d'ouvrage</Eyebrow>
            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.05] text-primary text-balance">
              Conduire vos projets bâtis avec rigueur, clarté et sérénité.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Soworks accompagne maîtres d'ouvrage publics et privés à chaque
              étape de leur opération de construction, de réhabilitation ou
              d'aménagement — du programme à la livraison.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors text-sm tracking-wide"
              >
                Prendre contact <ArrowRight size={16} />
              </a>
              <a
                href="#a-propos"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-primary/20 text-primary rounded-sm hover:bg-primary/5 transition-colors text-sm tracking-wide"
              >
                Découvrir le cabinet
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { n: "18", l: "années d'expérience" },
                { n: "120+", l: "opérations menées" },
                { n: "240 M€", l: "de travaux pilotés" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-3xl text-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[5/4] rounded-sm overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                src={heroImg}
                alt="Chef de projet et architecte étudiant des plans sur un chantier"
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -left-8 bg-background border border-border rounded-sm p-5 shadow-[var(--shadow-card)] max-w-[16rem]">
              <div className="flex items-center gap-3">
                <Users className="text-gold" size={20} />
                <div className="font-serif text-primary text-lg">Indépendants</div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Aucune mission de maîtrise d'œuvre. Notre seul intérêt est le vôtre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="a-propos" className="bg-card border-y border-border scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src={aboutImg}
                alt="Hall lumineux d'un immeuble parisien en cours d'aménagement"
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              eyebrow="À propos"
              title="Une expertise discrète au service du maître d'ouvrage."
              subtitle="Fondé à Paris, Soworks réunit ingénieurs, architectes et économistes de la construction. Nous représentons et défendons les intérêts du maître d'ouvrage, en toute indépendance, sur des projets résidentiels, tertiaires, hôteliers et patrimoniaux."
            />
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                { t: "Indépendance", d: "Aucun lien avec la maîtrise d'œuvre ni les entreprises." },
                { t: "Pluridisciplinarité", d: "Architectes, ingénieurs et économistes réunis." },
                { t: "Proximité", d: "Un interlocuteur unique, présent à chaque comité." },
                { t: "Exigence", d: "Une méthode éprouvée et des livrables documentés." },
              ].map((b) => (
                <div key={b.t} className="border-l-2 border-gold pl-4">
                  <div className="font-serif text-lg text-primary">{b.t}</div>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Portfolio"
            title="Des opérations menées avec exigence."
            subtitle="Une sélection récente de projets accompagnés par nos équipes."
            align="center"
          />
          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <figure key={p.title} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl text-primary">{p.title}</h3>
                  <span className="text-xs text-muted-foreground text-right">{p.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="bg-card border border-border rounded-sm p-8 flex flex-col"
              >
                <Quote className="text-gold" size={28} strokeWidth={1.5} />
                <p className="mt-5 text-foreground/85 leading-relaxed italic font-serif text-lg">
                  « {t.quote} »
                </p>
                <footer className="mt-6 pt-6 border-t border-border">
                  <div className="text-sm font-medium text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

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
                href="mailto:contact@soworks.fr"
                className="block mt-2 font-serif text-xl text-foreground hover:text-primary"
              >
                contact@soworks.fr
              </a>
            </div>
            <div>
              <div className="flex items-center gap-3 text-primary">
                <Phone size={18} className="text-gold" />
                <span className="text-xs uppercase tracking-[0.2em]">Téléphone</span>
              </div>
              <a
                href="tel:+33145678910"
                className="block mt-2 font-serif text-xl text-foreground hover:text-primary"
              >
                +33 1 45 67 89 10
              </a>
            </div>
            <div>
              <div className="flex items-center gap-3 text-primary">
                <MapPin size={18} className="text-gold" />
                <span className="text-xs uppercase tracking-[0.2em]">Adresse</span>
              </div>
              <address className="mt-2 not-italic font-serif text-xl text-foreground leading-snug">
                14 rue de Vauban<br />75007 Paris
              </address>
            </div>
            <div className="pt-6 border-t border-border text-sm text-muted-foreground leading-relaxed">
              Du lundi au vendredi, de 9h à 19h. Réponse sous 48 heures ouvrées.
            </div>
          </div>

          <div className="lg:col-span-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="bg-background border border-border rounded-sm p-8 lg:p-10 space-y-5"
            >
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto h-12 w-12 rounded-full border border-gold flex items-center justify-center text-gold">
                    <Send size={20} />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-primary">Message envoyé</h3>
                  <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                    Nous vous remercions pour votre message. Notre équipe revient
                    vers vous sous 48 heures ouvrées.
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
                    <label className="block text-xs uppercase tracking-[0.18em] text-primary mb-2">
                      Votre message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="Décrivez brièvement votre projet, son contexte et vos attentes…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors text-sm tracking-wide"
                  >
                    Envoyer mon message <Send size={16} />
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
