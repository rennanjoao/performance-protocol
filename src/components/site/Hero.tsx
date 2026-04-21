import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Quero%20o%20meu%20Protocolo";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--primary) 18%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-primary" />
          Vagas limitadas — 8 consultorias abertas por mês
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
        >
          Protocolo Sob <span className="text-primary">Medida.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          Não existe protocolo universal. Existe o seu — construído a partir da sua anamnese, os
          seus exames, a sua rotina e os seus objetivos. Resultado mensurável a cada 14 dias ou
          ajustamos o protocolo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="btn-glow-primary">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Quero o meu Protocolo <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#metodo">
              <PlayCircle className="mr-2 h-4 w-4" /> Ver como funciona
            </a>
          </Button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-8"
        >
          {[
            { k: "14d", v: "Ciclo de ajuste" },
            { k: "100%", v: "Personalizado" },
            { k: "CREF", v: "206788-G/SP" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <dt className="text-2xl font-extrabold tracking-tight md:text-3xl">{s.k}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}