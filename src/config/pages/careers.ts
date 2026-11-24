/** Careers page text. Job posts live in src/content/careers/*.mdx. */
import type { LineIconName } from "@/components/icons/line-icons";
import { homePage } from "./home";
import { localePath } from "@/i18n";

const launchVisual = homePage.features[0].visual;

export const careersPage = {
  meta: {
    title: "Careers",
    description: "Build geospatial intelligence for European organisations. Remote-friendly roles across product, engineering, and customer success.",
  },
  hero: {
    eyebrow: "Careers",
    title: "Build geospatial",
    accent: "intelligence.",
    description:
      "A focused team shipping Cloud, Enterprise paths, and spatial intelligence — with customers across government, organisations, universities, and private enterprise.",
  },
  values: [
    {
      id: "pace",
      label: "Pace",
      eyebrow: "01 — Pace",
      title: "Ship what",
      accent: "customers can trust",
      description: "Prefer honest, working slices over theatrical roadmaps. Public-sector buyers notice the difference.",
      visual: launchVisual,
    },
    {
      id: "scope",
      label: "Scope",
      eyebrow: "02 — Scope",
      title: "Own a whole",
      accent: "surface",
      description: "From catalog UX to tile performance to deployment stories — people own problems end to end.",
      visual: homePage.features[1].visual,
    },
    {
      id: "contact",
      label: "Contact",
      eyebrow: "03 — Contact",
      title: "Stay close to",
      accent: "the territory",
      description:
        "Talk to municipalities, universities, organisations, utilities, and private GIS teams regularly. Spatial products are won in the field.",
      visual: homePage.features[2].visual,
    },
  ],
  roles: {
    title: "Open roles",
    note: "Remote in NL/EU unless noted",
    viewRole: "View role",
  },
  benefits: {
    title: "What comes",
    accent: "with it",
    items: [
      {
        icon: "moneyBag" as LineIconName,
        title: "Clear compensation",
        description: "Published ranges on each role. No negotiation theatre.",
      },
      {
        icon: "chart" as LineIconName,
        title: "Meaningful ownership",
        description: "Small team, large surface area — your work shows up in the product quickly.",
      },
      {
        icon: "laptop" as LineIconName,
        title: "Remote with overlap",
        description: "Work from NL/EU timezones with shared collaboration hours.",
      },
      {
        icon: "users" as LineIconName,
        title: "Customer proximity",
        description: "Regular contact with the organisations that use geospatial data for real decisions.",
      },
      {
        icon: "heart" as LineIconName,
        title: "Health & leave",
        description: "Competitive health arrangements and leave for your location.",
      },
      {
        icon: "rocket" as LineIconName,
        title: "Platform access",
        description: "Use GeoKade Cloud as part of how we work — dogfood the map, not only the slides.",
      },
    ],
  },
  cta: {
    title: "None of these",
    accent: "quite you?",
    description: "Tell us what you want to own in geospatial intelligence.",
    secondary: { label: "Contact us", href: localePath("en", "contact") },
    primary: { label: "Open platform", href: "https://geokade.nl" },
  },
  hiring: {
    eyebrow: "Hiring process",
    title: "A clear process,",
    accent: "respectful of your time.",
    steps: [
      {
        title: "Intro call",
        description: "30 minutes on mutual fit and what you want to own next.",
        image: "/images/careers/hiring-1.webp",
        alt: "Intro call scheduled",
      },
      {
        title: "Craft conversation",
        description: "Deep dive on work you have shipped — product, maps, or systems.",
        image: "/images/careers/hiring-2.webp",
        alt: "Craft conversation with the team",
      },
      {
        title: "Practical exercise",
        description: "A scoped problem from our backlog. Paid when it requires significant time.",
        image: "/images/careers/hiring-3.webp",
        alt: "Practical hiring exercise",
      },
      {
        title: "Offer",
        description: "Decision quickly after the final conversation.",
        image: "/images/careers/hiring-4.webp",
        alt: "Offer conversation",
      },
    ],
  },
  job: {
    breadcrumb: "Careers",
    cover: "/images/how-it-works/video-poster.webp",
    coverAlt: "Team collaborating on maps and geospatial product work",
    compensation: "Compensation",
    details: "Details",
    companyLabel: "Company",
    typeLabel: "Employment type",
    functionLabel: "Job function",
    postedLabel: "Posted",
    apply: { label: "Apply for this role", href: localePath("en", "contact") },
  },
} as const;
