"use client";

import Link from "next/link";
import { useState } from "react";
import { localePath, type Locale } from "../i18n";

type ExternalEmbedProps = {
  provider: "Spotify" | "YouTube";
  src: string;
  title: string;
  allow: string;
  containerClassName: string;
  iframeClassName?: string;
  allowFullScreen?: boolean;
  locale?: Locale;
};

export default function ExternalEmbed({
  provider,
  src,
  title,
  allow,
  containerClassName,
  iframeClassName = "h-full w-full border-0",
  allowFullScreen = false,
  locale = "en",
}: ExternalEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const isGerman = locale === "de";

  if (isLoaded) {
    return (
      <div className={containerClassName}>
        <iframe
          src={src}
          title={title}
          allow={allow}
          allowFullScreen={allowFullScreen}
          className={iframeClassName}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-[#17120e] px-6 text-center ${containerClassName}`}
    >
      <div className="max-w-lg">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#d99b52]">
          {isGerman ? "Externer Inhalt" : "External content"}
        </p>
        <p className="mt-4 text-sm leading-6 text-white/60">
          {isGerman
            ? `Beim Laden dieses ${provider}-Inhalts verbindet sich dein Browser mit ${provider}. Daten können außerhalb der EU verarbeitet werden.`
            : `Loading this ${provider} content connects your browser to ${provider}. Data may be processed outside the EU.`}
        </p>
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          className="mt-6 inline-flex min-h-11 items-center justify-center bg-[#b56c2e] px-6 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#cb8240]"
        >
          {isGerman ? `${provider} laden` : `Load ${provider}`}
        </button>
        <p className="mt-4 text-[0.68rem] leading-5 text-white/35">
          {isGerman
            ? "Mit dem Laden stimmst du dieser Datenübertragung zu."
            : "By loading, you consent to this data transfer."}{" "}
          <Link
            href={localePath(locale, "/datenschutz")}
            className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/60"
          >
            {isGerman ? "Datenschutzhinweise" : "Privacy details"}
          </Link>
        </p>
      </div>
    </div>
  );
}
