import { CONTACT } from "@/lib/contact";
import fullLogo from "@/assets/full_logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="mb-4">
            <img src={fullLogo} alt="Soworks" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Votre assistant à maitrise d’ouvrage indépendant. Un accompagnement
            serein, rigoureux et optimiste de vos projets de rénovation et
            d’aménagement.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#a-propos" className="hover:text-primary">À propos</a></li>
            <li><a href="#portfolio" className="hover:text-primary">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{CONTACT.address.street}, {CONTACT.address.city}</li>
            <li className="pt-2">{CONTACT.email}</li>
            <li>{CONTACT.phone.display}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Soworks — Tous droits réservés.</p>
          <p>Mentions légales · Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  );
}
