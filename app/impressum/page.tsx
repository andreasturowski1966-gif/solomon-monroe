import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice | Solomon Monroe",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0d0b09] px-5 py-16 text-[#eee1ce] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#d99b52] transition-colors hover:text-[#e7ae6c]"
        >
          ← Back home
        </Link>

        <header className="mt-12 border-b border-white/10 pb-10">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#c47f3d]">
            Legal notice
          </p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">
            Legal Notice / Impressum
          </h1>
        </header>

        <div className="mt-12 space-y-10 text-sm leading-7 text-white/65 sm:text-base">
          <section>
            <h2 className="font-serif text-2xl text-[#eee1ce]">
              Information pursuant to Section 5 DDG and Section 18(1) MStV
            </h2>
            <address className="mt-4 not-italic">
              Alex Turows Records
              <br />
              Proprietor: Andreas Turowski
              <br />
              Meinrad-Miltenberger-Weg 1
              <br />
              58313 Herdecke
              <br />
              Germany
            </address>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-[#eee1ce]">Contact</h2>
            <p className="mt-4">
              Email:{" "}
              <a
                href="mailto:andreas.turowski1966@gmail.com"
                className="text-[#d99b52] underline decoration-[#d99b52]/35 underline-offset-4 transition-colors hover:text-[#e7ae6c]"
              >
                andreas.turowski1966@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
