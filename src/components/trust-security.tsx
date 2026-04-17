const TRUST_ITEMS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Encrypted Storage on AWS",
    body: "Your files are stored encrypted on AWS S3. Data never leaves your account and is never accessible to other Foji customers.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "LGPD + GDPR Compliant",
    body: "Built from the ground up for the Brazilian market. Fully compliant with LGPD (Brazil), GDPR (EU), and CCPA (US) data protection regulations.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Never Used to Train AI",
    body: "Your documents are never shared with or used to train OpenAI, Google, or any third-party AI model. Your knowledge is yours alone.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "PCI-Compliant Billing",
    body: "Payments processed exclusively by Stripe. We never store, see, or touch your credit card data. Full PCI DSS compliance out of the box.",
  },
];

export function TrustSecurity() {
  return (
    <section className="py-24 border-t border-border relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Security & Privacy</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll">
            Your Documents Stay Yours
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto animate-on-scroll animate-delay-100">
            Before uploading internal docs to any AI platform, you need to know your data is safe. Here&apos;s exactly what we do.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`animate-on-scroll animate-delay-${i * 100 + 100} rounded-2xl border border-border bg-card p-6 hover:border-primary/20 hover:bg-muted/20 transition-all`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Compliance badges row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {["LGPD", "GDPR", "CCPA", "AWS S3", "Stripe PCI"].map((badge) => (
            <div key={badge} className="flex items-center gap-1.5 rounded-full border border-border bg-muted/30 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
