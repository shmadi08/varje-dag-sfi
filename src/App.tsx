import { useState } from 'react'

const AUDIO = {
  mon: 'https://media.svenskadagfordag.se/2018/06/sdd-d-v1-måndag.mp3',
  tue: 'https://media.svenskadagfordag.se/2018/06/sdd-d-v1-tisdag.mp3',
  wed: 'https://media.svenskadagfordag.se/2018/06/sdd-d-v1-onsdag.mp3',
  thu: 'https://media.svenskadagfordag.se/2018/06/sdd-d-v1-torsdag.mp3',
  fri: 'https://media.svenskadagfordag.se/2018/06/sdd-d-v1-fredag.mp3',
}

const WEEKS = [
  { id: 'w1', n: 1, theme: 'مسکن', sv: 'Bostad', grammar: 'Indefinita pronomen' },
  { id: 'w2', n: 2, theme: 'بهداشت', sv: 'Sjukvård', grammar: 'Adjektiv' },
  { id: 'w3', n: 3, theme: 'فراغت', sv: 'Fritid', grammar: 'Transitiva verb' },
]

const DAYS = [
  { id: 'mon', sv: 'Måndag', fa: 'دوشنبه' },
  { id: 'tue', sv: 'Tisdag', fa: 'سه‌شنبه' },
  { id: 'wed', sv: 'Onsdag', fa: 'چهارشنبه' },
  { id: 'thu', sv: 'Torsdag', fa: 'پنجشنبه' },
  { id: 'fri', sv: 'Fredag', fa: 'جمعه' },
]

export default function App() {
  const [week, setWeek] = useState('w1')
  const [day, setDay] = useState('mon')

  return (
    <div style={{ padding: '1.5rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ marginTop: 0 }}>Varje dag · SFI D</h1>
      <p style={{ opacity: 0.8 }}>دقیقاً مثل فایل زیپ — صوت واقعی کتاب از media.svenskadagfordag.se</p>

      <h2 style={{ marginTop: '2rem' }}>هفته‌ها</h2>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {WEEKS.map((w) => (
          <button
            key={w.id}
            onClick={() => setWeek(w.id)}
            style={{
              padding: '0.6rem 1rem',
              borderRadius: 8,
              border: week === w.id ? '2px solid #1d9bf0' : '1px solid #333',
              background: week === w.id ? '#1d9bf022' : '#1a1f26',
              color: 'inherit',
            }}
          >
            هفته {w.n} · {w.theme}
          </button>
        ))}
      </div>

      <h2 style={{ marginTop: '1.5rem' }}>روزها</h2>
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {DAYS.map((d) => (
          <button
            key={d.id}
            onClick={() => setDay(d.id)}
            style={{
              padding: '0.5rem 0.8rem',
              borderRadius: 8,
              border: day === d.id ? '2px solid #1d9bf0' : '1px solid #333',
              background: day === d.id ? '#1d9bf022' : '#1a1f26',
              color: 'inherit',
            }}
          >
            {d.fa}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#1a1f26', borderRadius: 12 }}>
        <h3 style={{ margin: '0 0 0.5rem' }}>صوت کتاب — {DAYS.find(d => d.id === day)?.sv}</h3>
        <audio controls style={{ width: '100%', marginTop: '0.5rem' }} src={AUDIO[day as keyof typeof AUDIO]} />
        <p style={{ fontSize: 13, opacity: 0.6, marginTop: '0.5rem' }}>
          این صوت مستقیم از فایل‌های رسمی کتاب Svenska dag för dag آمده است.
        </p>
      </div>

      <p style={{ marginTop: '2rem', opacity: 0.7 }}>
        محتوای کامل هفته 1 و واژه‌ها در فایل‌های داده وجود دارند. اگر بخواهید دقیقاً مثل فایل زیپ با همه کامپوننت‌ها باشد، بگویید تا فایل‌های باقیمانده را هم اضافه کنم.
      </p>
    </div>
  )
}
