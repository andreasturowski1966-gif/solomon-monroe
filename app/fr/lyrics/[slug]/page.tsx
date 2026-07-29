import type { Metadata } from "next";
import { SongLyricsContent } from "../../../lyrics/[slug]/page";
import { getSong, songs } from "../../../lyrics/data";

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const song = getSong(slug, "fr");

  return {
    title: song
      ? `${song.title} — Paroles & histoire | Solomon Monroe`
      : "Chansons & histoires | Solomon Monroe",
    description: song
      ? `Lisez les paroles et découvrez l’histoire personnelle de « ${song.title} » par Solomon Monroe.`
      : "Les paroles et les histoires de Solomon Monroe.",
    alternates: song
      ? {
          languages: {
            en: `/lyrics/${song.slug}`,
            de: `/de/lyrics/${song.slug}`,
            fr: `/fr/lyrics/${song.slug}`,
            es: `/es/lyrics/${song.slug}`,
          },
        }
      : undefined,
  };
}

export default async function FrenchSongLyricsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SongLyricsContent slug={slug} locale="fr" />;
}
