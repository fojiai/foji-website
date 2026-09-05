import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
import { FAQS } from "@/lib/faq-data";

/**
 * JSON-LD structured data. This is what earns rich results in Google:
 *  - Organization: the brand knowledge panel and sitelinks.
 *  - SoftwareApplication: an app card with the price and rating slot.
 *  - FAQPage: the expandable Q&A that can appear directly under our result,
 *    which is why FAQS is shared with the visible section — Google requires
 *    the marked-up answers to match what the visitor sees.
 *
 * Rendered server-side as plain <script> tags, so crawlers read it in the
 * initial HTML with no JavaScript.
 */
export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-icon.png`,
    description: SITE_DESCRIPTION,
    sameAs: [] as string[],
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "pt-BR",
    offers: {
      "@type": "Offer",
      // Priced in BRL; the entry plan starts here. Kept generic so it does not
      // fall out of sync with the live plans behind the pricing table.
      priceCurrency: "BRL",
      price: "59",
      availability: "https://schema.org/InStock",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {[organization, software, faqPage].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Content is our own static objects, never user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
