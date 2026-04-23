import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/rennan_digitalfit/";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="text-lg font-extrabold">
            RENNAN<span className="text-primary">.</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Consultoria Desportiva de Alta Performance.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
            @rennan_digitalfit
          </a>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          Aviso legal: a prescrição dietética detalhada é competência do nutricionista. O
          conteúdo aqui apresentado é orientação técnica de treino e estratégia alimentar dentro
          das atribuições do profissional de Educação Física.
        </p>
      </div>
    </footer>
  );
}