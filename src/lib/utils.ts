/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** True for links that leave the site (http, mailto, tel). */
export function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

/** True when `href` is the current page (or a parent section of it). */
export function isActivePath(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";
  if (target === "/" || /^\/[a-z]{2}$/.test(target)) return path === target;
  return path === target || path.startsWith(`${target}/`);
}

/** "Control & Trust" → "control-trust" (ids for anchors). */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
