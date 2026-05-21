export const Icon = {
  Arrow: ({ s = 16 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none"><path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" /></svg>
  ),
  ArrowDown: ({ s = 14 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none"><path d="M4 6 L8 10 L12 6" stroke="currentColor" strokeWidth="1.5" /></svg>
  ),
  ArrowUp: ({ s = 14 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none"><path d="M4 10 L8 6 L12 10" stroke="currentColor" strokeWidth="1.5" /></svg>
  ),
  Search: ({ s = 20 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" /><path d="M13.5 13.5 L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
  ),
  User: ({ s = 20 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" /><path d="M3.5 17 C5 13 7.5 12 10 12 C12.5 12 15 13 16.5 17" stroke="currentColor" strokeWidth="1.6" /></svg>
  ),
  Send: ({ s = 16 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none"><path d="M2 14 L14 8 L2 2 L4 8 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
  ),
  Mail: ({ s = 16 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none"><rect x="2" y="3.5" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.4" /><path d="M2.5 4.5 L8 9 L13.5 4.5" stroke="currentColor" strokeWidth="1.4" /></svg>
  ),
  Code: ({ s = 18 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><path d="M7 6 L3 10 L7 14 M13 6 L17 10 L13 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" /></svg>
  ),
  Globe: ({ s = 18 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" /><path d="M3 10 H17 M10 3 C12.5 6 12.5 14 10 17 C7.5 14 7.5 6 10 3" stroke="currentColor" strokeWidth="1.4" /></svg>
  ),
  Cal: ({ s = 18 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><rect x="3" y="4.5" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M3 8 H17 M7 3 V6 M13 3 V6" stroke="currentColor" strokeWidth="1.4" /></svg>
  ),
  Instagram: ({ s = 18 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" /><circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.4" /><circle cx="14.4" cy="5.6" r="0.8" fill="currentColor" /></svg>
  ),
  Github: ({ s = 18 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><path d="M10 2 C5.6 2 2 5.6 2 10 C2 13.5 4.3 16.5 7.4 17.6 C7.8 17.7 8 17.4 8 17.2 C8 17 8 16.4 8 15.7 C5.7 16.2 5.2 14.7 5.2 14.7 C4.9 13.8 4.4 13.6 4.4 13.6 C3.6 13.1 4.4 13.1 4.4 13.1 C5.3 13.2 5.7 14 5.7 14 C6.5 15.3 7.8 14.9 8.3 14.7 C8.4 14.1 8.6 13.7 8.9 13.5 C7 13.3 5 12.6 5 9.5 C5 8.6 5.3 7.9 5.8 7.4 C5.7 7.2 5.4 6.4 5.9 5.3 C5.9 5.3 6.6 5.1 8 6 C8.6 5.8 9.3 5.7 10 5.7 C10.7 5.7 11.4 5.8 12 6 C13.4 5.1 14.1 5.3 14.1 5.3 C14.6 6.4 14.3 7.2 14.2 7.4 C14.7 7.9 15 8.6 15 9.5 C15 12.6 13 13.3 11.1 13.5 C11.5 13.8 11.8 14.4 11.8 15.3 C11.8 16.5 11.8 17 11.8 17.2 C11.8 17.4 12 17.7 12.4 17.6 C15.7 16.5 18 13.5 18 10 C18 5.6 14.4 2 10 2 Z" fill="currentColor" /></svg>
  ),
  LinkedIn: ({ s = 18 }: { s?: number }) => (
    <svg width={s} height={s} viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" /><circle cx="6" cy="7" r="1" fill="currentColor" /><path d="M5 9.5 H7 V15 H5 Z M9 9.5 H11 V10.5 C11.5 9.7 12.3 9.3 13.2 9.3 C14.8 9.3 15.5 10.3 15.5 12 V15 H13.5 V12.4 C13.5 11.6 13.2 11 12.3 11 C11.5 11 11 11.6 11 12.4 V15 H9 Z" fill="currentColor" /></svg>
  ),
};
