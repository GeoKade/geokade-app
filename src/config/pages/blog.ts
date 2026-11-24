/** Blog page text. Posts themselves live in src/content/blog/*.mdx. */
export const blogPage = {
  meta: {
    title: "Blog",
    description: "Notes on geospatial intelligence, Dutch open data, platform design, and building GeoKade.",
  },
  hero: {
    eyebrow: "Blog",
    title: "Notes on geospatial",
    accent: "intelligence.",
  },
  featuredCta: "Read the piece",
  list: {
    eyebrow: "Insights",
    title: "From data to",
    accent: "decisions.",
    allLabel: "All",
    categories: ["Product", "Open data", "Spatial AI", "Engineering", "Company", "Changelog"],
    readMore: "Read more",
    loadMore: "Load older posts",
    empty: "No posts in this category yet.",
    pageSize: 6,
  },
  post: {
    breadcrumb: "Blog",
    onThisPage: "On this page",
    keepReading: "Keep reading",
    allPosts: "All posts",
    share: "Share",
  },
} as const;
