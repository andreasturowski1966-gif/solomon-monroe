import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { localePath, type Locale } from "../../i18n";
import { getSong, getSongs, songs } from "../data";

export function generateStaticParams() {
  return songs.map((song) => ({ slug: song.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const song = getSong(slug);

  return {
    title: song
      ? `${song.title} — Lyrics & Story | Solomon Monroe`
      : "Songs & Stories | Solomon Monroe",
    description: song
      ? `Read the lyrics and the story behind ${song.title} by Solomon Monroe.`
      : "Lyrics and stories by Solomon Monroe.",
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

const songCopy = {
  en: {
    home: "HOME",
    songNavigation: "Song navigation",
    backToSongbook: "Back to songbook",
    music: "Music",
    song: "Song",
    behind: "Behind the song",
    lyrics: "Original lyrics",
    translationNote: "",
    previous: "Previous song",
    next: "Next song",
    moreSongs: "More songs",
  },
  de: {
    home: "STARTSEITE",
    songNavigation: "Songnavigation",
    backToSongbook: "Zurück zum Songbuch",
    music: "Musik",
    song: "Song",
    behind: "Die Geschichte hinter dem Song",
    lyrics: "Lyrics",
    translationNote: "",
    previous: "Vorheriger Song",
    next: "Nächster Song",
    moreSongs: "Weitere Songs",
  },
  fr: {
    home: "ACCUEIL",
    songNavigation: "Navigation entre les chansons",
    backToSongbook: "Retour aux chansons",
    music: "Musique",
    song: "Chanson",
    behind: "L’histoire de la chanson",
    lyrics: "Paroles originales",
    translationNote: "",
    previous: "Chanson précédente",
    next: "Chanson suivante",
    moreSongs: "Autres chansons",
  },
  es: {
    home: "INICIO",
    songNavigation: "Navegación entre canciones",
    backToSongbook: "Volver al cancionero",
    music: "Música",
    song: "Canción",
    behind: "La historia detrás de la canción",
    lyrics: "Letra original",
    translationNote: "",
    previous: "Canción anterior",
    next: "Canción siguiente",
    moreSongs: "Más canciones",
  },
} as const;

export function SongLyricsContent({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const copy = songCopy[locale];
  const localizedSongs = getSongs(locale);
  const song = getSong(slug, locale);

  if (!song) {
    notFound();
  }

  const songIndex = localizedSongs.findIndex((item) => item.slug === slug);
  const previousSong = localizedSongs[songIndex - 1];
  const nextSong = localizedSongs[songIndex + 1];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0d0b09] text-[#f3eadb]">
      {song.image && (
        <div
          className="pointer-events-none fixed inset-0 z-0"
          aria-hidden="true"
        >
          <Image
            src={song.image}
            alt=""
            fill
            priority
            sizes="100vw"
              className="object-cover object-center opacity-70 grayscale-[5%]"
          />
          <div className="absolute inset-0 bg-[#0d0b09]/28" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0%,rgba(13,11,9,0.12)_58%,rgba(13,11,9,0.52)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b09]/15 via-transparent to-[#0d0b09]/62" />
        </div>
      )}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0d0b09]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href={localePath(locale, "/")}
            className="font-serif text-lg tracking-[0.12em] transition-colors hover:text-[#d99b52]"
          >
            {copy.home}
          </Link>
          <nav
            className="flex items-center gap-5 sm:gap-7"
            aria-label={copy.songNavigation}
          >
            <Link
              href={localePath(locale, "/lyrics")}
              className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#d99b52] transition-colors hover:text-[#e7ae6c] sm:text-xs"
            >
              {copy.backToSongbook}
            </Link>
            <Link
              href={localePath(locale, "/#music")}
              className="hidden text-xs font-bold uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white sm:block"
            >
              {copy.music}
            </Link>
            <LanguageSwitcher currentLocale={locale} />
          </nav>
        </div>
      </header>

      <article className="relative z-10 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c47f3d]">
            Solomon Monroe · {copy.song} {song.number}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
            {song.title}
          </h1>

          {song.story && (
            <section className="mt-14 border-y border-[#d99b52]/20 bg-[#17120e] px-6 py-10 sm:px-10 sm:py-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c47f3d]">
                {copy.behind}
              </p>
              <p className="mt-5 font-serif text-2xl italic leading-9 text-[#d7b98d] sm:text-3xl sm:leading-10">
                {song.story.teaser}
              </p>
              <div className="mt-8 space-y-5 text-base leading-8 text-white/62 sm:text-lg">
                {song.story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8 text-right font-serif text-xl italic text-[#d99b52]">
                — Solomon
              </p>
            </section>
          )}

          <nav
            className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2"
            aria-label={copy.moreSongs}
          >
            {previousSong ? (
              <Link
                href={localePath(locale, `/lyrics/${previousSong.slug}`)}
                className="bg-[#15110e] p-6 transition-colors hover:bg-[#211a15]"
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/38">
                  {copy.previous}
                </span>
                <span className="mt-2 block font-serif text-xl">
                  ← {previousSong.title}
                </span>
              </Link>
            ) : (
              <span className="hidden bg-[#15110e] sm:block" />
            )}
            {nextSong ? (
              <Link
                href={localePath(locale, `/lyrics/${nextSong.slug}`)}
                className="bg-[#15110e] p-6 text-right transition-colors hover:bg-[#211a15]"
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/38">
                  {copy.next}
                </span>
                <span className="mt-2 block font-serif text-xl">
                  {nextSong.title} →
                </span>
              </Link>
            ) : (
              <span className="hidden bg-[#15110e] sm:block" />
            )}
          </nav>

          <div className="mt-16 border-t border-white/10 pt-12">
            <p className="mb-10 text-xs font-bold uppercase tracking-[0.3em] text-[#c47f3d]">
              {copy.lyrics}
            </p>
            {copy.translationNote && (
              <p className="-mt-6 mb-10 max-w-2xl text-sm leading-6 text-white/45">
                {copy.translationNote}
              </p>
            )}
            {song.stanzas.map((stanza, stanzaIndex) => (
              <p
                key={stanzaIndex}
                className="mb-9 font-serif text-xl leading-8 text-[#eee1ce] sm:text-2xl sm:leading-9"
              >
                {stanza.map((line, lineIndex) => (
                  <span key={lineIndex} className="block min-h-[1em]">
                    {line || "\u00a0"}
                  </span>
                ))}
              </p>
            ))}
          </div>

          <nav
            className="mt-20 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2"
            aria-label={copy.moreSongs}
          >
            {previousSong ? (
              <Link
                href={localePath(locale, `/lyrics/${previousSong.slug}`)}
                className="bg-[#15110e] p-6 transition-colors hover:bg-[#211a15]"
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/38">
                  {copy.previous}
                </span>
                <span className="mt-2 block font-serif text-xl">
                  ← {previousSong.title}
                </span>
              </Link>
            ) : (
              <span className="hidden bg-[#15110e] sm:block" />
            )}
            {nextSong ? (
              <Link
                href={localePath(locale, `/lyrics/${nextSong.slug}`)}
                className="bg-[#15110e] p-6 text-right transition-colors hover:bg-[#211a15]"
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/38">
                  {copy.next}
                </span>
                <span className="mt-2 block font-serif text-xl">
                  {nextSong.title} →
                </span>
              </Link>
            ) : (
              <span className="hidden bg-[#15110e] sm:block" />
            )}
          </nav>
        </div>
      </article>
    </main>
  );
}

export default async function SongLyricsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SongLyricsContent slug={slug} locale="en" />;
}
