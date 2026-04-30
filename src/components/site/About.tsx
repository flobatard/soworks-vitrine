import aboutImg from "@/assets/pierre.png";
import { SectionHeading } from "@/components/site/SectionHeading";

export function About() {
  return (
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
            subtitle="Soworks est un bureau d'études d'assistance à maîtrise d'ouvrage indépendant. Soworks représente et défend les intérêts du maître d'ouvrage, en toute indépendance, sur des projets résidentiels, tertiaires, hôteliers et patrimoniaux. Pour les missions qui le justifient, Soworks s'appuie sur un réseau de partenaires de confiance — architectes, ingénieurs et économistes — mobilisés au cas par cas."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { t: "Indépendance", d: "Aucun lien avec la maîtrise d'œuvre ni les entreprises." },
              { t: "Interlocuteur unique", d: "Un seul référent, du premier échange à la livraison." },
              { t: "Proximité", d: "Une disponibilité réelle, présent à chaque comité." },
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
  );
}
