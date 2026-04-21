import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 700);
  }

  return (
    <section id="contacto" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Captura rápida</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Comece pela anamnese.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Preencha. Eu retorno com as próximas etapas do seu protocolo.
          </p>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-card p-6 md:p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 className="h-10 w-10 text-success" />
              <h3 className="mt-4 text-xl font-bold">Recebido.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Vou analisar e retornar com o próximo passo. Sem ruído, só sinal.
              </p>
            </div>
          ) : (
            <form className="grid gap-5" onSubmit={onSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" required placeholder="O seu nome" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="voce@email.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="goal">Objetivo principal</Label>
                <Textarea id="goal" required placeholder="Hipertrofia, recomposição, performance..." />
              </div>
              <Button type="submit" size="lg" className="btn-glow-primary" disabled={loading}>
                {loading ? "A enviar..." : "Enviar"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}