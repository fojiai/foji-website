"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Que tipos de documento posso enviar?",
    a: "PDF, DOCX, PPTX e XLSX, com até 30 MB cada. O sistema lê e organiza o texto sozinho, para que o agente use esse conteúdo nas conversas.",
  },
  {
    q: "Qual IA está por trás dos agentes?",
    a: "A Foji trabalha com vários provedores: OpenAI (GPT), Google Gemini e AWS Bedrock (Amazon Nova). O sistema distribui as conversas entre os modelos ativos.",
  },
  {
    q: "Como funciona a integração com o WhatsApp?",
    a: "Com o recurso liberado no seu plano, você conecta o seu número do WhatsApp Business em um clique, pela própria Meta. As mensagens que chegam vão direto para o agente, que responde na hora. Você também pode cadastrar contatos para transferir a conversa a uma pessoa quando precisar.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Os documentos ficam criptografados na AWS. O histórico de conversas é apagado automaticamente após 90 dias. Seguimos a LGPD (Brasil), o GDPR (UE) e o CCPA (EUA). Os pagamentos são processados pela Stripe — nunca guardamos números de cartão.",
  },
  {
    q: "Dá para usar a Foji em outros idiomas?",
    a: "Sim. Os agentes respondem em português, inglês ou espanhol, e o painel está traduzido nos três idiomas.",
  },
  {
    q: "O que acontece se eu cancelar?",
    a: "Você continua com acesso até o fim do período já pago. Depois disso, seus dados ficam guardados por 30 dias antes da exclusão definitiva. Pode voltar quando quiser. Na primeira assinatura você tem 7 dias de arrependimento, conforme o Código de Defesa do Consumidor (Art. 49).",
  },
  {
    q: "Minha equipe toda pode usar?",
    a: "Pode. Cada empresa tem vários usuários, com três níveis de acesso: proprietário, administrador e usuário. A quantidade de pessoas depende do seu plano.",
  },
  {
    q: "Preciso entender de tecnologia para usar?",
    a: "Não precisa. Criar um agente leva menos de 5 minutos: escolha um modelo, envie seus documentos e cole uma linha no site. Só mexe em código quem quiser personalizar o visual do chat.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 border-t border-border">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Dúvidas</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="animate-on-scroll rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="text-sm font-medium pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
