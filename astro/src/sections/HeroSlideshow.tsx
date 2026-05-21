import { useState, useEffect, useCallback, useMemo } from 'react';
import { Icon } from '../components/icons';
import { getT } from '../i18n/translations';

type Lang = 'de' | 'en';

const ctrlBtn = {
  appearance: 'none' as const,
  background: 'rgba(255,255,255,0.10)',
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.25)',
  width: 36, height: 36, borderRadius: 999,
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer',
};

function SlideMedia({ bg, glow1, glow2, active, video }: {
  bg: string; glow1: string; glow2: string; active: boolean; video: string;
}) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: bg, overflow: 'hidden' }}>
      <video autoPlay loop muted playsInline preload={active ? 'auto' : 'none'} aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: active ? 0.6 : 0, transition: 'opacity 1.2s ease' }}>
        {active && <source src={video} type="video/mp4" />}
      </video>
      <div style={{ position: 'absolute', inset: 0, animation: active ? 'slow-pan 20s ease-in-out infinite alternate' : 'none' }}>
        <div style={{ position: 'absolute', left: '-10%', top: '10%', width: '70%', height: '80%', background: `radial-gradient(ellipse at 50% 50%, ${glow1}, transparent 65%)`, filter: 'blur(60px)', opacity: active ? 1 : 0, transition: 'opacity 2s ease' }} />
        <div style={{ position: 'absolute', right: '-15%', bottom: '5%', width: '65%', height: '70%', background: `radial-gradient(ellipse at 50% 50%, ${glow2}, transparent 60%)`, filter: 'blur(70px)', opacity: active ? 1 : 0, transition: 'opacity 2s ease' }} />
      </div>
      <div className="hero-media-overlay" style={{ position: 'absolute', inset: 0 }} />
    </div>
  );
}

export default function HeroSlideshow({ lang }: { lang: Lang }) {
  const tr = useMemo(() => getT(lang), [lang]);

  const slides = useMemo(() => [
    { eyebrow: tr.hero_webapps_eyebrow, head: tr.hero_webapps_head, sub: tr.hero_webapps_sub, primary: tr.hero_webapps_primary, secondary: tr.hero_webapps_secondary, bg: 'linear-gradient(135deg, #1a2030 0%, #0b1018 60%, #1c2538 100%)', glow1: 'rgba(120,150,200,0.45)', glow2: 'rgba(80,110,180,0.40)', video: '/videos/hero-webapps.mp4' },
    { eyebrow: tr.hero_auto_eyebrow,    head: tr.hero_auto_head,    sub: tr.hero_auto_sub,    primary: tr.hero_auto_primary,    secondary: tr.hero_auto_secondary,    bg: 'linear-gradient(135deg, #2a2418 0%, #181410 60%, #34281a 100%)', glow1: 'rgba(220,170,90,0.35)',  glow2: 'rgba(180,120,60,0.35)',  video: '/videos/hero-automation.mp4' },
    { eyebrow: tr.hero_ai_eyebrow,      head: tr.hero_ai_head,      sub: tr.hero_ai_sub,      primary: tr.hero_ai_primary,      secondary: tr.hero_ai_secondary,      bg: 'linear-gradient(135deg, #181f1a 0%, #0a0f0c 60%, #1e2a22 100%)', glow1: 'rgba(120,200,160,0.35)', glow2: 'rgba(80,160,130,0.35)',  video: '/videos/hero-ai.mp4' },
  ], [tr]);

  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(v => (v + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  const next = useCallback(() => setI(v => (v + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setI(v => (v - 1 + slides.length) % slides.length), [slides.length]);

  const scrollTo = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const s = slides[i];

  return (
    <section id="top" className="hero-section" style={{ position: 'relative', color: '#fff', overflow: 'hidden' }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

      {slides.map((slide, idx) => (
        <div key={idx} style={{ position: 'absolute', inset: 0, opacity: idx === i ? 1 : 0, transition: 'opacity 1.2s ease', pointerEvents: idx === i ? 'auto' : 'none' }}>
          <SlideMedia bg={slide.bg} glow1={slide.glow1} glow2={slide.glow2} active={idx === i} video={slide.video} />
        </div>
      ))}

      <div className="hero-content-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', alignItems: 'flex-end', padding: 'calc(var(--shell-pad) + 30px) var(--shell-pad) calc(var(--shell-pad) + 30px)' }}>
        <div className="hero-copy" style={{ maxWidth: 640 }}>
          <div key={i} style={{ animation: 'fadeUp .8s ease' }}>
            <div className="eyebrow hero-eyebrow" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 18 }}>{s.eyebrow}</div>
            <p className="hero-subcopy" style={{ margin: '0 0 28px 0', fontSize: 'clamp(17px,1.4vw,21px)', lineHeight: 1.45, color: 'rgba(255,255,255,0.95)', maxWidth: 560 }}>{s.sub}</p>
            <div className="mobile-stack hero-buttons" style={{ display: 'flex', gap: 12 }}>
              <a href="#kontakt" onClick={(e) => scrollTo(e, '#kontakt')} className="btn-pill hero-btn" style={{ background: '#fff', color: 'var(--ink)', padding: '20px 36px', fontSize: 17, border: '1.5px solid transparent' }}>{s.primary}</a>
              <a href="#kontakt" onClick={(e) => scrollTo(e, '#kontakt')} className="btn-pill hero-btn" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.55)', padding: '20px 36px', fontSize: 17 }}><Icon.Cal /> {s.secondary}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-headline-wrap" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, pointerEvents: 'none', padding: '0 var(--shell-pad)' }}>
        <h1 key={`h-${i}`} className="hero-headline" style={{ margin: 0, fontWeight: 600, fontSize: 'clamp(64px,11.5vw,220px)', letterSpacing: '-0.04em', lineHeight: 0.92, textAlign: 'center', textTransform: 'uppercase', color: '#fff', animation: 'fadeUp .9s ease', textWrap: 'balance' as const }}>{s.head}</h1>
      </div>

      <div className="hero-controls" style={{ position: 'absolute', right: 'var(--shell-pad)', bottom: 'calc(var(--shell-pad) + 30px)', zIndex: 3, display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,0.85)' }} className="only-desktop">
          {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
              style={{ appearance: 'none' as const, cursor: 'pointer', width: idx === i ? 32 : 12, height: 3, background: idx === i ? '#fff' : 'rgba(255,255,255,0.4)', border: 0, borderRadius: 2, transition: 'width .3s ease, background .3s ease' }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6, marginLeft: 8 }} className="only-desktop">
          <button onClick={prev} aria-label={tr.hero_prev} style={ctrlBtn}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3 L5 8 L10 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" /></svg>
          </button>
          <button onClick={next} aria-label={tr.hero_next} style={ctrlBtn}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3 L11 8 L6 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" /></svg>
          </button>
        </div>
      </div>

      <div className="hero-scroll-cue" style={{ position: 'absolute', left: 'var(--shell-pad)', bottom: 'calc(var(--shell-pad) - 8px)', zIndex: 3, display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        <span>{tr.hero_scroll}</span>
        <span style={{ width: 36, height: 1, background: 'rgba(255,255,255,0.6)' }} />
      </div>
    </section>
  );
}
