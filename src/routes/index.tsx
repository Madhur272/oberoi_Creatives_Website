import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/site/Preloader";
import { CustomCursor } from "@/components/site/CustomCursor";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { ServicesBento } from "@/components/site/ServicesBento";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { Results } from "@/components/site/Results";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground noise">
      <Preloader />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <ServicesBento />
        <Process />
        <Portfolio />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
