"use client";

import { useState } from "react";

const CASES = [
  {
    id: "support",
    label: "Customer Support",
    title: "Instant answers, 24/7",
    description: "Let your AI handle common questions while your team focuses on complex issues. Trained on your FAQ, policies, and product docs.",
    messages: [
      { role: "user", text: "How do I track my order?" },
      { role: "assistant", text: "You can track your order by visiting our website and clicking 'My Orders' in the top menu. You'll need the email address used during purchase. Would you like me to send you the tracking link?" },
      { role: "user", text: "Yes please!" },
    ],
  },
  {
    id: "legal",
    label: "Legal",
    title: "Legal information at scale",
    description: "Help clients understand contracts, procedures, and legal concepts — with proper disclaimers. Trained on your legal documentation.",
    messages: [
      { role: "user", text: "What's the deadline for filing a labor complaint?" },
      { role: "assistant", text: "According to the CLT (Art. 11), the statute of limitations for filing a labor complaint is 2 years after the termination of the employment contract, covering claims from the last 5 years. I recommend consulting a qualified attorney for your specific case." },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    title: "Financial guidance made accessible",
    description: "Help customers understand tax procedures, billing, and accounting concepts — all based on your official documentation.",
    messages: [
      { role: "user", text: "When is the deadline for Simples Nacional?" },
      { role: "assistant", text: "The monthly deadline for DAS (Simples Nacional) payment is the 20th of each month. If the 20th falls on a weekend or holiday, the deadline moves to the next business day. Do you need help understanding the calculation?" },
    ],
  },
  {
    id: "hr",
    label: "HR & Internal",
    title: "Empower your employees",
    description: "Reduce internal support tickets. Your AI handles questions about policies, benefits, vacation rules, and onboarding procedures.",
    messages: [
      { role: "user", text: "How many vacation days do I have?" },
      { role: "assistant", text: "Based on our company policy, full-time employees earn 30 calendar days of vacation per year after completing 12 months of service (per CLT Art. 130). You can check your available balance in the HR portal under 'My Benefits'. Would you like the link?" },
    ],
  },
];

export function UseCases() {
  const [active, setActive] = useState("support");
  const current = CASES.find((c) => c.id === active) ?? CASES[0];

  return (
    <section id="use-cases" className="py-24 border-t border-border relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Use Cases</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll">
            Built for every industry
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
          {CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === c.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{current.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{current.description}</p>
            <a
              href="https://app.fojiai.com/signup"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Try it free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          {/* Mock chat */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden glow-red">
            <div className="bg-primary/10 px-4 py-3 border-b border-border">
              <p className="text-sm font-semibold">{current.label} Agent</p>
            </div>
            <div className="p-4 space-y-3 min-h-[220px]">
              {current.messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`text-sm px-3.5 py-2.5 rounded-2xl max-w-[85%] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-muted border border-border rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
