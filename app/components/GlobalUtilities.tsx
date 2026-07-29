"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localePath, type Locale } from "../i18n";

export default function GlobalUtilities() {
  const pathname = usePathname();
  const locale =
    locales.find(
      (candidate) =>
        candidate !== "en" &&
        (pathname === `/${candidate}` || pathname.startsWith(`/${candidate}/`)),
    ) ?? "en";
  const copy: Record<
    Locale,
    { ai: string; messageLabel: string; message: string }
  > = {
    en: {
      ai: "Portions of this website's content were created with the assistance of artificial intelligence.",
      messageLabel: "Message Solomon Monroe on Messenger",
      message: "Message Solomon",
    },
    de: {
      ai: "Teile der Inhalte dieser Website wurden mit Unterstützung künstlicher Intelligenz erstellt.",
      messageLabel: "Solomon Monroe über Messenger schreiben",
      message: "Solomon schreiben",
    },
    fr: {
      ai: "Certaines parties du contenu de ce site ont été créées avec l’aide de l’intelligence artificielle.",
      messageLabel: "Écrire à Solomon Monroe sur Messenger",
      message: "Écrire à Solomon",
    },
    es: {
      ai: "Parte del contenido de este sitio web se creó con ayuda de inteligencia artificial.",
      messageLabel: "Escribir a Solomon Monroe por Messenger",
      message: "Escribir a Solomon",
    },
  };
  const text = copy[locale];

  return (
    <>
      <div className="border-t border-white/6 bg-[#0d0b09] px-5 py-5 text-center">
        <p className="text-[0.65rem] leading-5 text-white/28">
          {text.ai}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2">
          <Link
            href={localePath(locale, "/impressum")}
            className="text-[0.6rem] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-white/60"
          >
            Legal Notice / Impressum
          </Link>
          <Link
            href={localePath(locale, "/datenschutz")}
            className="text-[0.6rem] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-white/60"
          >
            Privacy Policy / Datenschutz
          </Link>
        </div>
      </div>
      <a
        href="https://m.me/SolomonMonroeMusic"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={text.messageLabel}
        className="fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#0866ff] px-4 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-2xl shadow-black/40 transition-transform hover:scale-[1.03] hover:bg-[#2378ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:bottom-7 sm:right-7 sm:px-5"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 fill-current"
        >
          <path d="M12 2C6.48 2 2 6.15 2 11.27c0 2.92 1.46 5.52 3.74 7.22V22l3.42-1.88c.9.25 1.86.39 2.84.39 5.52 0 10-4.15 10-9.24S17.52 2 12 2Zm.99 12.48-2.55-2.72-4.98 2.72 5.48-5.82 2.62 2.72 4.91-2.72-5.48 5.82Z" />
        </svg>
        <span className="hidden sm:inline">
          {text.message}
        </span>
      </a>
    </>
  );
}
