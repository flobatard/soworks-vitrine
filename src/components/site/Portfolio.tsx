import { Quote } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/sony_2.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";

const projects = [
  { img: p1, title: "PSG — Remplacement GTB / VCO / éclairages (Décret tertiaire)", meta: "10 M€" },
  { img: p2, title: "Paris 9 · Rénovation immeuble Opéra post-incendie", meta: "10 M€" },
  { img: p3, title: "La Défense · Rénovation façades IGH", meta: "10 M€" },
  { img: p4, title: "Locaux Sony Music", meta: "4000m² · 10 M€" },
];

const testimonials: { quote: string; name: string; role: string }[] = [
  //{
  //  quote:
  //    "Un partenaire de confiance qui a su défendre nos intérêts à chaque étape. La rigueur et la pédagogie de l'équipe ont été déterminantes.",
  //  name: "Hélène Marchand",
  //  role: "Directrice immobilière, Groupe Verlaine",
  //},
  //{
  //  quote:
  //    "Soworks nous a apporté une lecture experte de notre projet et une sérénité précieuse face à la complexité du chantier.",
  //  name: "Pierre Lacombe",
  //  role: "Président, SCI Lumen",
  //},
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Des opérations menées avec exigence."
          subtitle="Une sélection récente de projets accompagnés par Soworks."
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
                <h3 className="font-serif text-xl text-primary max-w-[80%]">{p.title}</h3>
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
  );
}
