import type { Metadata } from "next";
import { HomeContent } from "../page";

export const metadata: Metadata = {
  title: "Solomon Monroe | Southern Soul",
  description:
    "Die offizielle Website von Solomon Monroe – Southern Soul, erlebte Geschichten und der Beweis, dass Träume kein Verfallsdatum haben.",
  alternates: {
    languages: {
      en: "/",
      de: "/de",
    },
  },
};

export default function GermanHomePage() {
  return <HomeContent locale="de" />;
}
