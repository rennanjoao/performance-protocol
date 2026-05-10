import { motion } from "framer-motion";

const ACCENT = "#ff4500";
const PROTOCOL_RED = "#c81d1d";
const PROTOCOL_ORANGE = "#e67e22";

/* ---------- Mockup 01 — Anamnese ---------- */
function AnamneseMock() {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-[#0b0b0d] text-[10px] leading-tight">
      {/* Topbar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-3 py-2">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
          Anamnese
        </span>
        <div className="mx-3 h-1 flex-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full" style={{ width: "40%", backgroundColor: ACCENT }} />
        </div>
        <div className="flex items-center gap-1.5 text-white/50">
          <span>☀</span>
          <span className="rounded border border-white/15 px-1 py-px text-[8px]">PDF</span>
        </div>
      </div>

      {/* Hero */}
      <div className="px-4 pb-3 pt-4">
        <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">Performance Protocol</p>
        <h4 className="mt-1 text-base font-extrabold tracking-tight text-white">
          Anamnese <span style={{ color: ACCENT }}>Esportiva</span>
        </h4>
      </div>

      {/* Sections */}
      <div className="space-y-2 px-4 pb-4">
        <div className="rounded-sm border border-white/10 bg-white/[0.02] p-2.5">
          <p className="font-mono text-[8px] uppercase tracking-wider text-white/40">01 — Identificação</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div>
              <p className="text-[8px] text-white/40">Nome</p>
              <div className="mt-1 h-4 rounded-sm border border-white/10 bg-white/[0.04]" />
            </div>
            <div>
              <p className="text-[8px] text-white/40">Data</p>
              <div className="mt-1 h-4 rounded-sm border border-white/10 bg-white/[0.04]" />
            </div>
          </div>
        </div>
        <div className="rounded-sm border border-white/10 bg-white/[0.02] p-2.5">
          <p className="font-mono text-[8px] uppercase tracking-wider text-white/40">02 — Objetivo</p>
          <div className="mt-2 flex flex-wrap gap-1">
            <span
              className="rounded-full px-2 py-0.5 text-[8px] font-medium text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Recomposição
            </span>
            {["Ganho de massa", "Emagrecimento", "Saúde"].map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/15 px-2 py-0.5 text-[8px] text-white/70"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Mockup 02 — Protocolo ---------- */
function ProtocolMock() {
  const meals = ["Café da manhã", "Almoço", "Lanche", "Jantar"];
  const items = [
    { emoji: "🥚", label: "Proteína" },
    { emoji: "🍞", label: "Carboidrato" },
    { emoji: "🍌", label: "Fruta" },
    { emoji: "☕", label: "Bebida opcional" },
  ];
  return (
    <div className="overflow-hidden rounded-md border border-border bg-[#0b0b0d] text-[9px] leading-tight">
      {/* Header */}
      <div className="px-4 py-3" style={{ backgroundColor: PROTOCOL_RED }}>
        <p className="text-[8px] uppercase tracking-[0.2em] text-white/70">Performance Protocol</p>
        <h4 className="mt-0.5 text-sm font-extrabold tracking-tight text-white">
          Estratégia Alimentar
        </h4>
        <p className="mt-0.5 text-[8px] text-white/70">Sugestões práticas · Rotina sustentável</p>
      </div>

      {/* Meal tabs */}
      <div className="flex gap-1 px-3 pt-3">
        {meals.map((m, i) => (
          <span
            key={m}
            className="rounded-t-sm px-1.5 py-1 text-[7px] font-medium"
            style={
              i === 0
                ? { backgroundColor: PROTOCOL_RED, color: "#fff" }
                : { backgroundColor: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)" }
            }
          >
            {m}
          </span>
        ))}
      </div>

      {/* Meal sections */}
      <div className="px-3 pb-4">
        <div className="rounded-sm border border-white/10 bg-white/[0.02] p-3">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em]" style={{ color: PROTOCOL_ORANGE }}>
            Café da manhã
          </p>
          <ul className="mt-2 space-y-1.5">
            {items.map((it) => (
              <li
                key={it.label}
                className="flex items-center gap-2 rounded-sm border border-white/[0.06] bg-white/[0.02] px-2 py-1.5"
              >
                <span className="text-[14px] leading-none">{it.emoji}</span>
                <span className="text-[10px] font-medium text-white">{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-2 text-center text-[7.5px] uppercase tracking-wider text-white/40">
          Sugestões práticas · sem extremismos
        </p>
      </div>
    </div>
  );
}

/* ---------- Mockup 03 — Feedback ---------- */
function FeedbackMock() {
  const measures = [
    { m: "Peso", a: "78,4 kg", b: "76,1 kg", d: "−2,3" },
    { m: "Cintura", a: "87 cm", b: "84 cm", d: "−3" },
    { m: "Quadril", a: "102 cm", b: "100 cm", d: "−2" },
  ];
  return (
    <div className="overflow-hidden rounded-md border border-border bg-[#0b0b0d] text-[10px] leading-tight">
      {/* Topbar */}
      <div className="flex items-center border-b border-white/10 bg-black/60 px-3 py-2">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
          FBQ
        </span>
        <div className="ml-3 h-1 flex-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full" style={{ width: "65%", backgroundColor: ACCENT }} />
        </div>
      </div>

      {/* Hero */}
      <div className="px-4 pb-3 pt-4">
        <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">Feedback Quinzenal</p>
        <h4 className="mt-1 text-base font-extrabold tracking-tight text-white">Protocolo Ativo</h4>
        <p className="mt-0.5 text-[8px] text-white/50">Ciclo 2 · 01/05 – 15/05</p>
      </div>

      <div className="space-y-2 px-4 pb-4">
        {/* Measures */}
        <div className="rounded-sm border border-white/10 bg-white/[0.02] p-2.5">
          <p className="font-mono text-[8px] uppercase tracking-wider text-white/40">01 — Peso e Medidas</p>
          <div className="mt-2 grid grid-cols-4 gap-1 border-b border-white/10 pb-1 text-[7.5px] uppercase tracking-wider text-white/40">
            <span>Medida</span>
            <span>Inicial</span>
            <span>Atual</span>
            <span>Δ</span>
          </div>
          {measures.map((row) => (
            <div key={row.m} className="grid grid-cols-4 gap-1 border-b border-white/[0.06] py-1 text-[8px] text-white">
              <span>{row.m}</span>
              <span className="text-white/60">{row.a}</span>
              <span>{row.b}</span>
              <span>
                <span className="rounded-sm bg-success/20 px-1 py-px text-[7.5px] font-bold text-success">
                  {row.d}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* Adesão */}
        <div className="rounded-sm border border-white/10 bg-white/[0.02] p-2.5">
          <p className="font-mono text-[8px] uppercase tracking-wider text-white/40">02 — Adesão à dieta</p>
          <div className="mt-2 flex flex-wrap gap-1">
            <span className="rounded-full bg-success/20 px-2 py-0.5 text-[8px] font-medium text-success">
              ✓ Sim, integralmente
            </span>
            <span className="rounded-full border border-white/15 px-2 py-0.5 text-[8px] text-white/60">
              Parcialmente
            </span>
            <span className="rounded-full border border-white/15 px-2 py-0.5 text-[8px] text-white/60">
              Não consegui
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const tools = [
  {
    n: "01",
    title: "Anamnese Esportiva",
    desc: "Formulário estruturado em 9 seções. Coleta tudo que preciso saber antes de montar o protocolo.",
    Mock: AnamneseMock,
  },
  {
    n: "02",
    title: "Estratégia Alimentar Aplicada",
    desc: "Sugestões práticas de alimentação voltadas para saciedade, organização da rotina e melhora da composição corporal.\n✔ Ajustes progressivos\n✔ Estratégias sustentáveis\n✔ Opções práticas para o dia a dia\n✔ Organização alimentar sem extremismos",
    Mock: ProtocolMock,
  },
  {
    n: "03",
    title: "Feedback Quinzenal",
    desc: "Acompanhamento ativo a cada 15 dias. Tabela de medidas, adesão e ajuste de protocolo em tempo real.",
    Mock: FeedbackMock,
  },
];

export function Tools() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Ferramentas exclusivas</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Tudo que você precisa, em um só sistema.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tools.map((t, i) => (
            <motion.article
              key={t.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/60"
            >
              <div className="flex items-center justify-between">
                <span
                  className="rounded-md border px-2 py-0.5 font-mono text-xs font-bold"
                  style={{ borderColor: "color-mix(in oklab, var(--primary) 60%, transparent)", color: "var(--primary)" }}
                >
                  {t.n}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{t.title}</h3>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              <div className="mt-5">
                <t.Mock />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}