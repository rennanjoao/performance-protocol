import { PricingCard } from "./PricingCard";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Quero%20o%20meu%20Protocolo";

export function Pricing() {
  return (
    <section id="investimento" className="bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Investimento</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Compromisso define o resultado.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Mesma mensalidade. Compromissos diferentes. Quem fica mais tempo, evolui mais fundo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <PricingCard
            name="Trimestral"
            cycleLabel="3 meses de protocolo"
            monthly="R$ 300"
            total="R$ 900"
            ctaHref={WHATSAPP_URL}
            features={[
              "3 ciclos de treino",
              "Macros calibrados",
              "6 feedbacks quinzenais",
              "Suporte por WhatsApp",
            ]}
          />
          <PricingCard
            highlight
            name="Semestral"
            cycleLabel="6 meses de protocolo"
            monthly="R$ 300"
            total="R$ 1.800"
            ctaHref={WHATSAPP_URL}
            features={[
              "6 ciclos de treino",
              "Ciclagem de hidratos",
              "12 feedbacks quinzenais",
              "Ajustes de periodização",
              "Prioridade no suporte",
            ]}
          />
          <PricingCard
            name="Anual"
            cycleLabel="12 meses de protocolo"
            monthly="R$ 300"
            total="R$ 3.600"
            ctaHref={WHATSAPP_URL}
            features={[
              "12 ciclos de treino",
              "Protocolos avançados",
              "24 feedbacks quinzenais",
              "Ciclagem + estratégias de pico",
              "Acompanhamento de longo prazo",
            ]}
          />
        </div>
      </div>
    </section>
  );
}