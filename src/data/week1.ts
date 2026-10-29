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
            sv: 'De flesta är nog överens om att det råder bostadsbrist i Sveriges storstäder. Det är många som vill bo i storstaden och bostäderna räcker helt enkelt inte till för alla. Många ungdomar bor fortfarande kvar hos sina föräldrar och det är heller inte ovanligt att vara inneboende hos en kompis eller någon främmande person. Byggföretagen bygger nya bostäder överallt, men ett problem verkar vara att byggandet inte går i takt med befolkningsökningen i städerna. Ett annat problem är att nyproducerade bostäder är dyra. Både priset på själva bostaden och boendekostnaderna är höga. De höga kostnaderna leder ofta till att fattiga ungdomar, studenter eller arbetslösa inte har råd att köpa sin egen bostad. Bostadsbristen är som allra störst och mest påtaglig i innerstaden. Det är inte så konstigt, eftersom många av förklarliga skäl söker sig just dit. De flesta tycker att det är mer attraktivt att bo centralt än i förorterna, och möjligheterna att få jobb i innerstaden är dessutom större. Här kan du läsa om 30-årige Johan, som fortfarande bor hemma hos sina föräldrar.',
            fa: 'احتمالاً بیشتر مردم موافق‌اند که در شهرهای بزرگ سوئد کمبود مسکن وجود دارد. خیلی‌ها می‌خواهند در شهر بزرگ زندگی کنند و خانه‌ها برای همه کافی نیست. بسیاری از جوانان هنوز پیش والدینشان مانده‌اند و غیرعادی هم نیست که کسی پیش دوست یا یک غریبه به‌عنوان ساکن اتاق زندگی کند. شرکت‌های ساختمانی همه‌جا خانهٔ نو می‌سازند، اما به نظر می‌رسد ساخت‌وساز با افزایش جمعیت شهرها هم‌گام نیست. مشکل دیگر این است که خانه‌های نوساز گران‌اند. هم قیمت خود خانه و هم هزینه‌های زندگی در آن بالا است. این هزینه‌ها اغلب باعث می‌شود جوانان کم‌درآمد، دانشجویان یا بیکاران توان خرید خانهٔ خودشان را نداشته باشند. کمبود مسکن در مرکز شهر بیشترین و ملموس‌تر است. عجیب نیست، چون بسیاری به دلایل موجه همان جا می‌روند. اکثر مردم مرکز را از حومه جذاب‌تر می‌دانند و امکان پیدا کردن کار در مرکز هم بیشتر است. اینجا می‌توانید دربارهٔ یوهان ۳۰ساله بخوانید که هنوز پیش والدینش زندگی می‌کند.',
          },
        ],
      },
      {
        id: 'w1m-vocab',
        type: 'vocab',
        origin: 'book',
        wordIds: ['bostad', 'hyra', 'inneboende', 'trangbodd', 'forort'],
      },
      {
        id: 'w1m-q',
        type: 'questions',
        origin: 'book',
        title: 'Läsförståelse',
        prompt: 'Svara på frågorna.',
        items: [
          {
            q: 'Varför är det svårt att hitta lediga bostäder i storstäderna?',
            fa: 'چرا پیدا کردن خانهٔ خالی در شهرهای بزرگ سخت است؟',
            model: 'Många vill bo där, och byggandet går inte i takt med befolkningsökningen.',
            modelFa: 'خیلی‌ها می‌خواهند آنجا زندگی کنند و ساخت‌وساز با افزایش جمعیت هم‌گام نیست.',
          },
          {
            q: 'Hur kan man se att det råder bostadsbrist i storstäderna?',
            fa: 'از کجا معلوم است که در شهرهای بزرگ کمبود مسکن هست؟',
            model: 'Många ungdomar bor kvar hos sina föräldrar eller är inneboende hos någon annan.',
            modelFa: 'بسیاری از جوانان هنوز پیش والدین‌اند یا در خانهٔ دیگری اتاق دارند.',
          },
        ],
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
            sv: 'Mitt namn är Alex och jag bor i en liten lägenhet i Stockholm. Jag har en kompis som heter Kim. Kim och hans flickvän vill gärna bo i en villa.',
            fa: 'نام من آلکس است و در یک آپارتمان کوچک در استکهلم زندگی می‌کنم. یک دوست به نام کیم دارم. کیم و دوست‌دخترش می‌خواهند در ویلا زندگی کنند.',
          },
        ],
      },
    ],
  },
]
