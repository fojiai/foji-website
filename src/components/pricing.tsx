"use client";

import { useState, useEffect } from "react";

interface Plan {
  id: number;
  name: string;
  slug: string;
  monthlyPrice: number;
  /** Price for a whole year, paid once. null when the plan is monthly only. */
  yearlyPrice: number | null;
  currency: string;
  maxAgents: number;
  maxMembers: number;
  hasWhatsApp: boolean;
  hasEscalationContacts: boolean;
  maxConversationsPerMonth: number;
  maxMessagesPerMonth: number;
  /** -1 means no cap, 0 means none. */
  whatsAppMessagesPerMonth?: number;
  /** Price of each WhatsApp message past the allowance, in centavos. 0 = no overage. */
  whatsAppOverageCentavos?: number;
}

type Cycle = "monthly" | "yearly";

// Manual formatting instead of toLocaleString, to avoid an SSR/client
// hydration mismatch. pt-BR style: "1.990" and "49,90".
function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatMoney(value: number): string {
  const cents = Math.round(value * 100);
  const whole = Math.floor(cents / 100);
  const rest = cents % 100;
  return rest === 0
    ? formatNumber(whole)
    : `${formatNumber(whole)},${rest.toString().padStart(2, "0")}`;
}

function currencySymbol(c: string) {
  switch (c) {
    case "BRL": return "R$";
    case "EUR": return "\u20AC";
    default: return "$";
  }
}

function hasYearly(plan: Plan): plan is Plan & { yearlyPrice: number } {
  return typeof plan.yearlyPrice === "number" && plan.yearlyPrice > 0;
}

/** "2 meses grátis" when the discount is a whole number of months, otherwise "Economize R$X". */
function savingsLabel(plan: Plan & { yearlyPrice: number }): string | null {
  const savings = plan.monthlyPrice * 12 - plan.yearlyPrice;
  if (savings <= 0.009) return null;
  const months = plan.monthlyPrice > 0 ? savings / plan.monthlyPrice : 0;
  const rounded = Math.round(months);
  if (rounded >= 1 && Math.abs(months - rounded) < 0.05) {
    return rounded === 1 ? "1 mês grátis" : `${rounded} meses grátis`;
  }
  return `Economize ${currencySymbol(plan.currency)}${formatMoney(savings)}`;
}

export function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [cycle, setCycle] = useState<Cycle>("monthly");

  useEffect(() => {
    const url = "/api/plans";
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : [];
        if (arr.length > 0) {
          setPlans(arr.sort((a: Plan, b: Plan) => a.monthlyPrice - b.monthlyPrice));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const popularSlug = plans.find((p) => p.slug === "professional")?.slug
    ?? plans[Math.floor(plans.length / 2)]?.slug;
  const anyYearly = plans.some(hasYearly);
  const showYearly = anyYearly && cycle === "yearly";

  return (
    <section id="pricing" className="py-24 border-t border-border relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Planos</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll">
            Preço simples e transparente
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-on-scroll animate-delay-100">
            Comece grátis. Mude de plano quando quiser.
          </p>
        </div>

        {!loading && plans.length > 0 && (
          <div className="mb-10 flex flex-col items-center gap-3">
            {anyYearly && (
              <div
                role="group"
                aria-label="Forma de cobrança"
                className="inline-flex rounded-full border border-border bg-muted/30 p-1"
              >
                {([
                  ["monthly", "Mensal"],
                  ["yearly", "Anual"],
                ] as const).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={cycle === value}
                    onClick={() => setCycle(value)}
                    className={`rounded-full px-5 py-1.5 text-sm font-semibold transition-all ${
                      cycle === value
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
            <p className="text-sm text-muted-foreground">
              {anyYearly ? "Mensal no cartão. Anual no cartão ou Pix." : "Pagamento mensal no cartão de crédito."}
            </p>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : plans.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">Os planos aparecem aqui em breve.</p>
        ) : (
          <div className={`grid gap-6 ${
            plans.length === 1 ? "max-w-sm mx-auto" :
            plans.length === 2 ? "md:grid-cols-2 max-w-2xl mx-auto" :
            plans.length === 3 ? "md:grid-cols-3" :
            "md:grid-cols-2 lg:grid-cols-4"
          }`}>
            {plans.map((plan, i) => {
              const isPopular = plan.slug === popularSlug;
              const yearly = showYearly && hasYearly(plan) ? plan : null;
              const symbol = currencySymbol(plan.currency);
              const savings = yearly ? savingsLabel(yearly) : null;
              return (
                <div
                  key={plan.id}
                  className={`animate-on-scroll relative rounded-2xl border p-6 flex flex-col ${
                    isPopular
                      ? "border-primary bg-primary/5 glow-red md:scale-[1.02]"
                      : "border-border bg-card hover:border-primary/30"
                  } transition-all duration-300`}
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-primary/30">
                        Mais escolhido
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">
                        {symbol}{formatMoney(yearly ? yearly.yearlyPrice : plan.monthlyPrice)}
                      </span>
                      <span className="text-muted-foreground">{yearly ? "/ano" : "/mês"}</span>
                    </div>
                    {yearly ? (
                      <div className="mt-2 flex flex-col items-center gap-1.5">
                        <span className="text-xs text-muted-foreground">
                          Sai por {symbol}{formatMoney(yearly.yearlyPrice / 12)} por mês
                        </span>
                        {savings && (
                          <span className="rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold text-green-600 dark:text-green-400">
                            {savings}
                          </span>
                        )}
                      </div>
                    ) : showYearly ? (
                      <div className="mt-2">
                        <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                          Só no mensal
                        </span>
                      </div>
                    ) : null}
                  </div>

                  <ul className="space-y-3 flex-1 mb-6">
                    <PlanFeature text={
                      plan.maxAgents >= 999 ? "Atendentes ilimitados"
                        : plan.maxAgents === 1 ? "1 atendente"
                        : `${plan.maxAgents} atendentes`
                    } />
                    <PlanFeature text={
                      plan.maxConversationsPerMonth === 0
                        ? "Conversas ilimitadas"
                        : `${formatNumber(plan.maxConversationsPerMonth)} conversas por mês`
                    } />
                    {plan.maxMembers > 0 && <PlanFeature text={
                      plan.maxMembers === 1 ? "1 pessoa na equipe" : `${plan.maxMembers} pessoas na equipe`
                    } />}
                    {plan.maxMembers === 0 && <PlanFeature text="Usuários ilimitados" />}
                    <PlanFeature text="Envio de PDF, DOCX, PPTX e XLSX" />
                    <PlanFeature text="Chat no seu site" />
                    {plan.hasWhatsApp && <PlanFeature text={
                      plan.whatsAppMessagesPerMonth != null && plan.whatsAppMessagesPerMonth > 0
                        ? `WhatsApp com ${formatNumber(plan.whatsAppMessagesPerMonth)} mensagens por mês`
                        : "Integração com WhatsApp"
                    } />}
                    {plan.hasWhatsApp
                      && (plan.whatsAppMessagesPerMonth ?? 0) > 0
                      && (plan.whatsAppOverageCentavos ?? 0) > 0 && (
                      <PlanFeature text={
                        `Passou do limite? Cada mensagem a mais custa ${symbol}${formatMoney((plan.whatsAppOverageCentavos ?? 0) / 100)}, cobrada no fim do mês`
                      } />
                    )}
                    {plan.hasEscalationContacts && <PlanFeature text="Contatos para transferir atendimento" />}
                  </ul>

                  <a
                    href="https://app.fojiai.com/signup"
                    className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all active:scale-[0.98] ${
                      isPopular
                        ? "bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/25"
                        : "border border-border hover:bg-muted"
                    }`}
                  >
                    Começar teste grátis
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {/* Risk reversal. The 7-day right of regret is a real CDC guarantee, and
            for a Brazilian buyer it is the single strongest "you can't lose"
            signal — so it goes right under the prices, where the doubt is. */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            7 dias de garantia (CDC Art. 49)
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Sem cartão para testar
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Cancele quando quiser
          </span>
        </div>
      </div>
    </section>
  );
}

function PlanFeature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm">
      <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-muted-foreground">{text}</span>
    </li>
  );
}
