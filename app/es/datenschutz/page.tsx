import type { Metadata } from "next";
import Link from "next/link";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "Política de privacidad | Solomon Monroe",
  robots: { index: false, follow: true },
};

const sectionClass = "space-y-4";
const headingClass = "font-serif text-2xl text-[#eee1ce] sm:text-3xl";
const linkClass = "text-[#d99b52] underline decoration-[#d99b52]/35 underline-offset-4 transition-colors hover:text-[#e7ae6c]";

export default function SpanishPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0d0b09] px-5 py-16 text-[#eee1ce] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between gap-5">
          <Link href="/es" className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#d99b52] transition-colors hover:text-[#e7ae6c]">← Volver al inicio</Link>
          <LanguageSwitcher currentLocale="es" />
        </div>
        <header className="mt-12 border-b border-white/10 pb-10">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#c47f3d]">Protección de datos</p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">Política de privacidad</h1>
          <p className="mt-5 text-sm text-white/40">Actualizada el 29 de julio de 2026</p>
        </header>
        <div className="mt-12 space-y-12 text-sm leading-7 text-white/65 sm:text-base">
          <section className={sectionClass}>
            <h2 className={headingClass}>1. Responsable del tratamiento</h2>
            <address className="not-italic">
              Alex Turow Records<br />Titular: Andreas Turowski<br />Meinrad-Miltenberger-Weg 1<br />58313 Herdecke<br />Alemania<br />
              Correo electrónico:{" "}<a href="mailto:andreas.turowski1966@gmail.com" className={linkClass}>andreas.turowski1966@gmail.com</a>
            </address>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>2. Alojamiento y registros del servidor</h2>
            <p>Este sitio web se aloja a través de Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Estados Unidos. Cuando visitas el sitio, el proveedor procesa los datos de conexión técnicamente necesarios. Estos pueden incluir la dirección IP, la fecha y hora, la página consultada, la URL de referencia, el tipo de navegador, el sistema operativo y datos del dispositivo.</p>
            <p>La base jurídica es el artículo 6, apartado 1, letra f), del RGPD. Nuestro interés legítimo consiste en garantizar un funcionamiento seguro y estable del sitio. Vercel puede tratar datos en Estados Unidos, está certificado conforme al Marco de Privacidad de Datos UE–EE. UU. y también menciona las cláusulas contractuales tipo de la UE como base para las transferencias. Consulta el{" "}<a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer" className={linkClass}>aviso de privacidad de Vercel</a>.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>3. Contacto</h2>
            <p>Si nos escribes por correo electrónico, tratamos los datos que nos facilites para responder a tu consulta. La base jurídica es el artículo 6, apartado 1, letra b), del RGPD cuando la consulta sea contractual o precontractual, y el artículo 6, apartado 1, letra f), del RGPD en los demás casos. Eliminamos los datos una vez resuelta la consulta, salvo que exista una obligación legal de conservación u otro motivo legítimo.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>4. Preferencia de idioma</h2>
            <p>En la primera visita, el idioma configurado en tu navegador se evalúa únicamente en tu dispositivo para mostrar una versión adecuada. Nosotros no recibimos ni almacenamos esa información. Si eliges un idioma de forma expresa, la selección se guarda en el almacenamiento local de tu navegador exclusivamente para mostrar el idioma solicitado. No se instala ninguna cookie con este fin. La base jurídica es el artículo 25, apartado 2, punto 2, de la ley alemana TDDDG y el artículo 6, apartado 1, letra f), del RGPD. Puedes borrar la selección desde la configuración de tu navegador.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>5. Reproductor de Spotify</h2>
            <p>El reproductor de Spotify está bloqueado de forma predeterminada. Solo se establece una conexión con Spotify AB, Regeringsgatan 19, 111 53 Estocolmo, Suecia, después de seleccionar «Cargar Spotify». Spotify puede recibir entonces tu dirección IP, datos del dispositivo y del navegador e información sobre el uso del reproductor, además de guardar o leer información en tu dispositivo.</p>
            <p>La base jurídica es tu consentimiento conforme al artículo 6, apartado 1, letra a), del RGPD y al artículo 25, apartado 1, de la TDDDG. El consentimiento se aplica únicamente a la visita actual. Más información en la{" "}<a href="https://www.spotify.com/es/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className={linkClass}>política de privacidad de Spotify</a>.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>6. Vídeos de YouTube</h2>
            <p>Los vídeos de YouTube se integran mediante youtube-nocookie.com y permanecen bloqueados de forma predeterminada. La conexión solo se establece después de seleccionar «Cargar YouTube». Google puede recibir entonces tu dirección IP, información del dispositivo y del navegador y datos sobre el vídeo consultado. Si has iniciado sesión en una cuenta de Google, el uso puede asociarse a dicha cuenta.</p>
            <p>El proveedor en el Espacio Económico Europeo es Google Ireland Limited, Gordon House, Barrow Street, Dublín 4, Irlanda. Es posible que los datos se traten en Estados Unidos. La base jurídica es tu consentimiento conforme al artículo 6, apartado 1, letra a), del RGPD y al artículo 25, apartado 1, de la TDDDG. Consulta la{" "}<a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener noreferrer" className={linkClass}>política de privacidad de Google</a>.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>7. Enlaces externos</h2>
            <p>Este sitio enlaza con Spotify, Amazon Music, YouTube, Facebook y Messenger de Meta. La mera visualización de los enlaces no establece ninguna conexión con esos servicios. Al hacer clic abandonas nuestro sitio y pasa a aplicarse la política de privacidad del proveedor correspondiente.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>8. Analítica y marketing</h2>
            <p>No utilizamos servicios propios de analítica ni de marketing. El contenido de Spotify y YouTube no se carga sin tu autorización.</p>
          </section>
          <section className={sectionClass}>
            <h2 className={headingClass}>9. Tus derechos</h2>
            <p>De acuerdo con el RGPD, tienes en particular derechos de acceso, rectificación, supresión, limitación del tratamiento y portabilidad. Puedes retirar tu consentimiento en cualquier momento con efectos futuros y oponerte, por motivos relacionados con tu situación particular, a tratamientos basados en intereses legítimos.</p>
            <p>Puedes presentar una reclamación ante una autoridad de protección de datos. La autoridad competente es, en particular, la Comisionada de Protección de Datos y Libertad de Información de Renania del Norte-Westfalia, Kavalleriestraße 2–4, 40213 Düsseldorf. Más información:{" "}<a href="https://www.ldi.nrw.de/" target="_blank" rel="noopener noreferrer" className={linkClass}>www.ldi.nrw.de</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
