import { Quote } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import sony_4 from "@/assets/sony_4.jpg"
import sony_3 from "@/assets/sony_3.jpg"
import sony_2 from "@/assets/sony_2.jpg";
import sony_1 from "@/assets/sony.jpg"
import { SectionHeading } from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

const projects: { images: string[]; title: string; meta: string }[] = [
  { images: [p1, p2, p3], title: "PSG — Remplacement GTB / VCO / éclairages (Décret tertiaire)", meta: "10 M€" },
  { images: [p2, p3, p1], title: "Paris 9 · Rénovation immeuble Opéra post-incendie", meta: "10 M€" },
  { images: [p3, p1, p2], title: "La Défense · Rénovation façades IGH", meta: "10 M€" },
  { images: [sony_2, sony_1, sony_3, sony_4], title: "Locaux Sony Music", meta: "4000m² · 10 M€" },
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
    <section
      id="portfolio"
      className="relative py-24 scroll-mt-24 has-[.image-zone:hover]:[&>.portfolio-overlay]:opacity-100"
    >
      <div
        aria-hidden
        className="portfolio-overlay fixed inset-0 z-40 bg-black/60 opacity-0 pointer-events-none transition-opacity duration-500"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <SectionHeading
          eyebrow="Portfolio"
          title="Des opérations menées avec exigence."
          subtitle="Une sélection récente de projets accompagnés par Soworks."
          align="center"
        />
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <figure key={p.title} className="relative">
              <div className="image-zone group relative aspect-[4/3] z-20 hover:z-50">
                <div
                  aria-hidden
                  className="absolute inset-0 group-hover:-top-[105%] group-hover:-bottom-[105%]"
                />
                {p.images.map((img, i) => {
                  const dir = i === 0 ? 0 : i % 2 === 1 ? -1 : 1;
                  const step = Math.ceil(i / 2);
                  const offset = dir * step * 110;
                  return (
                    <img
                      key={i}
                      src={img}
                      alt={`${p.title} — vue ${i + 1}`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      style={
                        {
                          "--ty": `${offset}%`,
                          transitionDelay: `${i * 100}ms`,
                        } as React.CSSProperties
                      }
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover rounded-sm shadow-[var(--shadow-card)]",
                        "transition-transform duration-700 ease-out",
                        "group-hover:translate-y-[var(--ty)]",
                        i === 0 ? "z-30" : i === 1 ? "z-20" : "z-10"
                      )}
                    />
                  );
                })}
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between gap-4 relative z-10">
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
