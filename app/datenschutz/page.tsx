import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz | Solomon Monroe",
  robots: {
    index: false,
    follow: true,
  },
};

const sectionClass = "space-y-4";
const headingClass = "font-serif text-2xl text-[#eee1ce] sm:text-3xl";
const linkClass =
  "text-[#d99b52] underline decoration-[#d99b52]/35 underline-offset-4 transition-colors hover:text-[#e7ae6c]";

export default function DatenschutzPage() {
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
            Privacy
          </p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-5 text-sm text-white/40">Stand: 27. Juli 2026</p>
        </header>

        <div className="mt-12 space-y-12 text-sm leading-7 text-white/65 sm:text-base">
          <section className={sectionClass}>
            <h2 className={headingClass}>1. Verantwortlicher</h2>
            <address className="not-italic">
              Alex Turows Records
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
              <a
                href="mailto:andreas.turowski1966@gmail.com"
                className={linkClass}
              >
                andreas.turowski1966@gmail.com
              </a>
            </address>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>2. Hosting und Server-Protokolle</h2>
            <p>
              Diese Website wird über Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA, bereitgestellt. Beim Aufruf der Website
              verarbeitet der Hostinganbieter technisch erforderliche
              Verbindungsdaten. Dazu können insbesondere IP-Adresse, Datum und
              Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL,
              Browsertyp, Betriebssystem und Geräteinformationen gehören.
            </p>
            <p>
              Die Verarbeitung erfolgt zur sicheren und zuverlässigen
              Bereitstellung der Website auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Unser berechtigtes Interesse liegt im sicheren,
              störungsfreien Betrieb unseres Onlineangebots. Protokolldaten
              werden nur so lange aufbewahrt, wie dies für diese Zwecke oder
              zur Erfüllung gesetzlicher Pflichten erforderlich ist.
            </p>
            <p>
              Vercel kann Daten in den USA verarbeiten. Vercel ist nach dem
              EU-US Data Privacy Framework zertifiziert und nennt ergänzend
              EU-Standardvertragsklauseln als Übermittlungsgrundlage. Weitere
              Informationen finden Sie in der{" "}
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
              Angaben, um die Anfrage zu beantworten. Rechtsgrundlage ist Art.
              6 Abs. 1 lit. b DSGVO, soweit es um vorvertragliche oder
              vertragliche Anliegen geht, ansonsten Art. 6 Abs. 1 lit. f
              DSGVO. Unser berechtigtes Interesse liegt in der Bearbeitung der
              an uns gerichteten Kommunikation.
            </p>
            <p>
              Die Angaben werden gelöscht, sobald die Anfrage abschließend
              bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten oder
              berechtigten Gründe für eine weitere Speicherung bestehen.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>4. Spotify-Einbettung</h2>
            <p>
              Der Spotify-Player wird zunächst blockiert. Erst wenn Sie „Load
              Spotify“ auswählen, wird eine Verbindung zu Spotify hergestellt.
              Dabei können insbesondere Ihre IP-Adresse, Geräte- und
              Browserinformationen sowie Angaben über die Nutzung des Players
              an Spotify übermittelt und Informationen auf Ihrem Endgerät
              gespeichert oder ausgelesen werden.
            </p>
            <p>
              Anbieter ist Spotify AB, Regeringsgatan 19, 111 53 Stockholm,
              Schweden. Die Aktivierung erfolgt auf Grundlage Ihrer
              Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
              TDDDG. Die Einwilligung gilt nur für den aktuellen Seitenaufruf
              und kann durch Neuladen der Seite für künftige Verbindungen
              widerrufen werden. Weitere Informationen enthält die{" "}
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
            <h2 className={headingClass}>5. YouTube-Einbettung</h2>
            <p>
              Die YouTube-Videos sind im erweiterten Datenschutzmodus über
              youtube-nocookie.com eingebunden und werden zunächst blockiert.
              Erst wenn Sie „Load YouTube“ auswählen, wird eine Verbindung zu
              YouTube hergestellt. Dabei können insbesondere IP-Adresse,
              Geräte- und Browserinformationen sowie Angaben über das
              aufgerufene Video an Google übermittelt werden. Sind Sie bei
              Google angemeldet, kann die Nutzung Ihrem Konto zugeordnet
              werden.
            </p>
            <p>
              Anbieter im Europäischen Wirtschaftsraum ist Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland. Eine
              Verarbeitung durch Google LLC in den USA ist möglich. Die
              Aktivierung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6
              Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung gilt
              nur für den aktuellen Seitenaufruf und kann durch Neuladen der
              Seite für künftige Verbindungen widerrufen werden. Weitere
              Informationen finden Sie in der{" "}
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
            <h2 className={headingClass}>6. Externe Links</h2>
            <p>
              Diese Website verlinkt zu Angeboten von Spotify, Amazon Music,
              YouTube sowie Facebook und Messenger von Meta. Beim bloßen
              Anzeigen unserer Website wird über diese Links keine Verbindung
              zu den genannten Diensten hergestellt. Erst wenn Sie einen Link
              auswählen, verlassen Sie unsere Website. Ab diesem Zeitpunkt
              verarbeitet der jeweilige Anbieter Daten nach seinen eigenen
              Datenschutzbestimmungen.
            </p>
            <p>
              Informationen finden Sie bei{" "}
              <a
                href="https://www.spotify.com/de/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Spotify
              </a>
              ,{" "}
              <a
                href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Amazon
              </a>
              ,{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Google/YouTube
              </a>{" "}
              und{" "}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Meta
              </a>
              .
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>7. Cookies und Analyse</h2>
            <p>
              Wir setzen auf dieser Website keine eigenen Analyse- oder
              Marketingdienste ein. Die Auswahl zur Freigabe externer
              Einbettungen wird nicht dauerhaft gespeichert. Ohne Ihre
              Freigabe werden Spotify- und YouTube-Inhalte nicht geladen.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>8. Ihre Rechte</h2>
            <p>
              Sie haben nach Maßgabe der DSGVO insbesondere das Recht auf
              Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung
              und Datenübertragbarkeit. Erteilte Einwilligungen können Sie
              jederzeit mit Wirkung für die Zukunft widerrufen. Einer
              Verarbeitung auf Grundlage berechtigter Interessen können Sie
              aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
              widersprechen.
            </p>
            <p>
              Sie haben außerdem das Recht, sich bei einer
              Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist
              insbesondere die Landesbeauftragte für Datenschutz und
              Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4,
              40213 Düsseldorf. Weitere Informationen und das
              Beschwerdeformular finden Sie unter{" "}
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
