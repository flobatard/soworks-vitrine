import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
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
          "Soworks, bureau d'études AMO indépendant : porter la voix du maître d'ouvrage, du programme à la livraison.",
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
