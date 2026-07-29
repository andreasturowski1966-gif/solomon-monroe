import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExternalEmbed from "../components/ExternalEmbed";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { localePath, type Locale } from "../i18n";

export const metadata: Metadata = {
  title: "Music Videos | Solomon Monroe",
  description:
    "Watch the official long-form music videos by Southern soul artist Solomon Monroe.",
  alternates: {
    languages: {
      en: "/videos",
      de: "/de/videos",
      fr: "/fr/videos",
      es: "/es/videos",
    },
  },
};

const channelUrl = "https://www.youtube.com/@SolomonMonroe-Soul-Music";

const videos = [
  { id: "LK-bO8txhog", title: "Another Perfect Day" },
  { id: "w-_cyySRJiw", title: "My Little Miracle" },
  { id: "XWt87AtKmFo", title: "She Sang Her Song" },
  { id: "28SLlMb4Kzg", title: "Keep The Fools Out" },
  {
    id: "0ZZII4GFyZ0",
    title: "Sometimes Everybody Needs A Friend",
  },
  { id: "Ix0wdNeDeCc", title: "Let's Do It Again" },
  { id: "YULE_vwDrYw", title: "Simply Alive" },
  { id: "ZnmVZFdcSo8", title: "Magic In The Moonlight" },
  { id: "YwZRcEQP-iw", title: "Take Me Back Home" },
  { id: "UCXG11xvHdE", title: "It Ain't Easy At All" },
  { id: "pApXtU0KhCY", title: "Dust In My Mind" },
  { id: "_qbCOg83rVs", title: "Nothing To Do" },
];

const playlist = videos
  .slice(1)
  .map((video) => video.id)
  .join(",");

function VideoPlayer({
  id,
  title,
  playlistIds,
  locale,
}: {
  id: string;
  title: string;
  playlistIds?: string;
  locale: Locale;
}) {
  const playlistParam = playlistIds ? `&playlist=${playlistIds}` : "";

  return (
    <div className="overflow-hidden bg-black shadow-2xl shadow-black/35">
      <ExternalEmbed
        provider="YouTube"
        locale={locale}
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0${playlistParam}`}
        title={`${title} — Solomon Monroe`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        containerClassName="aspect-video"
      />
    </div>
  );
}

const videoCopy = {
  en: {
    home: "HOME",
    songs: "Songs & Stories",
    channel: "YouTube Channel",
    eyebrow: "On film",
    title: "Music",
    titleAccent: "Videos",
    intro:
      "Songs given another life through intimate performances, cinematic stories, and the warmth of Southern soul.",
    latest: "Latest release",
    latestText: "The newest chapter from Solomon Monroe, presented in full.",
    recent: "Recent films",
    recentTitle: "More stories in motion.",
    official: "Official music video",
    collection: "The video collection",
    all: "All long-form videos.",
    allText: `Play all ${videos.length} full-length music videos in one place. Shorts are intentionally excluded from this collection.`,
    visit: "Visit the YouTube channel",
    songbook: "Songbook",
    back: "Back home",
  },
  de: {
    home: "STARTSEITE",
    songs: "Songs & Geschichten",
    channel: "YouTube-Kanal",
    eyebrow: "Im Film",
    title: "Musik",
    titleAccent: "Videos",
    intro:
      "Songs erhalten durch persönliche Auftritte, filmische Geschichten und die Wärme des Southern Soul ein zweites Leben.",
    latest: "Neueste Veröffentlichung",
    latestText: "Das neueste Kapitel von Solomon Monroe in voller Länge.",
    recent: "Aktuelle Filme",
    recentTitle: "Weitere Geschichten in Bewegung.",
    official: "Offizielles Musikvideo",
    collection: "Die Videosammlung",
    all: "Alle Videos in voller Länge.",
    allText: `Sieh dir alle ${videos.length} vollständigen Musikvideos an einem Ort an. Shorts sind bewusst nicht Teil dieser Sammlung.`,
    visit: "Zum YouTube-Kanal",
    songbook: "Songbuch",
    back: "Zur Startseite",
  },
  fr: {
    home: "ACCUEIL",
    songs: "Chansons & histoires",
    channel: "Chaîne YouTube",
    eyebrow: "À l’écran",
    title: "Clips",
    titleAccent: "Musicaux",
    intro:
      "Des chansons qui prennent une autre dimension grâce à des interprétations intimes, des récits en images et toute la chaleur de la soul du Sud.",
    latest: "Dernière sortie",
    latestText: "Le tout dernier chapitre musical de Solomon Monroe.",
    recent: "Clips récents",
    recentTitle: "D’autres histoires prennent vie.",
    official: "Clip musical officiel",
    collection: "La collection vidéo",
    all: "Tous les clips en version intégrale.",
    allText: `Retrouvez les ${videos.length} clips musicaux en version intégrale au même endroit. Les Shorts ne font volontairement pas partie de cette sélection.`,
    visit: "Voir la chaîne YouTube",
    songbook: "Chansons",
    back: "Retour à l’accueil",
  },
  es: {
    home: "INICIO",
    songs: "Canciones e historias",
    channel: "Canal de YouTube",
    eyebrow: "En imágenes",
    title: "Vídeos",
    titleAccent: "Musicales",
    intro:
      "Canciones que cobran una nueva vida a través de actuaciones íntimas, historias cinematográficas y toda la calidez del southern soul.",
    latest: "Último lanzamiento",
    latestText: "El capítulo más reciente de Solomon Monroe, en su versión completa.",
    recent: "Vídeos recientes",
    recentTitle: "Más historias que cobran vida.",
    official: "Vídeo musical oficial",
    collection: "La colección de vídeos",
    all: "Todos los vídeos completos.",
    allText: `Disfruta de los ${videos.length} vídeos musicales completos en un solo lugar. Los Shorts se han dejado fuera de esta selección de forma intencionada.`,
    visit: "Visitar el canal de YouTube",
    songbook: "Canciones",
    back: "Volver al inicio",
  },
} as const;

export function VideosContent({ locale }: { locale: Locale }) {
  const copy = videoCopy[locale];

  return (
    <main className="min-h-screen bg-[#0d0b09] text-[#f3eadb]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <Link
            href={localePath(locale, "/")}
            className="font-serif text-lg tracking-[0.12em] transition-colors hover:text-[#d99b52]"
          >
            {copy.home}
          </Link>
          <nav className="flex items-center gap-5 sm:gap-8">
            <Link
              href={localePath(locale, "/lyrics")}
              className="hidden text-xs font-bold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white sm:block"
            >
              {copy.songs}
            </Link>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#d99b52] transition-colors hover:text-[#e7ae6c]"
            >
              {copy.channel}
            </a>
            <LanguageSwitcher currentLocale={locale} />
          </nav>
        </div>
      </header>

      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/images/gallery/solomon-live.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-center"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(7,5,4,0.97)_0%,rgba(7,5,4,0.78)_48%,rgba(7,5,4,0.38)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0d0b09] via-transparent to-black/45" />
        <div className="mx-auto flex min-h-[72vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-[#d99b52]">
              <span className="h-px w-9 bg-current" aria-hidden="true" />
              {copy.eyebrow}
            </p>
            <h1 className="mt-6 font-serif text-6xl leading-[0.88] tracking-[-0.045em] sm:text-8xl">
              {copy.title}
              <span className="block italic text-[#d7b98d]">{copy.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              {copy.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c47f3d]">
                {copy.latest}
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
                {videos[0].title}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/52 lg:justify-self-end">
              {copy.latestText}
            </p>
          </div>

          <div className="mt-12 sm:mt-16">
            <VideoPlayer id={videos[0].id} title={videos[0].title} locale={locale} />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#17120e] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c47f3d]">
              {copy.recent}
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
              {copy.recentTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 sm:mt-16">
            {videos.slice(1, 3).map((video) => (
              <article key={video.id}>
                <VideoPlayer id={video.id} title={video.title} locale={locale} />
                <h3 className="mt-5 font-serif text-3xl">{video.title}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c47f3d]">
                  {copy.official}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8ddcc] px-5 py-20 text-[#241a13] sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9d5724]">
              {copy.collection}
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
              {copy.all}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-black/58">
              {copy.allText}
            </p>
            <a
              href={`${channelUrl}/videos`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex min-h-12 items-center justify-center bg-[#9d5724] px-7 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#b56c2e]"
            >
              {copy.visit}
            </a>
          </div>

          <VideoPlayer
            id={videos[0].id}
            title="Solomon Monroe — Music Video Collection"
            playlistIds={playlist}
            locale={locale}
          />
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-3xl">Solomon Monroe</p>
          <div className="flex flex-wrap gap-7 text-xs font-bold uppercase tracking-[0.2em] text-white/55">
            <a
              href="https://www.facebook.com/SolomonMonroeMusic"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#d99b52]"
            >
              Facebook
            </a>
            <a
              href="https://m.me/SolomonMonroeMusic"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#d99b52]"
            >
              Messenger
            </a>
            <Link href={localePath(locale, "/lyrics")} className="transition-colors hover:text-[#d99b52]">
              {copy.songbook}
            </Link>
            <Link href={localePath(locale, "/")} className="transition-colors hover:text-[#d99b52]">
              {copy.back}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function VideosPage() {
  return <VideosContent locale="en" />;
}
