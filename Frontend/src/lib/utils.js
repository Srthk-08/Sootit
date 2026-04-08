import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for combining Tailwind classes with merging.
 * @param {...string} inputs
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
