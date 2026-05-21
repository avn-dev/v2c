export type Lang = 'de' | 'en';

const t = {
  de: {
    // Nav
    nav_services: 'Leistungen',
    nav_process: 'Prozess',
    nav_cases: 'Cases',
    nav_about: 'Über v2c',
    nav_contact: 'Kontakt',
    nav_cta: 'Projekt anfragen',
    nav_menu_open: 'Menü öffnen',
    nav_menu_close: 'Menü schließen',
    nav_language: 'Sprache',

    // Hero slides
    hero_webapps_eyebrow: '01 / Webapps',
    hero_webapps_head: 'VISION → CODE.',
    hero_webapps_sub: 'Ich entwickle Webapplikationen, die sich nicht wie Software anfühlen, sondern wie ein gutes Tool. Klarer Code, klare UX, direkte Beratung.',
    hero_webapps_primary: 'Projekt anfragen',
    hero_webapps_secondary: 'Kennenlern-Call',

    hero_auto_eyebrow: '02 / Automatisierung',
    hero_auto_head: 'PROZESSE OHNE PAPIER.',
    hero_auto_sub: 'Manuelle Tabellen, doppelte Eingaben, Excel-Ping-Pong. Ich baue die Verbindungen, die dein Büro endlich automatisieren.',
    hero_auto_primary: 'Automatisierungen ansehen',
    hero_auto_secondary: 'Beratungstermin',

    hero_ai_eyebrow: '03 / KI-Integration',
    hero_ai_head: 'KI, DIE FUNKTIONIERT.',
    hero_ai_sub: 'Keine Demo, kein Hype. Ich integriere LLMs, RAG-Pipelines und Vision-Modelle dort, wo sie dir wirklich Zeit sparen.',
    hero_ai_primary: 'KI-Cases ansehen',
    hero_ai_secondary: 'KI-Beratung',

    hero_scroll: 'Scroll',
    hero_prev: 'Vorherige Slide',
    hero_next: 'Nächste Slide',

    // Services
    svc_title: 'Was ich baue',
    svc_headline: 'Sechs Felder. Ein Auftrag: dein Tool soll funktionieren.',
    svc_intro: 'Ich bin generalistisch. Das heißt: ich baue das ganze Werkstück, vom Konzept bis zum laufenden Server. Kein Ping-Pong zwischen Agenturen, kein Handoff an Spezialisten.',

    svc_webapp: 'Webapplikationen',
    svc_webapp_desc: 'Dashboards, interne Tools, Plattformen. Wir bauen Software, mit der dein Team gerne arbeitet — und die auch in zwei Jahren noch wartbar ist.',

    svc_website: 'Websites',
    svc_website_desc: 'Marketing-Seiten, Landingpages, Portfolios. Schnell, sauber, suchmaschinen\u200bfreundlich. CMS-Anbindung wenn du Inhalte selbst pflegen willst.',

    svc_api: 'API & Integration',
    svc_api_desc: 'Systeme miteinander reden lassen. CRM \u2194 Buchhaltung, Shop \u2194 ERP, Kalender \u2194 Telefonie. Datenflüsse statt Daten-Stillstand.',

    svc_ai: 'KI-Lösungen',
    svc_ai_desc: 'LLMs, RAG-Pipelines, Vision-Modelle. Konkret integriert in deinen Workflow — nicht als Demo, sondern als Feature.',

    svc_auto: 'Automatisierung',
    svc_auto_desc: 'Aus "macht jemand manuell" wird "macht das System". Scraper, Cronjobs, n8n-Flows, Skripte. Alles dokumentiert.',

    svc_consult: 'Beratung & Wartung',
    svc_consult_desc: 'Code-Review, Architektur-Audits, Bug-Triage, technische Roadmaps. Wenn du nur Sparring brauchst — auch das gibt es.',

    // Process
    proc_title: 'Wie wir arbeiten',
    proc_headline: 'Vier Schritte. Keine Überraschungen.',
    proc_listen: 'Hören',
    proc_listen_desc: 'Erstgespräch, kostenlos, ohne Vertriebsgequatsche. Ich verstehe erst dein Problem, dann schlage ich Lösungen vor.',
    proc_conceive: 'Konzipieren',
    proc_conceive_desc: 'User-Flows, Wireframes, technische Architektur, Stack-Wahl. Du bekommst ein Angebot mit Festpreis oder transparentem Stunden-Budget.',
    proc_build: 'Bauen',
    proc_build_desc: 'Wöchentliche Demos statt monatelange Black Box. Du siehst Fortschritt in Echtzeit, korrigierst Richtung früh — kein böses Erwachen am Ende.',
    proc_handover: 'Übergeben',
    proc_handover_desc: 'Saubere Doku, Deployment, Schulung. Wenn du willst: laufende Wartung. Wenn nicht: kompletter Code-Export, du bist Eigentümer.',

    // Cases
    cases_title: 'Cases',
    cases_headline: 'Drei Projekte, drei Branchen, ein Muster: weniger Klicks, mehr Ergebnis.',

    case_healthcare_tag: 'KI · Healthcare',
    case_healthcare_metric: '–62 %',
    case_healthcare_metricLabel: 'Befundungs-Zeit pro Patient',
    case_healthcare_title: 'Befundungs-Assistent für eine Hamburger Radiologie-Praxis',
    case_healthcare_body: 'RAG-System auf Basis von Anamnese, Vorbefunden und Bildbeschreibungen. Vorschläge werden vom Arzt finalisiert — die KI ersetzt nicht, sie beschleunigt.',

    case_auto_tag: 'Automatisierung · KMU',
    case_auto_metric: '14 h / Woche',
    case_auto_metricLabel: 'eingespart, dauerhaft',
    case_auto_title: 'Rechnungs-Routing für einen Großhändler in Köln',
    case_auto_body: 'Eingangs\u200brechnungen aus E-Mail, OCR, regelbasierte Zuordnung zur Kostenstelle, direkt in DATEV. Statt drei Buchhalterinnen Pingpong: ein Klick zur Freigabe.',

    case_saas_tag: 'Webapp · SaaS',
    case_saas_metric: '0 \u2192 1.200',
    case_saas_metricLabel: 'aktive Coaches in 6 Monaten',
    case_saas_title: 'Buchungs-Dashboard für ein Coaching-Netzwerk',
    case_saas_body: 'Vom Figma zur produktiven Webapp in 11 Wochen. Stripe-Subscriptions, Kalender-Sync, In-App-Messaging. Heute betreibt das Team das System selbst.',
    case_read: 'Case lesen',

    // About
    about_eyebrow: 'Über v2c',
    about_headline: 'Eine Person. Voller Stack. Volle Verantwortung.',
    about_p1: 'Hinter vision2code stecke ich: Entwickler für Webapps, APIs, KI-Integrationen und Automatisierungen. Du buchst mich, du bekommst mich. Kein Zwischenpuffer, kein Team, das du nie siehst.',
    about_p2: 'Ich habe genug Projekte gesehen, um zu wissen, wo die meisten Probleme entstehen: nicht beim Code, sondern davor. Unklare Anforderungen, falsche Stack-Wahl, Features, die niemand braucht. Deshalb investiere ich Zeit ins Verständnis, bevor ich anfange zu bauen.',
    about_p3: 'Du bekommst jemanden, der mitdenkt. Nicht nur abarbeitet.',

    // Contact
    contact_eyebrow: 'Kontakt',
    contact_headline: 'Lass uns über dein',
    contact_headline2: 'Projekt reden.',
    contact_sub: 'Schreib in 2–3 Sätzen, woran du gerade arbeitest. Du bekommst innerhalb von 24 Stunden eine ehrliche Einschätzung — auch wenn ich nicht der Richtige bin.',

    contact_email: 'E-Mail',
    contact_booking: 'Direkt buchen',
    contact_location: 'Standort',
    contact_loc_value: 'Remote · arbeite weltweit',

    contact_availability: 'VERFÜGBARKEIT',
    contact_slots: '2 Slots ab Juli 2026 frei',
    contact_slots_note: 'Bei dringenden Anfragen (Audit, Bug-Triage, kurze Beratung) sprich mich trotzdem an — kleine Slots lassen sich oft schieben.',

    contact_name: 'Name',
    contact_name_ph: 'Maximilian Mustermann',
    contact_your_email: 'E-Mail',
    contact_email_ph: 'du@firma.de',
    contact_what: 'Was brauchst du?',
    contact_select: 'Bitte wählen',
    contact_opt_webapp: 'Webapp / interne Software',
    contact_opt_website: 'Website / Landingpage',
    contact_opt_api: 'API & Integration',
    contact_opt_ai: 'KI-Integration',
    contact_opt_auto: 'Automatisierung',
    contact_opt_audit: 'Beratung / Code-Audit',
    contact_opt_other: 'Etwas anderes',
    contact_details: "Worum geht's? — 2–3 Sätze genügen",
    contact_details_ph: 'Wir haben ein Excel-System, das uns 8 Stunden pro Woche kostet \u2026',
    contact_reply_note: 'Ich antworte in \u2264 24 h. Keine Newsletter, keine Weitergabe.',
    contact_send: 'Anfrage senden',
    contact_success_title: 'Anfrage angekommen.',
    contact_success_sub: 'Du bekommst innerhalb von 24 h eine persönliche Antwort.',

    // Footer
    footer_desc: 'Webapps, Websites, APIs, KI-Integrationen und Automatisierung — remote, weltweit.',
    footer_services: 'Leistungen',
    footer_studio: 'Studio',
    footer_legal: 'Rechtliches',
    footer_imprint: 'Impressum',
    footer_privacy: 'Datenschutzerklärung',
    footer_tos: 'AGB',
    footer_cookies: 'Cookie-Einstellungen',
    footer_newsletter: 'Quartals-Update zum Bauen.',
    footer_newsletter_desc: '4 \u00d7 pro Jahr: neue Cases, ein gutes Tool, ein Mini-Essay. Kein Spam.',
    footer_subscribe: 'Abonnieren',
    footer_copyright: '© 2026 vision2code \u00b7 alle Rechte vorbehalten',

    // Languages
    lang_de: 'Deutsch',
    lang_en: 'English',
    lang_fr: 'Français',
    lang_fr_hint: 'FR · bald',
  },

  en: {
    // Nav
    nav_services: 'Services',
    nav_process: 'Process',
    nav_cases: 'Cases',
    nav_about: 'About v2c',
    nav_contact: 'Contact',
    nav_cta: 'Request project',
    nav_menu_open: 'Open menu',
    nav_menu_close: 'Close menu',
    nav_language: 'Language',

    // Hero slides
    hero_webapps_eyebrow: '01 / Webapps',
    hero_webapps_head: 'VISION → CODE.',
    hero_webapps_sub: 'We build web applications that don\'t feel like software — they feel like good tools. Clean code, clear UX, honest consulting.',
    hero_webapps_primary: 'Request project',
    hero_webapps_secondary: 'Intro call',

    hero_auto_eyebrow: '02 / Automation',
    hero_auto_head: 'PROCESSES WITHOUT PAPER.',
    hero_auto_sub: 'Manual spreadsheets, double entries, Excel ping-pong. I build the connections that finally automate your office.',
    hero_auto_primary: 'See automations',
    hero_auto_secondary: 'Book consultation',

    hero_ai_eyebrow: '03 / AI Integration',
    hero_ai_head: 'AI THAT WORKS.',
    hero_ai_sub: 'No demos, no hype. I integrate LLMs, RAG pipelines and vision models where they actually save you time.',
    hero_ai_primary: 'See AI cases',
    hero_ai_secondary: 'AI consultation',

    hero_scroll: 'Scroll',
    hero_prev: 'Previous slide',
    hero_next: 'Next slide',

    // Services
    svc_title: 'What I build',
    svc_headline: 'Six fields. One mission: your tool must work.',
    svc_intro: 'vision2code is small and deliberately generalist. That means: we build the whole product — from concept to running server. No ping-pong between agencies, no "that\'s not our department".',

    svc_webapp: 'Web Applications',
    svc_webapp_desc: 'Dashboards, internal tools, platforms. We build software your team actually enjoys using — and that\'s still maintainable two years from now.',

    svc_website: 'Websites',
    svc_website_desc: 'Marketing sites, landing pages, portfolios. Fast, clean, search-engine friendly. CMS integration if you want to manage content yourself.',

    svc_api: 'API & Integration',
    svc_api_desc: 'Making systems talk to each other. CRM \u2194 accounting, shop \u2194 ERP, calendar \u2194 telephony. Data flows instead of data standstill.',

    svc_ai: 'AI Solutions',
    svc_ai_desc: 'LLMs, RAG pipelines, vision models. Concretely integrated into your workflow — not as a demo, but as a feature.',

    svc_auto: 'Automation',
    svc_auto_desc: 'From "someone does it manually" to "the system handles it". Scrapers, cronjobs, n8n flows, scripts. All documented.',

    svc_consult: 'Consulting & Maintenance',
    svc_consult_desc: 'Code review, architecture audits, bug triage, technical roadmaps. If you just need sparring — we do that too.',

    // Process
    proc_title: 'How we work',
    proc_headline: 'Four steps. No surprises.',
    proc_listen: 'Listen',
    proc_listen_desc: 'Initial call, free, no sales pitch. I understand your problem first, then propose solutions.',
    proc_conceive: 'Design',
    proc_conceive_desc: 'User flows, wireframes, technical architecture, stack choice. You get a quote with fixed price or transparent hourly budget.',
    proc_build: 'Build',
    proc_build_desc: 'Weekly demos instead of months-long black box. You see progress in real time, course-correct early — no nasty surprises at the end.',
    proc_handover: 'Handover',
    proc_handover_desc: 'Clean docs, deployment, training. If you want: ongoing maintenance. If not: complete code export, you own everything.',

    // Cases
    cases_title: 'Cases',
    cases_headline: 'Three projects, three industries, one pattern: fewer clicks, more results.',

    case_healthcare_tag: 'AI · Healthcare',
    case_healthcare_metric: '–62 %',
    case_healthcare_metricLabel: 'reporting time per patient',
    case_healthcare_title: 'Reporting assistant for a Hamburg radiology practice',
    case_healthcare_body: 'RAG system based on medical history, previous findings and image descriptions. Suggestions are finalized by the doctor — AI doesn\'t replace, it accelerates.',

    case_auto_tag: 'Automation · SME',
    case_auto_metric: '14 h / week',
    case_auto_metricLabel: 'saved, permanently',
    case_auto_title: 'Invoice routing for a wholesale distributor in Cologne',
    case_auto_body: 'Incoming invoices from email, OCR, rule-based assignment to cost centers, directly into DATEV. Instead of three accountants playing ping-pong: one click to approve.',

    case_saas_tag: 'Webapp · SaaS',
    case_saas_metric: '0 \u2192 1.200',
    case_saas_metricLabel: 'active coaches in 6 months',
    case_saas_title: 'Booking dashboard for a coaching network',
    case_saas_body: 'From Figma to production webapp in 11 weeks. Stripe subscriptions, calendar sync, in-app messaging. Today the team runs the system themselves.',
    case_read: 'Read case',

    // About
    about_eyebrow: 'About v2c',
    about_headline: 'One person. Full stack. Full responsibility.',
    about_p1: 'vision2code is me: a developer for webapps, APIs, AI integrations and automation. You hire me, you get me. No middleman, no team you never meet.',
    about_p2: 'I\'ve seen enough projects to know where most problems start: not in the code, but before it. Unclear requirements, wrong stack choices, features nobody needs. That\'s why I spend time understanding the problem before I start building.',
    about_p3: 'You get someone who thinks along. Not just executes.',

    // Contact
    contact_eyebrow: 'Contact',
    contact_headline: 'Let\'s talk about',
    contact_headline2: 'your project.',
    contact_sub: 'Write 2–3 sentences about what you\'re working on. You\'ll get an honest assessment within 24 hours — even if we\'re not the right fit.',

    contact_email: 'Email',
    contact_booking: 'Book directly',
    contact_location: 'Location',
    contact_loc_value: 'Remote · working worldwide',

    contact_availability: 'AVAILABILITY',
    contact_slots: '2 slots free from July 2026',
    contact_slots_note: 'For urgent requests (audit, bug triage, short consultation) reach out anyway, small slots can often be shifted.',

    contact_name: 'Name',
    contact_name_ph: 'John Doe',
    contact_your_email: 'Email',
    contact_email_ph: 'you@company.com',
    contact_what: 'What do you need?',
    contact_select: 'Please select',
    contact_opt_webapp: 'Webapp / internal software',
    contact_opt_website: 'Website / landing page',
    contact_opt_api: 'API & integration',
    contact_opt_ai: 'AI integration',
    contact_opt_auto: 'Automation',
    contact_opt_audit: 'Consulting / code audit',
    contact_opt_other: 'Something else',
    contact_details: "What is it about? — 2–3 sentences are enough",
    contact_details_ph: 'We have an Excel system that costs us 8 hours per week \u2026',
    contact_reply_note: 'I reply within \u2264 24 h. No newsletters, no sharing.',
    contact_send: 'Send request',
    contact_success_title: 'Request received.',
    contact_success_sub: 'You\'ll get a personal reply within 24 h.',

    // Footer
    footer_desc: 'Webapps, websites, APIs, AI integrations and automation — remote, worldwide.',
    footer_services: 'Services',
    footer_studio: 'Studio',
    footer_legal: 'Legal',
    footer_imprint: 'Imprint',
    footer_privacy: 'Privacy Policy',
    footer_tos: 'Terms',
    footer_cookies: 'Cookie settings',
    footer_newsletter: 'Quarterly build update.',
    footer_newsletter_desc: '4 times per year: new cases, a good tool, a mini-essay. No spam.',
    footer_subscribe: 'Subscribe',
    footer_copyright: '© 2026 vision2code \u00b7 all rights reserved',

    // Languages
    lang_de: 'Deutsch',
    lang_en: 'English',
    lang_fr: 'Français',
    lang_fr_hint: 'FR · soon',
  },
};

export function getT(lang: Lang) {
  return t[lang];
}

export type Translations = typeof t.de;
