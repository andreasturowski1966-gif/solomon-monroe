import Image from "next/image";
import Link from "next/link";
import ExternalEmbed from "./components/ExternalEmbed";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { homeCopy } from "./home-copy";
import { localePath, type Locale } from "./i18n";
import { getSongs } from "./lyrics/data";

const streamingLinks = {
  spotify:
    "https://open.spotify.com/intl-de/artist/2bSH5AS6F3w6oIPlgJD1wM?si=B6K2ke6xTBKoZ6cBj6O8lw",
  amazon:
    "https://music.amazon.de/artists/B0GYM3JDGY/solomon-monroe",
};

export function HomeContent({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const songs = getSongs(locale);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0d0b09] text-[#f3eadb]">
      <section
        id="home"
        className="hero relative isolate flex min-h-[100svh] flex-col"
      >
        <div className="hero-image absolute inset-0 -z-30" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(7,5,4,0.96)_0%,rgba(7,5,4,0.72)_40%,rgba(7,5,4,0.15)_75%,rgba(7,5,4,0.35)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,5,4,0.68)_0%,transparent_28%,rgba(7,5,4,0.15)_55%,rgba(7,5,4,0.98)_100%)]"
          aria-hidden="true"
        />

        <header className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#e6d4b9] transition-colors hover:text-[#cf8d43]"
            aria-label={`Solomon Monroe – ${copy.home}`}
          >
            {copy.home}
          </a>
          <nav
            className="hidden items-center gap-8 text-[0.68rem] font-bold uppercase tracking-[0.22em] md:flex"
            aria-label={copy.mainNavigation}
          >
            {copy.navigation.map(([label, href]) => (
              <a
                key={label}
                href={href.startsWith("/") ? localePath(locale, href) : href}
                className="text-white/65 transition-colors hover:text-[#d99b52]"
              >
                {label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher currentLocale={locale} />
          <details className="group relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] [&::-webkit-details-marker]:hidden">
              {copy.menu}
              <span className="relative block h-3.5 w-5" aria-hidden="true">
                <span className="absolute left-0 top-0 h-px w-5 bg-current transition-transform group-open:translate-y-[6px] group-open:rotate-45" />
                <span className="absolute bottom-0 left-0 h-px w-5 bg-current transition-transform group-open:-translate-y-[7px] group-open:-rotate-45" />
              </span>
            </summary>
            <nav className="absolute right-0 top-9 z-20 w-48 border border-white/10 bg-[#0d0b09]/96 p-2 shadow-2xl backdrop-blur-xl">
              {copy.navigation.map(([label, href]) => (
                <a
                  key={label}
                  href={href.startsWith("/") ? localePath(locale, href) : href}
                  className="block px-4 py-3 text-sm tracking-[0.12em] text-white/75 transition-colors hover:bg-white/5 hover:text-[#d99b52]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </details>
        </header>

        <p className="absolute left-5 top-24 flex items-center gap-3 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[#d99b52] sm:hidden">
          <span className="h-px w-7 bg-current" aria-hidden="true" />
          {copy.tagline}
        </p>

        <div className="mx-auto flex w-full max-w-[1500px] flex-1 items-end px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-6 hidden items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.35em] text-[#d99b52] sm:flex">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              {copy.tagline}
            </p>
            <h1 className="font-serif text-6xl leading-[0.82] tracking-[-0.055em] text-[#f5ecde] sm:text-8xl lg:text-[8.5rem]">
              Solomon
              <span className="block italic text-[#d7b98d]">Monroe</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              {copy.intro}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#story"
                className="inline-flex min-h-12 items-center justify-center bg-[#b56c2e] px-8 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#cb8240]"
              >
                {copy.meet}
              </a>
              <a
                href="#music"
                className="inline-flex min-h-12 items-center justify-center border border-white/30 px-8 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:border-white/70 hover:bg-white/8"
              >
                {copy.musicStories}
              </a>
              <Link
                href={localePath(locale, "/videos")}
                className="inline-flex min-h-12 items-center justify-center border border-[#d99b52]/70 px-8 text-xs font-bold uppercase tracking-[0.2em] text-[#e8b77d] transition-colors hover:border-[#d99b52] hover:bg-[#d99b52]/10 hover:text-white"
              >
                {copy.videos}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d99b52]/15 bg-[#15110e] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.35em] text-[#c47f3d]">
            {copy.heart}
          </p>
          <blockquote className="mt-7 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#eee1ce] sm:text-6xl">
            {copy.quote}
          </blockquote>
        </div>
      </section>

      <section id="story" className="scroll-mt-8 bg-[#e8ddcc] text-[#241a13]">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[68vh] lg:min-h-full">
            <Image
              src="/images/story/solomon-window.png"
              alt="Solomon Monroe looking through a studio window"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center"
            />
          </div>
          <div className="px-5 py-20 sm:px-10 sm:py-28 lg:px-16 xl:px-24">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.35em] text-[#9d5724]">
              {copy.storyEyebrow}
            </p>
            <h2 className="mt-6 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl">
              {copy.storyTitle}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-black/62">
              {copy.storyIntro}
            </p>
            <div className="mt-14">
              {copy.chapters.map((chapter) => (
                <article
                  key={chapter.title}
                  className="grid gap-4 border-t border-black/15 py-7 sm:grid-cols-[6rem_1fr]"
                >
                  <p className="pt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#9d5724]">
                    {chapter.year}
                  </p>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-black/58 sm:text-base">
                      {chapter.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="music"
        className="scroll-mt-8 px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.35em] text-[#d99b52]">
              {copy.musicEyebrow}
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl">
              {copy.musicTitle}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
              {copy.musicIntro}
            </p>
            <Link
              href={localePath(locale, "/lyrics")}
              className="group mt-10 block border border-[#d99b52]/25 bg-[#17120e] p-7 transition-colors hover:border-[#d99b52]/55 hover:bg-[#1d1712] sm:p-8"
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#d99b52]">
                {copy.moreThanLyrics}
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-[#f3eadb] sm:text-4xl">
                {copy.everySong}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/52 sm:text-base">
                {copy.storyCard}
              </p>
              <span className="mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d99b52]">
                {copy.discover}
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </span>
            </Link>
            <div className="mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {copy.features.map(([title, description]) => (
                <div key={title} className="bg-[#100d0b] p-6">
                  <h3 className="font-serif text-2xl">{title}</h3>
                  <p className="mt-2 text-sm text-white/40">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-9 border-t border-white/10">
              {songs.slice(0, 6).map((song) => (
                <Link key={song.slug} href={localePath(locale, `/lyrics/${song.slug}`)} className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-white/10 py-4">
                  <span className="text-[0.68rem] font-bold tracking-[0.15em] text-white/30">{song.number}</span>
                  <span className="font-serif text-xl transition-colors group-hover:text-[#d99b52] sm:text-2xl">{song.title}</span>
                  <span className="text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[#d99b52]" aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
            <Link href={localePath(locale, "/lyrics")} className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d99b52] transition-colors hover:text-[#e7ae6c]">
              {copy.explore}{" "}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#1d1712]">
            <Image
              src="/images/story/solomon-at-piano.png"
              alt="Solomon Monroe seated beside a piano"
              fill
              sizes="(max-width: 1024px) 90vw, 44vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mx-auto mt-24 grid max-w-7xl gap-10 border-t border-white/10 pt-16 sm:mt-32 sm:pt-20 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c47f3d]">{copy.listenNow}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-6xl">{copy.servicesTitle}</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/55">{copy.servicesText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href={streamingLinks.spotify} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center bg-[#1ed760] px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#07150b] transition-colors hover:bg-[#35e273]">{copy.openSpotify}</a>
              <a href={streamingLinks.amazon} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-white/60 hover:bg-white/8">{copy.openAmazon}</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-[#1d1712] shadow-2xl shadow-black/30">
            <ExternalEmbed
              provider="Spotify"
              locale={locale}
              title="Solomon Monroe on Spotify"
              src="https://open.spotify.com/embed/artist/2bSH5AS6F3w6oIPlgJD1wM?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              containerClassName="h-[352px] w-full"
              iframeClassName="block h-[352px] w-full border-0"
            />
          </div>
        </div>
      </section>

      <section id="life" className="scroll-mt-8 bg-[#17120e]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[58vh]">
            <Image
              src="/images/story/solomon-and-wife.png"
              alt="Solomon Monroe and his wife sitting together by the fire"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex items-center px-5 py-20 sm:px-10 sm:py-28 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.35em] text-[#d99b52]">
                {copy.lifeEyebrow}
              </p>
              <h2 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-7xl">
                {copy.lifeTitle}
              </h2>
              <p className="mt-8 text-base leading-8 text-white/55">
                {copy.lifeOne}
              </p>
              <p className="mt-5 text-base leading-8 text-white/55">
                {copy.lifeTwo}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="scroll-mt-8 bg-[#e8ddcc] px-5 py-24 text-[#241a13] sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.35em] text-[#9d5724]">
              {copy.galleryEyebrow}
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl">
              {copy.galleryTitle}
            </h2>
          </div>
          <div className="mt-16 grid auto-rows-[22rem] gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <figure className="relative overflow-hidden sm:col-span-2 sm:row-span-2">
              <Image
                src="/images/gallery/solomon-live.png"
                alt="Solomon Monroe singing into a vintage microphone at dusk"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-center transition duration-700 hover:scale-[1.02]"
              />
            </figure>
            <figure className="relative overflow-hidden lg:col-span-2">
              <Image
                src="/images/gallery/solomon-home.png"
                alt="Solomon Monroe cooking with his wife at home"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition duration-700 hover:scale-[1.02]"
              />
            </figure>
            <figure className="relative overflow-hidden lg:col-span-2">
              <Image
                src="/images/gallery/solomon-park.png"
                alt="Solomon Monroe walking through a sunny park"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_24%] transition duration-700 hover:scale-[1.02]"
              />
            </figure>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="font-serif text-4xl tracking-[-0.035em]">
              Solomon Monroe
            </p>
            <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#d99b52]">
              Southern Soul · Stories lived in
            </p>
          </div>
          <div className="sm:text-right">
            <div className="flex gap-7 sm:justify-end">
              <a
                href="https://www.facebook.com/SolomonMonroeMusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-[#d99b52]"
              >
                Facebook
              </a>
              <Link
                href={localePath(locale, "/videos")}
                className="text-xs font-bold uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-[#d99b52]"
              >
                Videos
              </Link>
              <Link
                href={localePath(locale, "/lyrics")}
                className="text-xs font-bold uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-[#d99b52]"
              >
                {copy.songsStories}
              </Link>
            </div>
            <a
              href="https://m.me/SolomonMonroeMusic"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d99b52] transition-colors hover:text-[#e7ae6c]"
            >
              {copy.messenger}
            </a>
            <p className="mt-6 text-xs text-white/25">
              © 2026 Alex Turow Records. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function Home() {
  return <HomeContent locale="en" />;
}
