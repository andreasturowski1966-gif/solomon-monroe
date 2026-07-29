import type { Metadata } from "next";
import Link from "next/link";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Aviso legal | Solomon Monroe",
  robots: { index: false, follow: true },
};

export default function SpanishLegalNoticePage() {
  return (
    <main className="min-h-screen bg-[#0d0b09] px-5 py-16 text-[#eee1ce] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between gap-5">
          <Link href="/es" className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#d99b52] transition-colors hover:text-[#e7ae6c]">
            ← Volver al inicio
          </Link>
          <LanguageSwitcher currentLocale="es" />
        </div>
        <header className="mt-12 border-b border-white/10 pb-10">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#c47f3d]">Información legal</p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">Aviso legal / Impressum</h1>
        </header>
        <div className="mt-12 space-y-10 text-sm leading-7 text-white/65 sm:text-base">
          <section>
            <h2 className="font-serif text-2xl text-[#eee1ce]">Información conforme al artículo 5 DDG y al artículo 18, apartado 1, MStV</h2>
            <address className="mt-4 not-italic">
              Alex Turow Records<br />
              Titular: Andreas Turowski<br />
              Meinrad-Miltenberger-Weg 1<br />
              58313 Herdecke<br />
              Alemania
            </address>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[#eee1ce]">Contacto</h2>
            <p className="mt-4">
              Correo electrónico:{" "}
              <a href="mailto:andreas.turowski1966@gmail.com" className="text-[#d99b52] underline decoration-[#d99b52]/35 underline-offset-4 transition-colors hover:text-[#e7ae6c]">
                andreas.turowski1966@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
