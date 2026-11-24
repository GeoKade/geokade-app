/** Pricing page — indicative packaging for GeoKade. Not a binding commercial offer. */
import type { LineIconName } from "@/components/icons/line-icons";

export type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
  badge?: string;
};

export const pricingPage = {
  meta: {
    title: "Pricing",
    description: "Indicative packaging for GeoKade Cloud and Enterprise. Contact us for a proposal matched to your organisation.",
  },
  hero: {
    eyebrow: "Pricing",
    title: "Start with Cloud,",
    accent: "scale with control",
    description: "Indicative packages for evaluation. Final commercial terms depend on scope, users, and deployment.",
  },
  billing: { monthly: "Monthly", yearly: "Annual", yearlyNote: "discuss", perMonth: "/ month" },
  plans: [
    {
      name: "Cloud",
      monthly: 0,
      yearly: 0,
      description: "Explore Dutch open data and hosted workspaces.",
      features: [
        "Access via geokade.nl",
        "Dataset discovery",
        "Interactive maps",
        "Selected public-data capabilities",
        "Email support",
      ],
      cta: { label: "Open platform", href: "https://geokade.nl" },
    },
    {
      name: "Teams",
      monthly: 0,
      yearly: 0,
      description: "Collaboration for departments and project teams.",
      features: [
        "Everything in Cloud",
        "Shared workspaces",
        "Map stories & sharing",
        "Priority onboarding conversation",
        "Named support channel",
      ],
      cta: { label: "Talk to us", href: "/contact" },
      featured: true,
      badge: "Most requested",
    },
    {
      name: "Enterprise",
      monthly: 0,
      yearly: 0,
      description: "Private deployment, governance, and integration.",
      features: [
        "Private / customer-managed options",
        "IAM & role-based access",
        "Enterprise data connectors",
        "Data residency discussions",
        "Solution architecture support",
      ],
      cta: { label: "Book a conversation", href: "/contact" },
    },
  ] satisfies Plan[],
  comparison: {
    title: "What's in each path",
    columns: ["Capability", "Cloud", "Teams", "Enterprise"],
    highlight: 1,
    rows: [
      ["Hosted platform (geokade.nl)", "Included", "Included", "Optional / hybrid"],
      ["Dutch open-data discovery", "Included", "Included", "Included"],
      ["Interactive mapping", "Included", "Included", "Included"],
      ["Shared workspaces", "Limited", "Included", "Included"],
      ["Map stories", "Basic", "Included", "Included"],
      ["Private deployment", "-", "-", "Included"],
      ["IAM / SSO discussions", "-", "-", "Included"],
      ["Custom data connectors", "-", "On request", "Included"],
      ["Support", "Email", "Named channel", "Architecture partner"],
    ] as [string, string, string, string][],
  },
  promises: [
    {
      icon: "shield" as LineIconName,
      title: "Honest availability",
      description: "We do not advertise unfinished features as production-ready. Roadmap stays labelled as roadmap.",
    },
    {
      icon: "sliders" as LineIconName,
      title: "Beside your GIS",
      description: "GeoKade complements existing GIS and data platforms instead of forcing a rip-and-replace.",
    },
    {
      icon: "users" as LineIconName,
      title: "Built for organisations",
      description: "Municipal, infrastructure, and enterprise buyers — not consumer map toys.",
    },
    {
      icon: "shieldLock" as LineIconName,
      title: "Control when you need it",
      description: "Enterprise conversations start from governance, identity, and data residency — not marketing slides.",
    },
  ],
  track: {
    eyebrow: "Commercial note",
    title: "Numbers above are",
    accent: "indicative",
    description:
      "Displayed amounts may show as placeholders during evaluation. We finalise pricing with you based on users, data scope, and deployment. No surprise claims about certifications we do not hold.",
    image: {
      src: "/images/pricing/track.webp",
      alt: "Illustration of transparent commercial tracking for platform usage",
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fair questions,",
    accent: "straight answers.",
    cta: { label: "Contact us", href: "/contact" },
    items: [
      {
        question: "Why do some prices show as zero?",
        answer:
          "Cloud entry and custom Enterprise deals are confirmed with you directly. The page communicates packaging, not a self-serve checkout.",
      },
      {
        question: "Can we start on Cloud and move to Enterprise later?",
        answer: "Yes. Many organisations evaluate value on Cloud before discussing private deployment.",
      },
      {
        question: "Is AI usage billed separately?",
        answer:
          "Possible commercial models include usage-based AI and advanced analysis. Exact metering is confirmed in a proposal — we do not invent live meters here.",
      },
      {
        question: "Do you offer public-sector procurement support?",
        answer: "We can support evaluation conversations for municipalities and agencies. Reach out via the contact form.",
      },
      {
        question: "Where is the product?",
        answer: "The live platform is at geokade.nl. This site (geokade.com) is the corporate and commercial front door.",
      },
    ],
  },
} as const;
