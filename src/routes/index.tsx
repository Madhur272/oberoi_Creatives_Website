import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/site/Preloader";
import { CustomCursor } from "@/components/site/CustomCursor";
import { Nav } from "@/components/site/Nav";
import { MobileNav } from "@/components/site/MobileNav";
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
      {/* pb-20 on mobile gives clearance above the bottom tab bar (56px bar + 4px breathing room) */}
      <main className="pb-20 md:pb-0">
        <Hero />
        <Marquee />
        <ServicesBento />
        <Process />
        <Portfolio />
        <Results />
        <Contact />
      </main>
      <Footer />
      {/* Bottom-docked tab bar — mobile only, hidden on md+ */}
      <MobileNav />
    </div>
  );
}
