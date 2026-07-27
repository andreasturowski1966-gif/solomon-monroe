import Image from "next/image";
import Link from "next/link";
import { songs } from "./lyrics/data";

const streamingLinks = {
  spotify:
    "https://open.spotify.com/intl-de/artist/2bSH5AS6F3w6oIPlgJD1wM?si=B6K2ke6xTBKoZ6cBj6O8lw",
  amazon:
    "https://music.amazon.de/artists/B0GYM3JDGY/solomon-monroe",
};

const navigation = [
  { label: "Story", href: "#story" },
  { label: "Music", href: "#music" },
  { label: "Videos", href: "/videos" },
  { label: "Life", href: "#life" },
  { label: "Gallery", href: "#gallery" },
  { label: "Songs & Stories", href: "/lyrics" },
];

const chapters = [
  {
    year: "1966",
    title: "Born between steel and song",
    text: "Raised in the American South, Solomon grew up with the steady hands of a steelworker father and the musical ear of a mother who taught music.",
  },
  {
    year: "Young man",
    title: "A path that wasn't his",
    text: "After high school he followed his father into the steelworks. He respected the work, but quickly understood that his own life was calling from somewhere else.",
  },
  {
    year: "College years",
    title: "Classrooms by day, soul clubs by night",
    text: "Solomon studied music and English education while spending his evenings learning the truth of a song in bars and small soul clubs.",
  },
  {
    year: "A lifetime",
    title: "The teacher finds his own voice",
    text: "For decades he taught high school students to read closely, listen deeply, and trust their voices. Only later did he decide it was time to fully trust his own.",
  },
];

export default function Home() {
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
            aria-label="Solomon Monroe – Home"
          >
            Home
          </a>
          <nav
            className="hidden items-center gap-8 text-[0.68rem] font-bold uppercase tracking-[0.22em] md:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/65 transition-colors hover:text-[#d99b52]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <details className="group relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] [&::-webkit-details-marker]:hidden">
              Menu
              <span className="relative block h-3.5 w-5" aria-hidden="true">
                <span className="absolute left-0 top-0 h-px w-5 bg-current transition-transform group-open:translate-y-[6px] group-open:rotate-45" />
                <span className="absolute bottom-0 left-0 h-px w-5 bg-current transition-transform group-open:-translate-y-[7px] group-open:-rotate-45" />
              </span>
            </summary>
            <nav className="absolute right-0 top-9 z-20 w-48 border border-white/10 bg-[#0d0b09]/96 p-2 shadow-2xl backdrop-blur-xl">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-sm tracking-[0.12em] text-white/75 transition-colors hover:bg-white/5 hover:text-[#d99b52]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </header>

        <p className="absolute left-5 top-24 flex items-center gap-3 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[#d99b52] sm:hidden">
          <span className="h-px w-7 bg-current" aria-hidden="true" />
          Southern Soul · Stories lived in
        </p>

        <div className="mx-auto flex w-full max-w-[1500px] flex-1 items-end px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-6 hidden items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.35em] text-[#d99b52] sm:flex">
              <span className="h-px w-10 bg-current" aria-hidden="true" />
              Southern Soul · Stories lived in
            </p>
            <h1 className="font-serif text-6xl leading-[0.82] tracking-[-0.055em] text-[#f5ecde] sm:text-8xl lg:text-[8.5rem]">
              Solomon
              <span className="block italic text-[#d7b98d]">Monroe</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/68 sm:text-lg">
              A lifetime in the making. Soul music shaped by hard work,
              classrooms, second chances, and the courage to begin again.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#story"
                className="inline-flex min-h-12 items-center justify-center bg-[#b56c2e] px-8 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#cb8240]"
              >
                Meet Solomon
              </a>
              <a
                href="#music"
                className="inline-flex min-h-12 items-center justify-center border border-white/30 px-8 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:border-white/70 hover:bg-white/8"
              >
                The music
              </a>
              <Link
                href="/videos"
                className="inline-flex min-h-12 items-center justify-center border border-[#d99b52]/70 px-8 text-xs font-bold uppercase tracking-[0.2em] text-[#e8b77d] transition-colors hover:border-[#d99b52] hover:bg-[#d99b52]/10 hover:text-white"
              >
                The videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d99b52]/15 bg-[#15110e] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.35em] text-[#c47f3d]">
            The heart of it
          </p>
          <blockquote className="mt-7 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#eee1ce] sm:text-6xl">
            “Dreams don&apos;t have an expiration date.”
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
              His story
            </p>
            <h2 className="mt-6 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl">
              A voice seasoned by life.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-black/62">
              Solomon Monroe was born in 1966 in the American South. Music
              arrived early, but the road toward becoming an artist took the
              long way around.
            </p>
            <div className="mt-14">
              {chapters.map((chapter) => (
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
              The music &amp; the stories
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl">
              Soul with a lifetime behind it.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
              Classic Southern soul meets blues, gospel, and grown-man
              storytelling. These are songs about love after disappointment,
              dignity, forgiveness, family, and the moment you finally choose
              your own voice. Open any song to read its lyrics—and hear
              Solomon tell the real memory, person, or turning point that
              inspired it.
            </p>
            <Link
              href="/lyrics"
              className="group mt-10 block border border-[#d99b52]/25 bg-[#17120e] p-7 transition-colors hover:border-[#d99b52]/55 hover:bg-[#1d1712] sm:p-8"
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#d99b52]">
                More than lyrics
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-[#f3eadb] sm:text-4xl">
                Every song has a story.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/52 sm:text-base">
                Behind these songs are a cancer diagnosis, two marriages, a
                daughter, the loss of a father, hard seasons, second chances,
                and a lifetime of lessons Solomon chose to put into music.
              </p>
              <span className="mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d99b52]">
                Discover the stories
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </span>
            </Link>
            <div className="mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
              {[
                ["Southern Soul", "Warm, human, unhurried"],
                ["Blues & Gospel", "Roots that still show"],
                ["Storytelling", "The truth behind every song"],
                ["Second Chances", "No dream too late"],
              ].map(([title, description]) => (
                <div key={title} className="bg-[#100d0b] p-6">
                  <h3 className="font-serif text-2xl">{title}</h3>
                  <p className="mt-2 text-sm text-white/40">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-9 border-t border-white/10">
              {songs.slice(0, 6).map((song) => (
                <Link key={song.slug} href={`/lyrics/${song.slug}`} className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-white/10 py-4">
                  <span className="text-[0.68rem] font-bold tracking-[0.15em] text-white/30">{song.number}</span>
                  <span className="font-serif text-xl transition-colors group-hover:text-[#d99b52] sm:text-2xl">{song.title}</span>
                  <span className="text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[#d99b52]" aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
            <Link href="/lyrics" className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d99b52] transition-colors hover:text-[#e7ae6c]">
              Explore all songs &amp; stories{" "}
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
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c47f3d]">Listen now</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-6xl">Find Solomon on your favorite service.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/55">Follow the official artist profile for the latest releases and everything still to come.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href={streamingLinks.spotify} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center bg-[#1ed760] px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#07150b] transition-colors hover:bg-[#35e273]">Open Spotify</a>
              <a href={streamingLinks.amazon} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-white/60 hover:bg-white/8">Open Amazon Music</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-[#1d1712] shadow-2xl shadow-black/30">
            <iframe title="Solomon Monroe on Spotify" src="https://open.spotify.com/embed/artist/2bSH5AS6F3w6oIPlgJD1wM?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="block border-0" />
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
                Life beyond the stage
              </p>
              <h2 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-7xl">
                Family is built by showing up.
              </h2>
              <p className="mt-8 text-base leading-8 text-white/55">
                Solomon has been married to his second wife for more than
                twenty years. Their life is grounded in friendship,
                reliability, and the quiet decision to keep choosing one
                another.
              </p>
              <p className="mt-5 text-base leading-8 text-white/55">
                His daughter from his first marriage became a teacher too. His
                stepson is no less a part of the family. To Solomon, family is
                not defined by origin alone, but by trust, responsibility, and
                being there when it matters.
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
              In his own time
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl">
              The man behind the voice.
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
                href="/videos"
                className="text-xs font-bold uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-[#d99b52]"
              >
                Videos
              </Link>
              <Link
                href="/lyrics"
                className="text-xs font-bold uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-[#d99b52]"
              >
                Songs &amp; Stories
              </Link>
            </div>
            <a
              href="https://m.me/SolomonMonroeMusic"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d99b52] transition-colors hover:text-[#e7ae6c]"
            >
              Message on Messenger
            </a>
            <p className="mt-6 text-xs text-white/25">
              © 2026 Solomon Monroe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
