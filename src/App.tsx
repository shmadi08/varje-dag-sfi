import { useState } from 'react'
import { readingTracks } from './data/book-audio'
import type { Day } from './data/types'

const WEEKS = [
  { id: 'w1', n: 1, theme: { sv: 'Bostad', fa: 'مسکن', en: 'Housing' }, grammar: { sv: 'Indefinita pronomen', fa: 'ضمایر نامعین', en: 'Indefinite pronouns' }, page: 8 },
  { id: 'w2', n: 2, theme: { sv: 'Sjukvård', fa: 'بهداشت', en: 'Health' }, grammar: { sv: 'Adjektiv', fa: 'صفت', en: 'Adjectives' }, page: 30 },
  { id: 'w3', n: 3, theme: { sv: 'Fritid', fa: 'فراغت', en: 'Free time' }, grammar: { sv: 'Transitiva verb', fa: 'فعل متعدی', en: 'Transitive verbs' }, page: 50 },
]

const DAYS: { id: Day['id']; sv: string; fa: string }[] = [
  { id: 'mon', sv: 'Måndag', fa: 'دوشنبه' },
  { id: 'tue', sv: 'Tisdag', fa: 'سه‌شنبه' },
  { id: 'wed', sv: 'Onsdag', fa: 'چهارشنبه' },
  { id: 'thu', sv: 'Torsdag', fa: 'پنجشنبه' },
  { id: 'fri', sv: 'Fredag', fa: 'جمعه' },
]

const WEEK1_READING = `De flesta är nog överens om att det råder bostadsbrist i Sveriges storstäder. Det är många som vill bo i storstaden och bostäderna räcker helt enkelt inte till för alla. Många ungdomar bor fortfarande kvar hos sina föräldrar och det är heller inte ovanligt att vara inneboende hos en kompis eller någon främmande person.`

export default function App() {
  const [weekId, setWeekId] = useState('w1')
  const [dayId, setDayId] = useState<Day['id']>('mon')
  const [mode, setMode] = useState<'book' | 'learn' | 'test'>('book')

  const week = WEEKS.find(w => w.id === weekId)!
  const tracks = readingTracks(week.n, dayId)

  return (
    <div style={{ minHeight: '100vh', background: '#0f1419', color: '#e7e9ea', fontFamily: 'system-ui' }}>
      <header style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #2f3336', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: 18 }}>Varje dag</strong>
        <span style={{ opacity: 0.5, fontSize: 13 }}>SFI D · دقیقاً مثل فایل زیپ</span>
      </header>

      <main style={{ padding: '1.25rem', maxWidth: 920, margin: '0 auto' }}>
        {/* Weeks */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {WEEKS.map((w) => (
            <button
              key={w.id}
              onClick={() => setWeekId(w.id)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 20,
                border: weekId === w.id ? 'none' : '1px solid #2f3336',
                background: weekId === w.id ? '#1d9bf0' : 'transparent',
                color: weekId === w.id ? '#000' : 'inherit',
                fontWeight: 600,
              }}
            >
              هفته {w.n} · {w.theme.fa}
            </button>
          ))}
        </div>

        {/* Days */}
        <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {DAYS.map((d) => (
            <button
              key={d.id}
              onClick={() => setDayId(d.id)}
              style={{
                padding: '0.35rem 0.7rem',
                borderRadius: 8,
                border: dayId === d.id ? '1px solid #1d9bf0' : '1px solid #2f3336',
                background: dayId === d.id ? '#1d9bf022' : 'transparent',
                color: 'inherit',
                fontSize: 14,
              }}
            >
              {d.fa}
            </button>
          ))}
        </div>

        {/* Modes */}
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {(['book', 'learn', 'test'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              style={{
                padding: '0.4rem 0.9rem',
                borderRadius: 8,
                border: mode === m ? '1px solid #1d9bf0' : '1px solid #2f3336',
                background: mode === m ? '#1d9bf022' : 'transparent',
                color: 'inherit',
              }}
            >
              {m === 'book' ? 'کتاب' : m === 'learn' ? 'یادگیری' : 'تست'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ background: '#1a1f26', borderRadius: 16, padding: '1.25rem' }}>
          <p style={{ margin: '0 0 0.4rem', opacity: 0.55, fontSize: 13 }}>
            هفته {week.n} · {DAYS.find(d => d.id === dayId)?.sv} · صفحه {week.page} · {week.grammar.sv}
          </p>
          <h2 style={{ margin: '0 0 1rem', fontSize: 22 }}>{week.theme.sv}</h2>

          {mode === 'book' && (
            <>
              <p style={{ lineHeight: 1.75, whiteSpace: 'pre-line' }}>{WEEK1_READING}</p>
              <div style={{ marginTop: '1.5rem' }}>
                {tracks.length ? tracks.map((t, i) => (
                  <div key={i} style={{ marginTop: '0.9rem' }}>
                    <p style={{ margin: '0 0 0.35rem', fontSize: 14, fontWeight: 600 }}>{t.label}</p>
                    <audio controls style={{ width: '100%', height: 40 }} src={t.url} />
                  </div>
                )) : <p style={{ opacity: 0.5 }}>صوت برای این روز در فایل زیپ وجود ندارد.</p>}
              </div>
            </>
          )}

          {mode === 'learn' && (
            <div>
              <p style={{ marginBottom: '0.75rem' }}>واژه‌ها و گرامر هفته {week.n}</p>
              <p style={{ opacity: 0.7 }}>گرامر: {week.grammar.fa} ({week.grammar.sv})</p>
              <p style={{ opacity: 0.6, fontSize: 14, marginTop: '1rem' }}>محتوای کامل واژه‌ها و تمرین‌ها از week1.ts در نسخه بعدی اضافه می‌شود.</p>
            </div>
          )}

          {mode === 'test' && (
            <div>
              <p>سؤال‌ها و تست‌های هفته {week.n} · {DAYS.find(d => d.id === dayId)?.fa}</p>
              <p style={{ opacity: 0.6, fontSize: 14, marginTop: '0.75rem' }}>سؤال‌ها از فایل زیپ در نسخه کامل اضافه می‌شود.</p>
            </div>
          )}
        </div>

        <p style={{ marginTop: '1.5rem', fontSize: 12, opacity: 0.45 }}>
          ساختار دقیقاً مثل فایل زیپ: هفته → روز → حالت (book / learn / test). صوت‌ها از src/data/book-audio.ts می‌آیند.
        </p>
      </main>
    </div>
  )
}
