import { Utensils, Dumbbell, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Utensils,
    title: "Protocolo Alimentar",
    desc: "Tabela TACO, macros reais, substituições inteligentes calibradas à sua rotina e tolerâncias.",
  },
  {
    icon: Dumbbell,
    title: "Treino Biomecânico",
    desc: "Divisão por biótipo, progressão de carga e periodização orientada ao seu objetivo.",
  },
  {
    icon: LineChart,
    title: "Acompanhamento Quinzenal",
    desc: "Feedback estruturado, análise de TGI/sono e ajustes sem achismo — só dados.",
  },
];

export function Pillars() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">O que entrego</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Três pilares. Zero achismo.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
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