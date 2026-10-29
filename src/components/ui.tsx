import type { ButtonHTMLAttributes, ReactNode } from 'react'

export function Btn({
  tone = 'pine',
  className = '',
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: 'pine' | 'ghost' | 'soft' | 'copper' }) {
  const tones: Record<string, string> = {
    pine: 'background:#1d9bf0;color:#000',
    ghost: 'border:1px solid #2f3336;background:transparent;color:inherit',
    soft: 'background:#1d9bf022;color:#1d9bf0',
    copper: 'background:#f59e0b;color:#000',
  }
  return (
    <button
      {...props}
      style={{ ...(props.style || {}), ...(tones[tone] ? Object.fromEntries(tones[tone].split(';').map(s => s.split(':'))) : {}), padding: '0.5rem 1rem', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
      className={className}
    >
      {children}
    </button>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section className={className} style={{ background: '#1a1f26', borderRadius: 16, padding: '1.25rem', border: '1px solid #2f3336' }}>
      {children}
    </section>
  )
}

export function Origin({ kind, label }: { kind: 'book' | 'app'; label: string }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 999,
      padding: '0.1rem 0.5rem',
      fontSize: 12,
      fontWeight: 600,
      background: kind === 'book' ? '#1d9bf022' : '#f59e0b22',
      color: kind === 'book' ? '#1d9bf0' : '#f59e0b',
    }}>
      {label}
    </span>
  )
}
