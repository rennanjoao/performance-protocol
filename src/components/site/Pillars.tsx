import { Utensils, Dumbbell, LineChart, Activity } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Utensils,
    title: "Nutrição Científica baseada em Protocolo TACO / FODMAPs",
    desc: "Macros reais, substituições inteligentes e cálculos calibrados à sua rotina e tolerâncias digestivas.",
  },
  {
    icon: Activity,
    title: "Estratégia de Performance com Ciclagem de Hidratos",
    desc: "Periodização de carboidratos por demanda do treino para destravar metabolismo e otimizar composição corporal.",
  },
  {
    icon: LineChart,
    title: "Acompanhamento de Elite com Feedback Quinzenal",
    desc: "Feedback estruturado, análise de TGI/sono e ajustes sem achismo — só dados.",
  },
  {
    icon: Dumbbell,
    title: "Treinamento de Alta Precisão com Biomecânica Avançada",
    desc: "Divisão por biótipo, progressão de carga e execução cirúrgica orientada ao seu objetivo.",
  },
];

export function Pillars() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">O que entrego</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Quatro pilares. Zero achismo.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/60"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}