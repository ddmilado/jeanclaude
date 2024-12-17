import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "ARD Ghadeer Co",
  tagline: "Shipping and Logistics Services",
  description: "ARD Ghadeer Co offers top-tier shipping and logistics services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short: "ARD Ghadeer Co offers top-tier shipping and logistics services to meet all your project needs.",
  url: "https://www.ardghadeer.com",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Shipping and Logistics Services`,
  description: "We provide top-quality shipping and logistics services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  image: ogImageSrc,
};
