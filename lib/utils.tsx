import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Accepts any number of inputs of varying types (string | undefined | null | boolean),
// which is the typical use case for combining class names.
export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return twMerge(clsx(...inputs));
}
