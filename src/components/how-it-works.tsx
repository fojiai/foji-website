const STEPS = [
  {
    number: "01",
    title: "Create Your Agent",
    description: "Choose an industry template or write your own system prompt. Name your agent and configure its personality and knowledge scope.",
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
          <div className="h-8 px-3 rounded-lg bg-primary/20 flex items-center text-xs text-primary font-medium">Customer Support</div>
          <div className="h-8 px-3 rounded-lg bg-muted flex items-center text-xs text-muted-foreground">Legal Advisor</div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Upload Documents",
    description: "Feed your agent with knowledge. Upload PDFs, Word docs, spreadsheets, or presentations. We extract, chunk, and index everything automatically.",
    visual: (
      <div className="rounded-xl border border-border bg-muted/30 p-4 space-y-2">
        {["policy-manual.pdf", "faq-2024.docx", "pricing-table.xlsx"].map((file) => (
          <div key={file} className="flex items-center gap-3 rounded-lg bg-background/50 px-3 py-2.5 border border-border/50">
            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
              {file.split(".").pop()?.toUpperCase()}
            </div>
            <span className="text-sm text-muted-foreground flex-1 font-mono">{file}</span>
            <div className="w-16 h-1.5 rounded-full bg-green-500/30">
              <div className="h-full rounded-full bg-green-500 w-full" />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "03",
    title: "Embed & Go Live",
    description: "Copy one line of code and paste it into your website. Or connect via WhatsApp. Your AI agent is live in seconds.",
    visual: (
      <div className="rounded-xl border border-border bg-muted/30 p-4">
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
        <p className="text-xs text-muted-foreground mt-3 text-center">That&apos;s it. One script tag.</p>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll">
            Three steps to your AI agent
          </h2>
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
