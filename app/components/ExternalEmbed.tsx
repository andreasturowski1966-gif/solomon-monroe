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
  const copy = {
    en: {
      external: "External content",
      explanation: `Loading this ${provider} content connects your browser to ${provider}. Data may be processed outside the EU.`,
      load: `Load ${provider}`,
      consent: "By loading, you consent to this data transfer.",
      privacy: "Privacy details",
    },
    de: {
      external: "Externer Inhalt",
      explanation: `Beim Laden dieses ${provider}-Inhalts verbindet sich dein Browser mit ${provider}. Daten können außerhalb der EU verarbeitet werden.`,
      load: `${provider} laden`,
      consent: "Mit dem Laden stimmst du dieser Datenübertragung zu.",
      privacy: "Datenschutzhinweise",
    },
    fr: {
      external: "Contenu externe",
      explanation: `Le chargement de ce contenu ${provider} connecte votre navigateur à ${provider}. Des données peuvent être traitées en dehors de l’Union européenne.`,
      load: `Charger ${provider}`,
      consent: "En le chargeant, vous acceptez ce transfert de données.",
      privacy: "Informations sur la confidentialité",
    },
    es: {
      external: "Contenido externo",
      explanation: `Al cargar este contenido de ${provider}, tu navegador se conecta con ${provider}. Es posible que se procesen datos fuera de la Unión Europea.`,
      load: `Cargar ${provider}`,
      consent: "Al cargarlo, aceptas esta transferencia de datos.",
      privacy: "Información sobre privacidad",
    },
  }[locale];

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
          {copy.external}
        </p>
        <p className="mt-4 text-sm leading-6 text-white/60">
          {copy.explanation}
        </p>
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          className="mt-6 inline-flex min-h-11 items-center justify-center bg-[#b56c2e] px-6 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#cb8240]"
        >
          {copy.load}
        </button>
        <p className="mt-4 text-[0.68rem] leading-5 text-white/35">
          {copy.consent}{" "}
          <Link
            href={localePath(locale, "/datenschutz")}
            className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/60"
          >
            {copy.privacy}
          </Link>
        </p>
      </div>
    </div>
  );
}
