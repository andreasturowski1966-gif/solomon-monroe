"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function pathForLocale(pathname: string, locale: "en" | "de") {
  const pathWithoutGermanPrefix =
    pathname === "/de"
      ? "/"
      : pathname.startsWith("/de/")
        ? pathname.slice(3)
        : pathname;

  if (locale === "de") {
    return pathWithoutGermanPrefix === "/"
      ? "/de"
      : `/de${pathWithoutGermanPrefix}`;
  }

  return pathWithoutGermanPrefix;
}

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: "en" | "de";
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("solomon-language");
    const preferredLocale =
      savedLocale === "en" || savedLocale === "de"
        ? savedLocale
        : window.navigator.languages.some((language) =>
              language.toLowerCase().startsWith("de"),
            )
          ? "de"
          : "en";

    if (preferredLocale !== currentLocale) {
      router.replace(pathForLocale(pathname, preferredLocale));
    }
  }, [currentLocale, pathname, router]);

  function rememberLanguage(locale: "en" | "de") {
    window.localStorage.setItem("solomon-language", locale);
  }

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-white/15 bg-black/20 p-1 backdrop-blur-sm"
      aria-label={currentLocale === "de" ? "Sprache wählen" : "Choose language"}
    >
      <a
        href={pathForLocale(pathname, "en")}
        onClick={() => rememberLanguage("en")}
        lang="en"
        hrefLang="en"
        aria-current={currentLocale === "en" ? "page" : undefined}
        aria-label="English"
        title="English"
        className={`inline-flex min-h-9 items-center gap-1.5 rounded-full px-2.5 text-[0.62rem] font-bold tracking-[0.12em] transition-colors ${
          currentLocale === "en"
            ? "bg-white text-[#17120e]"
            : "text-white/60 hover:bg-white/10 hover:text-white"
        }`}
      >
        <span aria-hidden="true">🇺🇸</span>
        <span>EN</span>
      </a>
      <a
        href={pathForLocale(pathname, "de")}
        onClick={() => rememberLanguage("de")}
        lang="de"
        hrefLang="de"
        aria-current={currentLocale === "de" ? "page" : undefined}
        aria-label="Deutsch"
        title="Deutsch"
        className={`inline-flex min-h-9 items-center gap-1.5 rounded-full px-2.5 text-[0.62rem] font-bold tracking-[0.12em] transition-colors ${
          currentLocale === "de"
            ? "bg-white text-[#17120e]"
            : "text-white/60 hover:bg-white/10 hover:text-white"
        }`}
      >
        <span aria-hidden="true">🇩🇪</span>
        <span>DE</span>
      </a>
    </div>
  );
}
