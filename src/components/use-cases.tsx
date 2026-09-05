"use client";

import { useState } from "react";

const CASES = [
  {
    id: "support",
    label: "Atendimento",
    title: "Responda 80% das perguntas sem contratar ninguém",
    description:
      "Sua equipe gasta horas respondendo o que já está documentado. A Foji cuida de trocas, rastreio de pedidos, dúvidas frequentes e preços sozinha, 24 horas por dia. Sua equipe entra só quando realmente importa.",
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
    label: "Jurídico",
    title: "Atenda mais clientes sem aumentar a equipe",
    description:
      "Seus clientes tiram dúvidas comuns a qualquer hora — contratos, prazos, procedimentos — com os avisos necessários e referência à fonte. Treinado com os documentos do seu escritório, não com lei genérica.",
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
    label: "Contabilidade",
    title: "Seu conhecimento contábil disponível a qualquer hora",
    description:
      "Todo dia chegam as mesmas dúvidas sobre impostos e obrigações. Deixe a IA responder na hora, com base na sua documentação oficial, e libere a equipe para o trabalho que realmente fatura.",
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
    label: "RH e interno",
    title: "Reduza em 70% os chamados internos",
    description:
      "Férias, benefícios, integração de novos funcionários, regras de reembolso — o time se resolve na hora, sem precisar escrever para o RH. Funciona nas suas ferramentas internas ou direto no WhatsApp.",
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
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Casos de uso</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll">
            Feito para o seu ramo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-on-scroll animate-delay-100">
            Mesma plataforma, conhecimento diferente. A sua IA conhece o seu negócio — não um negócio genérico.
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
              <span className="text-xs text-muted-foreground">Sem cartão de crédito</span>
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
