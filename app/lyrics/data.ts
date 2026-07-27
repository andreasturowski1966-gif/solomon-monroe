import fs from "node:fs";
import path from "node:path";
import { songStories, type SongStory } from "./stories";

export type Song = {
  slug: string;
  title: string;
  number: string;
  stanzas: string[][];
  story?: SongStory;
};

const lyricsDirectory = path.join(process.cwd(), "content", "lyrics");

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

function readSongs(): Song[] {
  const filenames = fs
    .readdirSync(lyricsDirectory)
    .filter((filename) => filename.toLowerCase().endsWith(".txt"))
    .sort((a, b) =>
      titleFromFilename(a).localeCompare(titleFromFilename(b), "en", {
        sensitivity: "base",
      }),
    );

  return filenames.map((filename, index) => {
    const title = titleFromFilename(filename);
    const text = fs
      .readFileSync(path.join(lyricsDirectory, filename), "utf8")
      .replace(/^\uFEFF/, "")
      .trim();

    const slug = slugify(title);

    return {
      slug,
      title,
      number: String(index + 1).padStart(2, "0"),
      story: songStories[slug],
      stanzas: text
        .split(/\r?\n\s*\r?\n/)
        .map((stanza) => stanza.split(/\r?\n/).map((line) => line.trimEnd())),
    };
  });
}

export const songs = readSongs();

export function getSong(slug: string) {
  return songs.find((song) => song.slug === slug);
}
