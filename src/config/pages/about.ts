/**
 * About page content (locale-aware) for GeoKade.
 */
import type { LineIconName } from "@/components/icons/line-icons";
import { getSiteConfig } from "@/config/site";
import { defaultLocale, localePath, type Locale } from "@/i18n";

function buildAbout(locale: Locale) {
  const site = getSiteConfig(locale);
  const p = (path: string) => localePath(locale, path);
  const nl = locale === "nl";

  return {
    meta: {
      title: nl ? "Over ons" : "About",
      description: nl
        ? "GeoKade maakt geografische data begrijpelijk en bruikbaar voor beslissingen in de echte wereld."
        : "GeoKade makes geographic data understandable and useful for real-world decisions.",
    },
    hero: {
      eyebrow: nl ? "Over ons" : "About us",
      title: nl ? "Geografische data moet" : "Geographic data should",
      accent: nl ? "tot inzicht leiden." : "lead to insight.",
      description: nl
        ? "Organisaties hebben enorme hoeveelheden ruimtelijke informatie — versnipperd over GIS-tools, catalogs, API’s en spreadsheets. GeoKade overbrugt de kloof tussen data en besluitvorming."
        : "Organisations hold enormous amounts of spatial information — fragmented across GIS tools, catalogs, APIs, and spreadsheets. GeoKade bridges the gap between data and decision-making.",
    },
    principles: [
      {
        icon: "globe" as LineIconName,
        title: nl ? "Ontdekken zonder frictie" : "Discover without friction",
        description: nl
          ? "De juiste dataset vinden mag geen specialistenparcours zijn. Catalogs en kaarten horen bij elkaar."
          : "Finding the right dataset should not require a specialist scavenger hunt. Catalogs and maps belong together.",
      },
      {
        icon: "sparkle" as LineIconName,
        title: nl ? "Intelligentie met grond" : "Intelligence with ground truth",
        description: nl
          ? "AI helpt alleen als het gekoppeld is aan gezaghebbende geografische bronnen — geen losse chat."
          : "AI only helps when it is connected to authoritative geographic sources — not a disconnected chat.",
      },
      {
        icon: "building" as LineIconName,
        title: nl ? "Serieus Europees B2B" : "Serious European B2B",
        description: nl
          ? "We bouwen voor gemeenten, organisaties, universiteiten én private enterprise — met heldere claims, geen hype."
          : "We build for municipalities, organisations, universities, and private enterprise — with clear claims, not hype.",
      },
    ],
    story: {
      eyebrow: nl ? "Ons verhaal" : "Our story",
      title: nl ? "Van Nederlandse open data" : "From Dutch open data",
      accent: nl ? "naar Europese ambitie" : "to European ambition",
      description: nl
        ? "GeoKade start in Nederland met open geospatial bronnen zoals PDOK en BAG, en groeit naar een Europese geospatial intelligence vendor."
        : "GeoKade starts in the Netherlands with open geospatial sources such as PDOK and BAG, and grows toward a European geospatial intelligence vendor.",
      timeline: [
        {
          date: "2024",
          text: nl
            ? "Productrichting: discovery, kaarten en collaboration rond Nederlandse open data."
            : "Product direction: discovery, maps, and collaboration around Dutch open data.",
        },
        {
          date: "2025",
          text: nl
            ? "GeoKade Cloud op geokade.nl — platform voor verkennen en kaarten."
            : "GeoKade Cloud on geokade.nl — platform for exploration and mapping.",
        },
        {
          date: "2026",
          text: nl
            ? "Corporate site geokade.com: Cloud, Enterprise en Intelligence als heldere proposities."
            : "Corporate site geokade.com: Cloud, Enterprise, and Intelligence as clear propositions.",
        },
      ],
      image: {
        src: "/images/about/geo-conference-2026.png",
        alt: nl ? "GeoKade op Geo Conference 2026" : "GeoKade at Geo Conference 2026",
      },
      frame: "/images/patterns/tiles-orange.webp",
    },
    stats: {
      items: [
        {
          icon: "globe" as LineIconName,
          value: "NL",
          label: nl ? "Eerste markt: Nederland" : "Initial market: Netherlands",
        },
        {
          icon: "building" as LineIconName,
          value: "B2B",
          label: nl
            ? "Overheid, organisaties, universiteiten, private sector"
            : "Public sector, organisations, universities, private sector",
        },
        {
          icon: "sparkle" as LineIconName,
          value: "3",
          label: nl ? "Propositiestromen: Cloud, Enterprise, Intelligence" : "Offer streams: Cloud, Enterprise, Intelligence",
        },
        {
          icon: "doc" as LineIconName,
          value: "1",
          label: nl ? "Missie: data → actionable intelligence" : "Mission: data → actionable intelligence",
        },
      ],
    },
    team: {
      eyebrow: nl ? "Team" : "Our team",
      title: nl ? "Een Europees geospatial" : "A European geospatial",
      accent: nl ? "technology team" : "technology team",
      members: [
        { name: "Lukas", role: nl ? "Product & platform" : "Product & platform", avatar: "layers" as const },
        { name: "Monika", role: nl ? "Design & experience" : "Design & experience", avatar: "pin" as const },
        { name: "Ruben", role: nl ? "Spatial intelligence" : "Spatial intelligence", avatar: "grid" as const },
        { name: "Thomas", role: nl ? "Engineering" : "Engineering", avatar: "orbit" as const },
      ],
    },
    cta: {
      title: nl ? "Wil je samenwerken" : "Want to work",
      accent: nl ? "met GeoKade?" : "with GeoKade?",
      description: nl
        ? "Neem contact op over Cloud, Enterprise of partnerships."
        : "Get in touch about Cloud, Enterprise, or partnerships.",
      secondary: { label: nl ? "Contact" : "Contact us", href: p("contact") },
      primary: { label: nl ? "Open platform" : "Open platform", href: site.platformUrl },
    },
  };
}

export function getAboutPage(locale: Locale = defaultLocale) {
  return buildAbout(locale);
}

/** @deprecated Prefer getAboutPage(locale) */
export const aboutPage = getAboutPage(defaultLocale);
