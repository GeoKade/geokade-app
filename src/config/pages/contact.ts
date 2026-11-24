/** Contact page content (locale-aware) for GeoKade. */
import type { LineIconName } from "@/components/icons/line-icons";
import { defaultLocale, localePath, type Locale } from "@/i18n";

function buildContact(locale: Locale) {
  const p = (path: string) => localePath(locale, path);
  const nl = locale === "nl";
  const email = "hello@geokade.com";

  return {
    meta: {
      title: nl ? "Contact" : "Contact",
      description: nl
        ? "Neem contact op over GeoKade Cloud, Enterprise of partnerships."
        : "Get in touch about GeoKade Cloud, Enterprise, or partnerships.",
    },
    hero: {
      eyebrow: nl ? "Contact" : "Contact Us",
      title: nl ? "Laten we praten over" : "Let's talk about",
      accent: nl ? "jouw geospatial uitdaging." : "your geospatial challenge.",
      description: nl
        ? "Vragen over Cloud, Enterprise-deployment, partnerships of pers — we routeren je bericht naar de juiste persoon."
        : "Questions about Cloud, Enterprise deployment, partnerships, or press — we route your message to the right person.",
    },
    channels: [
      {
        icon: "info" as LineIconName,
        title: nl ? "Product & Cloud" : "Product & Cloud",
        description: nl
          ? "Toegang tot geokade.nl, datasets, kaarten of accountvragen."
          : "Access to geokade.nl, datasets, maps, or account questions.",
        link: { label: email, href: `mailto:${email}?subject=Cloud` },
      },
      {
        icon: "building" as LineIconName,
        title: nl ? "Enterprise" : "Enterprise",
        description: nl
          ? "Private deployment, IAM, integraties en governance."
          : "Private deployment, IAM, integrations, and governance.",
        link: {
          label: nl ? "Plan een gesprek" : "Book a conversation",
          href: `mailto:sales@geokade.com?subject=Enterprise`,
        },
      },
      {
        icon: "puzzle" as LineIconName,
        title: nl ? "Partnerships" : "Partnerships",
        description: nl
          ? "Integraties, reseller- of datapartnerships."
          : "Integrations, reseller, or data partnerships.",
        link: { label: "partners@geokade.com", href: "mailto:partners@geokade.com" },
      },
      {
        icon: "mic" as LineIconName,
        title: nl ? "Pers" : "Press",
        description: nl
          ? "Interviewaanvragen, merkassets en productcontext."
          : "Interview requests, brand assets, and product context.",
        link: { label: "press@geokade.com", href: "mailto:press@geokade.com" },
      },
    ],
    docs: {
      eyebrow: nl ? "Sneller dan een formulier" : "Faster than a form",
      title: nl ? "Begin met het" : "Start with the",
      accent: nl ? "platform." : "platform.",
      description: nl
        ? "Veel antwoorden vind je door GeoKade Cloud te verkennen. Voor Enterprise en maatwerk: stuur een bericht."
        : "Many answers start by exploring GeoKade Cloud. For Enterprise and custom needs: send a message.",
      office: {
        flag: "🇳🇱",
        place: nl ? "Nederland · Europa" : "Netherlands · Europe",
        map: "/images/contact/office-map.webp",
        rows: [
          { label: nl ? "Algemeen" : "General", value: email },
          {
            label: nl ? "Platform" : "Platform",
            value: "https://geokade.nl",
          },
          {
            label: nl ? "Reactietijd" : "Response time",
            value: nl ? "Meestal binnen 1 werkdag" : "Usually within 1 business day",
          },
        ],
      },
    },
    form: {
      title: nl ? "Stuur ons een bericht" : "Send us a note",
      accent: nl ? "wanneer het jou uitkomt" : "anytime",
      fields: {
        name: { label: nl ? "Volledige naam" : "Full Name", placeholder: nl ? "Jouw naam" : "Enter your name" },
        email: {
          label: nl ? "E-mailadres" : "Email Address",
          placeholder: nl ? "jouw@organisatie.nl" : "Add your email address",
        },
        company: {
          label: nl ? "Organisatie" : "Company",
          placeholder: nl ? "Gemeente / bedrijf" : "Your organisation",
        },
        topic: {
          label: nl ? "Onderwerp" : "Topic",
          options: nl
            ? ["Cloud / product", "Enterprise", "Partnerships", "Pers", "Anders"]
            : ["Cloud / product", "Enterprise", "Partnerships", "Press", "Other"],
        },
        message: {
          label: nl ? "Waarmee kunnen we helpen?" : "What can we help with?",
          placeholder: nl ? "Vertel kort wat je nodig hebt" : "Tell us a bit about what you need",
        },
      },
      submit: nl ? "Verstuur" : "Send Message",
      sending: nl ? "Versturen…" : "Sending…",
      note: nl
        ? "Vermeld of het om Cloud, Enterprise of een partnership gaat — dan routeren we sneller."
        : "Mention whether this is about Cloud, Enterprise, or a partnership — we will route faster.",
      success: nl
        ? "Bedankt! Je bericht is onderweg. We reageren meestal binnen één werkdag."
        : "Thanks! Your message is on its way. We usually reply within one business day.",
    },
    locations: {
      eyebrow: nl ? "Locatie" : "Our locations",
      title: nl ? "Gebaseerd in Nederland," : "Based in the Netherlands,",
      accent: nl ? "gericht op Europa" : "oriented toward Europe",
      items: [
        {
          label: nl ? "Nederland" : "Netherlands",
          city: nl ? "Nederland" : "Netherlands",
          image: "/images/contact/san-francisco.webp",
          alt: nl ? "Nederland als thuisbasis" : "Netherlands as home base",
          rows: [
            { icon: "globe" as LineIconName, text: "geokade.com · geokade.nl" },
            { icon: "clock" as LineIconName, text: nl ? "CET / CEST" : "CET / CEST" },
          ],
        },
        {
          label: "Europe",
          city: "Europe",
          image: "/images/contact/lisbon.webp",
          alt: nl ? "Europese marktfocus" : "European market focus",
          rows: [
            { icon: "building" as LineIconName, text: nl ? "Overheid & infra" : "Public sector & infra" },
            { icon: "users" as LineIconName, text: nl ? "Enterprise kopers" : "Enterprise buyers" },
          ],
        },
        {
          label: nl ? "Remote" : "Remote",
          city: nl ? "Remote" : "Remote",
          image: "/images/contact/remote.webp",
          alt: nl ? "Samenwerken op afstand" : "Working remotely",
          rows: [
            { icon: "users" as LineIconName, text: nl ? "Distributed team" : "Distributed team" },
            { icon: "clock" as LineIconName, text: nl ? "Op afspraak" : "By appointment" },
          ],
        },
      ],
    },
  };
}

export function getContactPage(locale: Locale = defaultLocale) {
  return buildContact(locale);
}

/** @deprecated Prefer getContactPage(locale) */
export const contactPage = getContactPage(defaultLocale);
