import { Database, Activity, MessageSquare, Dna } from "lucide-react";

const items = [
  { icon: Database, label: "Protocolo TACO / FODMAPs" },
  { icon: Activity, label: "Ciclagem de Hidratos" },
  { icon: MessageSquare, label: "Feedback Quinzenal" },
  { icon: Dna, label: "Biomecânica Avançada" },
];

export function AuthorityBar() {
  return (
    <section aria-label="Autoridade" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
          {items.map((it) => (
            <li key={it.label} className="flex items-center gap-2">
              <it.icon className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground/80">{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}