import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/cta-footer";
import { LegalPage, Section } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Termos de Uso — Foji AI",
  description:
    "Condições de uso da plataforma Foji AI: contratação, planos, uso aceitável, responsabilidades e limitações.",
};

export default function TermosPage() {
  return (
    <>
      <LegalPage
        title="Termos de Uso"
        subtitle="Estas condições regem o acesso e o uso da plataforma Foji AI. Ao criar uma conta ou utilizar o serviço, você concorda com elas."
        updatedAt="23 de julho de 2026"
      >
        <Section n={1} title="Objeto e aceitação">
          <p>
            A Foji AI, operada por{" "}
            <strong className="text-foreground">P2 TECH INOVA SIMPLES (I.S.)</strong>, CNPJ
            52.417.209/0001-59 (&quot;Foji&quot;), é uma plataforma que permite criar agentes de
            inteligência artificial treinados com documentos do cliente e disponibilizá-los em um
            widget de site e no WhatsApp, além de recursos de CRM, captura de leads, agendamento e
            transferência para atendimento humano.
          </p>
          <p>
            Ao criar uma conta, contratar um plano ou utilizar o serviço, você declara ter lido e
            aceito estes Termos e a{" "}
            <Link href="/privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </Link>
            . Se você aceita em nome de uma empresa, declara ter poderes para representá-la.
          </p>
        </Section>

        <Section n={2} title="Cadastro e conta">
          <p>
            O cadastro exige informações verdadeiras, completas e atualizadas. Você é responsável
            pela guarda das credenciais e por todas as atividades realizadas na sua conta, inclusive
            por usuários que você convidar.
          </p>
          <p>
            O serviço destina-se a pessoas jurídicas e profissionais maiores de 18 anos. Comunique-nos
            imediatamente qualquer uso não autorizado.
          </p>
        </Section>

        <Section n={3} title="Planos, preços e pagamento">
          <p>
            Os recursos disponíveis, os limites de uso (como número de agentes, usuários, conversas e
            mensagens) e os valores são os descritos no plano contratado, apresentados no site e no
            painel no momento da contratação.
          </p>
          <p>
            A assinatura é <strong className="text-foreground">recorrente</strong> e renova
            automaticamente ao fim de cada ciclo, até que seja cancelada. Os valores são expressos em
            reais (R$), salvo indicação em contrário.
          </p>
          <p>
            Podemos reajustar preços mediante aviso prévio de, no mínimo, 30 dias. O reajuste não
            atinge ciclos já pagos. O não pagamento pode acarretar suspensão do acesso após
            notificação.
          </p>
        </Section>

        <Section n={4} title="Teste gratuito, cancelamento e reembolso">
          <p>
            Podemos oferecer período de teste gratuito. Ao final, a cobrança do plano escolhido é
            iniciada, salvo cancelamento antes do término.
          </p>
          <p>
            Você pode cancelar a qualquer momento pelo painel. O cancelamento interrompe a renovação
            seguinte e o acesso permanece até o fim do período já pago —{" "}
            <strong className="text-foreground">sem multa ou fidelidade</strong>.
          </p>
          <p>
            Nos termos do art. 49 do Código de Defesa do Consumidor, quando aplicável, o direito de
            arrependimento pode ser exercido em até 7 dias da contratação, com devolução dos valores
            pagos.
          </p>
        </Section>

        <Section n={5} title="Uso aceitável">
          <p>É vedado utilizar a plataforma para:</p>
          <ul>
            <li>enviar spam, mensagens não solicitadas ou disparos em massa sem consentimento;</li>
            <li>
              praticar atos ilícitos, fraude, discriminação, assédio ou violação de direitos de
              terceiros;
            </li>
            <li>
              publicar conteúdo ilegal, difamatório, obsceno ou que viole direitos de propriedade
              intelectual;
            </li>
            <li>
              fazer o agente se passar por pessoa real de forma enganosa, ou omitir que se trata de
              atendimento automatizado quando isso induzir o usuário a erro;
            </li>
            <li>
              tentar burlar limites do plano, realizar engenharia reversa, sobrecarregar ou obter
              acesso não autorizado à infraestrutura;
            </li>
            <li>
              tratar dados pessoais sem base legal adequada, ou inserir dados sensíveis sem
              necessidade e sem as devidas salvaguardas.
            </li>
          </ul>
        </Section>

        <Section n={6} title="WhatsApp e regras da Meta">
          <p>
            O canal de WhatsApp é fornecido por meio da{" "}
            <strong className="text-foreground">WhatsApp Business Cloud API</strong>, da Meta. Ao
            ativá-lo, o cliente também se sujeita às políticas da Meta e do WhatsApp Business,
            incluindo as regras de mensagens, de qualidade e de conteúdo.
          </p>
          <p>
            O cliente é responsável por obter{" "}
            <strong className="text-foreground">opt-in prévio e comprovável</strong> dos
            destinatários antes de enviar mensagens, conforme exigido pela Meta e pela LGPD. Também é
            responsável pelo número de telefone utilizado e por sua titularidade.
          </p>
          <p>
            A Meta pode aplicar limites de envio, exigir modelos (templates) aprovados, cobrar por
            mensagem e restringir, suspender ou bloquear números que violem suas políticas. Essas
            decisões são da Meta e{" "}
            <strong className="text-foreground">estão fora do controle da Foji</strong>. Eventuais
            custos cobrados pela Meta seguem as regras do plano contratado.
          </p>
        </Section>

        <Section n={7} title="Conteúdo do cliente e propriedade intelectual">
          <p>
            Os documentos, textos, marcas e demais materiais enviados permanecem de{" "}
            <strong className="text-foreground">propriedade do cliente</strong>. Você nos concede
            apenas a licença necessária para hospedar, processar e exibir esse conteúdo com a
            finalidade de prestar o serviço.
          </p>
          <p>
            Você declara possuir os direitos necessários sobre o conteúdo que enviar e responde por
            eventuais violações.
          </p>
          <p>
            A plataforma, sua marca, código-fonte, layout e documentação são de titularidade da Foji
            e protegidos pela legislação aplicável. Estes Termos não transferem qualquer direito de
            propriedade intelectual sobre a plataforma.
          </p>
        </Section>

        <Section n={8} title="Natureza das respostas geradas por IA">
          <p>
            As respostas dos agentes são{" "}
            <strong className="text-foreground">geradas automaticamente</strong> por modelos de
            inteligência artificial e podem conter erros, omissões ou informações desatualizadas,
            ainda que baseadas nos documentos fornecidos.
          </p>
          <p>
            O cliente é responsável por configurar, testar e revisar o comportamento dos seus agentes,
            e por comunicar aos seus usuários que se trata de atendimento automatizado.
          </p>
          <p>
            As respostas <strong className="text-foreground">não constituem aconselhamento</strong>{" "}
            jurídico, contábil, médico, financeiro ou profissional de qualquer natureza. Decisões
            tomadas com base nelas são de responsabilidade exclusiva de quem as toma.
          </p>
        </Section>

        <Section n={9} title="Integrações de terceiros">
          <p>
            A plataforma pode se integrar a serviços de terceiros, como WhatsApp (Meta), Google
            Calendar, provedores de modelos de IA e provedores de pagamento. O uso dessas integrações
            é opcional e sujeito aos termos dos respectivos fornecedores.
          </p>
          <p>
            Indisponibilidades, mudanças de política, alterações de preço ou descontinuação por parte
            desses terceiros podem afetar funcionalidades, sem que isso configure descumprimento
            contratual por parte da Foji.
          </p>
        </Section>

        <Section n={10} title="Disponibilidade e suporte">
          <p>
            Empregamos esforços para manter o serviço disponível de forma contínua, mas não garantimos
            operação ininterrupta ou livre de falhas. Podem ocorrer interrupções para manutenção,
            atualizações ou por causas alheias ao nosso controle.
          </p>
          <p>
            O suporte é prestado pelos canais indicados no site e no painel, conforme o plano
            contratado.
          </p>
        </Section>

        <Section n={11} title="Limitação de responsabilidade">
          <p>
            Na máxima extensão permitida pela legislação aplicável, a responsabilidade da Foji por
            perdas e danos relacionados ao serviço fica limitada ao valor efetivamente pago pelo
            cliente nos <strong className="text-foreground">12 meses</strong> anteriores ao evento que
            deu origem à responsabilidade.
          </p>
          <p>
            Não respondemos por lucros cessantes, perda de oportunidades de negócio, perda de dados
            decorrente de ato do próprio cliente, nem por danos causados por uso em desacordo com
            estes Termos ou por decisões tomadas com base em respostas geradas por IA.
          </p>
          <p>
            Nada nestes Termos afasta direitos irrenunciáveis assegurados por lei, especialmente pelo
            Código de Defesa do Consumidor, quando aplicável.
          </p>
        </Section>

        <Section n={12} title="Suspensão e rescisão">
          <p>
            Podemos suspender ou encerrar o acesso, mediante notificação sempre que possível, em caso
            de violação destes Termos, inadimplência, risco à segurança da plataforma ou exigência
            legal.
          </p>
          <p>
            Você pode encerrar a relação a qualquer momento cancelando a assinatura. Após o
            encerramento, os dados são tratados conforme a{" "}
            <Link href="/privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </Link>
            . Recomendamos exportar previamente as informações que desejar preservar.
          </p>
        </Section>

        <Section n={13} title="Proteção de dados">
          <p>
            O tratamento de dados pessoais observa a LGPD e está detalhado na{" "}
            <Link href="/privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </Link>
            , que integra estes Termos.
          </p>
          <p>
            Em relação aos dados que o cliente insere ou coleta pela plataforma, o cliente atua como{" "}
            <strong className="text-foreground">controlador</strong> e a Foji como{" "}
            <strong className="text-foreground">operadora</strong>, tratando-os conforme as instruções
            do cliente e o necessário à prestação do serviço.
          </p>
        </Section>

        <Section n={14} title="Alterações destes Termos">
          <p>
            Podemos alterar estes Termos para refletir mudanças no serviço ou na legislação. Mudanças
            relevantes serão comunicadas por e-mail ou aviso no painel, com antecedência razoável. O
            uso continuado após a vigência implica concordância.
          </p>
        </Section>

        <Section n={15} title="Lei aplicável e foro">
          <p>
            Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro
            da comarca da sede da Foji para dirimir controvérsias, com renúncia a qualquer outro, por
            mais privilegiado que seja — ressalvado, no caso de relação de consumo, o direito de o
            consumidor demandar no foro de seu domicílio.
          </p>
        </Section>
      </LegalPage>
      <Footer />
    </>
  );
}
