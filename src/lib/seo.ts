import { getSiteConfig } from "@/config/site";
import { defaultLocale, type Locale } from "@/i18n";

export const defaultOgImage = { src: "/og.png", width: 1200, height: 630 };

export function defaultTitle(locale: Locale = defaultLocale) {
  const site = getSiteConfig(locale);
  return locale === "nl"
    ? `${site.name} – Van geospatial data naar actionable intelligence`
    : `${site.name} – From geospatial data to actionable intelligence`;
}

/** "Pricing" → "Pricing | GeoKade". No title → the default site title. */
export function pageTitle(title?: string, locale: Locale = defaultLocale) {
  const site = getSiteConfig(locale);
  return title ? `${title} | ${site.name}` : defaultTitle(locale);
}

/** Absolute URL for a path, using the `site` from astro.config.mjs. */
export function absoluteUrl(path: string, locale: Locale = defaultLocale) {
  const site = getSiteConfig(locale);
  return new URL(path, `${site.url}/`).toString();
}
