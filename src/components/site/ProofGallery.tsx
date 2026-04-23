import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import anamneseImg from "@/assets/proof-anamnese.jpg";
import feedbackImg from "@/assets/proof-feedback.jpg";
import protocolImg from "@/assets/proof-protocol.jpg";

const items = [
  {
    img: anamneseImg,
    label: "Anamnese Completa",
    desc: "Mais de 80 pontos avaliados antes de qualquer prescrição.",
  },
  {
    img: feedbackImg,
    label: "Feedback Quinzenal",
    desc: "Métricas, sono, TGI e progressão monitorados a cada 15 dias.",
  },
  {
    img: protocolImg,
    label: "Protocolo Individual",
    desc: "Treino, nutrição e rotina entregues em documento próprio.",
  },
];

export function ProofGallery() {
  return (
    <section className="bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Bastidores</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            O nível de cada entrega.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Por questões de privacidade, dados sensíveis dos alunos foram preservados. O que você
            vê é o padrão visual e estrutural dos documentos que você recebe.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.figure
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-colors hover:border-primary/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-card">
                <img
                  src={it.img}
                  alt={`Esboço — ${it.label}`}
                  width={800}
                  height={576}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 blur-[1.5px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-[2.5px]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--background) 85%, transparent) 100%)",
                  }}
                />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
                  <Lock className="h-3 w-3 text-primary" />
                  Dados protegidos
                </div>
              </div>
              <figcaption className="p-5">
                <h3 className="text-base font-bold">{it.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}