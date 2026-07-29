import type { Metadata } from "next";
import { LyricsPageContent } from "../../lyrics/page";

export const metadata: Metadata = {
  title: "Chansons & histoires | Solomon Monroe",
  description:
    "Lisez les paroles de Solomon Monroe et découvrez les histoires personnelles qui se cachent derrière ses chansons.",
  alternates: {
    languages: {
      en: "/lyrics",
      de: "/de/lyrics",
      fr: "/fr/lyrics",
      es: "/es/lyrics",
    },
  },
};

export default function FrenchLyricsPage() {
  return <LyricsPageContent locale="fr" />;
}
