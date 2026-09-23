// Prefix internal links with the configured base path (needed once the site is served from a subpath).
export function url(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
