import type { Day } from './types'

export const week1Days: Day[] = [
  {
    id: 'mon',
    sv: 'Måndag',
    fa: 'دوشنبه',
    en: 'Monday',
    focus: 'Ordkunskap och lästräning',
    page: 8,
    status: 'entered',
    blocks: [
      {
        id: 'w1m-read',
        type: 'reading',
        origin: 'book',
        title: 'Det behövs fler bostäder',
        kicker: 'Vecka 1 · Bostad',
        paragraphs: [
          {
            sv: 'De flesta är nog överens om att det råder bostadsbrist i Sveriges storstäder. Det är många som vill bo i storstaden och bostäderna räcker helt enkelt inte till för alla.',
            fa: 'اکثر مردم موافق‌اند که در شهرهای بزرگ سوئد کمبود مسکن وجود دارد.',
          },
        ],
      },
      {
        id: 'w1m-vocab',
        type: 'vocab',
        origin: 'book',
        wordIds: ['bostad', 'hyra', 'inneboende'],
      },
    ],
  },
  {
    id: 'tue',
    sv: 'Tisdag',
    fa: 'سه‌شنبه',
    en: 'Tuesday',
    focus: 'Ordkunskap och lästräning',
    page: 12,
    status: 'entered',
    blocks: [
      {
        id: 'w1t-read',
        type: 'reading',
        origin: 'book',
        title: 'Hur bor jag?',
        paragraphs: [
          {
            sv: 'Mitt namn är Alex och jag bor i en liten lägenhet i Stockholm.',
            fa: 'نام من آلکس است و در یک آپارتمان کوچک در استکهلم زندگی می‌کنم.',
          },
        ],
      },
    ],
  },
]
