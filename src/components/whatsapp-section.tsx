export function WhatsAppSection() {
  const BENEFITS = [
    "Conexão oficial com a Meta — sem intermediários",
    "Responde com base nos seus documentos — sem inventar",
    "Passa para uma pessoa quando precisa",
    "Responde em português, inglês ou espanhol",
    "No ar 24 horas, inclusive fim de semana e feriado",
    "Funciona com o número de WhatsApp Business que você já usa",
  ];

  return (
    <section id="whatsapp" className="py-24 border-t border-border relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#25D366]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-1.5 text-sm font-semibold text-[#25D366] animate-on-scroll">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Só na Foji — nem a Chatbase, a DocsBot ou a CustomGPT têm isso
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="space-y-6 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              O seu número de WhatsApp,{" "}
              <span className="gradient-text">com inteligência artificial</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No Brasil, o WhatsApp é o canal número 1 de contato com empresas. Seus clientes já esperam falar com você por lá. Com a Foji, a sua IA está pronta para atender — treinada com os seus documentos e no ar 24 horas por dia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sem aplicativo extra, sem montar fluxo de chatbot, sem programador. Conecte o número de WhatsApp Business que você já usa e a IA cuida do resto.
            </p>

            <ul className="space-y-3">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <svg className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>

            <a
              href="https://app.fojiai.com/signup"
              className="inline-flex items-center gap-2 text-sm font-semibold bg-[#25D366] text-white px-6 py-3 rounded-xl hover:brightness-105 transition-all active:scale-[0.98] shadow-lg shadow-[#25D366]/20"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Ativar o WhatsApp no meu agente
            </a>
          </div>

          {/* Right: WhatsApp mock */}
          <div className="animate-on-scroll animate-delay-200 animate-float">
            <div className="mx-auto max-w-xs">
              <div className="rounded-3xl border-2 border-border bg-[#111b21] overflow-hidden shadow-2xl shadow-black/50">
                {/* Phone top bar */}
                <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                  <div className="w-9 h-9 rounded-full bg-[#00a884]/30 flex items-center justify-center text-sm font-bold text-[#00a884]">L</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Loja Exemplo</p>
                    <p className="text-xs text-white/50">online</p>
                  </div>
                  <svg className="w-5 h-5 text-[#8696a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>

                {/* Messages area */}
                <div className="p-4 space-y-2.5 min-h-[320px] bg-[#0b141a]"
                  style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}
                >
                  {/* Timestamp */}
                  <div className="flex justify-center">
                    <span className="text-[10px] text-white/30 bg-white/5 px-2 py-0.5 rounded-full">Today</span>
                  </div>

                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-[#005c4b] text-white text-sm px-3 py-2 rounded-2xl rounded-br-sm max-w-[85%] leading-relaxed">
                      Oi, vocês têm tênis em tamanho 42?
                    </div>
                  </div>

                  {/* AI reply */}
                  <div className="flex justify-start">
                    <div className="bg-[#202c33] text-white/90 text-sm px-3 py-2 rounded-2xl rounded-bl-sm max-w-[90%] leading-relaxed space-y-1">
                      <p>Olá! Temos sim ☺️</p>
                      <p>Disponíveis no 42: Nike Air Max (preto e branco), Adidas Ultraboost (cinza) e New Balance 574 (azul marinho).</p>
                      <p>Quer que eu reserve um para você?</p>
                      <p className="text-[10px] text-white/30 text-right pt-0.5">14:32 ✓✓</p>
                    </div>
                  </div>

                  {/* User follow-up */}
                  <div className="flex justify-end">
                    <div className="bg-[#005c4b] text-white text-sm px-3 py-2 rounded-2xl rounded-br-sm max-w-[85%]">
                      Sim! O Nike no branco
                    </div>
                  </div>

                  {/* AI reply 2 */}
                  <div className="flex justify-start">
                    <div className="bg-[#202c33] text-white/90 text-sm px-3 py-2 rounded-2xl rounded-bl-sm max-w-[90%] leading-relaxed">
                      <p>Perfeito! Reservei o Nike Air Max branco tamanho 42. Posso enviar o link de pagamento aqui mesmo?</p>
                      <p className="text-[10px] text-white/30 text-right pt-1">14:33 ✓✓</p>
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="bg-[#202c33] px-3 py-2.5 flex items-center gap-2 border-t border-white/5">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-xs text-white/25">Mensagem</div>
                  <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>

              {/* Label */}
              <p className="text-xs text-center text-muted-foreground mt-4">
                Powered by Foji AI — responding 24/7 on WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
