export const locales = ["en", "de", "fr", "es"] as const;

export type Locale = (typeof locales)[number];

export function localePath(locale: Locale, path: string) {
  if (locale === "en") {
    return path;
  }

  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}
