import type { Metadata } from "next";
import { LyricsPageContent } from "../../lyrics/page";

export const metadata: Metadata = {
  title: "Songs & Geschichten | Solomon Monroe",
  description:
    "Lies Solomon Monroes Songtexte und entdecke die persönlichen Geschichten hinter den Songs.",
  alternates: {
    languages: {
      en: "/lyrics",
      de: "/de/lyrics",
    },
  },
};

export default function GermanLyricsPage() {
  return <LyricsPageContent locale="de" />;
}
