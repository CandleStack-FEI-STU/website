import { getCollection } from 'astro:content';

// The problem types of the API, by status, then by slug.
export async function getProblems() {
  const problems = await getCollection('problems');
  return problems.sort((a, b) => a.data.status - b.data.status || a.id.localeCompare(b.id));
}

// Reason phrases of the statuses the API answers with (RFC 9110, RFC 6585).
const REASONS: Record<number, string> = {
  400: 'Bad Request',
  404: 'Not Found',
  405: 'Method Not Allowed',
  422: 'Unprocessable Content',
  429: 'Too Many Requests',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
};

// "422 Unprocessable Content", or just the number for a status without a phrase here
export function statusLine(status: number) {
  const reason = REASONS[status];
  return reason ? `${status} ${reason}` : String(status);
}

// The problem's `type` URI, the canonical address of its page
export function problemType(slug: string) {
  return `https://candlestack.tech/problems/${slug}`;
}
