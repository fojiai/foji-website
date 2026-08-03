import Image from "next/image";
import Link from "next/link";

/**
 * Shared shell for legal documents (Termos de Uso, Política de Privacidade).
 * Server component — no interactivity beyond links.
 */
export function LegalPage({
  title,
  subtitle,
  updatedAt,
  children,
}: {
  title: string;
  subtitle: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-icon.png" alt="Foji AI" width={26} height={26} className="rounded-lg" />
            <span className="font-bold">Foji AI</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
          Documento legal
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
        <p className="mt-6 text-sm text-muted-foreground/70">
          Última atualização: {updatedAt}
        </p>

        <div className="mt-12 legal-body">{children}</div>

        <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground">
          <p className="font-semibold text-foreground mb-1">P2 TECH INOVA SIMPLES (I.S.)</p>
          <p>CNPJ 52.417.209/0001-59</p>
          <p className="mt-3">
            Dúvidas sobre este documento?{" "}
            <a href="mailto:contato@fojiai.com" className="text-primary hover:underline">
              contato@fojiai.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

/** A numbered top-level section. */
export function Section({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-11 scroll-mt-24" id={`secao-${n}`}>
      <h2 className="text-xl font-bold tracking-tight mb-4 flex gap-3">
        <span className="text-primary font-mono text-base pt-1">{String(n).padStart(2, "0")}</span>
        <span className="text-balance">{title}</span>
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}
