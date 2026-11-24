/** How it works — GeoKade Cloud path from discovery to shared insight. */
import { getHomePage } from "./home";
import { getSiteConfig } from "@/config/site";
import { defaultLocale, localePath, type Locale } from "@/i18n";

function buildHowItWorks(locale: Locale) {
  const site = getSiteConfig(locale);
  const p = (path: string) => localePath(locale, path);
  const nl = locale === "nl";
  const [discoverStep, mapStep, shareStep] = getHomePage(locale).howItWorks.steps;

  return {
    meta: {
      title: nl ? "Hoe het werkt" : "How it works",
      description: nl
        ? "Ontdek geospatiale data, bekijk het op de kaart en deel inzichten met je organisatie — op GeoKade Cloud."
        : "Discover geospatial data, explore it on the map, and share insights with your organisation — on GeoKade Cloud.",
    },
    hero: {
      mobileEyebrow: nl ? "Hoe het werkt" : "How it works",
      accentInline: true,
      title: nl ? "Van een ruimtelijke vraag" : "From a spatial question",
      accent: nl ? "naar een gedeeld antwoord." : "to a shared answer.",
      description: nl
        ? "Vind de juiste lagen, combineer ze op de kaart en maak er iets van waar je team mee verder kan."
        : "Find the right layers, combine them on the map, and turn the result into something your team can act on.",
      primaryCta: { label: nl ? "Open platform" : "Open platform", href: site.platformUrl },
      secondaryCta: { label: nl ? "Bekijk prijzen" : "View pricing", href: p("pricing") },
    },
    heroImage: {
      src: "/images/how-it-works/public-sector-conference.png",
      alt: nl ? "GeoKade op Public Sector Conference" : "GeoKade at Public Sector Conference",
    },
    steps: {
      eyebrow: nl ? "Hoe het werkt" : "How it works",
      title: nl ? "Drie stappen naar" : "Three steps to",
      accent: nl ? "ruimtelijke helderheid." : "spatial clarity.",
      rows: [
        {
          eyebrow: nl ? "01 — Ontdek" : "01 — Discover",
          title: nl ? "Stel een vraag," : "Ask a question,",
          accent: nl ? "vind de lagen." : "find the layers.",
          description: nl
            ? "Zoek in open en eigen datasets. GeoKade stelt bronnen voor die bij je vraag passen — panden, risico, infrastructuur, planning."
            : "Search open and private datasets. GeoKade suggests sources that match your question — buildings, risk, infrastructure, planning.",
          card: discoverStep.card,
        },
        {
          eyebrow: nl ? "02 — Verken" : "02 — Explore",
          title: nl ? "Bekijk het samen" : "See it together",
          accent: nl ? "op de kaart." : "on the map.",
          description: nl
            ? "Combineer lagen, filter objecten en inspecteer attributen in context. Besluiten volgen wanneer geografie zichtbaar is."
            : "Combine layers, filter features, and inspect attributes in context. Decisions happen when geography is visible.",
          card: mapStep.card,
        },
        {
          eyebrow: nl ? "03 — Deel" : "03 — Share",
          title: nl ? "Geef het inzicht" : "Hand the insight",
          accent: nl ? "door aan je team." : "to your team.",
          description: nl
            ? "Publiceer een kaartverhaal, nodig collega’s uit in een workspace of exporteer wat stakeholders nodig hebben — zonder GIS-omweg voor elke vraag."
            : "Publish a map story, invite colleagues to a workspace, or export what stakeholders need — without a GIS detour for every question.",
          card: shareStep.card,
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: nl ? "Jouw vragen," : "Your questions,",
      accent: nl ? "helder beantwoord." : "answered clearly.",
      cta: { label: nl ? "Contact" : "Contact us", href: p("contact") },
      items: [
        {
          question: nl ? "Wat doet GeoKade Cloud precies?" : "What does GeoKade Cloud actually do?",
          answer: nl
            ? "Het helpt organisaties geospatiale data te ontdekken, te visualiseren op interactieve kaarten, relaties tussen lagen te analyseren en inzichten te delen met collega’s."
            : "It helps organisations discover geospatial data, visualise it on interactive maps, analyse relationships between layers, and share insights with colleagues.",
        },
        {
          question: nl ? "Heb ik GIS-expertise nodig?" : "Do I need GIS expertise?",
          answer: nl
            ? "Nee. Het product is bedoeld voor niet-GIS-specialisten, maar blijft nuttig voor analisten en technische professionals."
            : "No. The product is designed for non-GIS specialists while remaining useful for analysts and technical professionals.",
        },
        {
          question: nl ? "Waar komt de data vandaan?" : "Where does the data come from?",
          answer: nl
            ? "Nederlandse open data (bijvoorbeeld via PDOK-achtige bronnen), plus datasets die je organisatie onder Enterprise-afspraken koppelt."
            : "Dutch open data (for example via PDOK-style sources), plus datasets your organisation connects under Enterprise agreements.",
        },
        {
          question: nl ? "Kunnen we GeoKade in onze eigen omgeving draaien?" : "Can we run GeoKade in our own environment?",
          answer: nl
            ? "Ja. Cloud draait op geokade.nl. Enterprise-paden ondersteunen private cloud of on-premises-achtige deployment met sterkere identity- en governance-controles."
            : "Yes. Cloud is hosted at geokade.nl. Enterprise paths support private cloud or on-premises-style deployment with stronger identity and governance controls.",
        },
        {
          question: nl ? "Wat is het verschil tussen geokade.com en geokade.nl?" : "How is geokade.com different from geokade.nl?",
          answer: nl
            ? "geokade.com is de bedrijfs- en commercialsite. geokade.nl is het productplatform waar je met data en kaarten werkt."
            : "geokade.com is the corporate and commercial site. geokade.nl is the product platform where you work with data and maps.",
        },
      ],
    },
    cta: {
      title: nl ? "Klaar om jouw" : "Ready to explore",
      accent: nl ? "gebied te verkennen?" : "your territory?",
      description: nl
        ? "Open GeoKade Cloud om data te ontdekken, of neem contact op voor Teams- en Enterprise-pakketten die bij jouw organisatie passen."
        : "Open GeoKade Cloud to start discovering data, or contact us for Teams and Enterprise packaging matched to your organisation.",
      secondary: { label: nl ? "Contact" : "Contact us", href: p("contact") },
      primary: { label: nl ? "Open platform" : "Open platform", href: site.platformUrl },
    },
  };
}

export function getHowItWorksPage(locale: Locale = defaultLocale) {
  return buildHowItWorks(locale);
}

/** @deprecated Prefer getHowItWorksPage(locale) */
export const howItWorksPage = getHowItWorksPage(defaultLocale);
