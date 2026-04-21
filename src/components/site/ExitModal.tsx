import { useEffect, useState } from "react";
import { Moon, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Quero%20organizar%20isto%20no%20meu%20Protocolo";
const STORAGE_KEY = "rennan_exit_intent_shown";

export function ExitModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    function onLeave(e: MouseEvent) {
      if (e.clientY < 10) {
        sessionStorage.setItem(STORAGE_KEY, "1");
        setOpen(true);
        document.removeEventListener("mouseleave", onLeave);
      }
    }

    const t = window.setTimeout(() => {
      document.addEventListener("mouseleave", onLeave);
    }, 4000);

    return () => {
      window.clearTimeout(t);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg border-border bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold leading-tight">
            Aplique isto amanhã e destrave o seu metabolismo.
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Dois ajustes práticos. Sem custo. Aplique já.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 space-y-4">
          <div className="rounded-md border border-border bg-background p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-primary">
              <Zap className="h-4 w-4" /> Ciclagem de Hidratos
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Dias de treino pesado (Pernas/Dorsais) = Dia de Carbo Alto (70% dos hidratos no
              pré/pós treino). Dias de Descanso = Dia de Carbo Baixo (Corte a metade, eleve
              proteínas/gorduras para melhorar sensibilidade insulínica).
            </p>
          </div>
          <div className="rounded-md border border-border bg-background p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-primary">
              <Moon className="h-4 w-4" /> Higiene do Sono
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Dormir menos de 7h anula 30% do esforço. Protocolo 3-2-1: Pare de comer 3h antes;
              pare de trabalhar 2h antes; desligue ecrãs 1h antes. Escureça o quarto 100%.
            </p>
          </div>
        </div>

        <Button asChild size="lg" className="btn-glow-primary mt-2 w-full">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Quero organizar isto no meu Protocolo
          </a>
        </Button>
      </DialogContent>
    </Dialog>
  );
}