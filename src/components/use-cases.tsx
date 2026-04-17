"use client";

import { useState } from "react";

const CASES = [
  {
    id: "support",
    label: "Customer Support",
    title: "Answer 80% of Questions — Without Hiring Anyone",
    description:
      "Your team spends hours answering questions that are already documented. Foji handles returns, order tracking, FAQs, and pricing automatically — 24/7. Your agents only get involved when it actually matters.",
    messages: [
      { role: "user", text: "Como faço para rastrear meu pedido?" },
      {
        role: "assistant",
        text: "Você pode rastrear seu pedido pelo nosso site em 'Meus Pedidos', usando o e-mail do cadastro. O prazo de entrega para SP capital é de 1 a 2 dias úteis. Posso rastrear agora para você?",
      },
      { role: "user", text: "Sim, por favor!" },
    ],
  },
  {
    id: "legal",
    label: "Legal",
    title: "Scale Client Communication Without Scaling Headcount",
    description:
      "Let clients get answers to common legal questions at any hour — contracts, deadlines, procedures — with proper disclaimers and direct citations. Trained on your firm's actual documentation, not generic law.",
    messages: [
      { role: "user", text: "Qual o prazo para entrar com reclamação trabalhista?" },
      {
        role: "assistant",
        text: "Segundo a CLT (Art. 11), o prazo prescricional é de 2 anos após o término do contrato, com direito a reclamar os últimos 5 anos. Recomendo consultar um advogado para analisar seu caso específico.",
      },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    title: "Your Financial Knowledge, Available on Demand",
    description:
      "Clients ask the same tax and accounting questions every day. Let your AI answer instantly, based on your official documentation. Free your team for complex, billable work — not repetitive Q&A.",
    messages: [
      { role: "user", text: "Quando vence o DAS do Simples Nacional?" },
      {
        role: "assistant",
        text: "O vencimento mensal do DAS (Simples Nacional) é todo dia 20. Se cair em fim de semana ou feriado, o prazo é o próximo dia útil. Precisa de ajuda para calcular o valor?",
      },
    ],
  },
  {
    id: "hr",
    label: "HR & Internal",
    title: "Cut Internal Support Tickets by 70%",
    description:
      "Vacation policy, benefits, onboarding checklists, expense rules — employees get answers immediately without emailing HR. Works inside your internal tools or directly on WhatsApp.",
    messages: [
      { role: "user", text: "Quantos dias de férias eu tenho direito?" },
      {
        role: "assistant",
        text: "Funcionários CLT têm direito a 30 dias corridos de férias após cada 12 meses de trabalho (Art. 130 da CLT). Você pode consultar seu saldo no portal de RH em 'Meus Benefícios'. Posso te enviar o link?",
      },
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
            Built for Every Industry
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-on-scroll animate-delay-100">
            Same platform, different knowledge base. Your AI knows your business — not a generic one.
          </p>
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
          <div className="space-y-5">
            <h3 className="text-2xl font-bold">{current.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{current.description}</p>
            <div className="flex items-center gap-4">
              <a
                href="https://app.fojiai.com/signup"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-xl hover:brightness-110 transition-all active:scale-[0.98]"
              >
                Try it free →
              </a>
              <span className="text-xs text-muted-foreground">No credit card needed</span>
            </div>
          </div>

          {/* Mock chat */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden glow-red">
            <div className="bg-primary/10 px-4 py-3 border-b border-border flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-sm font-semibold">{current.label} Agent</p>
              <span className="ml-auto text-xs text-muted-foreground">via Foji AI</span>
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
