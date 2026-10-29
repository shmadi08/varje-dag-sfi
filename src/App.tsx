import { useState } from 'react'
import { readingTracks } from './data/book-audio'
import { week1Days } from './data/week1'
import type { Day } from './data/types'
import { Card, Origin } from './components/ui'

const WEEKS = [
  { id: 'w1', n: 1, theme: { sv: 'Bostad', fa: 'مسکن', en: 'Housing' }, grammar: { sv: 'Indefinita pronomen', fa: 'ضمایر نامعین', en: 'Indefinite pronouns' }, page: 8, days: week1Days },
  { id: 'w2', n: 2, theme: { sv: 'Sjukvård', fa: 'بهداشت', en: 'Health' }, grammar: { sv: 'Adjektiv', fa: 'صفت', en: 'Adjectives' }, page: 30, days: [] as Day[] },
  { id: 'w3', n: 3, theme: { sv: 'Fritid', fa: 'فراغت', en: 'Free time' }, grammar: { sv: 'Transitiva verb', fa: 'فعل متعدی', en: 'Transitive verbs' }, page: 50, days: [] as Day[] },
]

const DAYS: { id: Day['id']; sv: string; fa: string }[] = [
  { id: 'mon', sv: 'Måndag', fa: 'دوشنبه' },
  { id: 'tue', sv: 'Tisdag', fa: 'سه‌شنبه' },
  { id: 'wed', sv: 'Onsdag', fa: 'چهارشنبه' },
  { id: 'thu', sv: 'Torsdag', fa: 'پنجشنبه' },
  { id: 'fri', sv: 'Fredag', fa: 'جمعه' },
]

export default function App() {
  const [weekId, setWeekId] = useState('w1')
  const [dayId, setDayId] = useState<Day['id']>('mon')
  const [mode, setMode] = useState<'book' | 'learn' | 'test'>('book')
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({})

  const week = WEEKS.find(w => w.id === weekId)!
  const day = week.days.find(d => d.id === dayId)
  const tracks = readingTracks(week.n, dayId)
  const reading = day?.blocks.find(b => b.type === 'reading')
  const questions = day?.blocks.filter(b => b.type === 'questions') ?? []
  const vocab = day?.blocks.filter(b => b.type === 'vocab') ?? []

  return (
    <div style={{ minHeight: '100vh', background: '#0f1419', color: '#e7e9ea', fontFamily: 'system-ui' }}>
      <header style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #2f3336', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: 18 }}>Varje dag</strong>
        <span style={{ opacity: 0.5, fontSize: 13 }}>SFI D</span>
      </header>

      <main style={{ padding: '1.25rem', maxWidth: 920, margin: '0 auto' }}>
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

        <Card>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
            <Origin kind="book" label="از کتاب" />
            <span style={{ opacity: 0.55, fontSize: 13 }}>
              هفته {week.n} · {DAYS.find(d => d.id === dayId)?.sv} · صفحه {week.page} · {week.grammar.sv}
            </span>
          </div>
          <h2 style={{ margin: '0 0 1rem', fontSize: 22 }}>{reading && 'title' in reading ? reading.title : week.theme.sv}</h2>

          {mode === 'book' && (
            <>
              {reading && reading.type === 'reading' && (
                <div>
                  {reading.paragraphs.map((p, i) => (
                    <p key={i} style={{ lineHeight: 1.75, marginBottom: '0.75rem' }}>
                      {p.sv}
                      {p.fa && <span style={{ display: 'block', opacity: 0.6, fontSize: 14, marginTop: 4 }}>{p.fa}</span>}
                    </p>
                  ))}
                </div>
              )}
              {!reading && <p style={{ opacity: 0.5 }}>محتوای این روز هنوز اضافه نشده.</p>}
              <div style={{ marginTop: '1.5rem' }}>
                {tracks.length ? tracks.map((t, i) => (
                  <div key={i} style={{ marginTop: '0.9rem' }}>
                    <p style={{ margin: '0 0 0.35rem', fontSize: 14, fontWeight: 600 }}>{t.label}</p>
                    <audio controls style={{ width: '100%', height: 40 }} src={t.url} />
                  </div>
                )) : null}
              </div>
            </>
          )}

          {mode === 'learn' && (
            <div>
              <p style={{ marginBottom: '0.75rem' }}>واژه‌ها و گرامر هفته {week.n}</p>
              <p style={{ opacity: 0.7 }}>گرامر: {week.grammar.fa} ({week.grammar.sv})</p>
              {vocab.map(b => (
                <div key={b.id} style={{ marginTop: '1rem' }}>
                  <p style={{ fontWeight: 600, marginBottom: '0.4rem' }}>واژه‌ها</p>
                  <p style={{ opacity: 0.8 }}>{b.type === 'vocab' ? b.wordIds.join(' · ') : ''}</p>
                </div>
              ))}
              {vocab.length === 0 && <p style={{ opacity: 0.5, marginTop: '0.75rem' }}>واژه‌ای برای این روز وجود ندارد.</p>}
            </div>
          )}

          {mode === 'test' && (
            <div>
              {questions.length === 0 && <p style={{ opacity: 0.5 }}>سؤالی برای این روز وجود ندارد.</p>}
              {questions.map(b => (
                <div key={b.id} style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ margin: '0 0 0.75rem', fontSize: 16 }}>{b.type === 'questions' ? b.title : ''}</h3>
                  {b.type === 'questions' && b.items.map((item, i) => (
                    <div key={i} style={{ marginBottom: '1rem', padding: '0.75rem', background: '#0f1419', borderRadius: 8 }}>
                      <p style={{ margin: '0 0 0.4rem', fontWeight: 600 }}>{item.q}</p>
                      {item.fa && <p style={{ margin: '0 0 0.5rem', opacity: 0.6, fontSize: 14 }}>{item.fa}</p>}
                      <button
                        onClick={() => setShowAnswers(s => ({ ...s, [`${b.id}-${i}`]: !s[`${b.id}-${i}`] }))}
                        style={{ fontSize: 13, padding: '0.3rem 0.6rem', borderRadius: 6, border: '1px solid #2f3336', background: 'transparent', color: 'inherit' }}
                      >
                        {showAnswers[`${b.id}-${i}`] ? 'پنهان کردن پاسخ' : 'نشان دادن پاسخ'}
                      </button>
                      {showAnswers[`${b.id}-${i}`] && item.model && (
                        <div style={{ marginTop: '0.5rem', padding: '0.5rem', background: '#1d9bf011', borderRadius: 6 }}>
                          <p style={{ margin: 0, fontSize: 14 }}>{item.model}</p>
                          {item.modelFa && <p style={{ margin: '0.3rem 0 0', opacity: 0.6, fontSize: 13 }}>{item.modelFa}</p>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </Card>

        <p style={{ marginTop: '1.5rem', fontSize: 12, opacity: 0.45 }}>
          محتوای هفته 1 از فایل زیپ اضافه شد. صوت‌ها از media.svenskadagfordag.se می‌آیند.
        </p>
      </main>
    </div>
  )
}
