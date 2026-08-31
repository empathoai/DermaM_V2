// Treatment / category names are stored UPPERCASE in the data files.
// titleCase() produces a human-readable form for <title>, meta description,
// schema names and image alt text. ACRONYMS are restored to their canonical
// uppercase form after the word-capitalization pass (whole-word match only,
// delimited by start / end / whitespace / "/").
const ACRONYMS = ['HIFU', 'IPL', 'PRF', 'PRP', 'IV', 'MS', 'EVEFUS', 'DERMAPEN'];

export const titleCase = (s = '') => {
  const out = s
    .toLowerCase()
    .replace(/(^|\s|\/)([a-záéíóúñ])/g, (_, p, c) => p + c.toUpperCase());
  return out.replace(
    new RegExp(`(^|[\\s/])(${ACRONYMS.join('|')})(?=$|[\\s/])`, 'gi'),
    (_, sep, tok) => sep + tok.toUpperCase()
  );
};

// Trim a string to at most `max` characters, cutting at the last word boundary.
export const clampWords = (s = '', max = 155) => {
  const t = s.trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim();
};
