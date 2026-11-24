/**
 * Home page content (locale-aware) for GeoKade.
 */
import type { LineIconName } from "@/components/icons/line-icons";
import { getSiteConfig } from "@/config/site";
import { defaultLocale, localePath, type Locale } from "@/i18n";

function buildHome(locale: Locale) {
  const site = getSiteConfig(locale);
  const p = (path: string) => localePath(locale, path);
  const nl = locale === "nl";

  return {
    meta: {
      title: undefined as string | undefined,
      description: site.description,
    },

    hero: {
      background: "/images/home/hero-background.webp",
      title: nl ? "Van geospatial data naar" : "From geospatial data to",
      accent: nl ? "bruikbare intelligentie" : "actionable intelligence",
      description: nl
        ? "Ontdek, visualiseer en analyseer geografische informatie in één omgeving —"
        : "Discover, map, and analyze geographic information in one environment —",
      descriptionHighlight: nl
        ? "gebouwd voor beslissingen in de echte wereld."
        : "built for real-world decisions.",
      primaryCta: { label: nl ? "Open platform" : "Open platform", href: site.platformUrl },
      secondaryCta: { label: nl ? "Hoe het werkt" : "How it works", href: p("how-it-works") },
      mockup: {
        label: nl
          ? "Productvoorbeeld: geospatial workspace met lagen en analyse"
          : "Product preview: geospatial workspace with layers and analysis",
        client: { label: nl ? "Werkruimte:" : "Workspace:", name: "Amsterdam", date: "PDOK" },
        agent: {
          name: site.name,
          subtitle: nl ? "Ruimtelijke intelligentie" : "Spatial intelligence",
          tags: nl ? ["Data", "Kaart", "Analyse"] : ["Data", "Map", "Analyze"],
        },
        tasks: [
          {
            title: nl ? "Taak: Ontdek datasets" : "Task: Discover datasets",
            subtitle: nl ? "Open data + enterprise bronnen" : "Open data + enterprise sources",
            tags: ["PDOK", "BAG", "API"],
          },
          {
            title: nl ? "Taak: Analyseer" : "Task: Analyze",
            subtitle: nl ? "Nabijheid, geschiktheid, filters" : "Proximity, suitability, filters",
            tags: nl ? ["AI", "Ruimtelijk"] : ["AI", "Spatial"],
          },
        ],
        detailsLabel: nl ? "Taakdetails" : "Task Details",
        checklistTitle: nl ? "Workspace checklist" : "Workspace checklist",
        rows: nl
          ? ["Datasets", "Lagen", "Analyse", "Delen", "Verhaal"]
          : ["Datasets", "Layers", "Analyze", "Share", "Story"],
        steps: [
          {
            label: nl ? "Ontdek" : "Discover",
            progress: 18,
            highlight: "agent" as const,
            bars: [20, 25, 0, 40, 0],
            toast: {
              title: nl ? "Catalogus zoeken…" : "Searching catalog…",
              subtitle: nl ? "Nederlandse open data" : "Dutch open data",
            },
          },
          {
            label: nl ? "Kaart" : "Map",
            progress: 51,
            highlight: "launch" as const,
            bars: [60, 70, 25, 100, 0],
            toast: {
              title: nl ? "Lagen laden…" : "Loading layers…",
              subtitle: "BAG · PDOK",
            },
          },
          {
            label: nl ? "Analyse" : "Analyze",
            progress: 82,
            highlight: "outreach" as const,
            bars: [90, 100, 70, 100, 45],
            toast: {
              title: nl ? "Ruimtelijke query…" : "Spatial query…",
              subtitle: nl ? "Buffer 500 m" : "Buffer 500 m",
            },
          },
          {
            label: nl ? "Inzicht" : "Insight",
            progress: 100,
            highlight: "none" as const,
            bars: [100, 100, 100, 100, 100],
            toast: {
              title: nl ? "Klaar" : "Ready",
              subtitle: nl ? "Kaartverhaal gedeeld" : "Map story shared",
            },
            live: true,
          },
        ],
        statusLabels: {
          todo: nl ? "Te doen" : "To do",
          progress: nl ? "Bezig" : "In progress",
          done: nl ? "Klaar" : "Done",
        },
      },
    },

    logos: {
      title: nl
        ? "Gebouwd voor organisaties die locatie serieus nemen"
        : "Built for organisations that take location seriously",
      items: [
        { name: "Municipality", shape: "circle" },
        { name: "Province", shape: "square" },
        { name: "Utility", shape: "triangle" },
        { name: "Energy", shape: "spark" },
        { name: "Planning", shape: "ring" },
        { name: "Infra", shape: "circle" },
        { name: "Enterprise", shape: "diamond" },
      ] as const,
    },

    product: {
      eyebrow: nl ? "Platform" : "Product",
      title: nl ? "Eén omgeving voor" : "One environment to",
      accent: nl ? "ontdekken, kaarten en begrijpen." : "discover, map, and understand.",
      tabs: [
        {
          id: "team",
          label: nl ? "Ontdekken" : "Discover",
          title: nl ? "Vind de juiste geografische data sneller" : "Find the right geographic data faster",
          description: nl
            ? "Doorzoek catalogs, open data en enterprise bronnen zonder tussen tientallen portalen te springen."
            : "Search catalogs, open data, and enterprise sources without jumping between portals.",
          points: nl
            ? ["Nederlandse open data zoals PDOK en BAG.", "Eigen datasets naast publieke bronnen."]
            : ["Dutch open data such as PDOK and BAG.", "Your datasets alongside public sources."],
          visual: {
            type: "catalog" as const,
            title: nl ? "Catalogus" : "Catalog",
            search: nl ? "Zoek datasets…" : "Search datasets…",
            layersLabel: nl ? "Lagen" : "Layers",
            mapLabel: nl ? "Kaartvoorbeeld" : "Map preview",
            mapImage: "/images/home/map-3d-city.png",
            mapAlt: nl ? "3D kaartvoorbeeld met gebouwen en actieve lagen" : "3D map preview with buildings and active layers",
            mapCredit: "",
            datasets: [
              { name: "BAG — Pand", source: "PDOK", active: true },
              { name: nl ? "Bestuurlijke grenzen" : "Admin boundaries", source: "PDOK", active: true },
              { name: nl ? "Luchtfoto RGB" : "Aerial RGB", source: "PDOK", active: false },
              { name: nl ? "Eigen: netwerk assets" : "Own: network assets", source: nl ? "Workspace" : "Workspace", active: false },
            ],
          },
        },
        {
          id: "workflows",
          label: nl ? "Analyseren" : "Analyze",
          title: nl ? "Ruimtelijke vragen, heldere antwoorden" : "Spatial questions, clear answers",
          description: nl
            ? "Buffers, snijpunten, filters en geschiktheidsanalyses — met resultaten die je op de kaart ziet."
            : "Buffers, intersections, filters, and suitability — with results you can see on the map.",
          points: nl
            ? ["Goedkeuren of bijsturen vóór je deelt.", "Herbruikbare workflows voor terugkerende vragen."]
            : ["Approve or adjust before you share.", "Reusable workflows for recurring questions."],
          visual: {
            type: "workflow" as const,
            title: nl ? "Locatiegeschiktheid" : "Site suitability",
            steps: [
              { icon: "globe" as LineIconName, label: nl ? "Kies datasets" : "Select datasets", meta: nl ? "Bron" : "Source" },
              { icon: "sparkle" as LineIconName, label: nl ? "Ruimtelijke query" : "Spatial query", meta: nl ? "Analyse" : "Analyze" },
              { icon: "check" as LineIconName, label: nl ? "Review resultaten" : "Review results", meta: nl ? "Check" : "Review" },
              { icon: "bolt" as LineIconName, label: nl ? "Deel kaartinzicht" : "Share map insight", meta: nl ? "Klaar" : "Done" },
            ],
          },
        },
        {
          id: "canvas",
          label: nl ? "Begrijpen" : "Understand",
          title: nl ? "Kaart, data en context op één canvas" : "Map, data, and context on one canvas",
          description: nl
            ? "Combineer lagen, verhalen en analyses zodat teams niet alleen zien waar iets is — maar waarom het ertoe doet."
            : "Combine layers, stories, and analysis so teams see not only where something is — but why it matters.",
          points: nl
            ? ["Deelbare kaartverhalen voor stakeholders.", "Samenwerken zonder GIS-specialist voor elke vraag."]
            : ["Shareable map stories for stakeholders.", "Collaborate without a GIS specialist for every question."],
          visual: {
            type: "canvas" as const,
            center: site.name,
            nodes: [
              { icon: "globe" as LineIconName, label: nl ? "Data" : "Data" },
              { icon: "chart" as LineIconName, label: nl ? "Kaart" : "Map" },
              { icon: "sparkle" as LineIconName, label: nl ? "AI" : "AI" },
              { icon: "list" as LineIconName, label: nl ? "Analyse" : "Analyze" },
              { icon: "users" as LineIconName, label: nl ? "Teams" : "Teams" },
              { icon: "building" as LineIconName, label: nl ? "Governance" : "Governance" },
              { icon: "doc" as LineIconName, label: nl ? "Verhalen" : "Stories" },
              { icon: "puzzle" as LineIconName, label: nl ? "Integraties" : "Integrations" },
            ],
          },
        },
      ],
    },

    stats: {
      eyebrow: nl ? "Focus" : "Focus",
      title: nl ? "Gebouwd voor" : "Built for",
      accent: nl ? "Europese geospatial teams." : "European geospatial teams.",
      items: [
        {
          icon: "building" as LineIconName,
          value: nl ? "Overheid" : "Public",
          label: nl ? "Gemeenten, provincies en agentschappen." : "Municipalities, provinces, and agencies.",
        },
        {
          icon: "globe" as LineIconName,
          value: "NL → EU",
          label: nl ? "Start in Nederland, ontworpen voor Europa." : "Netherlands first, designed for Europe.",
        },
        {
          icon: "sparkle" as LineIconName,
          value: "AI",
          label: nl ? "Ruimtelijke intelligentie gekoppeld aan echte data." : "Spatial intelligence grounded in real datasets.",
        },
        {
          icon: "bank" as LineIconName,
          value: nl ? "Enterprise" : "Enterprise",
          label: nl ? "Cloud of private deployment met governance." : "Cloud or private deployment with governance.",
        },
      ],
    },

    howItWorks: {
      eyebrow: nl ? "Hoe het werkt" : "How it works",
      title: nl ? "Van data naar" : "From data to",
      accent: nl ? "besluit." : "decision.",
      steps: [
        {
          title: nl ? "Ontdek bronnen" : "Discover sources",
          description: nl
            ? "Zoek in open en eigen datasets. GeoKade helpt je de juiste lagen te vinden."
            : "Search open and private datasets. GeoKade helps you find the right layers.",
          card: {
            type: "idea" as const,
            label: nl ? "Vraag" : "Question",
            text: nl
              ? "Welke panden liggen in een overstromingsrisicogebied?"
              : "Which buildings sit inside a flood-risk zone?",
            drafted: nl ? "3 datasets voorgesteld" : "3 datasets suggested",
            tasks: [
              { icon: "globe" as LineIconName, label: nl ? "BAG panden" : "BAG buildings", meta: "01" },
              { icon: "chart" as LineIconName, label: nl ? "Risicokaart" : "Risk layer", meta: "02" },
              { icon: "sparkle" as LineIconName, label: nl ? "Intersectie" : "Intersection", meta: "03" },
            ],
          },
        },
        {
          title: nl ? "Bekijk op de kaart" : "See it on the map",
          description: nl
            ? "Combineer lagen, filter objecten en inspecteer attributen in context."
            : "Combine layers, filter features, and inspect attributes in context.",
          card: {
            type: "approve" as const,
            title: nl ? "Laag: overstromingszone" : "Layer: flood zone",
            status: nl ? "Klaar om te combineren" : "Ready to combine",
            approvedLabel: nl ? "Toegevoegd" : "Added",
            rows: [
              [nl ? "Bron" : "Source", "PDOK"],
              [nl ? "Type" : "Type", "Polygon"],
              [nl ? "CRS" : "CRS", "EPSG:28992"],
            ] as [string, string][],
            hold: nl ? "Wacht" : "Hold",
            approve: nl ? "Toevoegen" : "Add",
          },
        },
        {
          title: nl ? "Deel het inzicht" : "Share the insight",
          description: nl
            ? "Maak een kaartverhaal of deel een workspace met je team."
            : "Create a map story or share a workspace with your team.",
          card: {
            type: "activity" as const,
            title: nl ? "Activiteit" : "Activity",
            shippedLabel: nl ? "gedeeld" : "shared",
            items: [
              { icon: "globe" as LineIconName, label: nl ? "Lagen geladen" : "Layers loaded", meta: "9:00" },
              { icon: "sparkle" as LineIconName, label: nl ? "Analyse klaar" : "Analysis ready", meta: "9:12" },
              { icon: "users" as LineIconName, label: nl ? "Team genodigd" : "Team invited", meta: "9:28" },
            ],
            progress: {
              icon: "doc" as LineIconName,
              label: nl ? "Kaartverhaal" : "Map story",
              value: 75,
              liveLabel: nl ? "Gepubliceerd" : "Published",
            },
          },
        },
      ],
    },

    testimonial: {
      quote: nl
        ? "GeoKade helpt onze afdelingen geografische data sneller te vinden en te begrijpen — zonder voor elke vraag een GIS-specialist nodig te hebben."
        : "GeoKade helps our departments find and understand geographic data faster — without needing a GIS specialist for every question.",
      name: nl ? "Gemeentelijk innovatieteam" : "Municipal innovation team",
      role: nl ? "Lokale overheid · Nederland" : "Local government · Netherlands",
      image: { src: "/images/home/testimonial-portrait.webp", alt: nl ? "Teamportret" : "Team portrait" },
      background: "/images/patterns/tiles-orange.webp",
    },

    features: [
      {
        eyebrow: nl ? "01 — Cloud" : "01 — Cloud",
        title: nl ? "GeoKade Cloud" : "GeoKade Cloud",
        accent: nl ? "— hosted geospatial intelligence." : "— hosted geospatial intelligence.",
        description: nl
          ? "Een hosted platform om datasets te ontdekken, kaarten te bouwen en samen te werken — zonder eigen GIS-infrastructuur te beheren."
          : "A hosted platform to discover datasets, build maps, and collaborate — without running your own GIS infrastructure.",
        visual: {
          type: "launch" as const,
          checklistTitle: nl ? "Cloud capabilities" : "Cloud capabilities",
          tasks: [
            { label: nl ? "Dataset discovery" : "Dataset discovery", status: nl ? "Beschikbaar" : "Available", tone: "done" as const },
            { label: nl ? "Interactieve kaarten" : "Interactive maps", status: nl ? "Beschikbaar" : "Available", tone: "done" as const },
            { label: nl ? "AI-ondersteunde exploratie" : "AI-assisted exploration", status: nl ? "In ontwikkeling" : "In progress", tone: "progress" as const },
            { label: nl ? "Team workspaces" : "Team workspaces", status: nl ? "Gepland" : "Queued", tone: "queued" as const },
          ],
          queuedLabel: nl ? "Gepland" : "Queued",
          identityTitle: nl ? "Focus" : "Focus",
          brand: "GeoKade",
          voice: nl ? ["Duidelijk · feitelijk", "Geen hype"] : ["Clear · factual", "No hype"],
          colors: ["#ff4820", "#0f172a", "#e8e1d6", "#f7f5f1"],
        },
        image: {
          src: "/images/home/feature-launch.webp",
          alt: nl ? "Overzicht van GeoKade Cloud mogelijkheden" : "Overview of GeoKade Cloud capabilities",
        },
      },
      {
        eyebrow: nl ? "02 — Enterprise" : "02 — Enterprise",
        title: nl ? "GeoKade Enterprise" : "GeoKade Enterprise",
        accent: nl ? "— controle, governance, schaal." : "— control, governance, scale.",
        description: nl
          ? "Voor organisaties die private deployment, IAM, datasoevereiniteit en integratie met bestaande GIS-systemen nodig hebben."
          : "For organisations that need private deployment, IAM, data residency, and integration with existing GIS systems.",
        visual: {
          type: "grow" as const,
          funnel: [
            { label: nl ? "Bronnen verbonden" : "Sources connected", value: 24 },
            { label: nl ? "Workspaces" : "Workspaces", value: 8 },
            { label: nl ? "Rollen & policies" : "Roles & policies", value: 12 },
            { label: nl ? "Gedeelde inzichten" : "Shared insights", value: 36 },
          ],
          draftLabel: nl ? "Enterprise brief" : "Enterprise brief",
          draft: nl
            ? "\"Private deployment, koppeling met bestaande identity provider, data blijft binnen onze omgeving.\""
            : "\"Private deployment, connect to our identity provider, data stays in our environment.\"",
          hold: nl ? "Wacht" : "Hold",
          approve: nl ? "Plan gesprek" : "Book call",
          sent: nl ? "Verzonden ✓" : "Sent ✓",
        },
        image: {
          src: "/images/home/feature-grow.webp",
          alt: nl ? "Enterprise deployment en governance" : "Enterprise deployment and governance",
        },
      },
      {
        eyebrow: nl ? "03 — Intelligence" : "03 — Intelligence",
        title: nl ? "GeoKade Intelligence" : "GeoKade Intelligence",
        accent: nl ? "— vraag het aan je ruimtelijke data." : "— ask your spatial data.",
        description: nl
          ? "Natuurlijke taal en ruimtelijke analyse, gekoppeld aan gezaghebbende datasets — roadmap, geen marketingbelofte zonder grond."
          : "Natural language and spatial analysis grounded in authoritative datasets — a roadmap, not an ungrounded marketing claim.",
        visual: {
          type: "run" as const,
          recurringTitle: nl ? "Vragen" : "Questions",
          recurringNote: nl ? "Voorbeelden" : "Examples",
          recurring: [
            { day: "Q1", label: nl ? "Dichtheid per buurt" : "Density by neighbourhood", done: nl ? "Demo" : "Demo" },
            { day: "Q2", label: nl ? "Nabijheid voorzieningen" : "Facility proximity", done: "" },
          ],
          queuedLabel: nl ? "Roadmap" : "Roadmap",
          digestTitle: nl ? "Inzicht" : "Insight",
          metrics: [
            { value: 12, decimals: 0, suffix: "", label: nl ? "Lagen" : "Layers" },
            { value: 4.2, decimals: 1, suffix: "k", label: nl ? "Objecten" : "Features" },
            { value: 3, decimals: 0, suffix: "", label: nl ? "Analyses" : "Analyses" },
          ],
          bars: [
            [36, 58],
            [47, 68],
            [55, 68],
            [64, 97],
            [73, 88],
            [74, 83],
            [64, 47],
          ],
        },
        image: {
          src: "/images/home/feature-run.webp",
          alt: nl ? "Voorbeelden van ruimtelijke vragen" : "Examples of spatial questions",
        },
      },
    ],

    cta: {
      title: nl ? "Klaar om geospatial data" : "Ready to turn geospatial data",
      accent: nl ? "werkbaar te maken?" : "into decisions?",
      description: nl
        ? "Verken GeoKade Cloud of plan een gesprek over Enterprise-deployment."
        : "Explore GeoKade Cloud or book a conversation about Enterprise deployment.",
      secondary: { label: nl ? "Contact" : "Contact us", href: p("contact") },
      primary: { label: nl ? "Open platform" : "Open platform", href: site.platformUrl },
    },

    integrations: {
      eyebrow: nl ? "Bronnen" : "Sources",
      title: nl ? "Werkt met de data" : "Works with the data",
      accent: nl ? "die je al hebt — en open data." : "you already have — and open data.",
      items: [
        { icon: "globe" as LineIconName, name: "PDOK", description: nl ? "Nederlandse open geo-data" : "Dutch open geo-data", from: "#fd7a77", to: "#fc413d" },
        { icon: "building" as LineIconName, name: "BAG", description: nl ? "Adressen en gebouwen" : "Addresses and buildings", from: "#8a84ff", to: "#635bff" },
        { icon: "puzzle" as LineIconName, name: "APIs", description: nl ? "Externe geospatial services" : "External geospatial services", from: "#f39a9a", to: "#ef7878" },
        { icon: "doc" as LineIconName, name: "Catalogs", description: nl ? "Data discovery" : "Data discovery", from: "#6cd5f4", to: "#36c5f0" },
        { icon: "chart" as LineIconName, name: "GIS stacks", description: nl ? "Bestaande GIS-integraties" : "Existing GIS integrations", from: "#333333", to: "#000000" },
        { icon: "users" as LineIconName, name: "Teams", description: nl ? "Samenwerken & delen" : "Collaborate & share", from: "#95bf46", to: "#5e8e3e" },
        { icon: "bank" as LineIconName, name: "Enterprise", description: nl ? "IAM & governance" : "IAM & governance", from: "#46ac38", to: "#2ca01c" },
        { icon: "sparkle" as LineIconName, name: "AI", description: nl ? "Ruimtelijke assistentie" : "Spatial assistance", from: "#71a4f7", to: "#4285f4" },
      ],
    },

    faq: {
      eyebrow: "FAQ",
      title: nl ? "Eerlijke vragen," : "Fair questions,",
      accent: nl ? "duidelijke antwoorden." : "straight answers.",
      cta: { label: nl ? "Contact" : "Contact us", href: p("contact") },
      items: [
        {
          question: nl ? "Wat is het verschil tussen geokade.com en geokade.nl?" : "What is the difference between geokade.com and geokade.nl?",
          answer: nl
            ? "geokade.com is de bedrijfssite. geokade.nl is het productplatform (GeoKade Cloud) waar je met data en kaarten werkt."
            : "geokade.com is the corporate site. geokade.nl is the product platform (GeoKade Cloud) where you work with data and maps.",
        },
        {
          question: nl ? "Is GeoKade alleen voor Nederland?" : "Is GeoKade only for the Netherlands?",
          answer: nl
            ? "Onze eerste markt is Nederland, met Nederlandse open data. Het merk en platform zijn ontworpen als Europese technologievendor."
            : "Our initial market is the Netherlands, with Dutch open data. The brand and platform are designed as a European technology vendor.",
        },
        {
          question: nl ? "Vervangt GeoKade mijn GIS?" : "Does GeoKade replace my GIS?",
          answer: nl
            ? "Nee. GeoKade maakt geografische data toegankelijker voor beslissers en teams, en kan naast bestaande GIS- en dataplatformen werken."
            : "No. GeoKade makes geographic data more accessible for decision-makers and teams, and can work alongside existing GIS and data platforms.",
        },
        {
          question: nl ? "Wat is al beschikbaar versus roadmap?" : "What is available versus roadmap?",
          answer: nl
            ? "We claimen geen productiefuncties die er nog niet zijn. Cloud capabilities groeien; Intelligence en Enterprise-opties worden helder als roadmap of beschikbaarheid gemarkeerd."
            : "We do not claim production features that are not there yet. Cloud capabilities grow over time; Intelligence and Enterprise options are clearly marked as roadmap or available.",
        },
        {
          question: nl ? "Hoe neem ik contact op voor Enterprise?" : "How do I contact you about Enterprise?",
          answer: nl
            ? "Gebruik het contactformulier of mail hello@geokade.com. We plannen graag een gesprek over deployment en integratie."
            : "Use the contact form or email hello@geokade.com. We are happy to schedule a conversation about deployment and integration.",
        },
      ],
    },
  };
}

export function getHomePage(locale: Locale = defaultLocale) {
  return buildHome(locale);
}

/** @deprecated Prefer getHomePage(locale) */
export const homePage = getHomePage(defaultLocale);

export type HomePage = ReturnType<typeof getHomePage>;
