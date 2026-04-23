import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { AuthorityBar } from "@/components/site/AuthorityBar";
import { Pillars } from "@/components/site/Pillars";
import { HowItWorks } from "@/components/site/HowItWorks";
import { StudentProfile } from "@/components/site/StudentProfile";
import { Testimonials } from "../components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { LeadForm } from "@/components/site/LeadForm";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RENNAN. — Consultoria Desportiva de Alta Performance" },
      {
        name: "description",
        content:
          "Protocolo sob medida: anamnese, treino biomecânico e feedback quinzenal. Resultado mensurável a cada 14 dias.",
      },
      { property: "og:title", content: "RENNAN. — Protocolo Sob Medida" },
      {
        property: "og:description",
        content:
          "Consultoria desportiva orientada por dados, biomecânica e periodização. Vagas limitadas.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <AuthorityBar />
      <Pillars />
      <HowItWorks />
      <StudentProfile />
      <Testimonials />
      <Pricing />
      <LeadForm />
      <Footer />
    </main>
  );
}
