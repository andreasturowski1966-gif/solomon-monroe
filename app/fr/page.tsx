import type { Metadata } from "next";
import { HomeContent } from "../page";

export const metadata: Metadata = {
  title: "Solomon Monroe | Southern Soul",
  description:
    "Le site officiel de Solomon Monroe : de la Southern Soul, les histoires d’une vie et la preuve qu’il n’est jamais trop tard pour rêver.",
  alternates: {
    languages: { en: "/", de: "/de", fr: "/fr", es: "/es" },
  },
};

export default function FrenchHomePage() {
  return <HomeContent locale="fr" />;
}
