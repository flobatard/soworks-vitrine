import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/Rotonde_Opéra.jpg";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Portfolio } from "@/components/site/Portfolio";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soworks — Assistance à maîtrise d'ouvrage" },
      {
        name: "description",
        content:
          "Soworks, AMO indépendant : représenter et défendre les intérêts du maître d'ouvrage, de l'initiation à la livraison.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
