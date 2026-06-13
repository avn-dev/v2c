import { useState, useEffect, useCallback } from 'react';
import { V2CWordmark, TICKER_ITEMS } from './primitives';
import { Icon } from './icons';
import { getT, anchors } from '../i18n/translations';

type Lang = 'de' | 'en';

interface Props {
  lang: Lang;
  isLegal?: boolean;
  altLegalHref?: string;
  selfPath?: string;
}

const TICKER_GAP = 24;

function MarqueeTicker() {
  const fullText = TICKER_ITEMS.join('  ');
  const copies = Array.from({ length: 8 }, (_, i) => (
    <span key={i} aria-hidden={i > 0 || undefined} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <span style={{ fontWeight: 600, fontSize: 12, letterSpacing: '-0.005em', whiteSpace: 'nowrap', paddingLeft: TICKER_GAP }}>
        {fullText}
      </span>
      <span aria-hidden="true" style={{ width: 6, height: 6, background: '#fff', borderRadius: 99, flexShrink: 0, marginLeft: TICKER_GAP }} />
    </span>
  ));
  return (
    <div style={{ background: 'rgb(26,26,26)', color: '#fff', height: 40, overflow: 'hidden', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="ticker-track" style={{ position: 'absolute', top: 0, left: 0, height: '100%', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
        {copies}
      </div>
    </div>
  );
}

function LangOption({ label, hint, active, muted, onClick }: { label: string; hint: string; active?: boolean; muted?: boolean; onClick?: () => void }) {
  return (
    <div onClick={muted ? undefined : onClick} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 14px', borderRadius: 10,
      background: active ? 'rgba(14,14,16,0.04)' : 'transparent',
      color: muted ? 'var(--mute)' : 'var(--ink)',
      fontSize: 15, fontWeight: active ? 600 : 400,
      cursor: muted ? 'not-allowed' : 'pointer',
    }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        {active && <span style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--accent)' }} />}
        {label}
      </span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '0.04em' }}>{hint}</span>
    </div>
  );
}

export default function SiteNav({ lang, isLegal = false, altLegalHref, selfPath }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const tr = getT(lang);
  const a = anchors[lang];

  const showFrost = scrolled || isLegal;
  const fg = showFrost ? 'var(--ink)' : '#fff';

  // href for nav anchors: on legal pages point back to home
  const navHref = (anchor: string) => isLegal ? `/${lang === 'en' ? 'en/' : ''}${anchor}` : anchor;

  const altLangHref = isLegal && altLegalHref
    ? altLegalHref
    : (lang === 'de' ? '/en/' : '/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('[data-lang-switch]')) setLangOpen(false);
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [langOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isLegal) {
      if (mobileOpen) setMobileOpen(false);
      return;
    }
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    if (mobileOpen) setMobileOpen(false);
  }, [isLegal, mobileOpen]);

  const navLinks = [
    { label: tr.nav_services, href: `#${a.services}` },
    { label: tr.nav_process,  href: `#${a.process}` },
    { label: tr.nav_about,    href: `#${a.about}` },
    { label: tr.nav_contact,  href: `#${a.contact}` },
  ];

  const langLabel = lang === 'de' ? tr.lang_de : tr.lang_en;

  return (
    <>
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: showFrost ? 'clamp(10px, 1.4vw, 16px) clamp(12px, 2vw, 24px) 0' : '0',
        transition: 'padding .35s ease',
        pointerEvents: 'none',
      }}>
        <div style={{ maxHeight: showFrost ? 0 : 40, overflow: 'hidden', transition: 'max-height .4s ease', pointerEvents: 'auto' }}>
          <MarqueeTicker />
        </div>

        <div style={{
          height: showFrost ? 64 : 72,
          padding: showFrost ? '0 clamp(16px, 2.2vw, 28px)' : '0 var(--shell-pad)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          color: fg,
          background: showFrost ? 'rgba(242,241,237,0.72)' : 'transparent',
          backdropFilter: showFrost ? 'blur(22px) saturate(180%)' : 'none',
          WebkitBackdropFilter: showFrost ? 'blur(22px) saturate(180%)' : 'none',
          border: showFrost ? '1px solid rgba(14,14,16,0.08)' : '1px solid transparent',
          borderRadius: showFrost ? '0.5rem' : 0,
          boxShadow: showFrost ? '0 8px 28px -12px rgba(14,14,16,0.18), 0 2px 6px -2px rgba(14,14,16,0.06)' : 'none',
          transition: 'background .35s ease, backdrop-filter .35s ease, color .35s ease, border-color .35s ease, border-radius .35s ease, box-shadow .35s ease, height .35s ease, padding .35s ease',
          pointerEvents: 'auto',
        }}>
          <a
            href={isLegal ? (lang === 'en' ? '/en/' : '/') : '#top'}
            onClick={!isLegal ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } : undefined}
            style={{ color: fg, textDecoration: 'none', transition: 'color .35s ease', flexShrink: 0 }}
          >
            <V2CWordmark color={fg} size={18} />
          </a>

          <nav style={{ display: 'none', gap: 32, color: fg }} className="only-desktop">
            {navLinks.map((l) => (
              <a key={l.href} href={navHref(l.href)} onClick={(e) => scrollToSection(e, l.href)}
                className="nav-item" style={{ color: fg, transition: 'color .35s ease' }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div data-lang-switch style={{ display: 'none', position: 'relative' }} className="only-desktop">
              <button onClick={(e) => { e.stopPropagation(); setLangOpen(v => !v); }} style={{
                appearance: 'none' as const, background: 'transparent', border: 0,
                color: fg, fontFamily: 'var(--font-fellix)', fontSize: 14, fontWeight: 500,
                display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', padding: '6px 8px',
                transition: 'color .35s ease',
              }}>
                {langLabel} {langOpen ? <Icon.ArrowUp s={12} /> : <Icon.ArrowDown s={12} />}
              </button>
              {langOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 10px)', right: 0,
                  minWidth: 180, background: '#fff', border: '1px solid var(--hairline)',
                  borderRadius: 16, boxShadow: '0 18px 40px rgba(14,14,16,0.10)', padding: 8,
                  color: 'var(--ink)', zIndex: 100,
                }}>
                  <LangOption label={tr.lang_de} hint="DE" active={lang === 'de'} onClick={() => { window.location.href = lang === 'de' ? window.location.href : altLangHref; setLangOpen(false); }} />
                  <LangOption label={tr.lang_en} hint="EN" active={lang === 'en'} onClick={() => { window.location.href = lang === 'en' ? window.location.href : altLangHref; setLangOpen(false); }} />
                  <LangOption label={tr.lang_fr} hint={tr.lang_fr_hint} muted />
                </div>
              )}
            </div>

            <a href={navHref(`#${a.contact}`)} onClick={(e) => scrollToSection(e, `#${a.contact}`)}
              className="btn-pill only-desktop" style={{
                background: showFrost ? 'var(--ink)' : '#fff',
                color: showFrost ? '#fff' : 'var(--ink)',
                border: '1.5px solid transparent',
                padding: '10px 20px', fontSize: 13,
                transition: 'background .35s ease, color .35s ease',
              }}>
              {tr.nav_cta} <Icon.Arrow s={14} />
            </a>

            <button onClick={() => setMobileOpen(true)} aria-label={tr.nav_menu_open}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 0, color: fg, cursor: 'pointer', padding: 8 }}
              className="only-mobile">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 7 H21 M3 12 H21 M3 17 H21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', flexDirection: 'column',
        background: 'rgba(14,14,16,0.98)', backdropFilter: 'blur(24px)',
        color: '#fff',
        transform: mobileOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform .4s cubic-bezier(.7,0,.3,1)',
      }}>
        <div style={{ padding: '16px var(--shell-pad)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <V2CWordmark color="#fff" size={18} />
          <button onClick={() => setMobileOpen(false)} aria-label={tr.nav_menu_close}
            style={{ background: 'transparent', border: 0, color: '#fff', cursor: 'pointer', padding: 8 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 5 L19 19 M19 5 L5 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
            </svg>
          </button>
        </div>

        <div style={{ padding: '24px var(--shell-pad)', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
          {navLinks.map((l) => (
            <a key={l.href} href={navHref(l.href)} onClick={(e) => scrollToSection(e, l.href)}
              style={{ color: '#fff', textDecoration: 'none', fontSize: 32, fontWeight: 600, letterSpacing: '-0.02em', padding: '12px 0' }}>
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ padding: '24px var(--shell-pad)', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a href={lang === 'de' ? (selfPath ?? '/') : altLangHref}
              onClick={() => setMobileOpen(false)}
              style={{ background: lang === 'de' ? 'rgba(255,255,255,0.2)' : 'transparent', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 999, color: '#fff', padding: '10px 20px', fontSize: 15, textDecoration: 'none', fontWeight: lang === 'de' ? 600 : 400 }}>
              DE · {tr.lang_de}
            </a>
            <a href={lang === 'en' ? (selfPath ?? '/en/') : altLangHref}
              onClick={() => setMobileOpen(false)}
              style={{ background: lang === 'en' ? 'rgba(255,255,255,0.2)' : 'transparent', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 999, color: '#fff', padding: '10px 20px', fontSize: 15, textDecoration: 'none', fontWeight: lang === 'en' ? 600 : 400 }}>
              EN · {tr.lang_en}
            </a>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14 }}>FR · {lang === 'en' ? 'soon' : 'bald'}</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>hallo@vision2co.de</div>
        </div>
      </div>
    </>
  );
}
