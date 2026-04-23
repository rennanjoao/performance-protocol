import { PricingCard } from "./PricingCard";

const INSTAGRAM_URL = "https://www.instagram.com/rennan_digitalfit/";

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
            Quanto maior o compromisso, maior o desconto. Parcelamento no cartão sem juros em todos os planos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <PricingCard
            name="Trimestral"
            cycleLabel="3 meses de protocolo"
            monthly="R$ 300"
            total="R$ 900"
            ctaHref={INSTAGRAM_URL}
            features={[
              "3 ciclos de treino",
              "Macros calibrados",
              "6 feedbacks quinzenais",
              "Suporte direto",
              "Parcelamento no cartão sem juros",
            ]}
          />
          <PricingCard
            highlight
            name="Semestral"
            discountLabel="-10%"
            cycleLabel="6 meses de protocolo"
            monthly="R$ 270"
            total="R$ 1.620"
            originalTotal="R$ 1.800"
            ctaHref={INSTAGRAM_URL}
            features={[
              "6 ciclos de treino",
              "12 feedbacks quinzenais",
              "Ajustes de periodização",
              "Prioridade no suporte",
              "Parcelamento no cartão sem juros",
            ]}
          />
          <PricingCard
            name="Anual"
            discountLabel="-15%"
            cycleLabel="12 meses de protocolo"
            monthly="R$ 255"
            total="R$ 3.060"
            originalTotal="R$ 3.600"
            ctaHref={INSTAGRAM_URL}
            features={[
              "12 ciclos de treino",
              "Protocolos avançados",
              "24 feedbacks quinzenais",
              "Acompanhamento de longo prazo",
              "Parcelamento no cartão sem juros",
            ]}
          />
        </div>
      </div>
    </section>
  );
}