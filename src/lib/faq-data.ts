/**
 * FAQ content, shared by the visible FAQ section and the FAQPage JSON-LD.
 * Kept in one place so the rich-snippet schema Google reads can never drift
 * from what a visitor actually sees — Google penalises that mismatch.
 */
export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: "Que tipos de documento posso enviar?",
    a: "PDF, DOCX, PPTX e XLSX, com até 30 MB cada. O sistema lê e organiza o texto sozinho, para que o agente use esse conteúdo nas conversas.",
  },
  {
    q: "Qual IA está por trás dos agentes?",
    a: "A Foji trabalha com vários provedores: OpenAI (GPT), Google Gemini e AWS Bedrock (Amazon Nova). O sistema distribui as conversas entre os modelos ativos.",
  },
  {
    q: "Como funciona a integração com o WhatsApp?",
    a: "Com o recurso liberado no seu plano, você conecta o seu número do WhatsApp Business em um clique, pela própria Meta. As mensagens que chegam vão direto para o agente, que responde na hora. Você também pode cadastrar contatos para transferir a conversa a uma pessoa quando precisar.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Os documentos ficam criptografados na AWS. O histórico de conversas é apagado automaticamente após 90 dias. Seguimos a LGPD (Brasil), o GDPR (UE) e o CCPA (EUA). Os pagamentos são processados pela Stripe — nunca guardamos números de cartão.",
  },
  {
    q: "Dá para usar a Foji em outros idiomas?",
    a: "Sim. Os agentes respondem em português, inglês ou espanhol, e o painel está traduzido nos três idiomas.",
  },
  {
    q: "O que acontece se eu cancelar?",
    a: "Você continua com acesso até o fim do período já pago. Depois disso, seus dados ficam guardados por 30 dias antes da exclusão definitiva. Pode voltar quando quiser. Na primeira assinatura você tem 7 dias de arrependimento, conforme o Código de Defesa do Consumidor (Art. 49).",
  },
  {
    q: "Minha equipe toda pode usar?",
    a: "Pode. Cada empresa tem vários usuários, com três níveis de acesso: proprietário, administrador e usuário. A quantidade de pessoas depende do seu plano.",
  },
  {
    q: "Preciso entender de tecnologia para usar?",
    a: "Não precisa. Criar um agente leva menos de 5 minutos: escolha um modelo, envie seus documentos e cole uma linha no site. Só mexe em código quem quiser personalizar o visual do chat.",
  },
];
