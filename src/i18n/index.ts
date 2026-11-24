import { getRelativeLocaleUrl } from "astro:i18n";

export const locales = ["en", "nl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "nl";
}

export function resolveLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : defaultLocale;
}

/** Localized path for an internal route (no leading slash required). */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+/, "");
  return getRelativeLocaleUrl(locale, clean);
}

/**
 * Strip `/nl` (or other locale) prefix so we can map between locales.
 * `/nl/about` → `/about`, `/about` → `/about`, `/nl` → `/`
 */
export function stripLocalePrefix(pathname: string): string {
  const path = pathname.replace(/\/$/, "") || "/";
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (path === `/${locale}`) return "/";
    if (path.startsWith(`/${locale}/`)) return path.slice(locale.length + 1) || "/";
  }
  return path;
}

/** Same page in another locale. */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localePath(target, stripLocalePrefix(pathname).replace(/^\//, ""));
}

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; label: string; short: string }> = {
  en: { htmlLang: "en", ogLocale: "en_US", label: "English", short: "EN" },
  nl: { htmlLang: "nl", ogLocale: "nl_NL", label: "Nederlands", short: "NL" },
};
