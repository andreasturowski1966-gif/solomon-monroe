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
  const song = getSong(slug, "de");

  return {
    title: song
      ? `${song.title} — Songtext & Geschichte | Solomon Monroe`
      : "Songs & Geschichten | Solomon Monroe",
    description: song
      ? `Lies die deutsche Übersetzung und die Geschichte hinter ${song.title} von Solomon Monroe.`
      : "Songtexte und Geschichten von Solomon Monroe.",
    alternates: song
      ? {
          languages: {
            en: `/lyrics/${song.slug}`,
            de: `/de/lyrics/${song.slug}`,
          },
        }
      : undefined,
  };
}

export default async function GermanSongLyricsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SongLyricsContent slug={slug} locale="de" />;
}
