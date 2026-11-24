/**
 * Site-wide scroll animations (plain JS + Motion's `animate` / `inView`).
 * Re-inits on every Astro ClientRouter navigation via `astro:page-load`.
 */
import { animate, inView, stagger } from "motion";

export const EASE = [0.22, 1, 0.36, 1] as const;
const HIDDEN = 0.001; // not 0: keeps text eligible for Largest Contentful Paint

export const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function num(value: string | undefined, fallback: number) {
  const n = Number.parseFloat(value ?? "");
  return Number.isFinite(n) ? n : fallback;
}

function initReveals() {
  inView(
    "[data-reveal]",
    (el) => {
      const node = el as HTMLElement;
      if (node.hasAttribute("data-revealed")) return;
      const isScale = node.dataset.reveal === "scale";
      const lift = num(node.dataset.y, isScale ? 20 : 28);
      animate(
        node,
        { opacity: [HIDDEN, 1], y: [lift, 0], scale: [isScale ? 0.97 : 1, 1] },
        { duration: 0.8, delay: num(node.dataset.delay, 0), ease: EASE },
      ).then(() => node.setAttribute("data-revealed", ""));
    },
    { amount: 0.15 },
  );

  inView(
    "[data-stagger]",
    (el) => {
      const node = el as HTMLElement;
      if (node.hasAttribute("data-revealed")) return;
      const items = node.querySelectorAll<HTMLElement>("[data-stagger-item]");
      if (!items.length) return;
      animate(
        items,
        { opacity: [HIDDEN, 1], y: [28, 0] },
        {
          duration: 0.8,
          ease: EASE,
          delay: stagger(num(node.dataset.gap, 0.1), { startDelay: num(node.dataset.delay, 0) }),
        },
      ).then(() => node.setAttribute("data-revealed", ""));
    },
    { amount: 0.15 },
  );
}

function initCountUp() {
  inView(
    "[data-count]",
    (el) => {
      const node = el as HTMLElement;
      if (node.dataset.countDone === "1") return;
      const value = node.dataset.count ?? "";
      const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
      if (!match) return;
      const [, prefix, number, suffix] = match;
      const target = Number.parseFloat(number.replace(/,/g, ""));
      const decimals = number.split(".")[1]?.length ?? 0;
      const format = (v: number) =>
        prefix + v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
      node.dataset.countDone = "1";
      animate(0, target, { duration: 1.6, ease: EASE, onUpdate: (v) => (node.textContent = format(v)) });
    },
    { amount: 0.6 },
  );
}

function initScaleToFit() {
  const boxes = document.querySelectorAll<HTMLElement>("[data-fit]");
  if (!boxes.length) return;
  const update = (el: HTMLElement) =>
    el.style.setProperty("--fit", String(Math.min(1, el.clientWidth / num(el.dataset.fit, el.clientWidth))));
  const observer = new ResizeObserver((entries) => entries.forEach((e) => update(e.target as HTMLElement)));
  boxes.forEach((el) => {
    update(el);
    observer.observe(el);
  });
}

function boot() {
  initScaleToFit();
  if (!reduceMotion()) {
    initReveals();
    initCountUp();
  }
}

document.addEventListener("astro:page-load", boot);
