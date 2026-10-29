# Varje dag

Personal Swedish study companion for SFI Kurs D based on *Svenska dag för dag*.

This is the exact app from the original project (React + Vite + TanStack Router).

## Automatic deploy on GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy.yml`) is included.

### One-time setup (in this repo)
1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Save

After that, every push to `main` automatically builds and deploys.

Live site (after first successful deploy):  
https://shmadi08.github.io/varje-dag-sfi/

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:8080

## Features
- Exact structure from the source
- Real book audio from media.svenskadagfordag.se
- Week → Day lessons with book/learn/test modes
- Clickable words with FA/EN gloss
- Dual profiles, progress, vocabulary, practice
