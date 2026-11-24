/** FAQ page content. Visible answers are also used as FAQPage structured data. */
export const faqPage = {
  meta: {
    title: "FAQ",
    description: "Answers about GeoKade Cloud, Enterprise, Intelligence, and how geokade.nl relates to geokade.nl.",
  },
  hero: {
    eyebrow: "FAQ",
    title: "Frequently",
    accent: "asked questions.",
    description: "Straight answers about the platform, deployment options, and what is available today.",
  },
  groups: [
    {
      id: "getting-started",
      label: "Getting started",
      items: [
        {
          question: "What is GeoKade?",
          answer:
            "GeoKade is a geospatial intelligence company. We help organisations discover, map, analyze, and understand location-based information — from Dutch open data to enterprise datasets.",
        },
        {
          question: "What is the difference between geokade.nl and geokade.nl?",
          answer:
            "geokade.nl is the corporate and commercial website. geokade.nl is the product platform (GeoKade Cloud) where you work with data and maps.",
        },
        {
          question: "Who is GeoKade for?",
          answer:
            "Municipalities, provinces, and agencies — and equally organisations, universities, research institutes, NGOs, infrastructure and utility teams, planning and engineering firms, and private enterprises that need spatial intelligence with governance.",
        },
        {
          question: "Do I need to be a GIS specialist?",
          answer:
            "No. The product aims to be approachable for non-GIS specialists while remaining useful for analysts and technical professionals.",
        },
      ],
    },
    {
      id: "product",
      label: "Product & platform",
      items: [
        {
          question: "What is GeoKade Cloud?",
          answer:
            "A hosted geospatial intelligence environment for discovery, interactive maps, collaboration, and related workflows — suited to municipalities, organisations, universities, and teams that do not want to run their own GIS infrastructure.",
        },
        {
          question: "What is GeoKade Enterprise?",
          answer:
            "A deployable option for public and private organisations that need private deployment, IAM, data residency, governance, and integration with existing systems — including private-sector buyers with stricter control requirements.",
        },
        {
          question: "What is GeoKade Intelligence?",
          answer:
            "The analytical capability layer — including grounded spatial questions and analysis — that differentiates GeoKade from a simple map viewer or open-data portal. Some capabilities are roadmap and are labelled as such.",
        },
        {
          question: "Does GeoKade replace my GIS?",
          answer:
            "No. GeoKade is designed to sit alongside existing GIS and data platforms, making geographic information more accessible across teams.",
        },
      ],
    },
    {
      id: "data-trust",
      label: "Data & trust",
      items: [
        {
          question: "Which data sources do you support?",
          answer:
            "Initial focus includes Dutch public geospatial services such as PDOK and BAG, plus the ability to bring enterprise and private sources depending on product and deployment.",
        },
        {
          question: "How do you talk about AI?",
          answer:
            "We only claim AI capabilities that are connected to authoritative geographic sources. We do not present a disconnected chatbot as spatial intelligence.",
        },
        {
          question: "How do I evaluate Enterprise?",
          answer:
            "Use the contact form or email hello@geokade.nl. We can discuss deployment, identity, and integration requirements without inventing compliance claims.",
        },
      ],
    },
  ],
} as const;
