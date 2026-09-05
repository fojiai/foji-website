const STEPS = [
  {
    number: "01",
    title: "Monte o seu atendente",
    description:
      "Escolha um modelo pronto para o seu ramo ou escreva as instruções do seu jeito. Dê um nome ao agente, defina o tom e o que ele deve saber. Leva uns 2 minutos.",
    visual: (
      <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">F</div>
          <div className="h-3 w-32 rounded bg-foreground/10" />
        </div>
        <div className="space-y-2">
          <div className="h-2.5 w-full rounded bg-foreground/5" />
          <div className="h-2.5 w-3/4 rounded bg-foreground/5" />
          <div className="h-2.5 w-5/6 rounded bg-foreground/5" />
        </div>
        <div className="flex gap-2">
          <div className="h-8 px-3 rounded-lg bg-primary/20 flex items-center text-xs text-primary font-medium">Atendimento</div>
          <div className="h-8 px-3 rounded-lg bg-muted flex items-center text-xs text-muted-foreground">Jurídico</div>
          <div className="h-8 px-3 rounded-lg bg-muted flex items-center text-xs text-muted-foreground">RH e interno</div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Ensine o que ele precisa saber",
    description:
      "Envie PDFs, documentos do Word, planilhas ou apresentações. A Foji lê e organiza tudo sozinha, e passa a responder com o seu conteúdo, não com informação genérica da internet. Seus documentos não são usados para treinar modelos de terceiros.",
    visual: (
      <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-2">
        {[
          { name: "manual-de-politicas.pdf", ext: "PDF" },
          { name: "faq-produtos-2024.docx", ext: "DOC" },
          { name: "tabela-de-precos.xlsx", ext: "XLS" },
        ].map((file) => (
          <div key={file.name} className="flex items-center gap-3 rounded-lg bg-background/50 px-3 py-2.5 border border-border/50">
            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
              {file.ext}
            </div>
            <span className="text-sm text-muted-foreground flex-1 font-mono truncate">{file.name}</span>
            <div className="flex items-center gap-1.5">
              <div className="w-16 h-1.5 rounded-full bg-green-500/30">
                <div className="h-full rounded-full bg-green-500 w-full" />
              </div>
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>
        ))}
        <p className="text-xs text-muted-foreground/60 text-center pt-1">Seus dados são seus. Nunca compartilhados com terceiros.</p>
      </div>
    ),
  },
  {
    number: "03",
    title: "Publique com uma linha",
    description:
      "Copie uma linha de código e cole no seu site. Pronto. Ou ative o WhatsApp e comece a responder pelo número que você já usa. De qualquer jeito, no ar em segundos.",
    visual: (
      <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-3">
        <div className="font-mono text-xs bg-background/80 rounded-lg p-3 border border-border overflow-x-auto">
          <span className="text-muted-foreground">&lt;</span>
          <span className="text-primary">script</span>
          <span className="text-muted-foreground"> </span>
          <span className="text-accent">src</span>
          <span className="text-muted-foreground">=&quot;</span>
          <span className="text-green-400">widget.fojiai.com/widget.js</span>
          <span className="text-muted-foreground">&quot;</span>
          <br />
          <span className="text-muted-foreground">{"  "}</span>
          <span className="text-accent">data-agent-token</span>
          <span className="text-muted-foreground">=&quot;</span>
          <span className="text-green-400">your-token</span>
          <span className="text-muted-foreground">&quot;</span>
          <br />
          <span className="text-muted-foreground">{"  "}</span>
          <span className="text-accent">async</span>
          <span className="text-muted-foreground">&gt;&lt;/</span>
          <span className="text-primary">script</span>
          <span className="text-muted-foreground">&gt;</span>
        </div>
        <p className="text-xs text-muted-foreground text-center">É isso mesmo. A instalação inteira é essa linha.</p>
        <div className="flex items-center gap-2 rounded-lg bg-[#075E54]/20 border border-[#075E54]/30 px-3 py-2">
          <svg className="w-4 h-4 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <p className="text-xs text-[#25D366]/90 font-medium">Ou conecte o seu número do WhatsApp Business.</p>
        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Como funciona</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll">
            Do seu documento ao cliente atendido em 3 passos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-on-scroll animate-delay-100">
            Sem programador, sem semanas de configuração, sem integração para montar.
          </p>
        </div>

        <div className="space-y-16">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`animate-on-scroll flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
            >
              <div className="flex-1 space-y-4">
                <span className="text-5xl font-black text-primary/20">{step.number}</span>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              <div className="flex-1 w-full animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                {step.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
