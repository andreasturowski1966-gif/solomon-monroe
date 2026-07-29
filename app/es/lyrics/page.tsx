import type { Metadata } from "next";
import { LyricsPageContent } from "../../lyrics/page";

export const metadata: Metadata = {
  title: "Canciones e historias | Solomon Monroe",
  description:
    "Lee las letras de Solomon Monroe y descubre las historias personales que hay detrás de sus canciones.",
  alternates: {
    languages: {
      en: "/lyrics",
      de: "/de/lyrics",
      fr: "/fr/lyrics",
      es: "/es/lyrics",
    },
  },
};

export default function SpanishLyricsPage() {
  return <LyricsPageContent locale="es" />;
}
