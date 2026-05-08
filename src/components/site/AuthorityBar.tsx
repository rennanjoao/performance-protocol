import { Database, MessageSquare, Dna } from "lucide-react";

const items = [
  { icon: Database, label: "Protocolo Individual" },
  { icon: MessageSquare, label: "Feedback Quinzenal" },
  { icon: Dna, label: "Biomecânica Avançada" },
];

export function AuthorityBar() {
  const repeated = [...items, ...items, ...items];
  return (
    <section aria-label="Autoridade" className="border-y border-border bg-card/40">
      <div className="overflow-hidden py-6 mask-fade-x">
        <ul className="flex w-max items-center gap-12 text-xs uppercase tracking-wider text-muted-foreground md:text-sm animate-marquee">
          {repeated.map((it, i) => (
            <li key={i} className="flex shrink-0 items-center gap-2">
              <it.icon className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground/80">{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}