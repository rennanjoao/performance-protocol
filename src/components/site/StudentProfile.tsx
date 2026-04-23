import { Check, X } from "lucide-react";

const yes = [
  "Está disposto a executar o protocolo à risca",
  "Quer métricas e evolução mensurável",
  "Encara treino e nutrição como compromisso",
  "Busca resultado de longo prazo, não atalho",
];

const no = [
  "Busca motivação semanal e conforto",
  "Quer dieta milagre ou promessa rápida",
  "Não consegue cumprir feedback quinzenal",
  "Acha que protocolo universal funciona",
];

export function StudentProfile() {
  return (
    <section id="resultados" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Perfil do aluno</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Sem rodeios.
          </h2>
        </div>

        <blockquote className="mt-12 border-l-4 border-primary bg-card/60 p-6 text-base leading-relaxed text-foreground/90 md:p-8 md:text-lg">
          “Não busco volume de alunos, exijo métricas de evolução. Não desperdice o seu tempo, o
          meu tempo ou o seu dinheiro se não estiver disposto a executar. Quem vende promessa e
          conforto é loja de colchões; eu entrego resultado forjado em biomecânica, periodização e
          dados reais.”
        </blockquote>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-success">
              É para você se...
            </h3>
            <ul className="mt-4 space-y-3">
              {yes.map((y) => (
                <li key={y} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{y}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
              Não é para você se...
            </h3>
            <ul className="mt-4 space-y-3">
              {no.map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}