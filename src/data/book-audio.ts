export type BookTrack = { url: string; label: string; page: number; letter?: "A" | "B" | "C" | "D" };

const TEXT: Record<number, BookTrack[]> = {
  1: [
    { url: "https://media.svenskadagfordag.se/2018/06/01Det_behovs_fler_bostad_s8.mp3", label: "Det behövs fler bostäder s. 8", page: 8 },
    { url: "https://media.svenskadagfordag.se/2018/06/02Jag_fyllde_30_ar_s8.mp3", label: "Jag fyllde 30 år … s. 8", page: 8 },
    { url: "https://media.svenskadagfordag.se/2018/06/03Hur_bor_jag_s12.mp3", label: "Hur bor jag? s. 12", page: 12 },
    { url: "https://media.svenskadagfordag.se/2018/06/04Mitt_namn_ar_Alex_s13.mp3", label: "Mitt namn är Alex … s. 13", page: 13 },
    { url: "https://media.svenskadagfordag.se/2018/06/05Birgitta_och_Bertil_har_s13.mp3", label: "Birgitta och Bertil har varit gifta … s. 13", page: 13 },
  ],
  2: [
    { url: "https://media.svenskadagfordag.se/2018/06/09Var_halsa_ar_vart_eget_s30.mp3", label: "Vår hälsa är vårt eget ansvar s. 30", page: 30 },
    { url: "https://media.svenskadagfordag.se/2018/06/10Manniskan_behover_rora_s30.mp3", label: "Människan behöver röra på sig … s. 30", page: 30 },
  ],
};

export function readingTracks(weekN: number, dayId: string) {
  return TEXT[weekN] ?? [];
}

export function fridayTracks(weekN: number) {
  return TEXT[weekN] ?? [];
}
