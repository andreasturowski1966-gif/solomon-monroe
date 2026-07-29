import type { Metadata } from "next";
import { HomeContent } from "../page";

export const metadata: Metadata = {
  title: "Solomon Monroe | Southern Soul",
  description:
    "La web oficial de Solomon Monroe: southern soul, historias de toda una vida y la prueba de que nunca es tarde para soñar.",
  alternates: {
    languages: { en: "/", de: "/de", fr: "/fr", es: "/es" },
  },
};

export default function SpanishHomePage() {
  return <HomeContent locale="es" />;
}
