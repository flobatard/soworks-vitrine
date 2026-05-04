import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Soworks" },
      {
        name: "description",
        content:
          "Mentions légales du site Soworks : éditeur, directeur de publication, hébergeur, propriété intellectuelle et données personnelles.",
      },
      { name: "robots", content: "noindex,follow" },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Informations légales"
          title="Mentions légales"
          subtitle="Informations relatives à l'éditeur du site, à son hébergement et aux conditions d'utilisation."
        />

        <div className="mt-14 space-y-12 text-sm text-muted-foreground leading-relaxed">
          <Block title="Éditeur du site">
            <p>
              <span className="text-primary font-medium">Soworks</span>
              {" — "}
              SASU représentée par Pierre Solignac, président.
            </p>
            <p>
              Siège social :{" "}
              <span className="text-foreground">
                {CONTACT.address.street}, {CONTACT.address.city}, France
              </span>
            </p>
            <p>
              Téléphone :{" "}
              <a
                href={`tel:${CONTACT.phone.href}`}
                className="text-foreground hover:text-primary"
              >
                {CONTACT.phone.display}
              </a>
            </p>
            <p>
              Email :{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-foreground hover:text-primary"
              >
                {CONTACT.email}
              </a>
            </p>
            <p>Capital social : [À compléter] €</p>
            <p>RCS : [Ville d'immatriculation] [Numéro RCS]</p>
            <p>SIRET : [À compléter]</p>
            <p>Numéro de TVA intracommunautaire : [À compléter]</p>
          </Block>

          <Block title="Directeur de la publication">
            <p>Pierre Solignac, fondateur de Soworks.</p>
          </Block>

          <Block title="Hébergement">
            <p>
              Le site est hébergé par [Nom de l'hébergeur], dont le siège est
              situé à [Adresse complète de l'hébergeur].
            </p>
            <p>Site web : [URL de l'hébergeur]</p>
          </Block>

          <Block title="Propriété intellectuelle">
            <p>
              L'ensemble des contenus présents sur le site soworks.fr (textes,
              photographies, illustrations, logo, marque, mise en page,
              charte graphique) est protégé par le droit d'auteur et reste la
              propriété exclusive de Soworks ou de ses partenaires.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite sans autorisation
              écrite préalable de Soworks.
            </p>
          </Block>

          <Block title="Données personnelles">
            <p>
              Les informations recueillies via le formulaire de contact font
              l'objet d'un traitement par Soworks afin de répondre à votre
              demande. Elles sont conservées le temps nécessaire au traitement
              de votre sollicitation puis archivées conformément aux
              obligations légales applicables.
            </p>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi « Informatique et Libertés », vous disposez
              d'un droit d'accès, de rectification, de suppression, de
              limitation, d'opposition et de portabilité des données vous
              concernant. Vous pouvez exercer ces droits en écrivant à{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-foreground hover:text-primary underline-offset-4 hover:underline"
              >
                {CONTACT.email}
              </a>
              .
            </p>
            <p>
              En cas de réclamation, vous pouvez saisir la CNIL
              (www.cnil.fr).
            </p>
          </Block>

          <Block title="Cookies">
            <p>
              Le site soworks.fr ne dépose pas de cookies à des fins
              publicitaires ou de mesure d'audience tierce. Seuls des cookies
              strictement nécessaires au bon fonctionnement du site sont
              susceptibles d'être utilisés.
            </p>
          </Block>

          <Block title="Responsabilité">
            <p>
              Soworks s'efforce de fournir des informations aussi précises que
              possible. Toutefois, la société ne saurait être tenue
              responsable des omissions, inexactitudes ou carences dans la
              mise à jour, qu'elles soient de son fait ou du fait de tiers
              partenaires fournissant ces informations.
            </p>
          </Block>

          <Block title="Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit français.
              En cas de litige, les tribunaux français seront seuls
              compétents.
            </p>
          </Block>
        </div>
      </div>
    </section>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-gold pl-6">
      <h2 className="font-serif text-xl md:text-2xl text-primary mb-4">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
