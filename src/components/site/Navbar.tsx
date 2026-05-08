import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/rennan_digitalfit/";

const links = [
  { href: "#metodo", label: "Método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#investimento", label: "Investimento" },
  { href: "#contato", label: "Contato" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids.join(",")]);
  return active;
}

export function Navbar() {
  const active = useActiveSection(["top", "metodo", "resultados", "investimento", "contato"]);
  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50 border-b border-border">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-xl font-extrabold tracking-tight">
          RENNAN<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={
                    "relative text-sm font-medium transition-colors " +
                    (isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground")
                  }
                >
                  {l.label}
                  <span
                    aria-hidden
                    className={
                      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 " +
                      (isActive ? "w-full" : "w-0")
                    }
                  />
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram @rennan_digitalfit"
              className="flex items-center text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </li>
        </ul>
        <Button asChild className="btn-glow-primary hidden md:inline-flex">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Quero o meu Protocolo
          </a>
        </Button>
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram @rennan_digitalfit"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <Button asChild size="sm" className="btn-glow-primary">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Protocolo
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}