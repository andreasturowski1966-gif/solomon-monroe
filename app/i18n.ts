export const locales = ["en", "de"] as const;

export type Locale = (typeof locales)[number];

export function localePath(locale: Locale, path: string) {
  if (locale === "en") {
    return path;
  }

  if (path === "/") {
    return "/de";
  }

  return `/de${path}`;
}
