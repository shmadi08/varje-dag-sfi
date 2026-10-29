export function speak(text: string, rate = 0.9) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'sv-SE';
  u.rate = rate;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

export function stopSpeak() {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}
