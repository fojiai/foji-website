"use client";

import { useState, useEffect } from "react";

interface Plan {
  id: number;
  name: string;
  slug: string;
  monthlyPrice: number;
  currency: string;
  maxAgents: number;
  maxMembers: number;
  hasWhatsApp: boolean;
  hasEscalationContacts: boolean;
  maxConversationsPerMonth: number;
  maxMessagesPerMonth: number;
}

function formatNumber(n: number): string {
  // Avoid toLocaleString to prevent SSR/client hydration mismatch
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function currencySymbol(c: string) {
  switch (c) {
    case "BRL": return "R$";
    case "EUR": return "\u20AC";
    default: return "$";
  }
}

export function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section id="pricing" className="py-24 border-t border-border relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-on-scroll animate-delay-100">
            Start free. Upgrade when you&apos;re ready.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : plans.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">Plans coming soon.</p>
        ) : (
          <div className={`grid gap-6 ${
            plans.length === 1 ? "max-w-sm mx-auto" :
            plans.length === 2 ? "md:grid-cols-2 max-w-2xl mx-auto" :
            plans.length === 3 ? "md:grid-cols-3" :
            "md:grid-cols-2 lg:grid-cols-4"
          }`}>
            {plans.map((plan, i) => {
              const isPopular = plan.slug === popularSlug;
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
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">
                        {currencySymbol(plan.currency)}{plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                  </div>

                  <ul className="space-y-3 flex-1 mb-6">
                    <PlanFeature text={plan.maxAgents >= 999 ? "Unlimited agents" : `${plan.maxAgents} AI agents`} />
                    <PlanFeature text={
                      plan.maxConversationsPerMonth === 0
                        ? "Unlimited conversations"
                        : `${formatNumber(plan.maxConversationsPerMonth)} conversations/mo`
                    } />
                    {plan.maxMembers > 0 && <PlanFeature text={`${plan.maxMembers} team members`} />}
                    {plan.maxMembers === 0 && <PlanFeature text="Unlimited team members" />}
                    <PlanFeature text="PDF, DOCX, PPTX, XLSX uploads" />
                    <PlanFeature text="Website chat widget" />
                    {plan.hasWhatsApp && <PlanFeature text="WhatsApp integration" />}
                    {plan.hasEscalationContacts && <PlanFeature text="Escalation contacts" />}
                  </ul>

                  <a
                    href="https://app.fojiai.com/signup"
                    className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all active:scale-[0.98] ${
                      isPopular
                        ? "bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/25"
                        : "border border-border hover:bg-muted"
                    }`}
                  >
                    Start Free Trial
                  </a>
                </div>
              );
            })}
          </div>
        )}
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
