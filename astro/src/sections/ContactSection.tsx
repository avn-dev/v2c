import { useState, useMemo } from 'react';
import { Icon } from '../components/icons';
import { getT, anchors } from '../i18n/translations';

type Lang = 'de' | 'en';

function ContactLine({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--night-2)', border: '1px solid var(--night-hairline)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>{label}</div>
        <div style={{ marginTop: 4, fontSize: 17, fontWeight: 500 }}>{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} style={{ color: '#fff', textDecoration: 'none' }}>{inner}</a> : <>{inner}</>;
}

function DarkField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>{label}</span>
      {children}
    </label>
  );
}

const API_URL = import.meta.env.PUBLIC_API_URL ?? 'https://api.vision2co.de';

export default function ContactSection({ lang }: { lang: Lang }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const tr = useMemo(() => getT(lang), [lang]);

  return (
    <section id={anchors[lang].contact} style={{ background: 'var(--night)', color: '#fff', paddingBottom: 'clamp(80px,12vh,160px)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: 'clamp(72px,10vh,140px) var(--shell-pad) 64px' }}>
        <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>{tr.contact_eyebrow}</div>
        <h2 style={{ margin: '16px 0 32px', fontSize: 'clamp(48px,7vw,120px)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 0.94, textWrap: 'balance' as const, color: '#fff' }}>
          {tr.contact_headline}<br />{tr.contact_headline2}
        </h2>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: 18, maxWidth: 580, lineHeight: 1.55 }}>{tr.contact_sub}</p>
      </div>

      <div className="grid-contact" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 var(--shell-pad)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: 56, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <ContactLine icon={<Icon.Mail />} label={tr.contact_email} value="hallo@vision2co.de" href="mailto:hallo@vision2co.de" />
          <ContactLine icon={<Icon.Cal />}  label={tr.contact_booking} value="cal.com/v2c/kennenlernen" href="#" />
          <ContactLine icon={<Icon.Globe />} label={tr.contact_location} value={tr.contact_loc_value} />
          <div style={{ marginTop: 24, padding: 24, borderRadius: 20, background: 'var(--night-2)', border: '1px solid var(--night-hairline)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>{tr.contact_availability}</div>
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: '#4ade80', boxShadow: '0 0 12px rgba(74,222,128,0.6)' }} />
              <span style={{ fontWeight: 500, fontSize: 16 }}>{tr.contact_slots}</span>
            </div>
            <p style={{ margin: '12px 0 0', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{tr.contact_slots_note}</p>
          </div>
        </div>

        <form onSubmit={async (e) => {
          e.preventDefault();
          setError(false);
          setLoading(true);
          const fd = new FormData(e.currentTarget);
          try {
            const res = await fetch(`${API_URL}/api/contact`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
              body: JSON.stringify({
                name: fd.get('name'),
                email: fd.get('email'),
                service_type: fd.get('service_type'),
                message: fd.get('message'),
                honeypot: fd.get('honeypot'),
                lang,
              }),
            });
            if (!res.ok) throw new Error();
            setSent(true);
          } catch {
            setError(true);
          } finally {
            setLoading(false);
          }
        }}
          style={{ background: 'var(--night-2)', border: '1px solid var(--night-hairline)', borderRadius: 24, padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {!sent ? (
            <>
              <input name="honeypot" type="text" tabIndex={-1} aria-hidden="true" autoComplete="off" style={{ display: 'none' }} />
              <DarkField label={tr.contact_name}><input required name="name" type="text" placeholder={tr.contact_name_ph} className="dark-input" /></DarkField>
              <DarkField label={tr.contact_your_email}><input required name="email" type="email" placeholder={tr.contact_email_ph} className="dark-input" /></DarkField>
              <DarkField label={tr.contact_what}>
                <select name="service_type" defaultValue="" className="dark-input">
                  <option value="" disabled>{tr.contact_select}</option>
                  <option value="webapp">{tr.contact_opt_webapp}</option>
                  <option value="website">{tr.contact_opt_website}</option>
                  <option value="api">{tr.contact_opt_api}</option>
                  <option value="ai">{tr.contact_opt_ai}</option>
                  <option value="automation">{tr.contact_opt_auto}</option>
                  <option value="audit">{tr.contact_opt_audit}</option>
                  <option value="other">{tr.contact_opt_other}</option>
                </select>
              </DarkField>
              <DarkField label={tr.contact_details}><textarea required name="message" rows={4} placeholder={tr.contact_details_ph} className="dark-input" /></DarkField>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{tr.contact_reply_note}</span>
                {error && (
                  <span style={{ fontSize: 13, color: '#f87171' }}>
                    {lang === 'de' ? 'Fehler beim Senden — bitte direkt an hallo@vision2co.de schreiben.' : 'Error sending — please email hallo@vision2co.de directly.'}
                  </span>
                )}
                <button type="submit" disabled={loading} className="btn-pill" style={{ background: '#fff', color: 'var(--ink)', border: '1.5px solid transparent', padding: '18px 32px', fontSize: 16, opacity: loading ? 0.6 : 1 }}>
                  <Icon.Send /> {loading ? '…' : tr.contact_send}
                </button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{ width: 56, height: 56, borderRadius: 999, background: 'rgba(74,222,128,0.18)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12 L10 17 L19 7" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em' }}>{tr.contact_success_title}</div>
              <p style={{ margin: '10px 0 0', color: 'rgba(255,255,255,0.65)', fontSize: 15 }}>{tr.contact_success_sub}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
