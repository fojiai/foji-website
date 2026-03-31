import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-24 border-t border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll">
          Start building your AI agent
          <br />
          <span className="gradient-text">in minutes, not months</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground animate-on-scroll animate-delay-100">
          Free trial included. No credit card required.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll animate-delay-200">
          <a
            href="https://app.fojiai.com/signup"
            className="text-base font-semibold bg-primary text-primary-foreground px-8 py-3.5 rounded-xl hover:brightness-110 transition-all active:scale-[0.98] shadow-lg shadow-primary/25"
          >
            Create Free Account
          </a>
          <a
            href="https://app.fojiai.com/contact"
            className="text-base font-medium border border-border px-8 py-3.5 rounded-xl hover:bg-muted transition-all text-muted-foreground hover:text-foreground"
          >
            Talk to Sales
          </a>
        </div>
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
              Forge your intelligence. AI-powered chat agents for Brazilian businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-sm font-semibold mb-3">Product</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#use-cases" className="hover:text-foreground transition-colors">Use Cases</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold mb-3">Company</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://app.fojiai.com/legal" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="https://app.fojiai.com/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="https://app.fojiai.com/refund" className="hover:text-foreground transition-colors">Refund Policy</a></li>
              <li><a href="https://app.fojiai.com/contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-sm font-semibold mb-3">Get Started</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://app.fojiai.com/signup" className="hover:text-foreground transition-colors">Create Account</a></li>
              <li><a href="https://app.fojiai.com/login" className="hover:text-foreground transition-colors">Login</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; 2026 P2 TECH INOVA SIMPLES (I.S.) — CNPJ 52.417.209/0001-59</p>
          <p>Made in Brazil with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
