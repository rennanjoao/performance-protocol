import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PricingCardProps {
  name: string;
  monthly: string;
  total: string;
  cycleLabel: string;
  features: string[];
  highlight?: boolean;
  ctaHref: string;
  discountLabel?: string;
  originalTotal?: string;
}

export function PricingCard({
  name,
  monthly,
  total,
  cycleLabel,
  features,
  highlight,
  ctaHref,
  discountLabel,
  originalTotal,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-lg border bg-card p-7",
        highlight ? "border-primary shadow-[0_0_0_1px_var(--primary)]" : "border-border"
      )}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
          Most popular
        </span>
      )}
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold">{name}</h3>
          {discountLabel && (
            <span className="rounded-md bg-success/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-success">
              {discountLabel}
            </span>
          )}
        </div>
        <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
          {cycleLabel}
        </p>
      </div>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold">{monthly}</span>
        <span className="text-sm text-muted-foreground">/mês</span>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        Total {total}
        {originalTotal && (
          <span className="ml-2 line-through opacity-60">{originalTotal}</span>
        )}
      </p>
      <p className="mt-1 text-xs font-medium text-primary">
        Parcelamento no cartão sem juros
      </p>

      <ul className="mt-6 space-y-3 border-t border-border pt-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={highlight ? "default" : "outline"}
        className={cn("mt-8", highlight && "btn-glow-primary")}
      >
        <a href={ctaHref} target="_blank" rel="noreferrer">
          Quero este plano
        </a>
      </Button>
    </div>
  );
}