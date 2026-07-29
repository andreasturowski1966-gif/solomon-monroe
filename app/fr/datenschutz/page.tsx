import type { Metadata } from "next";
import Link from "next/link";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Solomon Monroe",
  robots: { index: false, follow: true },
};

const sectionClass = "space-y-4";
const headingClass = "font-serif text-2xl text-[#eee1ce] sm:text-3xl";
const linkClass = "text-[#d99b52] underline decoration-[#d99b52]/35 underline-offset-4 transition-colors hover:text-[#e7ae6c]";

export default function FrenchPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0d0b09] px-5 py-16 text-[#eee1ce] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between gap-5">
          <Link href="/fr" className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#d99b52] transition-colors hover:text-[#e7ae6c]">← Retour à l’accueil</Link>
          <LanguageSwitcher currentLocale="fr" />
        </div>
        <header className="mt-12 border-b border-white/10 pb-10">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#c47f3d]">Protection des données</p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">Politique de confidentialité</h1>
          <p className="mt-5 text-sm text-white/40">Mise à jour : 29 juillet 2026</p>
        </header>
        <div className="mt-12 space-y-12 text-sm leading-7 text-white/65 sm:text-base">
          <section className={sectionClass}>
            <h2 className={headingClass}>1. Responsable du traitement</h2>
            <address className="not-italic">
              Alex Turow Records<br />Propriétaire : Andreas Turowski<br />Meinrad-Miltenberger-Weg 1<br />58313 Herdecke<br />Allemagne<br />
              E-mail :{" "}<a href="mailto:andreas.turowski1966@gmail.com" className={linkClass}>andreas.turowski1966@gmail.com</a>
            </address>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>2. Hébergement et journaux du serveur</h2>
            <p>Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Lorsque vous consultez le site, l’hébergeur traite les données de connexion techniquement nécessaires. Celles-ci peuvent comprendre l’adresse IP, la date et l’heure, la page consultée, l’URL de provenance, le type de navigateur, le système d’exploitation et les informations relatives à l’appareil.</p>
            <p>Ce traitement repose sur l’article 6, paragraphe 1, point f), du RGPD. Notre intérêt légitime est d’assurer le fonctionnement sûr et fiable du site. Vercel peut traiter des données aux États-Unis, participe au cadre de protection des données UE–États-Unis et indique également utiliser les clauses contractuelles types de l’Union européenne. Consultez la{" "}<a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer" className={linkClass}>politique de confidentialité de Vercel</a>.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>3. Prise de contact</h2>
            <p>Lorsque vous nous contactez par e-mail, nous traitons les informations fournies afin de répondre à votre demande. Le traitement repose sur l’article 6, paragraphe 1, point b), du RGPD pour les demandes contractuelles ou précontractuelles, et sur l’article 6, paragraphe 1, point f), du RGPD dans les autres cas. Les données sont supprimées une fois la demande traitée, sauf obligation légale de conservation ou autre motif légitime.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>4. Préférence linguistique</h2>
            <p>Lors de votre première visite, la langue définie dans votre navigateur est évaluée uniquement sur votre appareil afin d’afficher une version adaptée. Cette information ne nous est ni transmise ni enregistrée. Si vous choisissez vous-même une langue, ce choix est conservé dans le stockage local de votre navigateur uniquement pour vous présenter la langue demandée. Aucun cookie n’est déposé à cette fin. Le traitement repose sur l’article 25, paragraphe 2, point 2, de la loi allemande TDDDG et sur l’article 6, paragraphe 1, point f), du RGPD. Vous pouvez supprimer ce choix dans les paramètres de votre navigateur.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>5. Lecteur Spotify intégré</h2>
            <p>Le lecteur Spotify est bloqué par défaut. Une connexion à Spotify AB, Regeringsgatan 19, 111 53 Stockholm, Suède, n’est établie qu’après avoir sélectionné « Charger Spotify ». Spotify peut alors recevoir votre adresse IP, des informations sur votre appareil et votre navigateur ainsi que des données relatives à l’utilisation du lecteur, et peut enregistrer ou lire des informations sur votre appareil.</p>
            <p>Le traitement repose sur votre consentement conformément à l’article 6, paragraphe 1, point a), du RGPD et à l’article 25, paragraphe 1, de la TDDDG. Le consentement ne vaut que pour la consultation en cours. Pour en savoir plus, consultez la{" "}<a href="https://www.spotify.com/fr/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className={linkClass}>politique de confidentialité de Spotify</a>.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>6. Vidéos YouTube intégrées</h2>
            <p>Les vidéos YouTube sont intégrées via youtube-nocookie.com et restent bloquées par défaut. Une connexion n’est établie qu’après avoir sélectionné « Charger YouTube ». Google peut alors recevoir votre adresse IP, des informations sur votre appareil et votre navigateur ainsi que des données sur la vidéo consultée. Si vous êtes connecté à un compte Google, cette utilisation peut être associée à votre compte.</p>
            <p>Le fournisseur dans l’Espace économique européen est Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande. Un traitement aux États-Unis est possible. Le traitement repose sur votre consentement conformément à l’article 6, paragraphe 1, point a), du RGPD et à l’article 25, paragraphe 1, de la TDDDG. Consultez la{" "}<a href="https://policies.google.com/privacy?hl=fr" target="_blank" rel="noopener noreferrer" className={linkClass}>politique de confidentialité de Google</a>.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>7. Liens externes</h2>
            <p>Ce site contient des liens vers Spotify, Amazon Music, YouTube, Facebook et Messenger de Meta. Leur simple affichage n’établit aucune connexion avec ces services. Lorsque vous cliquez sur un lien, vous quittez notre site et la politique de confidentialité du fournisseur concerné s’applique.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>8. Analyse et marketing</h2>
            <p>Nous n’utilisons aucun service d’analyse ou de marketing. Les contenus Spotify et YouTube ne sont pas chargés sans votre accord.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>9. Vos droits</h2>
            <p>Dans les conditions prévues par le RGPD, vous disposez notamment de droits d’accès, de rectification, d’effacement, de limitation du traitement et de portabilité. Vous pouvez retirer votre consentement à tout moment pour l’avenir et vous opposer, pour des raisons tenant à votre situation particulière, aux traitements fondés sur un intérêt légitime.</p>
            <p>Vous pouvez déposer une réclamation auprès d’une autorité de contrôle. L’autorité compétente est notamment la Commissaire à la protection des données et à la liberté de l’information de Rhénanie-du-Nord–Westphalie, Kavalleriestraße 2–4, 40213 Düsseldorf. Informations complémentaires :{" "}<a href="https://www.ldi.nrw.de/" target="_blank" rel="noopener noreferrer" className={linkClass}>www.ldi.nrw.de</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
