import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { songs } from "./data";

export const metadata: Metadata = {
  title: "Songs & Stories | Solomon Monroe",
  description:
    "Read Solomon Monroe's lyrics and discover the personal stories behind the songs.",
};

export default function LyricsPage() {
  return (
    <main className="min-h-screen bg-[#0d0b09] text-[#f3eadb]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <Link
            href="/"
            className="font-serif text-lg tracking-[0.12em] transition-colors hover:text-[#d99b52]"
          >
            HOME
          </Link>
          <Link
            href="/#music"
            className="text-xs font-bold uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-white"
          >
            Back to music
          </Link>
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
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(9,7,5,0.97)_0%,rgba(9,7,5,0.76)_52%,rgba(9,7,5,0.38)_100%)]" />
        <div className="mx-auto flex min-h-[58vh] max-w-7xl items-end px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d99b52]">
              Words, memories &amp; music
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-none tracking-[-0.04em] sm:text-8xl">
              Songs &amp; Stories
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
              The lyrics, the memories, and the real-life moments that gave
              each song its voice.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c47f3d]">
                The songbook
              </p>
              <p className="mt-3 text-sm text-white/45">
                {songs.length} songs available
              </p>
            </div>
            <div>
              <h2 className="font-serif text-5xl tracking-[-0.03em] sm:text-7xl">
                Stories lived in.
              </h2>
              <p className="mt-5 max-w-2xl font-serif text-2xl italic leading-9 text-[#d7b98d]">
                “Every song carries a little of the road that brought Solomon
                here.”
              </p>
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {songs.map((song) => (
              <Link
                key={song.slug}
                href={`/lyrics/${song.slug}`}
                className="group grid gap-4 py-7 transition-colors hover:text-[#d99b52] sm:grid-cols-[4rem_1fr_auto] sm:items-center"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-white/35">
                  {song.number}
                </span>
                <span>
                  <span className="block font-serif text-3xl text-[#f3eadb] transition-colors group-hover:text-[#d99b52] sm:text-4xl">
                    {song.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm leading-6 text-white/45">
                    {song.story?.teaser ?? "Lyrics from the Solomon Monroe songbook."}
                  </span>
                </span>
                <span
                  className="text-2xl text-white/35 transition-transform group-hover:translate-x-1 group-hover:text-[#d99b52]"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
