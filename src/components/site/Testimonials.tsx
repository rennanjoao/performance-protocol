import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Fernanda R.",
    text:
      "A estética foi consequência. O que me surpreendeu mesmo foi acordar descansada de verdade, dormir um ciclo completo pela primeira vez em anos. Meu corpo parece que voltou a funcionar.",
  },
  {
    name: "Lucas M.",
    text:
      "Senti meu foco voltando gradualmente, minha disposição para treinar e para o trabalho voltaram junto. É diferente de tudo que já tentei antes.",
  },
  {
    name: "Camila T.",
    text:
      "Estava sem força, sem ânimo. O que eu pensava ser gordura era inflamação. Com o protocolo, meu cabelo parou de cair e minha pele finalmente equilibrou. Os resultados estéticos vieram depois disso tudo.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Resultados reais</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            O que os alunos dizem.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-lg border border-border bg-card p-7"
            >
              <blockquote className="text-sm leading-relaxed text-foreground/90 md:text-base">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {getInitials(t.name)}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {t.name}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}