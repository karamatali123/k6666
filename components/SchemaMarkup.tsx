import { faqs } from "@/components/FaqSection";
import { K666_INFO, SITE_URL } from "@/lib/constants";

export default function SchemaMarkup() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: K666_INFO.appName,
    operatingSystem: "Android",
    applicationCategory: "GameApplication",
    description:
      "K666 Game is a mobile casino and card gaming app for Pakistan users with Easypaisa and JazzCash payment support.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "3.8",
      ratingCount: "1240",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KK666.com.pk — K666 Game Guide",
    url: SITE_URL,
    logo: `${SITE_URL}/k666images/k6661.jpeg`,
    sameAs: [
      "https://www.facebook.com/",
      "https://www.youtube.com/",
      "https://t.me/",
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "K666 Game Pakistan Guide",
        item: SITE_URL,
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KK666.com.pk — K666 Game Pakistan Guide",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const schemas = [softwareApplication, faqPage, organization, breadcrumb, website];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
