type Section = 'impressum' | 'datenschutz' | 'agb' | 'widerruf';

interface Props {
  section: Section;
  lang: 'de' | 'en';
}

const TITLES: Record<Section, Record<'de' | 'en', string>> = {
  impressum:   { de: 'Impressum',                         en: 'Legal Notice' },
  datenschutz: { de: 'Datenschutzerklärung',              en: 'Privacy Policy' },
  agb:         { de: 'Allgemeine Geschäftsbedingungen',   en: 'Terms & Conditions' },
  widerruf:    { de: 'Widerrufsrecht',                    en: 'Cancellation Policy' },
};

const EYEBROWS: Record<Section, Record<'de' | 'en', string>> = {
  impressum:   { de: 'Rechtliche Angaben · § 5 DDG',  en: 'Legal Information · § 5 DDG' },
  datenschutz: { de: 'Datenverarbeitung · DSGVO',     en: 'Data Processing · GDPR' },
  agb:         { de: 'Vertragsgrundlagen',             en: 'Contractual Basis' },
  widerruf:    { de: 'Verbraucherrechte',              en: 'Consumer Rights' },
};

const TABS_DE = [
  { id: 'impressum'   as Section, label: 'Impressum',           href: '/impressum' },
  { id: 'datenschutz' as Section, label: 'Datenschutzerklärung',href: '/datenschutz' },
  { id: 'agb'         as Section, label: 'AGB',                 href: '/agb' },
  { id: 'widerruf'    as Section, label: 'Widerrufsrecht',      href: '/widerruf' },
];

const TABS_EN = [
  { id: 'impressum'   as Section, label: 'Imprint',          href: '/en/imprint' },
  { id: 'datenschutz' as Section, label: 'Privacy Policy',   href: '/en/privacy-policy' },
  { id: 'agb'         as Section, label: 'Terms',            href: '/en/terms' },
  { id: 'widerruf'    as Section, label: 'Cancellation',     href: '/en/cancellation' },
];

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ margin: '0 0 48px' }}>
      <h2 style={{ margin: '0 0 16px', fontWeight: 600, fontSize: 22, letterSpacing: '-0.005em', color: 'var(--ink)' }}>{title}</h2>
      <div style={{ fontSize: 15.5, lineHeight: 1.65 }}>{children}</div>
    </section>
  );
}

function ImpressumContent() {
  return (
    <>
      <LegalSection title="Angaben gemäß § 5 DDG">
        <p style={{ margin: 0 }}>vision2code<br />Inhaber: Abdul Vahap Caliskan<br />Rheinallee 46a<br />53489 Sinzig<br />Deutschland</p>
      </LegalSection>
      <LegalSection title="Kontakt">
        <p style={{ margin: 0 }}>
          E-Mail: <a href="mailto:hallo@vision2co.de" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>hallo@vision2co.de</a>
        </p>
      </LegalSection>
      <LegalSection title="Steuerliche Angaben">
        <p style={{ margin: 0 }}>Gemäß § 19 Abs. 1 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer erhoben. Es liegt keine Umsatzsteuer-Identifikationsnummer vor.</p>
      </LegalSection>
      <LegalSection title="Streitschlichtung">
        <p style={{ margin: 0 }}>
          Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>ec.europa.eu/consumers/odr</a>.
          {' '}Zur Teilnahme an einem Streitbeilegungsverfahren sind wir nicht verpflichtet und nicht bereit.
        </p>
      </LegalSection>
    </>
  );
}

function ImprintContent() {
  return (
    <>
      <LegalSection title="Information according to § 5 DDG">
        <p style={{ margin: 0 }}>vision2code<br />Owner: Abdul Vahap Caliskan<br />Rheinallee 46a<br />53489 Sinzig<br />Germany</p>
      </LegalSection>
      <LegalSection title="Contact">
        <p style={{ margin: 0 }}>
          Email: <a href="mailto:hallo@vision2co.de" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>hallo@vision2co.de</a>
        </p>
      </LegalSection>
      <LegalSection title="Tax information">
        <p style={{ margin: 0 }}>Pursuant to § 19 para. 1 UStG (small business regulation), no VAT is charged. No VAT identification number is available.</p>
      </LegalSection>
      <LegalSection title="Dispute resolution">
        <p style={{ margin: 0 }}>
          The EU Commission provides a platform for online dispute resolution:{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>ec.europa.eu/consumers/odr</a>.
          {' '}We are neither obligated nor willing to participate in dispute resolution proceedings.
        </p>
      </LegalSection>
    </>
  );
}

function DatenschutzContent() {
  return (
    <>
      <LegalSection title="Verantwortlicher (Art. 4 Nr. 7 DSGVO)">
        <p style={{ margin: 0 }}>vision2code<br />Abdul Vahap Caliskan<br />Rheinallee 46a<br />53489 Sinzig<br />Deutschland<br /><a href="mailto:hallo@vision2co.de" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>hallo@vision2co.de</a></p>
      </LegalSection>
      <LegalSection title="Hosting, CDN & Server-Logfiles">
        <p style={{ margin: 0 }}>Diese Website (Frontend) wird über Cloudflare ausgeliefert (Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA), das zugleich als Content-Delivery-Network und zum Schutz vor Angriffen (u.&nbsp;a. DDoS, Web Application Firewall) dient. Cloudflare verarbeitet hierbei als Auftragsverarbeiter technisch notwendige Zugriffsdaten: IP-Adresse, Datum/Uhrzeit, aufgerufene URL, HTTP-Statuscode, übertragene Datenmenge, Referrer-URL, Browser- und Betriebssystemkennung. Eine Übermittlung in die USA ist möglich; Cloudflare ist unter dem EU-US Data Privacy Framework zertifiziert, zudem bestehen EU-Standardvertragsklauseln. Datenschutzhinweise von Cloudflare: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>cloudflare.com/privacypolicy</a>.</p>
        <p style={{ margin: '12px 0 0' }}>Das Backend bzw. die Programmierschnittstelle (API, api.vision2co.de) wird auf einem Server bei OVHcloud (OVH SAS, 2 rue Kellermann, 59100 Roubaix, Frankreich) innerhalb der EU betrieben. Darüber werden ausschließlich die Anfragen aus dem Kontaktformular verarbeitet.</p>
        <p style={{ margin: '12px 0 0' }}>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (sicherer und störungsfreier Betrieb der Website). Server-Logfiles werden für maximal 7 Tage gespeichert. Eine Weitergabe an Dritte erfolgt nicht, ausgenommen die vorgenannten Auftragsverarbeiter.</p>
      </LegalSection>
      <LegalSection title="Kontaktformular & E-Mail">
        <p style={{ margin: 0 }}>Übermittelte Daten (Name, E-Mail, Nachricht) werden ausschließlich zur Bearbeitung der Anfrage verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Löschung nach Abschluss der Anfrage, sofern keine Aufbewahrungspflicht besteht.</p>
      </LegalSection>
      <LegalSection title="Cookies & Tracking">
        <p style={{ margin: 0 }}>Diese Website setzt keine Cookies. Es werden keine Analyse-, Tracking- oder Werbedienste eingesetzt. Die Sprachauswahl wird ausschließlich im Arbeitsspeicher des Browsers gehalten.</p>
      </LegalSection>
      <LegalSection title="Verschlüsselung">
        <p style={{ margin: 0 }}>Alle Verbindungen erfolgen ausschließlich verschlüsselt über HTTPS (TLS 1.2 / 1.3).</p>
      </LegalSection>
      <LegalSection title="Deine Rechte (Art. 15-22 DSGVO)">
        <p style={{ margin: 0 }}>Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Portabilität - Anfragen an: <a href="mailto:hallo@vision2co.de" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>hallo@vision2co.de</a></p>
        <p style={{ margin: '12px 0 0' }}>Du hast das Recht zur Beschwerde bei der zuständigen Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO).</p>
      </LegalSection>
    </>
  );
}

function PrivacyContent() {
  return (
    <>
      <LegalSection title="Controller (Art. 4 No. 7 GDPR)">
        <p style={{ margin: 0 }}>vision2code<br />Abdul Vahap Caliskan<br />Rheinallee 46a<br />53489 Sinzig<br />Germany<br /><a href="mailto:hallo@vision2co.de" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>hallo@vision2co.de</a></p>
      </LegalSection>
      <LegalSection title="Hosting, CDN & Server logs">
        <p style={{ margin: 0 }}>This website (frontend) is delivered via Cloudflare (Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA), which also serves as a content delivery network and attack protection (incl. DDoS and Web Application Firewall). As a processor, Cloudflare handles technically necessary access data: IP address, date/time, requested URL, HTTP status code, data transferred, referrer URL, browser and OS identifier. Transfer to the USA may occur; Cloudflare is certified under the EU-US Data Privacy Framework, and EU Standard Contractual Clauses are additionally in place. Cloudflare privacy notice: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>cloudflare.com/privacypolicy</a>.</p>
        <p style={{ margin: '12px 0 0' }}>The backend / API (api.vision2co.de) is operated on a server at OVHcloud (OVH SAS, 2 rue Kellermann, 59100 Roubaix, France) within the EU. It is used solely to process contact form submissions.</p>
        <p style={{ margin: '12px 0 0' }}>Legal basis: Art. 6(1)(f) GDPR (secure and fault-free operation of the website). Server log files are stored for a maximum of 7 days. No disclosure to third parties, except the processors named above.</p>
      </LegalSection>
      <LegalSection title="Contact form & email">
        <p style={{ margin: 0 }}>Submitted data (name, email, message) are processed solely to handle the inquiry. Legal basis: Art. 6(1)(b) GDPR. Deleted after the inquiry is resolved, unless statutory retention obligations apply.</p>
      </LegalSection>
      <LegalSection title="Cookies & tracking">
        <p style={{ margin: 0 }}>This website sets no cookies. No analytics, tracking or advertising services are used. Language selection is held exclusively in browser memory.</p>
      </LegalSection>
      <LegalSection title="Encryption">
        <p style={{ margin: 0 }}>All connections are exclusively encrypted via HTTPS (TLS 1.2 / 1.3).</p>
      </LegalSection>
      <LegalSection title="Your rights (Art. 15-22 GDPR)">
        <p style={{ margin: 0 }}>Access, rectification, erasure, restriction, objection, portability - requests to: <a href="mailto:hallo@vision2co.de" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>hallo@vision2co.de</a></p>
        <p style={{ margin: '12px 0 0' }}>You have the right to lodge a complaint with the competent data protection supervisory authority (Art. 77 GDPR).</p>
      </LegalSection>
    </>
  );
}

function AGBContent() {
  return (
    <>
      {([
        ['§ 1 Geltungsbereich', 'Diese Allgemeinen Geschäftsbedingungen gelten für alle zwischen vision2code (im Folgenden "Auftragnehmer") und dem Kunden ("Auftraggeber") geschlossenen Verträge über Leistungen aus den Bereichen Softwareentwicklung, Beratung und Wartung.'],
        ['§ 2 Vertragsschluss', 'Angebote des Auftragnehmers sind freibleibend. Ein Vertrag kommt durch schriftliche Auftragsbestätigung oder Beginn der Leistungserbringung zustande.'],
        ['§ 3 Leistungsumfang', 'Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot. Änderungswünsche werden separat angeboten und nach schriftlicher Freigabe umgesetzt.'],
        ['§ 4 Vergütung', 'Vergütung nach Festpreis oder Stundensatz gemäß Angebot. Rechnungen sind innerhalb von 14 Tagen ohne Abzug fällig.'],
        ['§ 5 Mitwirkung des Auftraggebers', 'Der Auftraggeber stellt zeitnah alle notwendigen Informationen, Zugänge und Materialien bereit. Verzögerungen durch unterlassene Mitwirkung gehen nicht zu Lasten des Auftragnehmers.'],
        ['§ 6 Nutzungsrechte', 'Nach vollständiger Zahlung erhält der Auftraggeber ein einfaches, übertragbares Nutzungsrecht am erstellten Quellcode. Open-Source-Komponenten behalten ihre jeweilige Lizenz.'],
        ['§ 7 Haftung', 'Der Auftragnehmer haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie für Schäden aus Verletzung von Leben, Körper oder Gesundheit. Im Übrigen ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.'],
        ['§ 8 Schlussbestimmungen', 'Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, soweit zulässig, der Sitz des Auftragnehmers. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen unberührt.'],
      ] as [string, string][]).map(([title, body]) => (
        <LegalSection key={title} title={title}>
          <p style={{ margin: 0 }}>{body}</p>
        </LegalSection>
      ))}
    </>
  );
}

function TermsContent() {
  return (
    <>
      {([
        ['§ 1 Scope', 'These General Terms and Conditions apply to all contracts concluded between vision2code (hereinafter "Contractor") and the client ("Client") for services in the areas of software development, consulting and maintenance.'],
        ['§ 2 Contract formation', 'Offers by the Contractor are non-binding. A contract is concluded upon written order confirmation or commencement of service delivery.'],
        ['§ 3 Scope of services', 'The scope of services is defined in the respective offer. Change requests are offered separately and implemented after written approval.'],
        ['§ 4 Remuneration', 'Remuneration is according to fixed price or hourly rate as per offer. Invoices are due within 14 days without deduction.'],
        ['§ 5 Client cooperation', 'The Client shall promptly provide all necessary information, access and materials. Delays caused by failure to cooperate are not attributable to the Contractor.'],
        ['§ 6 Usage rights', 'Upon full payment, the Client receives a simple, transferable right to use the created source code. Open-source components retain their respective licences.'],
        ['§ 7 Liability', 'The Contractor is liable without limitation for intent and gross negligence as well as for damages from injury to life, body or health. Otherwise liability is limited to foreseeable, contract-typical damage.'],
        ['§ 8 Final provisions', 'The law of the Federal Republic of Germany applies. The place of jurisdiction is, to the extent permitted, the registered office of the Contractor. Should individual provisions be invalid, the validity of the remaining provisions is unaffected.'],
      ] as [string, string][]).map(([title, body]) => (
        <LegalSection key={title} title={title}>
          <p style={{ margin: 0 }}>{body}</p>
        </LegalSection>
      ))}
    </>
  );
}

function WiderrufContent() {
  return (
    <>
      <LegalSection title="Widerrufsrecht">
        <p style={{ margin: 0 }}>Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen den Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab Vertragsschluss. Die Ausübung erfolgt durch eindeutige Erklärung per E-Mail oder Brief.</p>
      </LegalSection>
      <LegalSection title="Folgen des Widerrufs">
        <p style={{ margin: 0 }}>Alle erhaltenen Zahlungen werden unverzüglich, spätestens binnen vierzehn Tagen ab Eingang der Widerrufsmitteilung, zurückerstattet.</p>
      </LegalSection>
      <LegalSection title="Vorzeitiges Erlöschen">
        <p style={{ margin: 0 }}>Das Widerrufsrecht erlischt vorzeitig, wenn die Dienstleistung mit ausdrücklicher Zustimmung vor Ablauf der Widerrufsfrist vollständig erbracht wurde.</p>
      </LegalSection>
    </>
  );
}

function CancellationContent() {
  return (
    <>
      <LegalSection title="Right of cancellation">
        <p style={{ margin: 0 }}>You have the right to cancel this contract within fourteen days without giving any reason. The cancellation period is fourteen days from the date the contract is concluded. To exercise your right of cancellation, you must inform us by clear statement (e.g. email or letter).</p>
      </LegalSection>
      <LegalSection title="Consequences of cancellation">
        <p style={{ margin: 0 }}>We will reimburse all payments received from you promptly and at the latest within fourteen days of receiving notification of your cancellation.</p>
      </LegalSection>
      <LegalSection title="Early expiry">
        <p style={{ margin: 0 }}>The right of cancellation expires prematurely if the service has been fully performed with your express consent before the cancellation period has expired.</p>
      </LegalSection>
    </>
  );
}

const CONTENT: Record<Section, Record<'de' | 'en', () => JSX.Element>> = {
  impressum:   { de: ImpressumContent,  en: ImprintContent },
  datenschutz: { de: DatenschutzContent,en: PrivacyContent },
  agb:         { de: AGBContent,        en: TermsContent },
  widerruf:    { de: WiderrufContent,   en: CancellationContent },
};

export default function ImpressumPage({ section, lang }: Props) {
  const tabs = lang === 'de' ? TABS_DE : TABS_EN;
  const Content = CONTENT[section][lang];

  return (
    <main style={{ paddingTop: 96 }}>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center', padding: '32px var(--shell-pad) 0' }}>
        {tabs.map(t => (
          <a key={t.id} href={t.href} style={{
            padding: '10px 18px', fontSize: 14, fontWeight: 500, borderRadius: 999,
            textDecoration: 'none',
            color: section === t.id ? '#fff' : 'var(--ink)',
            background: section === t.id ? 'var(--ink)' : 'transparent',
            border: `1px solid ${section === t.id ? 'var(--ink)' : 'var(--hairline)'}`,
          }}>{t.label}</a>
        ))}
      </div>

      <div style={{ padding: '48px var(--shell-pad) 40px', textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>{EYEBROWS[section][lang]}</div>
        <h1 style={{ margin: 0, fontWeight: 600, fontSize: 'clamp(48px,7vw,96px)', letterSpacing: '-0.03em', lineHeight: 0.95, color: 'var(--ink)' }}>
          {TITLES[section][lang]}
        </h1>
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '32px var(--shell-pad) clamp(80px,12vh,140px)', color: 'var(--ink-2)' }}>
        <Content />
      </div>
    </main>
  );
}
