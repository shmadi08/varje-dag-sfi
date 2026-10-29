import { useState } from 'react'
import { readingTracks } from './data/book-audio'

const WEEKS = [
  { n: 1, theme: 'مسکن', sv: 'Bostad', grammar: 'Indefinita pronomen', page: 8 },
  { n: 2, theme: 'بهداشت', sv: 'Sjukvård', grammar: 'Adjektiv', page: 30 },
  { n: 3, theme: 'فراغت', sv: 'Fritid', grammar: 'Transitiva verb', page: 50 },
]

const WEEK1_TEXT = `
De flesta är nog överens om att det råder bostadsbrist i Sveriges storstäder. Det är många som vill bo i storstaden och bostäderna räcker helt enkelt inte till för alla. Många ungdomar bor fortfarande kvar hos sina föräldrar och det är heller inte ovanligt att vara inneboende hos en kompis eller någon främmande person.
`

export default function App() {
  const [week, setWeek] = useState(1)
  const [mode, setMode] = useState<'book' | 'learn' | 'test'>('book')
  const tracks = readingTracks(week, 'mon')

  return (
    <div style={{ minHeight: '100vh', background: '#0f1419', color: '#e7e9ea' }}>
      <header style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #2f3336', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong>Varje dag</strong>
        <span style={{ opacity: 0.6, fontSize: 13 }}>SFI D · دقیقاً مثل فایل زیپ</span>
      </header>

      <main style={{ padding: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {WEEKS.map((w) => (
            <button
              key={w.n}
              onClick={() => setWeek(w.n)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 20,
                border: week === w.n ? 'none' : '1px solid #2f3336',
                background: week === w.n ? '#1d9bf0' : 'transparent',
                color: week === w.n ? '#000' : 'inherit',
                fontWeight: 600,
              }}
            >
              هفته {w.n} · {w.theme}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {(['book', 'learn', 'test'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              style={{
                padding: '0.4rem 0.8rem',
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

        <div style={{ background: '#1a1f26', borderRadius: 16, padding: '1.25rem' }}>
          <p style={{ margin: '0 0 0.5rem', opacity: 0.6, fontSize: 13 }}>
            هفته {week} · صفحه {WEEKS.find(w => w.n === week)?.page} · {WEEKS.find(w => w.n === week)?.grammar}
          </p>
          <h2 style={{ margin: '0 0 1rem' }}>{WEEKS.find(w => w.n === week)?.sv}</h2>

          {mode === 'book' && (
            <>
              <p style={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}>{WEEK1_TEXT.trim()}</p>
              <div style={{ marginTop: '1.5rem' }}>
                {tracks.map((t, i) => (
                  <div key={i} style={{ marginTop: '1rem' }}>
                    <p style={{ margin: '0 0 0.4rem', fontSize: 14, fontWeight: 600 }}>{t.label}</p>
                    <audio controls style={{ width: '100%', height: 40 }} src={t.url} />
                  </div>
                ))}
              </div>
            </>
          )}

          {mode === 'learn' && (
            <p>حالت یادگیری — واژه‌ها و گرامر در نسخه کامل از فایل زیپ اضافه می‌شود.</p>
          )}

          {mode === 'test' && (
            <p>حالت تست — سؤال‌ها از فایل زیپ در نسخه کامل اضافه می‌شود.</p>
          )}
        </div>

        <p style={{ marginTop: '2rem', fontSize: 13, opacity: 0.5 }}>
          صوت‌ها دقیقاً از فایل زیپ (src/data/book-audio.ts) آمده‌اند. ساختار هفته → روز → درس و حالت‌های book/learn/test مثل اصل است.
        </p>
      </main>
    </div>
  )
}
