import type { Metadata } from "next";
import { VideosContent } from "../../videos/page";

export const metadata: Metadata = {
  title: "Musikvideos | Solomon Monroe",
  description:
    "Sieh dir die offiziellen Musikvideos des Southern-Soul-Künstlers Solomon Monroe in voller Länge an.",
  alternates: {
    languages: {
      en: "/videos",
      de: "/de/videos",
    },
  },
};

export default function GermanVideosPage() {
  return <VideosContent locale="de" />;
}
