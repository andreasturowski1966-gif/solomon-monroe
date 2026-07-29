import type { Metadata } from "next";
import { VideosContent } from "../../videos/page";

export const metadata: Metadata = {
  title: "Clips musicaux | Solomon Monroe",
  description:
    "Regardez les clips officiels en version intégrale de l’artiste Southern Soul Solomon Monroe.",
  alternates: {
    languages: {
      en: "/videos",
      de: "/de/videos",
      fr: "/fr/videos",
      es: "/es/videos",
    },
  },
};

export default function FrenchVideosPage() {
  return <VideosContent locale="fr" />;
}
