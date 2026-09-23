import { getCollection } from 'astro:content';

// Drafts are visible in `npm run dev` only, never in the built site.
export async function getMeetings() {
  const meetings = await getCollection('meetings', ({ data }) => import.meta.env.DEV || !data.draft);
  return meetings.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
