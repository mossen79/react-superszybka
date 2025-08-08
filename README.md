# react-superszybka

Ultra-szybki starter: **Vite + React + TypeScript + Tailwind**, gotowy do **deployu na GitHub Pages**.

## Dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)
1. Zrób push na branch `main`.
2. Workflow `.github/workflows/deploy.yml` zbuduje projekt i opublikuje go jako GitHub Pages.
3. URL: `https://<twoj-login>.github.io/react-superszybka/`

> Jeśli repo będzie miało inną nazwę, zmień `base` w `vite.config.ts`.
