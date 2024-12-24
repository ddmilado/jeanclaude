import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "PKT Travels, Tours & Events",
  tagline: "Travels, Tours & Events",
  description: "PKT Travels, Tours & Events is a full-service travel and event management company dedicated to creating unforgettable experiences.",
  description_short: "PKT Travels, Tours & Events is a full-service travel and event management company dedicated to creating unforgettable experiences.",
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
  title: `${SITE.title}: : Travels, Tours & Events`,
  description: "PKT Travels, Tours & Events is a full-service travel and event management company dedicated to creating unforgettable experiences.",
  image: ogImageSrc,
};
