// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { features } from "./src/config/features.ts";

/**
 * The public URL of your site. Used for canonical links, Open Graph and the sitemap.
 * Set SITE_URL, or replace the fallback with your domain. On Vercel the production
 * URL is picked up automatically.
 */
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://geokade.nl");

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: "ignore",
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "nl"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          nl: "nl-NL",
        },
      },
      filter: (page) => features.careers || !page.includes("/careers"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
