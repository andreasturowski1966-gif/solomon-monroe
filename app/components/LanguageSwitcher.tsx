"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "../i18n";

const languageOptions = [
  { locale: "en", flag: "🇺🇸", label: "English", code: "EN" },
  { locale: "de", flag: "🇩🇪", label: "Deutsch", code: "DE" },
  { locale: "fr", flag: "🇫🇷", label: "Français", code: "FR" },
  { locale: "es", flag: "🇪🇸", label: "Español", code: "ES" },
] as const;

function pathForLocale(pathname: string, locale: Locale) {
  const localePrefix = locales.find(
    (candidate) =>
      candidate !== "en" &&
      (pathname === `/${candidate}` || pathname.startsWith(`/${candidate}/`)),
  );
  const pathWithoutLocalePrefix = localePrefix
    ? pathname === `/${localePrefix}`
      ? "/"
      : pathname.slice(localePrefix.length + 1)
    : pathname;

  if (locale !== "en") {
    return pathWithoutLocalePrefix === "/"
      ? `/${locale}`
      : `/${locale}${pathWithoutLocalePrefix}`;
  }

  return pathWithoutLocalePrefix;
}

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("solomon-language");
    const preferredLocale =
      locales.find((locale) => locale === savedLocale) ??
      window.navigator.languages
        .map((language) => language.toLowerCase().split("-")[0])
        .find((language): language is Locale =>
          locales.includes(language as Locale),
        ) ??
      "en";

    document.documentElement.lang = currentLocale;
    if (preferredLocale !== currentLocale) {
      router.replace(pathForLocale(pathname, preferredLocale));
    }
  }, [currentLocale, pathname, router]);

  function rememberLanguage(locale: Locale) {
    window.localStorage.setItem("solomon-language", locale);
  }

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-white/15 bg-black/20 p-1 backdrop-blur-sm"
      aria-label={
        currentLocale === "de"
          ? "Sprache wählen"
          : currentLocale === "fr"
            ? "Choisir la langue"
            : currentLocale === "es"
              ? "Elegir idioma"
              : "Choose language"
      }
    >
      {languageOptions.map((option) => (
        <a
          key={option.locale}
          href={pathForLocale(pathname, option.locale)}
          onClick={() => rememberLanguage(option.locale)}
          lang={option.locale}
          hrefLang={option.locale}
          aria-current={currentLocale === option.locale ? "page" : undefined}
          aria-label={option.label}
          title={option.label}
          className={`inline-flex min-h-9 items-center gap-1.5 rounded-full px-2 text-[0.62rem] font-bold tracking-[0.1em] transition-colors ${
            currentLocale === option.locale
              ? "bg-white text-[#17120e]"
              : "text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          <span aria-hidden="true">{option.flag}</span>
          <span className="hidden sm:inline">{option.code}</span>
        </a>
      ))}
    </div>
  );
}
