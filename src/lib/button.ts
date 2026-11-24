import { cn } from "./utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "outline-brand" | "ghost" | "dark" | "dark-raised";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-button font-semibold whitespace-nowrap transition-[color,background-color,transform] duration-150 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-strong disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-strong text-white hover:bg-brand-hover",
  secondary: "bg-surface-muted text-ink hover:bg-line",
  outline: "border border-line bg-surface text-ink hover:bg-canvas",
  "outline-brand": "border border-brand-strong bg-surface text-brand-strong hover:bg-brand-soft",
  ghost: "text-ink hover:bg-canvas",
  dark: "bg-band text-band-fg hover:bg-band/85",
  "dark-raised": "bg-band-muted text-band-fg hover:bg-band-muted/80",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-4 text-sm leading-5 lg:min-h-10",
  lg: "min-h-12 px-5 text-base leading-6",
};

/** Button classes – use on <a>, <button> or anything that should look like a button. */
export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}
