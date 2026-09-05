"use client";

import { useEffect, useState } from "react";

const TYPING_PHRASES = [
  "atendimento ao cliente",
  "dúvidas jurídicas",
  "consultoria financeira",
  "suporte de TI",
  "onboarding de funcionários",
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === phrase.length) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  const currentText = TYPING_PHRASES[phraseIndex].substring(0, charIndex);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-8 animate-on-scroll">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          WhatsApp + chat no site + conforme a LGPD
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-on-scroll">
          Sua empresa no WhatsApp.{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text">Com IA. 24 horas por dia.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-on-scroll animate-delay-100">
          Treine um agente de IA com os seus documentos e deixe que ele responda
          seus clientes sozinho — no WhatsApp e no seu site. Sem programar,
          em menos de 5 minutos.
        </p>

        {/* Typing secondary line */}
        <p className="mt-3 text-sm text-muted-foreground/60 animate-on-scroll animate-delay-150">
          Funciona para{" "}
          <span className="text-primary font-medium">
            {currentText}
            <span className="typing-cursor" />
          </span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll animate-delay-200">
          <a
            href="https://app.fojiai.com/signup"
            className="w-full sm:w-auto text-base font-semibold bg-primary text-primary-foreground px-8 py-3.5 rounded-xl hover:brightness-110 transition-all active:scale-[0.98] shadow-lg shadow-primary/25"
          >
            Criar meu agente grátis →
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto text-base font-medium border border-border px-8 py-3.5 rounded-xl hover:bg-muted transition-all text-muted-foreground hover:text-foreground"
          >
            Ver como funciona
          </a>
        </div>

        {/* Trust markers */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-muted-foreground/60 animate-on-scroll animate-delay-250">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Sem cartão de crédito
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Conforme a LGPD
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Cancele quando quiser
          </span>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-on-scroll animate-delay-300">
          {[
            { value: "3", label: "Provedores de IA" },
            { value: "<5min", label: "Para configurar" },
            { value: "LGPD", label: "Conformidade" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mock chat — WhatsApp-flavored */}
        <div className="mt-16 animate-on-scroll animate-delay-400">
          <div className="relative mx-auto max-w-sm">
            <div className="glow-red rounded-2xl border border-border bg-card p-1">
              <div className="rounded-xl bg-muted/50 overflow-hidden">
                {/* Chat header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold text-white">S</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Suporte — Foji Store</p>
                    <p className="text-xs text-white/70">Online</p>
                  </div>
                  {/* WhatsApp icon */}
                  <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                {/* Chat messages */}
                <div className="p-4 space-y-3 min-h-[200px] bg-[#0a1014]/50">
                  <div className="flex justify-end">
                    <div className="bg-[#005c4b] text-white text-sm px-3 py-2 rounded-2xl rounded-br-md max-w-[80%]">
                      Qual o prazo de entrega para SP?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-[#1e2d33] border border-white/5 text-white/90 text-sm px-3 py-2 rounded-2xl rounded-bl-md max-w-[80%]">
                      Para São Paulo capital, o prazo é de 1 a 2 dias úteis. Para demais cidades do estado, de 2 a 4 dias úteis. Posso rastrear seu pedido agora se quiser!
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#005c4b] text-white text-sm px-3 py-2 rounded-2xl rounded-br-md max-w-[80%]">
                      Sim por favor!
                    </div>
                  </div>
                </div>
                {/* Chat input */}
                <div className="border-t border-white/5 p-3 flex items-center gap-2 bg-[#1f2c33]">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-sm text-white/30">Mensagem</div>
                  <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
              IA respondendo no WhatsApp — com a Foji
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
