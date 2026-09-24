import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// All texts live in the top-level content/ folder, see content/README.md.
// The schemas below validate them at build time.

const meetings = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/meetings' }),
  schema: z.object({
    week: z.number().int().positive(),
    date: z.coerce.date(),
    time: z.string().optional(),
    title: z.string(),
    summary: z.string(),
    place: z.string(),
    present: z.array(z.string()),
    absent: z.array(z.string()).default([]),
    notesBy: z.string().optional(),
    agenda: z.array(z.string()),
    decisions: z.array(z.string()).default([]),
    actions: z
      .array(z.object({ task: z.string(), owner: z.string(), due: z.coerce.date().optional() }))
      .default([]),
    next: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: 'site.md', base: './content' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    tagline: z.string(),
    subtitle: z.string(),
    github: z.url(),
    meetingsIntro: z.string(),
  }),
});

const status = defineCollection({
  loader: glob({ pattern: 'status.md', base: './content' }),
  schema: z.object({
    updated: z.coerce.date(),
    phases: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        state: z.enum(['done', 'active', 'planned']),
      }),
    ),
    done: z.array(z.string()).default([]),
    inProgress: z.array(z.string()).default([]),
    planned: z.array(z.string()).default([]),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: 'team.md', base: './content' }),
  schema: z.object({
    supervisor: z.object({ name: z.string(), affiliation: z.string() }),
    members: z.array(
      z.object({
        name: z.string(),
        role: z.string(),
        area: z.string().optional(),
      }),
    ),
  }),
});

const links = defineCollection({
  loader: glob({ pattern: 'links.md', base: './content' }),
  schema: z.object({
    title: z.string(),
    teamNote: z.string(),
    groups: z.array(
      z.object({
        name: z.string(),
        links: z.array(
          z.object({
            name: z.string(),
            detail: z.string(),
            url: z.url(),
            team: z.boolean().default(false),
          }),
        ),
      }),
    ),
  }),
});

export const collections = { meetings, site, status, team, links };
