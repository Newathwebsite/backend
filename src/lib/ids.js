// Same shape as the frontend's lib/storage.js `uid`/`slugify` — kept
// consistent so IDs generated server-side look identical to the ones the
// old client-only version produced.
export function uid(prefix = 'id') {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
}

export function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
