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
  const song = getSong(slug, "es");

  return {
    title: song
      ? `${song.title} — Letra e historia | Solomon Monroe`
      : "Canciones e historias | Solomon Monroe",
    description: song
      ? `Lee la letra y descubre la historia personal de «${song.title}» de Solomon Monroe.`
      : "Letras e historias de Solomon Monroe.",
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

export default async function SpanishSongLyricsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SongLyricsContent slug={slug} locale="es" />;
}
