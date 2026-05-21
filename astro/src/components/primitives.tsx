// Logo components
export function V2CMark({ size = 36, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M5 8 L19 20 L5 32" stroke={color} strokeWidth="3.2" strokeLinejoin="miter" strokeLinecap="square" />
      <path d="M22 32 L30 8" stroke={color} strokeWidth="3.2" strokeLinecap="square" />
      <circle cx="33.5" cy="30" r="2.6" fill={color} />
    </svg>
  );
}

export function V2CWordmark({ color = 'currentColor', size = 22 }: { color?: string; size?: number }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color, lineHeight: 1 }}>
      <V2CMark size={size * 1.4} color={color} />
      <span style={{ fontWeight: 600, fontSize: size, letterSpacing: '-0.01em' }}>
        v2c
      </span>
    </span>
  );
}

// Pill Button
export function Pill({
  children,
  variant = 'ink',
  size = 'md',
  icon,
  iconRight,
  className = '',
  ...rest
}: {
  children: React.ReactNode;
  variant?: 'ink' | 'paper' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  const sizes = {
    sm: { padX: 22, padY: 12, font: 14 },
    md: { padX: 32, padY: 18, font: 16 },
    lg: { padX: 40, padY: 22, font: 17 },
    xl: { padX: 56, padY: 26, font: 18 },
  }[size];
  const variants = {
    ink: { bg: 'var(--ink)', fg: '#fff', border: 'transparent' },
    paper: { bg: '#fff', fg: 'var(--ink)', border: 'transparent' },
    ghost: { bg: 'transparent', fg: 'currentColor', border: 'currentColor' },
    accent: { bg: 'var(--accent)', fg: '#fff', border: 'transparent' },
  }[variant];

  return (
    <button
      className={`btn-pill ${className}`}
      style={{
        fontFamily: 'var(--font-fellix)',
        fontWeight: 600,
        fontSize: sizes.font,
        letterSpacing: '-0.005em',
        padding: `${sizes.padY}px ${sizes.padX}px`,
        background: variants.bg,
        color: variants.fg,
        border: `1.5px solid ${variants.border}`,
      }}
      {...rest}
    >
      {icon}
      {children}
      {iconRight}
    </button>
  );
}

// Section Head
export function SectionHead({ kicker, title, intro, id }: { kicker: string; title: string; intro?: string; id?: string }) {
  return (
    <div id={id} className="mx-auto" style={{ maxWidth: 1080, padding: 'clamp(72px, 10vh, 140px) var(--shell-pad) 48px' }}>
      <div className="eyebrow">{kicker}</div>
      <h2
        className="font-semibold"
        style={{
          margin: '16px 0 0 0',
          fontSize: 'clamp(40px, 5.5vw, 88px)',
          letterSpacing: '-0.03em',
          lineHeight: 0.96,
          textWrap: 'balance' as const,
        }}
      >
        {title}
      </h2>
      {intro && (
        <p
          style={{
            margin: '32px 0 0 0',
            maxWidth: 640,
            fontSize: 'clamp(17px, 1.4vw, 19px)',
            lineHeight: 1.55,
            color: 'var(--ink-2)',
          }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

// Marquee ticker text
export const TICKER_ITEMS = [
  'Vom Konzept zum Live-Produkt.',
  'Du redest direkt mit dem Entwickler.',
  'Kein Ping-Pong zwischen Agenturen.',
  'Festpreis oder transparentes Budget.',
  'Code, der auch in zwei Jahren wartbar ist.',
  'KI, die wirklich funktioniert.',
];

export function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
        {n}
      </div>
      <div style={{ marginTop: 6, fontSize: 13, color: 'var(--mute)' }}>{l}</div>
    </div>
  );
}
