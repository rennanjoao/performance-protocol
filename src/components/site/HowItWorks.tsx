import { ClipboardList, FileCheck2, Activity, RefreshCcw } from "lucide-react";

const steps = [
  { icon: ClipboardList, n: "01", title: "Anamnese Completa", desc: "Físico, rotina, neurológico." },
  { icon: FileCheck2, n: "02", title: "Protocolo Personalizado", desc: "Construído sobre os seus dados." },
  { icon: Activity, n: "03", title: "Execução Monitorizada", desc: "Carga, intensidade, recuperação." },
  { icon: RefreshCcw, n: "04", title: "Feedback + Ajuste", desc: "A cada 15 dias." },
];

export function HowItWorks() {
  return (
    <section id="metodo" className="bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Como funciona</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Um método. Quatro etapas.
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-lg border border-border bg-background p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">{s.n}</span>
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}