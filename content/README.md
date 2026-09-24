# Content

All texts of the website live in this folder. No code needs to change to update the site.

| File | What it controls |
|---|---|
| `site.md` | project name, headline, subtitle, GitHub link, intro of the Meetings page |
| `status.md` | Status page and the status block on the home page |
| `team.md` | Team page and the team block on the home page |
| `links.md` | Links section at the bottom of the home page |
| `meetings/` | one file per meeting, named by date: `2026-09-23.md` |
| `templates/meeting.md` | template for new meeting minutes |

## Add meeting minutes

1. Copy `templates/meeting.md` to `meetings/YYYY-MM-DD.md`.
2. Fill it in, following the comments in the template.
3. Open a pull request.

The meeting appears in the list and gets its own page. With `draft: true` it is visible
only in `npm run dev`.

## Rules

- Everything is inside the block between the two `---` lines, one `field: value` per line.
- Lists start with `- `, nested fields are indented with two spaces.
- Put text with a colon in quotes: `'Project: goals and scope'`.
- A mistake does not break the live site: the build fails and names the file and the field.
