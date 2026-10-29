export type Origin = "book" | "app";

export type QItem = {
  q: string;
  fa?: string;
  options?: string[];
  answer?: string;
  accept?: string[];
  model?: string;
  modelFa?: string;
  why?: string;
};

export type DialogueTurn = { who: "A" | "B"; sv: string; fa: string };

export type Block =
  | { id: string; type: "note"; origin: Origin; fa: string; sv: string; en: string }
  | {
      id: string;
      type: "reading";
      origin: Origin;
      title?: string;
      kicker?: string;
      paragraphs: { sv: string; fa?: string; en?: string }[];
    }
  | { id: string; type: "vocab"; origin: Origin; wordIds: string[] }
  | { id: string; type: "questions"; origin: Origin; title: string; prompt?: string; items: QItem[] }
  | {
      id: string;
      type: "grammar";
      origin: Origin;
      title: string;
      fa: string;
      en: string;
      table?: { headers: string[]; rows: string[][] };
      examples?: { sv: string; fa: string; en?: string }[];
    }
  | { id: string; type: "cloze"; origin: Origin; title: string; prompt?: string; source: string }
  | { id: string; type: "listen"; origin: Origin; title: string; prompt?: string; audio: string; dictation?: boolean; items: QItem[] }
  | {
      id: string;
      type: "match";
      origin: Origin;
      title: string;
      prompt?: string;
      pairs: { left: string; right: string }[];
      extras: string[];
    }
  | {
      id: string;
      type: "speak";
      origin: Origin;
      title: string;
      prompt: string;
      fa?: string;
      lines: string[];
      turns?: DialogueTurn[];
      center?: string;
      nodes?: string[];
    }
  | {
      id: string;
      type: "write";
      origin: Origin;
      title: string;
      task: string;
      fa: string;
      steps: { sv: string; fa: string }[];
      phrases: string[];
      model: string;
      modelFa: string;
      modelEn: string;
    }
  | { id: string; type: "missing" };

export type Day = {
  id: "mon" | "tue" | "wed" | "thu" | "fri";
  sv: string;
  fa: string;
  en: string;
  focus: string;
  page?: number;
  status: "entered" | "partial" | "missing";
  blocks: Block[];
};

export type Week = {
  id: string;
  n: number;
  theme: { sv: string; fa: string; en: string };
  grammar: { sv: string; fa: string; en: string };
  page: number;
  days: Day[];
};

export const DAY_ORDER: Day["id"][] = ["mon", "tue", "wed", "thu", "fri"];
