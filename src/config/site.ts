/**
 * Site-wide settings (locale-aware).
 * Page text lives in src/config/pages/*.ts.
 */
import { defaultLocale, localePath, type Locale } from "@/i18n";

export type NavLink = {
  label: string;
  href: string;
};

/** Optional footer credit line. Delete `credit` in `footer` below to remove it. */
export type FooterCredit = { prefix: string; label: string; href: string };

export type SocialPlatform = "linkedin" | "x" | "youtube";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

const year = new Date().getFullYear();
const name = "GeoKade";
const legalName = "GeoKade B.V.";
const email = "hello@geokade.com";
const platformUrl = "https://geokade.nl";

const descriptions: Record<Locale, string> = {
  en: "GeoKade turns geospatial data into actionable intelligence — discover, map, analyze, and understand location-based information.",
  nl: "GeoKade maakt van geografische data bruikbare intelligentie — ontdek, visualiseer, analyseer en begrijp locatiegebonden informatie.",
};

type SiteChrome = {
  description: string;
  locale: string;
  cta: { label: string; href: string };
  nav: { main: NavLink[]; mobile: NavLink[] };
  footer: {
    tagline: string;
    newsletter: {
      label: string;
      placeholder: string;
      button: string;
      success: string;
    };
    columns: { title: string; links: NavLink[] }[];
    legal: NavLink[];
    copyright: string;
    credit?: FooterCredit;
    background: { desktop: string; mobile: string };
  };
  ui: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    themeLight: string;
    themeDark: string;
    language: string;
  };
};

function chrome(locale: Locale): SiteChrome {
  const p = (path: string) => localePath(locale, path);

  if (locale === "nl") {
    return {
      description: descriptions.nl,
      locale: "nl_NL",
      cta: { label: "Open platform", href: platformUrl },
      nav: {
        main: [
          { label: "Home", href: p("") },
          { label: "Over ons", href: p("about") },
          { label: "Hoe het werkt", href: p("how-it-works") },
          { label: "Prijzen", href: p("pricing") },
          { label: "Blog", href: p("blog") },
          { label: "Contact", href: p("contact") },
        ],
        mobile: [
          { label: "Home", href: p("") },
          { label: "Hoe het werkt", href: p("how-it-works") },
          { label: "Carrières", href: p("careers") },
          { label: "Prijzen", href: p("pricing") },
          { label: "Blog", href: p("blog") },
          { label: "Contact", href: p("contact") },
        ],
      },
      footer: {
        tagline: "Van geospatial data naar actionable intelligence",
        newsletter: {
          label: "Abonneer op onze nieuwsbrief",
          placeholder: "E-mailadres",
          button: "Abonneren",
          success: "Bedankt! Controleer je inbox om te bevestigen.",
        },
        columns: [
          {
            title: "Ontdekken",
            links: [
              { label: "Hoe het werkt", href: p("how-it-works") },
              { label: "Carrières", href: p("careers") },
              { label: "Prijzen", href: p("pricing") },
              { label: "Blog", href: p("blog") },
              { label: "FAQ", href: p("faq") },
            ],
          },
          {
            title: "Bedrijf",
            links: [
              { label: "Over ons", href: p("about") },
              { label: email, href: `mailto:${email}` },
              { label: "Contact", href: p("contact") },
              { label: "GeoKade Cloud", href: platformUrl },
            ],
          },
        ],
        legal: [
          { label: "Privacybeleid", href: p("privacy") },
          { label: "Voorwaarden", href: p("terms") },
        ],
        copyright: `© ${year} ${legalName}`,
        background: {
          desktop: "/images/patterns/tiles-yellow.webp",
          mobile: "/images/patterns/tiles-yellow-tall.webp",
        },
      },
      ui: {
        skipToContent: "Ga naar inhoud",
        openMenu: "Menu openen",
        closeMenu: "Menu sluiten",
        themeLight: "Lichte modus",
        themeDark: "Donkere modus",
        language: "Taal",
      },
    };
  }

  return {
    description: descriptions.en,
    locale: "en_US",
    cta: { label: "Open platform", href: platformUrl },
    nav: {
      main: [
        { label: "Home", href: p("") },
        { label: "About", href: p("about") },
        { label: "How it works", href: p("how-it-works") },
        { label: "Pricing", href: p("pricing") },
        { label: "Blog", href: p("blog") },
        { label: "Contact", href: p("contact") },
      ],
      mobile: [
        { label: "Home", href: p("") },
        { label: "How it works", href: p("how-it-works") },
        { label: "Careers", href: p("careers") },
        { label: "Pricing", href: p("pricing") },
        { label: "Blog", href: p("blog") },
        { label: "Contact", href: p("contact") },
      ],
    },
    footer: {
      tagline: "From geospatial data to actionable intelligence",
      newsletter: {
        label: "Subscribe to our newsletter",
        placeholder: "Enter email address",
        button: "Subscribe",
        success: "Thanks! Please check your inbox to confirm.",
      },
      columns: [
        {
          title: "Explore",
          links: [
            { label: "How it works", href: p("how-it-works") },
            { label: "Careers", href: p("careers") },
            { label: "Pricing", href: p("pricing") },
            { label: "Blog", href: p("blog") },
            { label: "FAQ", href: p("faq") },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About", href: p("about") },
            { label: email, href: `mailto:${email}` },
            { label: "Contact", href: p("contact") },
            { label: "GeoKade Cloud", href: platformUrl },
          ],
        },
      ],
      legal: [
        { label: "Privacy policy", href: p("privacy") },
        { label: "Terms & conditions", href: p("terms") },
      ],
      copyright: `© ${year} ${legalName}`,
      background: {
        desktop: "/images/patterns/tiles-yellow.webp",
        mobile: "/images/patterns/tiles-yellow-tall.webp",
      },
    },
    ui: {
      skipToContent: "Skip to content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      themeLight: "Light mode",
      themeDark: "Dark mode",
      language: "Language",
    },
  };
}

export function getSiteConfig(locale: Locale = defaultLocale) {
  const local = chrome(locale);
  return {
    name,
    legalName,
    email,
    platformUrl,
    /** Public URL – set `site` in astro.config.mjs (or the SITE_URL env var). */
    url: (import.meta.env.SITE ?? "https://geokade.com").replace(/\/$/, ""),
    brand: { mark: "/brand/mark.svg", markAlt: "/brand/mark-alt.svg" },
    socials: [
      { platform: "linkedin" as const, label: "LinkedIn", href: "https://www.linkedin.com/company/geokade" },
      { platform: "x" as const, label: "X (Twitter)", href: "https://x.com/geokade" },
      { platform: "youtube" as const, label: "YouTube", href: "https://www.youtube.com/@geokade" },
    ] satisfies SocialLink[],
    ...local,
  };
}

/** Default (English) site config for modules that cannot read the request locale. */
export const siteConfig = getSiteConfig(defaultLocale);

export type SiteConfig = ReturnType<typeof getSiteConfig>;
