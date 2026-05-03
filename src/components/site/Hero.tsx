import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/Rotonde_Opéra.jpg";
import { Eyebrow } from "@/components/site/SectionHeading";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 fade-in-up">
          <Eyebrow>Assistance à maîtrise d'ouvrage</Eyebrow>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.05] text-primary text-balance">
            Conduire vos projets bâtis avec rigueur, clarté et sérénité.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Soworks est un AMO indépendant présent à chaque étape
            de votre projet, de l’initiation jusqu’à la pleine prise en
            main. Nous sommes à vos côtés pour vous écouter, vous
            conseiller, et vous accompagner pour être au plus près de
            vos intentions.
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
              Découvrir Soworks
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: "15", l: "années d'expérience en AMO" },
              //{ n: "120+", l: "opérations menées" },
              { n: "60 M€", l: "de travaux pilotés" },
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
        </div>
      </div>
    </section>
  );
}
