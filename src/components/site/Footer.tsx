export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-9 w-9 rounded-sm border border-gold flex items-center justify-center">
              <span className="font-serif text-gold text-lg leading-none">S</span>
            </div>
            <div className="font-serif text-lg text-primary">Soworks</div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Bureau d'études d'assistance à maîtrise d'ouvrage indépendant.
            Un accompagnement rigoureux et serein de vos projets de
            construction et d'aménagement.
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
            <li>14 rue de Vauban, 75007 Paris</li>
            <li className="pt-2">contact@soworks.fr</li>
            <li>+33 1 45 67 89 10</li>
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
