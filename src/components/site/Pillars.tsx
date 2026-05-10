import { Utensils, Dumbbell, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Utensils,
    title: "Educação Alimentar e Estratégia",
    desc: "Sugestões e direcionamentos alimentares para ajudar no emagrecimento e na criação de hábitos sustentáveis.",
  },
  {
    icon: LineChart,
    title: "Acompanhamento de Elite com Feedback Quinzenal",
    desc: "Acompanhamento ativo com revisão a cada 15 dias e ajustes conforme a sua evolução real.",
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
          {cards.map((c, i) => {
            const isHero = i === 0;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={
                  "group relative overflow-hidden rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/60 " +
                  (isHero ? "md:col-span-2 md:flex md:items-start md:gap-8 md:p-10" : "")
                }
              >
                <div
                  className={
                    "inline-flex items-center justify-center rounded-md bg-primary/10 text-primary " +
                    (isHero ? "h-14 w-14 shrink-0" : "h-11 w-11")
                  }
                >
                  <c.icon className={isHero ? "h-7 w-7" : "h-5 w-5"} />
                </div>
                <div className={isHero ? "mt-5 md:mt-0 md:flex-1" : "mt-5"}>
                  <h3 className={isHero ? "text-2xl md:text-3xl" : "text-xl"}>{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
                <span
                  aria-hidden
                  className={
                    "pointer-events-none absolute select-none leading-none " +
                    (isHero
                      ? "right-6 top-4 text-[6rem] md:text-[8rem]"
                      : "right-4 bottom-2 text-[2.5rem]")
                  }
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    color: "var(--primary)",
                    opacity: isHero ? 0.18 : 0.12,
                  }}
                >
                  {num}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}