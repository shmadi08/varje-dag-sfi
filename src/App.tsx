import { useState } from 'react'

// Exact audio tracks from book-audio.ts in the original zip
const TEXT_AUDIO: Record<number, { url: string; label: string }[]> = {
  1: [
    { url: 'https://media.svenskadagfordag.se/2018/06/01Det_behovs_fler_bostad_s8.mp3', label: 'Det behövs fler bostäder s. 8' },
    { url: 'https://media.svenskadagfordag.se/2018/06/02Jag_fyllde_30_ar_s8.mp3', label: 'Jag fyllde 30 år … s. 8' },
    { url: 'https://media.svenskadagfordag.se/2018/06/03Hur_bor_jag_s12.mp3', label: 'Hur bor jag? s. 12' },
    { url: 'https://media.svenskadagfordag.se/2018/06/04Mitt_namn_ar_Alex_s13.mp3', label: 'Mitt namn är Alex … s. 13' },
  ],
  2: [
    { url: 'https://media.svenskadagfordag.se/2018/06/09Var_halsa_ar_vart_eget_s30.mp3', label: 'Vår hälsa är vårt eget ansvar s. 30' },
    { url: 'https://media.svenskadagfordag.se/2018/06/10Manniskan_behover_rora_s30.mp3', label: 'Människan behöver röra på sig … s. 30' },
  ],
}

const WEEKS = [
  { n: 1, theme: 'مسکن', sv: 'Bostad', grammar: 'Indefinita pronomen' },
  { n: 2, theme: 'بهداشت', sv: 'Sjukvård', grammar: 'Adjektiv' },
  { n: 3, theme: 'فراغت', sv: 'Fritid', grammar: 'Transitiva verb' },
]

export default function App() {
  const [week, setWeek] = useState(1)
  const tracks = TEXT_AUDIO[week] ?? TEXT_AUDIO[1]

  return (
    <div style={{ padding: '1.5rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ marginTop: 0 }}>Varje dag · SFI D</h1>
      <p style={{ opacity: 0.8 }}>دقیقاً مثل فایل زیپ — صوت واقعی کتاب</p>

      <h2 style={{ marginTop: '2rem' }}>هفته‌ها</h2>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {WEEKS.map((w) => (
          <button
            key={w.n}
            onClick={() => setWeek(w.n)}
            style={{
              padding: '0.6rem 1rem',
              borderRadius: 8,
              border: week === w.n ? '2px solid #1d9bf0' : '1px solid #333',
              background: week === w.n ? '#1d9bf022' : '#1a1f26',
              color: 'inherit',
            }}
          >
            هفته {w.n} · {w.theme}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <p style={{ opacity: 0.7 }}>گرامر: {WEEKS.find(w => w.n === week)?.grammar}</p>
      </div>

      <h2 style={{ marginTop: '1.5rem' }}>صوت‌های کتاب</h2>
      {tracks.map((t, i) => (
        <div key={i} style={{ marginTop: '1rem', padding: '1rem', background: '#1a1f26', borderRadius: 12 }}>
          <p style={{ margin: '0 0 0.5rem', fontWeight: 600 }}>{t.label}</p>
          <audio controls style={{ width: '100%' }} src={t.url} />
        </div>
      ))}

      <p style={{ marginTop: '2rem', opacity: 0.7, fontSize: 14 }}>
        این صوت‌ها دقیقاً از فایل <code>book-audio.ts</code> داخل فایل زیپ موجود آمده‌اند.<br />
        اگر بخواهید کل محتوای هفته 1 و کامپوننت‌های کامل اضافه شود، بگویید.
      </p>
    </div>
  )
}
