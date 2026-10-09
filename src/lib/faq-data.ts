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
    q: "O WhatsApp tem algum custo além do plano da Foji?",
    a: "Pode ter, e queremos que você saiba antes. O WhatsApp é da Meta, a mesma empresa do Facebook e do Instagram, e a Meta cobra das empresas que usam o WhatsApp com atendimento automático. Cada número tem 1.000 respostas grátis por mês; depois disso, a Meta cobra alguns centavos por mensagem. Mensagens que a sua empresa manda primeiro, como promoções e lembretes, a Meta sempre cobra. Esse valor vai direto no cartão que você cadastra na sua conta da Meta: não passa pela Foji, e a Foji não ganha nada com ele. Separado disso, o seu plano da Foji inclui um número de mensagens de WhatsApp por mês, que você acompanha no painel. Em alguns planos, se você passar desse número, o atendente continua respondendo e cada mensagem a mais custa o valor que aparece no plano, cobrado uma vez só, no fim do mês.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Os documentos ficam criptografados na AWS. O histórico de conversas é apagado automaticamente após 90 dias. Seguimos a LGPD (Brasil), o GDPR (UE) e o CCPA (EUA). Os pagamentos são feitos pelo Asaas, uma empresa brasileira de pagamentos autorizada pelo Banco Central. Os dados do seu cartão vão direto para o Asaas e nunca passam pelos servidores da Foji.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Primeiro você testa grátis por 7 dias, sem cadastrar cartão. Depois, escolhe como quer pagar. No plano mensal, o pagamento é no cartão de crédito e acontece sozinho todo mês, sem você precisar lembrar. No plano anual, você paga uma vez por ano, no cartão ou no Pix, e sai mais barato.",
  },
  {
    q: "Posso trocar de plano depois?",
    a: "Pode, quando quiser. Se você for para um plano maior, tudo libera na hora e você paga só a diferença pelos dias que faltam até a próxima cobrança. Se for para um plano menor, a troca acontece no fim do período que você já pagou, então você não perde nada.",
  },
  {
    q: "E se um pagamento não passar?",
    a: "Fique tranquilo, nada é apagado. Se o cartão recusar ou o pagamento atrasar, o seu atendente continua funcionando por 7 dias enquanto você resolve. Se depois disso o pagamento ainda não tiver sido feito, ele fica pausado. Assim que você paga, tudo volta a funcionar como antes, com seus documentos e configurações no lugar.",
  },
  {
    q: "Vocês emitem nota fiscal?",
    a: "Sim. A nota fiscal (NFS-e) sai sozinha a cada pagamento, sem você precisar pedir.",
  },
  {
    q: "Dá para usar a Foji em outros idiomas?",
    a: "Sim. Os agentes respondem em português, inglês ou espanhol, e o painel está traduzido nos três idiomas.",
  },
  {
    q: "O que acontece se eu cancelar?",
    a: "Você pode cancelar quando quiser, pelo painel, sem multa. Você continua usando até o fim do período que já pagou, e nada mais é cobrado. Depois disso, seus dados ficam guardados por 30 dias antes de serem apagados de vez. Pode voltar quando quiser. Na primeira assinatura você tem 7 dias de arrependimento, conforme o Código de Defesa do Consumidor (Art. 49).",
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
