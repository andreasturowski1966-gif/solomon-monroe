import type { Metadata } from "next";
import Link from "next/link";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Solomon Monroe",
  robots: { index: false, follow: true },
};

const sectionClass = "space-y-4";
const headingClass = "font-serif text-2xl text-[#eee1ce] sm:text-3xl";
const linkClass =
  "text-[#d99b52] underline decoration-[#d99b52]/35 underline-offset-4 transition-colors hover:text-[#e7ae6c]";

export default function GermanPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0d0b09] px-5 py-16 text-[#eee1ce] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between gap-5">
          <Link
            href="/de"
            className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#d99b52] transition-colors hover:text-[#e7ae6c]"
          >
            ← Zur Startseite
          </Link>
          <LanguageSwitcher currentLocale="de" />
        </div>
        <header className="mt-12 border-b border-white/10 pb-10">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#c47f3d]">
            Datenschutz
          </p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-5 text-sm text-white/40">Stand: 29. Juli 2026</p>
        </header>

        <div className="mt-12 space-y-12 text-sm leading-7 text-white/65 sm:text-base">
          <section className={sectionClass}>
            <h2 className={headingClass}>1. Verantwortlicher</h2>
            <address className="not-italic">
              Alex Turow Records
              <br />
              Inhaber: Andreas Turowski
              <br />
              Meinrad-Miltenberger-Weg 1
              <br />
              58313 Herdecke
              <br />
              Deutschland
              <br />
              E-Mail:{" "}
              <a href="mailto:andreas.turowski1966@gmail.com" className={linkClass}>
                andreas.turowski1966@gmail.com
              </a>
            </address>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>2. Hosting und Server-Protokolle</h2>
            <p>
              Diese Website wird über Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA, bereitgestellt. Beim Aufruf verarbeitet
              der Hostinganbieter technisch notwendige Verbindungsdaten. Dazu
              können IP-Adresse, Zeitpunkt, aufgerufene Seite, Referrer-URL,
              Browsertyp, Betriebssystem und Geräteinformationen gehören.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
              Interesse liegt im sicheren und störungsfreien Betrieb der
              Website. Vercel kann Daten in den USA verarbeiten, ist nach dem
              EU-US Data Privacy Framework zertifiziert und nennt ergänzend
              EU-Standardvertragsklauseln als Übermittlungsgrundlage. Weitere
              Informationen enthält die{" "}
              <a
                href="https://vercel.com/legal/privacy-notice"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Datenschutzerklärung von Vercel
              </a>
              .
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>3. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre
              Angaben zur Bearbeitung der Anfrage. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. b DSGVO bei vertraglichen oder vorvertraglichen
              Anliegen, ansonsten Art. 6 Abs. 1 lit. f DSGVO. Die Angaben
              werden nach abschließender Bearbeitung gelöscht, sofern keine
              Aufbewahrungspflichten oder berechtigten Gründe entgegenstehen.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>4. Spracheinstellung</h2>
            <p>
              Beim ersten Besuch wird die Spracheinstellung Ihres Browsers
              ausschließlich lokal ausgewertet, um eine passende Sprache
              anzuzeigen. Diese Information wird von uns weder übertragen noch
              gespeichert. Wenn Sie selbst eine Sprache auswählen, wird diese
              Auswahl im lokalen Speicher Ihres Browsers hinterlegt. Sie dient
              ausschließlich dazu, die von Ihnen gewünschte Sprache
              bereitzustellen. Dafür wird kein Cookie gesetzt. Rechtsgrundlage
              ist § 25 Abs. 2 Nr. 2 TDDDG und Art. 6 Abs. 1 lit. f DSGVO. Sie
              können die gespeicherte Auswahl über Ihre Browsereinstellungen
              löschen.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>5. Spotify-Einbettung</h2>
            <p>
              Der Spotify-Player ist zunächst blockiert. Erst nach Auswahl von
              „Spotify laden“ wird eine Verbindung zu Spotify AB,
              Regeringsgatan 19, 111 53 Stockholm, Schweden, hergestellt.
              Dabei können IP-Adresse, Geräte- und Browserinformationen sowie
              Angaben zur Player-Nutzung übermittelt und Informationen auf
              Ihrem Gerät gespeichert oder ausgelesen werden.
            </p>
            <p>
              Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a
              DSGVO und § 25 Abs. 1 TDDDG. Sie gilt nur für den aktuellen
              Seitenaufruf; durch Neuladen verhindern Sie künftige
              Verbindungen. Weitere Informationen enthält die{" "}
              <a
                href="https://www.spotify.com/de/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Datenschutzrichtlinie von Spotify
              </a>
              .
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>6. YouTube-Einbettungen</h2>
            <p>
              YouTube-Videos sind über youtube-nocookie.com eingebunden und
              zunächst blockiert. Erst nach Auswahl von „YouTube laden“ wird
              eine Verbindung hergestellt. Dabei können IP-Adresse, Geräte-
              und Browserinformationen sowie Angaben zum aufgerufenen Video an
              Google übermittelt werden. Bei einem angemeldeten Google-Konto
              kann die Nutzung diesem Konto zugeordnet werden.
            </p>
            <p>
              Anbieter im Europäischen Wirtschaftsraum ist Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland. Eine
              Verarbeitung in den USA ist möglich. Rechtsgrundlage ist Ihre
              Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
              TDDDG. Weitere Informationen enthält die{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>7. Externe Links</h2>
            <p>
              Die Website verlinkt zu Spotify, Amazon Music, YouTube sowie
              Facebook und Messenger von Meta. Durch die bloße Anzeige werden
              über diese Links keine Verbindungen hergestellt. Erst beim
              Anklicken verlassen Sie unsere Website; anschließend gilt die
              Datenschutzerklärung des jeweiligen Anbieters.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>8. Analyse und Marketing</h2>
            <p>
              Wir verwenden keine eigenen Analyse- oder Marketingdienste.
              Spotify- und YouTube-Inhalte werden ohne Ihre Freigabe nicht
              geladen.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>9. Ihre Rechte</h2>
            <p>
              Sie haben nach Maßgabe der DSGVO insbesondere Rechte auf
              Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung
              und Datenübertragbarkeit. Einwilligungen können Sie jederzeit
              mit Wirkung für die Zukunft widerrufen. Verarbeitungen auf
              Grundlage berechtigter Interessen können Sie aus Gründen Ihrer
              besonderen Situation widersprechen.
            </p>
            <p>
              Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren.
              Zuständig ist insbesondere die Landesbeauftragte für Datenschutz
              und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße
              2–4, 40213 Düsseldorf. Weitere Informationen finden Sie unter{" "}
              <a
                href="https://www.ldi.nrw.de/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                www.ldi.nrw.de
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
