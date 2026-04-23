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
  const rows = [
    { food: "Ovos inteiros", sub: "mexidos ou cozidos", cru: "100g", pronto: "95g", p: "13", c: "1", g: "11", k: "155" },
    { food: "Aveia em flocos", sub: "finos ou grossos", cru: "40g", pronto: "120g", p: "5", c: "27", g: "3", k: "150" },
    { food: "Banana prata", sub: "sem casca", cru: "90g", pronto: "90g", p: "1", c: "23", g: "0", k: "98" },
  ];
  return (
    <div className="overflow-hidden rounded-md border border-border bg-[#0b0b0d] text-[9px] leading-tight">
      {/* Header */}
      <div className="px-4 py-3" style={{ backgroundColor: PROTOCOL_RED }}>
        <p className="text-[8px] uppercase tracking-[0.2em] text-white/70">Performance Protocol</p>
        <h4 className="mt-0.5 text-sm font-extrabold tracking-tight text-white">
          Protocolo Personalizado
        </h4>
        <p className="mt-0.5 text-[8px] text-white/70">Recomposição corporal · Fase 1 de 3</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-1.5 px-3 py-2">
        {[
          { v: "1.840", u: "Kcal · dia" },
          { v: "138g", u: "Proteína" },
          { v: "12 sem", u: "Duração" },
        ].map((s) => (
          <div key={s.u} className="rounded-sm border border-white/10 bg-white/[0.02] p-1.5 text-center">
            <p className="text-[10px] font-extrabold text-white">{s.v}</p>
            <p className="text-[7px] uppercase tracking-wider text-white/40">{s.u}</p>
          </div>
        ))}
      </div>

      {/* Meal tabs */}
      <div className="flex gap-1 px-3">
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

      {/* Macro bar */}
      <div className="mx-3 mb-1 mt-0 flex items-center justify-between rounded-sm border border-white/10 bg-white/[0.03] px-2 py-1 text-[7px]">
        {[
          { k: "Kcal", v: "403" },
          { k: "Prot", v: "19g" },
          { k: "Carb", v: "51g" },
          { k: "Gord", v: "14g" },
        ].map((m) => (
          <span key={m.k} className="text-white/60">
            {m.k} <span className="font-bold text-white">{m.v}</span>
          </span>
        ))}
      </div>

      {/* Table */}
      <div className="px-3 pb-3">
        <div className="grid grid-cols-7 gap-1 border-b border-white/10 pb-1 text-[7px] uppercase tracking-wider text-white/40">
          <span className="col-span-2">Alimento</span>
          <span style={{ color: PROTOCOL_RED }}>Cru</span>
          <span style={{ color: PROTOCOL_ORANGE }}>Pronto</span>
          <span>Prot</span>
          <span>Carb</span>
          <span>Kcal</span>
        </div>
        {rows.map((r) => (
          <div key={r.food} className="grid grid-cols-7 gap-1 border-b border-white/[0.06] py-1 text-[7px]">
            <div className="col-span-2 text-white">
              <p className="font-medium">{r.food}</p>
              <p className="text-[6.5px] text-white/40">{r.sub}</p>
            </div>
            <span className="font-bold" style={{ color: PROTOCOL_RED }}>{r.cru}</span>
            <span className="font-bold" style={{ color: PROTOCOL_ORANGE }}>{r.pronto}</span>
            <span className="text-white/70">{r.p}</span>
            <span className="text-white/70">{r.c}</span>
            <span className="text-white/70">{r.k}</span>
          </div>
        ))}
        <div className="mt-1 grid grid-cols-7 gap-1 pt-1 text-[7px] font-bold text-white">
          <span className="col-span-2">Total refeição</span>
          <span style={{ color: PROTOCOL_RED }}>—</span>
          <span style={{ color: PROTOCOL_ORANGE }}>—</span>
          <span>19g</span>
          <span>51g</span>
          <span>403</span>
        </div>
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
    title: "Protocolo de Performance",
    desc: "Plano alimentar 100% personalizado. Macros calculados, peso cru e peso pronto, refeições detalhadas e periodização por fases.",
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
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
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