"use client";

import { useEffect, useState } from "react";

const TYPING_PHRASES = [
  "customer support",
  "legal guidance",
  "financial consulting",
  "IT helpdesk",
  "HR onboarding",
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
          Built for Brazilian businesses
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-on-scroll">
          AI agents for your{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text">{currentText}</span>
          <span className="typing-cursor" />
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-on-scroll animate-delay-100">
          Create intelligent chat agents trained on your documents.
          Embed on your website or connect via WhatsApp — in minutes, not months.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll animate-delay-200">
          <a
            href="https://app.fojiai.com/signup"
            className="w-full sm:w-auto text-base font-semibold bg-primary text-primary-foreground px-8 py-3.5 rounded-xl hover:brightness-110 transition-all active:scale-[0.98] shadow-lg shadow-primary/25"
          >
            Start Free — No credit card
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto text-base font-medium border border-border px-8 py-3.5 rounded-xl hover:bg-muted transition-all text-muted-foreground hover:text-foreground"
          >
            See how it works
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-on-scroll animate-delay-300">
          {[
            { value: "3", label: "AI Providers" },
            { value: "3", label: "Languages" },
            { value: "<5min", label: "Setup Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mock chat widget preview */}
        <div className="mt-16 animate-on-scroll animate-delay-400">
          <div className="relative mx-auto max-w-sm">
            <div className="glow-red rounded-2xl border border-border bg-card p-1">
              <div className="rounded-xl bg-muted/50 overflow-hidden">
                {/* Chat header */}
                <div className="bg-primary px-4 py-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold text-white">F</div>
                  <div>
                    <p className="text-sm font-semibold text-white">Foji Assistant</p>
                    <p className="text-xs text-white/70">Online</p>
                  </div>
                </div>
                {/* Chat messages */}
                <div className="p-4 space-y-3 min-h-[200px]">
                  <div className="flex justify-end">
                    <div className="bg-primary text-white text-sm px-3 py-2 rounded-2xl rounded-br-md max-w-[80%]">
                      What are the return policies?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted border border-border text-sm px-3 py-2 rounded-2xl rounded-bl-md max-w-[80%]">
                      Based on our policy document, returns are accepted within 30 days of purchase with original receipt. Would you like me to explain the process?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white text-sm px-3 py-2 rounded-2xl rounded-br-md max-w-[80%]">
                      Yes please!
                    </div>
                  </div>
                </div>
                {/* Chat input */}
                <div className="border-t border-border p-3 flex items-center gap-2">
                  <div className="flex-1 bg-background rounded-lg px-3 py-2 text-sm text-muted-foreground">Type a message...</div>
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
              Powered by Foji AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
