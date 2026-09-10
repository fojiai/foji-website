import type { Metadata } from "next";
import { Footer } from "@/components/cta-footer";
import { LegalPage, Section } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Exclusão de Dados — Foji AI",
  description:
    "Como excluir os dados que a Foji AI mantém sobre você ou sua empresa, em conformidade com a LGPD (Lei nº 13.709/2018) e as políticas da Meta.",
};

export default function ExclusaoDeDadosPage() {
  return (
    <>
      <LegalPage
        title="Exclusão de Dados"
        subtitle="Como excluir os dados que a Foji AI mantém sobre você ou sua empresa. Você pode fazer isso sozinho, a qualquer momento, ou pedir para nós."
        updatedAt="10 de setembro de 2026"
      >
        <Section n={1} title="Excluindo você mesmo">
          <p>
            Entre na sua conta e acesse{" "}
            <strong className="text-foreground">
              Configurações → Zona de perigo → Excluir empresa
            </strong>
            .
          </p>
          <p>
            Você precisa ser o proprietário do espaço de trabalho e confirmar digitando o nome da
            empresa. A exclusão é imediata e não pode ser desfeita.
          </p>
        </Section>

        <Section n={2} title="Pedindo a exclusão por e-mail">
          <p>
            Se você não consegue acessar sua conta, envie um e-mail para{" "}
            <a href="mailto:suporte@fojiai.com" className="text-primary hover:underline">
              suporte@fojiai.com
            </a>{" "}
            a partir do endereço cadastrado, pedindo a exclusão dos seus dados.
          </p>
          <p>
            Podemos pedir informações adicionais para confirmar que a conta é sua antes de excluir
            qualquer coisa. Concluímos a exclusão em até 30 dias a partir da confirmação.
          </p>
        </Section>

        <Section n={3} title="O que é excluído">
          <p>Ao excluir sua conta, removemos de forma permanente:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Sua conta e seus dados de acesso;</li>
            <li>Os agentes criados e suas configurações;</li>
            <li>Os documentos que você enviou e o conteúdo extraído deles;</li>
            <li>O histórico de conversas do widget e do WhatsApp;</li>
            <li>Contatos, negócios, tarefas e demais dados do CRM;</li>
            <li>A conexão com o WhatsApp e com o Google Agenda.</li>
          </ul>
        </Section>

        <Section n={4} title="O que pode ser mantido">
          <p>
            Registros de cobrança e notas fiscais são mantidos pelo prazo exigido pela legislação
            fiscal brasileira, mesmo após a exclusão da conta. Esses registros contêm apenas dados
            de faturamento — não o conteúdo das suas conversas ou documentos.
          </p>
          <p>
            Registros técnicos (logs) podem permanecer por um período curto em backups antes de
            serem sobrescritos.
          </p>
        </Section>

        <Section n={5} title="Dúvidas e contato">
          <p>
            Para qualquer dúvida sobre a exclusão dos seus dados, escreva para{" "}
            <a href="mailto:suporte@fojiai.com" className="text-primary hover:underline">
              suporte@fojiai.com
            </a>
            .
          </p>
          <p>
            Para assuntos de proteção de dados e contato com o Encarregado (DPO), escreva para{" "}
            <a href="mailto:privacidade@fojiai.com" className="text-primary hover:underline">
              privacidade@fojiai.com
            </a>
            . Você também pode consultar nossa{" "}
            <a href="/privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </a>
            .
          </p>
        </Section>
      </LegalPage>
      <Footer />
    </>
  );
}
