# CLAUDE.md

Static project website for CandleStack (STU FEI team project), built with Astro 7.

## Rules

- All texts live in `content/*.md` (YAML frontmatter only). Never hardcode site text in `src/`;
  add a field to the file and its schema in `src/content.config.ts` instead.
- Content is written by non-developers: keep fields flat and obvious, keep `content/templates/meeting.md`
  and `content/README.md` in sync with the schema.
- Do not change existing texts unless asked.
- Internal links go through `url()` from `src/lib/url.ts` so the site works under a base path.
- Colors only through the CSS variables in `src/styles/global.css`; every change must work in both themes.
- Keep the design minimal: one 640px column, no new sections or decorations without being asked.
- Everything in English.
- No AI attribution anywhere: no `Co-Authored-By` AI trailers or session links in commits,
  no "Generated with ..." lines in pull requests, no AI mentions in code or content.

## Verify

```bash
npm run check   # must report 0 errors and 0 warnings
npm run build
```

After changing `src/content.config.ts`, restart the dev server: it does not reload schema changes.
