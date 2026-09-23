# CandleStack website

Project website of CandleStack, a team project at STU FEI: project status, meeting minutes and team.
Built with [Astro](https://astro.build) as a static site.

## Run locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321. Pages reload on every change.

| Command | What it does |
|---|---|
| `npm run dev` | local development server |
| `npm run build` | builds the static site into `dist/` |
| `npm run preview` | serves the built site |
| `npm run check` | type-checks the code and validates the content |

## Editing content

All texts live in [`content/`](content/). To update the site you only edit Markdown files there,
never the code. See [`content/README.md`](content/README.md) for the rules.

| File | What it controls |
|---|---|
| `content/site.md` | project name, headline, subtitle, GitHub link, intro of the Meetings page |
| `content/status.md` | Status page and the status block on the home page |
| `content/team.md` | Team page and the team block on the home page |
| `content/meetings/YYYY-MM-DD.md` | one file per meeting |
| `content/templates/meeting.md` | template for new meeting minutes |

### Add meeting minutes

1. Copy `content/templates/meeting.md` to `content/meetings/YYYY-MM-DD.md`.
2. Fill it in, following the comments in the template.
3. Open a pull request.

The meeting appears in the list and gets its own page at `/meetings/YYYY-MM-DD/`.
With `draft: true` it is visible only in `npm run dev`.

### Update status or team

Edit `content/status.md` or `content/team.md`. In `status.md`, also change `updated` to today's date.

Every content file is validated at build time. A missing field or a typo fails the build
with the file and field named, so a mistake never reaches the live site.

## Project structure

```
content/                 texts: site, status, team, meetings, templates
public/                  static files (favicon)
src/
  content.config.ts      schemas that validate everything in content/
  pages/                 one file per page; meetings/[slug].astro renders each meeting
  layouts/Base.astro     page shell: header, navigation, theme
  components/            background, theme toggle, section heading
  lib/                   content loaders, date format, base-path links, background generator
  styles/global.css      colors for the light and dark theme, shared styles
```

## Theme

Light and dark theme. The first visit follows the system setting, the toggle in the header
overrides it and the choice is remembered in the browser.
