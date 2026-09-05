import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 border-t border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll">
          Seu próximo atendente não dorme,{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text">não falta, e sabe todas as suas regras de cor.</span>
        </h2>
        <p className="mt-5 text-lg text-muted-foreground animate-on-scroll animate-delay-100">
          Comece o teste grátis e coloque seu primeiro agente no ar hoje, no WhatsApp ou no seu site.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll animate-delay-200">
          <a
            href="https://app.fojiai.com/signup"
            className="text-base font-semibold bg-primary text-primary-foreground px-8 py-3.5 rounded-xl hover:brightness-110 transition-all active:scale-[0.98] shadow-lg shadow-primary/25"
          >
            Criar meu agente grátis →
          </a>
          <a
            href="https://app.fojiai.com/contact"
            className="text-base font-medium border border-border px-8 py-3.5 rounded-xl hover:bg-muted transition-all text-muted-foreground hover:text-foreground"
          >
            Falar com vendas
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground/50 animate-on-scroll animate-delay-300">
          Sem cartão de crédito · Conforme a LGPD · Cancele quando quiser
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo-icon.png" alt="Foji AI" width={28} height={28} className="rounded-lg" />
              <span className="font-bold text-lg">Foji AI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Agentes de IA treinados com os seus documentos. Para o seu site e o seu WhatsApp.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-sm font-semibold mb-3">Produto</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Recursos</a></li>
              <li><a href="#whatsapp" className="hover:text-foreground transition-colors">WhatsApp</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Planos</a></li>
              <li><a href="#use-cases" className="hover:text-foreground transition-colors">Casos de uso</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">Dúvidas</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold mb-3">Empresa</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/termos" className="hover:text-foreground transition-colors">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="hover:text-foreground transition-colors">Política de Privacidade</Link></li>
              <li><a href="https://app.fojiai.com/contact" className="hover:text-foreground transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <p className="text-sm font-semibold mb-3">Comece agora</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://app.fojiai.com/signup" className="hover:text-foreground transition-colors">
                  Criar conta grátis
                </a>
              </li>
              <li>
                <a href="https://app.fojiai.com/login" className="hover:text-foreground transition-colors">
                  Entrar
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <a
                href="https://app.fojiai.com/signup"
                className="inline-block text-xs font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:brightness-110 transition-all"
              >
                Começar grátis →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; 2026 P2 TECH INOVA SIMPLES (I.S.) — CNPJ 52.417.209/0001-59</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              LGPD Compliant
            </span>
            <span>·</span>
            <span>Made in Brazil 🇧🇷</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
