/**
 * Central site config. The marketing site lives at the apex domain; the app and
 * API are on subdomains (app.fojiai.com, api.fojiai.com). If the marketing site
 * is served from www or another host, change SITE_URL here and everything —
 * canonical, sitemap, robots, OG image, JSON-LD — follows.
 */
export const SITE_URL = "https://fojiai.com";

export const SITE_NAME = "Foji AI";

/** Under 60 chars where possible so Google doesn't truncate it in results. */
export const SITE_TITLE =
  "Foji AI — IA no seu WhatsApp, treinada com os seus documentos";

export const SITE_DESCRIPTION =
  "Coloque uma IA para atender seus clientes no WhatsApp e no seu site, " +
  "treinada com os seus próprios documentos. Configuração em 5 minutos, sem " +
  "programar. Conforme a LGPD. Feita para empresas brasileiras.";

/** Words a Brazilian owner actually types into Google. */
export const SITE_KEYWORDS = [
  "atendimento automático no WhatsApp",
  "chatbot com IA para WhatsApp",
  "IA para atendimento ao cliente",
  "agente de IA treinado com documentos",
  "chatbot para site",
  "WhatsApp Business API",
  "atendimento 24 horas",
  "automação de atendimento",
  "inteligência artificial para empresas",
  "LGPD",
];
