import fs from "node:fs";
import path from "node:path";
import type { Locale } from "../i18n";
import { germanSongStories } from "./stories.de";
import { spanishSongStories } from "./stories.es";
import { frenchSongStories } from "./stories.fr";
import { songStories, type SongStory } from "./stories";

export type Song = {
  slug: string;
  title: string;
  number: string;
  stanzas: string[][];
  story?: SongStory;
  image?: string;
  videoPremiere?: string;
};

function titleFromFilename(filename: string) {
  return filename
    .replace(/\.txt$/i, "")
    .replace(/\s+Final$/i, "")
    .trim();
}

function slugify(title: string) {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function readSongs(locale: Locale): Song[] {
  const originalLyricsDirectory = path.join(process.cwd(), "content", "lyrics");
  const storiesByLocale: Record<Locale, Record<string, SongStory>> = {
    en: songStories,
    de: germanSongStories,
    fr: frenchSongStories,
    es: spanishSongStories,
  };
  const stories = storiesByLocale[locale];
  const filenames = fs
    .readdirSync(originalLyricsDirectory)
    .filter((filename) => filename.toLowerCase().endsWith(".txt"))
    .sort((a, b) =>
      titleFromFilename(a).localeCompare(titleFromFilename(b), "en", {
        sensitivity: "base",
      }),
    );

  return filenames.map((filename, index) => {
    const title = titleFromFilename(filename);
    const lyricsFilePath = path.join(originalLyricsDirectory, filename);
    const text = fs
      .readFileSync(lyricsFilePath, "utf8")
      .replace(/^\uFEFF/, "")
      .trim();

    const slug = slugify(title);
    const imageSlug =
      slug === "simply-alive-live-on-stage"
        ? "simply-alive"
        : slug === "one-heartbeat"
          ? "one-heartbeat-background"
          : slug;
    const imageExtension = ["webp", "png", "jpg", "jpeg"].find((extension) =>
      fs.existsSync(path.join(process.cwd(), "public", "images", "lyrics", `${imageSlug}.${extension}`)),
    );
    const publicImagePath = path.join(
      process.cwd(),
      "public",
      "images",
      "lyrics",
      `${imageSlug}.${imageExtension ?? "webp"}`,
    );

    return {
      slug,
      title,
      number: String(index + 1).padStart(2, "0"),
      story: stories[slug],
      image: fs.existsSync(publicImagePath)
        ? `/images/lyrics/${imageSlug}.${imageExtension}`
        : undefined,
      videoPremiere: slug === "one-heartbeat" ? "2026-08-06" : undefined,
      stanzas: text
        .split(/\r?\n\s*\r?\n/)
        .map((stanza) => stanza.split(/\r?\n/).map((line) => line.trimEnd())),
    };
  });
}

const songsByLocale: Record<Locale, Song[]> = {
  en: readSongs("en"),
  de: readSongs("de"),
  fr: readSongs("fr"),
  es: readSongs("es"),
};

export const songs = songsByLocale.en;

export function getSongs(locale: Locale = "en") {
  return songsByLocale[locale];
}

export function getSong(slug: string, locale: Locale = "en") {
  return songsByLocale[locale].find((song) => song.slug === slug);
}
