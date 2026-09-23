# Candlestack website

Project website with status, meeting minutes and team. Built with [Astro](https://astro.build).

## Run locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321. Pages reload on every change.

`npm run build` builds the static site into `dist/`, `npm run preview` serves that build.

## Add meeting minutes

1. Copy `src/content/meetings/_template.md` to `src/content/meetings/YYYY-MM-DD.md`.
2. Fill in the fields. The build fails with a clear message if a required field is missing.
3. Open a pull request.

The meeting appears in the list and gets its own page automatically.
Set `draft: true` to see it in `npm run dev` without publishing it.

## Update status or team

Edit `src/data/site.ts`.

## Structure

| Path | Content |
|---|---|
| `src/pages/` | one file per page |
| `src/content/meetings/` | meeting minutes, one Markdown file each |
| `src/data/site.ts` | project info, status, team |
| `src/lib/decor.ts` | decorative background, generated at build time |
| `src/styles/global.css` | colors for light and dark theme, shared styles |
