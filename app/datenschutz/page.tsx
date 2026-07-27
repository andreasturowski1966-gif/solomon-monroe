import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Solomon Monroe",
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
            Privacy Policy / Datenschutz
          </h1>
          <p className="mt-5 text-sm text-white/40">Last updated: July 27, 2026</p>
        </header>

        <div className="mt-12 space-y-12 text-sm leading-7 text-white/65 sm:text-base">
          <section className={sectionClass}>
            <h2 className={headingClass}>1. Data Controller</h2>
            <address className="not-italic">
              Alex Turow Records
              <br />
              Proprietor: Andreas Turowski
              <br />
              Meinrad-Miltenberger-Weg 1
              <br />
              58313 Herdecke
              <br />
              Germany
              <br />
              Email:{" "}
              <a
                href="mailto:andreas.turowski1966@gmail.com"
                className={linkClass}
              >
                andreas.turowski1966@gmail.com
              </a>
            </address>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>2. Hosting and Server Logs</h2>
            <p>
              This website is hosted by Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA. When you visit this website, the hosting
              provider processes connection data that is technically required
              to deliver the site. This may include your IP address, the date
              and time of access, the page requested, the referring URL,
              browser type, operating system, and device information.
            </p>
            <p>
              This processing is necessary to provide the website securely and
              reliably and is based on Article 6(1)(f) GDPR. Our legitimate
              interest is the secure and uninterrupted operation of this
              website. Log data is retained only for as long as necessary for
              these purposes or to comply with legal obligations.
            </p>
            <p>
              Vercel may process data in the United States. Vercel is certified
              under the EU-U.S. Data Privacy Framework and also identifies the
              EU Standard Contractual Clauses as a transfer mechanism. For
              further information, please see the{" "}
              <a
                href="https://vercel.com/legal/privacy-notice"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Vercel Privacy Notice
              </a>
              .
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>3. Contacting Us</h2>
            <p>
              If you contact us by email, we process the information you
              provide in order to respond to your request. The legal basis is
              Article 6(1)(b) GDPR where your request concerns a contract or
              steps prior to entering into a contract. In all other cases, the
              legal basis is Article 6(1)(f) GDPR. Our legitimate interest is
              responding to communications addressed to us.
            </p>
            <p>
              We delete this information once your request has been fully
              resolved, unless statutory retention obligations or legitimate
              grounds require us to keep it for longer.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>4. Embedded Spotify Player</h2>
            <p>
              The Spotify player is blocked by default. A connection to Spotify
              is established only after you select “Load Spotify.” Spotify may
              then receive your IP address, device and browser information, and
              information about your use of the player. Spotify may also store
              information on or access information from your device.
            </p>
            <p>
              The provider is Spotify AB, Regeringsgatan 19, 111 53 Stockholm,
              Sweden. The player is activated on the basis of your consent
              under Article 6(1)(a) GDPR and Section 25(1) TDDDG. Your consent
              applies only to the current page view. Reloading the page
              withdraws it for future connections. For further information,
              please see the{" "}
              <a
                href="https://www.spotify.com/de/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Spotify Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>5. Embedded YouTube Videos</h2>
            <p>
              YouTube videos are embedded in privacy-enhanced mode through
              youtube-nocookie.com and are blocked by default. A connection to
              YouTube is established only after you select “Load YouTube.”
              Google may then receive your IP address, device and browser
              information, and information about the video requested. If you
              are signed in to Google, your activity may be associated with
              your account.
            </p>
            <p>
              The provider for the European Economic Area is Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Ireland.
              Processing by Google LLC in the United States is possible. The
              video is activated on the basis of your consent under Article
              6(1)(a) GDPR and Section 25(1) TDDDG. Your consent applies only
              to the current page view. Reloading the page withdraws it for
              future connections. For further information, please see the{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>6. External Links</h2>
            <p>
              This website links to Spotify, Amazon Music, YouTube, and Meta’s
              Facebook and Messenger services. Merely viewing our website does
              not establish a connection to these services through those
              links. When you select a link, you leave our website. From that
              point onward, the relevant provider processes data under its own
              privacy policy.
            </p>
            <p>
              For further information, please see the privacy policies of{" "}
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
            <h2 className={headingClass}>7. Cookies and Analytics</h2>
            <p>
              We do not use our own analytics or marketing services on this
              website. Your decision to load external embedded content is not
              stored permanently. Spotify and YouTube content will not be
              loaded without your consent.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>8. Your Rights</h2>
            <p>
              Subject to the requirements of the GDPR, you have the right to
              access, rectify, erase, and restrict the processing of your
              personal data, as well as the right to data portability. You may
              withdraw your consent at any time with effect for the future.
              Where processing is based on legitimate interests, you may object
              on grounds relating to your particular situation.
            </p>
            <p>
              You also have the right to lodge a complaint with a data
              protection supervisory authority. The competent authority is, in
              particular, the State Commissioner for Data Protection and
              Freedom of Information of North Rhine-Westphalia, Kavalleriestraße
              2–4, 40213 Düsseldorf, Germany. Further information and the
              complaint form are available at{" "}
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
