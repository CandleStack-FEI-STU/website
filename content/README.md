# Content

All texts of the website live in this folder. No code needs to change to update the site.

| File | What it controls |
|---|---|
| `site.md` | project name, headline, subtitle, GitHub link, intros of the Meetings and Problem types pages |
| `status.md` | Status page and the status block on the home page |
| `team.md` | Team page and the team block on the home page |
| `links.md` | Links section at the bottom of the home page |
| `meetings/` | one file per meeting, named by date: `2026-09-23.md` |
| `templates/meeting.md` | template for new meeting minutes |
| `problems/` | one file per error type of the CandleStack API, named by its slug: `rate-limited.md` |

## Add meeting minutes

1. Copy `templates/meeting.md` to `meetings/YYYY-MM-DD.md`.
2. Fill it in, following the comments in the template.
3. Open a pull request.

The meeting appears in the list and gets its own page. With `draft: true` it is visible
only in `npm run dev`.

## Add a problem type

The API's error responses link to `https://candlestack.tech/problems/<slug>`. When the API gets a
new slug, add `problems/<slug>.md` with the exact slug as the file name, and fill in `title` (the
exact title the API sends), `status`, `summary`, `when` and `todo`, plus `fields` for the extra
members and headers of the response. Copy an existing file as a start. The page appears at
`/problems/<slug>/` and in the list at `/problems/`.

## Rules

- Everything is inside the block between the two `---` lines, one `field: value` per line.
- Lists start with `- `, nested fields are indented with two spaces.
- Put text with a colon in quotes: `'Project: goals and scope'`.
- A mistake does not break the live site: the build fails and names the file and the field.
