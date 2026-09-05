const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    title: "WhatsApp de verdade, sem gambiarra",
    description:
      "Transforme o seu número do WhatsApp Business em um atendimento que nunca para. O cliente manda mensagem e recebe a resposta na hora, 24 horas por dia, com base nos seus documentos.",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
    title: "Responde com os seus próprios documentos",
    description:
      "Envie PDFs, documentos do Word, planilhas ou apresentações. A Foji lê e organiza tudo para responder com o seu conteúdo — e não com informação genérica da internet.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    title: "No seu site em 60 segundos",
    description:
      "Uma linha de código. Sem programador, sem plugin para instalar. O chat abre isolado do resto da página, então não quebra o visual do seu site.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    ),
    title: "Responde só o que é do seu negócio",
    description:
      "O agente não inventa: ele responde com base nos seus documentos. Nada de prometer uma política que você não tem. Por trás, OpenAI, Google Gemini e AWS Bedrock.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
    ),
    title: "Fala a língua do seu cliente",
    description:
      "Responde em português, inglês ou espanhol. Feita para o mercado brasileiro e em conformidade com a LGPD — e pronta também para clientes de fora.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
    title: "Veja o que seus clientes perguntam",
    description:
      "Todas as conversas ficam registradas. Descubra as perguntas que mais se repetem e use isso para melhorar o agente ou completar o que falta nos seus documentos.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 animate-on-scroll">Recursos</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight animate-on-scroll">
            Do documento à resposta pronta em minutos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-on-scroll animate-delay-100">
            Tudo o que você precisa para parar de responder as mesmas perguntas na mão.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`animate-on-scroll animate-delay-${(i % 3) * 100 + 100} group rounded-2xl border p-6 hover:border-primary/30 transition-all duration-300 ${
                feature.highlight
                  ? "border-primary/40 bg-primary/5 hover:bg-primary/10"
                  : "border-border bg-card hover:bg-muted/30"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                feature.highlight
                  ? "bg-primary/20 text-primary"
                  : "bg-primary/10 text-primary"
              }`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              {feature.highlight && (
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Só na Foji
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
