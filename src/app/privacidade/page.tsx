import type { Metadata } from "next";
import { Footer } from "@/components/cta-footer";
import { LegalPage, Section } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de Privacidade — Foji AI",
  description:
    "Como a Foji AI coleta, usa, armazena e protege dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
};

export default function PrivacidadePage() {
  return (
    <>
      <LegalPage
        title="Política de Privacidade"
        subtitle="Como tratamos dados pessoais na plataforma Foji AI, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
        updatedAt="23 de julho de 2026"
      >
        <Section n={1} title="Quem somos">
          <p>
            A Foji AI é uma plataforma de agentes de inteligência artificial operada por{" "}
            <strong className="text-foreground">P2 TECH INOVA SIMPLES (I.S.)</strong>, inscrita no
            CNPJ sob nº 52.417.209/0001-59 (&quot;Foji&quot;, &quot;nós&quot;).
          </p>
          <p>
            Esta Política explica quais dados pessoais tratamos, com que finalidade, com quem
            compartilhamos e quais são os seus direitos.
          </p>
        </Section>

        <Section n={2} title="Dois papéis distintos: controlador e operador">
          <p>
            Esta distinção é essencial para entender o restante deste documento:
          </p>
          <ul>
            <li>
              <strong className="text-foreground">Somos controladores</strong> dos dados de cadastro
              e uso dos nossos clientes — as empresas que contratam a Foji. Decidimos as finalidades
              desse tratamento.
            </li>
            <li>
              <strong className="text-foreground">Somos operadores</strong> dos dados que nossos
              clientes inserem ou coletam por meio da plataforma — documentos enviados, conversas
              dos visitantes do site ou do WhatsApp, contatos e oportunidades do CRM. Nesses casos,
              quem determina as finalidades é o <strong className="text-foreground">cliente</strong>,
              que atua como controlador. Tratamos esses dados apenas para prestar o serviço, seguindo
              as instruções do cliente.
            </li>
          </ul>
          <p>
            Se você conversou com um agente de IA em um site ou WhatsApp de uma empresa, essa empresa
            é a controladora dos seus dados. Para exercer direitos, procure-a diretamente — mas você
            também pode nos contatar e encaminharemos.
          </p>
        </Section>

        <Section n={3} title="Dados que coletamos">
          <p>
            <strong className="text-foreground">Dados de cadastro e conta:</strong> nome, e-mail,
            senha (armazenada apenas como hash criptográfico), nome da empresa, CNPJ, idioma e fuso
            horário, função do usuário e registros de convites entre membros da equipe.
          </p>
          <p>
            <strong className="text-foreground">Dados de pagamento:</strong> plano contratado, status
            da assinatura e histórico de cobranças. Dados completos de cartão são processados
            diretamente pelo provedor de pagamento —{" "}
            <strong className="text-foreground">não armazenamos números de cartão</strong> em nossos
            servidores.
          </p>
          <p>
            <strong className="text-foreground">Conteúdo fornecido pelo cliente:</strong> documentos
            enviados para treinar os agentes (PDF, DOCX, PPTX, XLSX), instruções e prompts
            configurados, e personalizações do widget.
          </p>
          <p>
            <strong className="text-foreground">Conversas:</strong> mensagens trocadas entre
            visitantes e os agentes de IA, no widget do site e no WhatsApp, incluindo o identificador
            do remetente (por exemplo, o número de telefone no WhatsApp), data, hora e histórico da
            sessão. O histórico é mantido para dar contexto às respostas do agente.
          </p>
          <p>
            <strong className="text-foreground">Dados de CRM e leads:</strong> nome, e-mail, telefone,
            anotações, tarefas, reuniões e oportunidades registradas pelo cliente ou capturadas pelos
            agentes.
          </p>
          <p>
            <strong className="text-foreground">Integrações autorizadas:</strong> quando o cliente
            conecta o Google Calendar, armazenamos um token de acesso{" "}
            <strong className="text-foreground">criptografado</strong> e os dados de disponibilidade
            e eventos necessários para agendar compromissos.
          </p>
          <p>
            <strong className="text-foreground">Dados técnicos:</strong> endereço IP, tipo de
            navegador e dispositivo, páginas acessadas e logs de erro e segurança.
          </p>
        </Section>

        <Section n={4} title="Finalidades e bases legais">
          <p>Tratamos dados pessoais com as seguintes finalidades e bases legais (art. 7º da LGPD):</p>
          <ul>
            <li>
              <strong className="text-foreground">Prestar o serviço contratado</strong> — criar e
              operar agentes, processar documentos, responder conversas, agendar compromissos e
              gerenciar o CRM. Base: execução de contrato.
            </li>
            <li>
              <strong className="text-foreground">Cobrança e gestão de assinaturas.</strong> Base:
              execução de contrato e cumprimento de obrigação legal ou regulatória.
            </li>
            <li>
              <strong className="text-foreground">Suporte, comunicação transacional e avisos sobre
              o serviço.</strong> Base: execução de contrato e legítimo interesse.
            </li>
            <li>
              <strong className="text-foreground">Segurança, prevenção a fraudes e abuso, e
              melhoria da plataforma.</strong> Base: legítimo interesse.
            </li>
            <li>
              <strong className="text-foreground">Comunicações de marketing</strong>, quando
              aplicável. Base: consentimento, revogável a qualquer momento.
            </li>
          </ul>
        </Section>

        <Section n={5} title="Inteligência artificial e provedores de modelos">
          <p>
            Para gerar respostas, o conteúdo relevante da conversa e trechos dos documentos do
            cliente são enviados a provedores de modelos de IA que atuam como suboperadores. Hoje
            utilizamos <strong className="text-foreground">OpenAI</strong>,{" "}
            <strong className="text-foreground">Google (Gemini)</strong> e{" "}
            <strong className="text-foreground">Amazon Bedrock</strong>.
          </p>
          <p>
            Contratamos esses provedores em modalidade corporativa (API), na qual o conteúdo enviado{" "}
            <strong className="text-foreground">não é utilizado para treinar modelos</strong> de uso
            geral. Ainda assim, recomendamos que documentos e conversas não contenham dados pessoais
            sensíveis desnecessários à finalidade do atendimento.
          </p>
          <p>
            As respostas são geradas automaticamente e podem conter imprecisões. Elas não substituem
            orientação profissional — jurídica, contábil, médica ou financeira.
          </p>
        </Section>

        <Section n={6} title="Compartilhamento e suboperadores">
          <p>
            Não vendemos dados pessoais. Compartilhamos dados apenas com prestadores necessários à
            operação do serviço, sob obrigações contratuais de confidencialidade e segurança:
          </p>
          <ul>
            <li>
              <strong className="text-foreground">Amazon Web Services (AWS)</strong> — hospedagem,
              banco de dados, armazenamento de arquivos e filas de processamento.
            </li>
            <li>
              <strong className="text-foreground">Vercel</strong> — hospedagem das interfaces web.
            </li>
            <li>
              <strong className="text-foreground">OpenAI, Google e Amazon Bedrock</strong> —
              processamento de linguagem natural (geração das respostas).
            </li>
            <li>
              <strong className="text-foreground">Meta Platforms</strong> — envio e recebimento de
              mensagens via WhatsApp Business Cloud API, quando o cliente ativa esse canal.
            </li>
            <li>
              <strong className="text-foreground">Google</strong> — agendamento no Google Calendar,
              quando autorizado pelo cliente.
            </li>
            <li>
              <strong className="text-foreground">Provedores de pagamento</strong> — processamento de
              cobranças e assinaturas.
            </li>
            <li>
              <strong className="text-foreground">Resend</strong> — envio de e-mails transacionais.
            </li>
          </ul>
          <p>
            Também podemos compartilhar dados para cumprir obrigação legal, ordem judicial ou
            requisição de autoridade competente.
          </p>
        </Section>

        <Section n={7} title="Transferência internacional de dados">
          <p>
            Parte da infraestrutura e dos provedores acima está localizada fora do Brasil,
            principalmente nos Estados Unidos. Isso significa que dados pessoais podem ser
            transferidos e processados no exterior, nos termos dos arts. 33 e seguintes da LGPD.
          </p>
          <p>
            Adotamos salvaguardas contratuais com esses fornecedores, incluindo cláusulas de proteção
            de dados e compromissos de confidencialidade e segurança compatíveis com a legislação
            brasileira.
          </p>
        </Section>

        <Section n={8} title="Segurança da informação">
          <p>
            Empregamos medidas técnicas e administrativas para proteger os dados, entre elas:
            criptografia em trânsito (TLS/HTTPS), criptografia de credenciais sensíveis em repouso
            (AES-256-GCM), senhas armazenadas apenas como hash, autenticação por token com
            expiração, isolamento lógico de dados entre clientes, controle de acesso por função e
            registro de auditoria de ações administrativas.
          </p>
          <p>
            Nenhum sistema é totalmente imune a incidentes. Em caso de incidente de segurança
            relevante, comunicaremos os titulares e a ANPD conforme o art. 48 da LGPD.
          </p>
        </Section>

        <Section n={9} title="Retenção e eliminação">
          <p>
            Mantemos os dados enquanto a conta estiver ativa e pelo tempo necessário às finalidades
            descritas. Encerrada a relação contratual, os dados podem ser eliminados ou anonimizados
            em prazo razoável, ressalvada a guarda exigida por obrigação legal — por exemplo, registros
            fiscais e contábeis — ou para exercício regular de direitos.
          </p>
          <p>
            O cliente pode excluir documentos, contatos e agentes a qualquer momento pela plataforma.
            A exclusão da conta pode ser solicitada pelos canais de contato.
          </p>
        </Section>

        <Section n={10} title="Seus direitos como titular">
          <p>Nos termos do art. 18 da LGPD, você pode solicitar:</p>
          <ul>
            <li>confirmação da existência de tratamento;</li>
            <li>acesso aos dados;</li>
            <li>correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
            <li>portabilidade a outro fornecedor;</li>
            <li>eliminação dos dados tratados com base em consentimento;</li>
            <li>informação sobre compartilhamento com terceiros;</li>
            <li>revogação do consentimento; e</li>
            <li>revisão de decisões automatizadas, quando aplicável.</li>
          </ul>
          <p>
            Para exercer esses direitos, escreva para{" "}
            <a href="mailto:privacidade@fojiai.com" className="text-primary hover:underline">
              privacidade@fojiai.com
            </a>
            . Responderemos nos prazos previstos em lei. Podemos solicitar informações adicionais
            para confirmar sua identidade.
          </p>
        </Section>

        <Section n={11} title="Cookies">
          <p>
            Utilizamos cookies e tecnologias semelhantes estritamente necessários para autenticação,
            manutenção de sessão, preferências (como idioma e tema) e segurança. Você pode bloquear
            cookies nas configurações do navegador, ciente de que isso pode impedir o funcionamento
            do painel.
          </p>
        </Section>

        <Section n={12} title="Uso por menores de idade">
          <p>
            A plataforma destina-se a pessoas jurídicas e profissionais maiores de 18 anos. Não
            coletamos intencionalmente dados de crianças e adolescentes. Se identificarmos esse tipo
            de coleta sem a devida autorização, eliminaremos os dados.
          </p>
        </Section>

        <Section n={13} title="Alterações desta Política">
          <p>
            Podemos atualizar esta Política para refletir mudanças no serviço ou na legislação. A
            data da última atualização consta no topo desta página. Alterações relevantes serão
            comunicadas por e-mail ou por aviso no painel.
          </p>
        </Section>

        <Section n={14} title="Encarregado e contato">
          <p>
            Para assuntos relacionados à proteção de dados, incluindo o contato com o Encarregado
            (DPO):
          </p>
          <p>
            <a href="mailto:privacidade@fojiai.com" className="text-primary hover:underline">
              privacidade@fojiai.com
            </a>
          </p>
          <p>
            Você também tem o direito de peticionar perante a Autoridade Nacional de Proteção de
            Dados (ANPD).
          </p>
        </Section>
      </LegalPage>
      <Footer />
    </>
  );
}
