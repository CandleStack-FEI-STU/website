import { getEntry } from 'astro:content';

// Each of these collections holds exactly one file: content/site.md, content/status.md, content/team.md.

export async function getSite() {
  const entry = await getEntry('site', 'site');
  if (!entry) throw new Error('content/site.md is missing');
  return entry.data;
}

export async function getStatus() {
  const entry = await getEntry('status', 'status');
  if (!entry) throw new Error('content/status.md is missing');
  return entry.data;
}

export async function getTeam() {
  const entry = await getEntry('team', 'team');
  if (!entry) throw new Error('content/team.md is missing');
  return entry.data;
}
