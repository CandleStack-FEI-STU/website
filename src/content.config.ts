import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per meeting in src/content/meetings. Files starting with "_" are ignored.
const meetings = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/meetings' }),
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

export const collections = { meetings };
