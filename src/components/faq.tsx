"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What types of documents can I upload?",
    a: "You can upload PDF, DOCX, PPTX, and XLSX files up to 30MB each. Our system extracts, normalizes, and chunks the text automatically so your AI agent can reference it in conversations.",
  },
  {
    q: "Which AI models power the agents?",
    a: "Foji AI supports multiple providers: OpenAI (GPT), Google Gemini, and AWS Bedrock (Amazon Nova). Your platform administrator selects which models are active, and the system distributes requests across them.",
  },
  {
    q: "How does the WhatsApp integration work?",
    a: "Once enabled on your plan, you connect your WhatsApp Business number through the Meta Cloud API. Incoming messages are automatically routed to your AI agent, which responds in real-time. Escalation contacts can be configured for human handoff.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Documents are stored encrypted on AWS S3. Chat history is stored in DynamoDB with a 90-day TTL. We comply with LGPD (Brazil), GDPR (EU), and CCPA (US). Payment data is processed by Stripe — we never store credit card numbers.",
  },
  {
    q: "Can I use Foji AI in multiple languages?",
    a: "Absolutely. Agents can respond in Portuguese (BR), English, or Spanish. The dashboard and all user-facing content is fully translated in all three languages.",
  },
  {
    q: "What happens when I cancel?",
    a: "Your access continues until the end of the current billing period. After that, your data is retained for 30 days before permanent deletion. You can resubscribe at any time. First-time subscribers have a 7-day regret period per Brazilian Consumer Protection Code (CDC Art. 49).",
  },
  {
    q: "Can multiple team members manage agents?",
    a: "Yes. Each company workspace supports multiple users with role-based access: Owner, Admin, and User. Team member limits depend on your plan.",
  },
  {
    q: "Do I need technical knowledge to use Foji AI?",
    a: "Not at all. Creating an agent takes less than 5 minutes — choose a template, upload your documents, and copy the embed code. No coding required unless you want to customize the widget styling.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 border-t border-border">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll">
            Frequently asked questions
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
