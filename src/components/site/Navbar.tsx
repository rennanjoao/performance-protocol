import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Quero%20o%20meu%20Protocolo";
const INSTAGRAM_URL = "https://www.instagram.com/rennan_digitalfit/";

const links = [
  { href: "#metodo", label: "Método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#investimento", label: "Investimento" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50 border-b border-border">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-xl font-extrabold tracking-tight">
          RENNAN<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
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
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
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
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Protocolo
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}