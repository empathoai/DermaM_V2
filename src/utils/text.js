// Treatment / category names are stored UPPERCASE in the data files.
// titleCase() produces a human-readable form for <title>, meta description,
// schema names and image alt text (not prose — acronyms like "HIFU" become
// "Hifu", which is acceptable in these contexts).
export const titleCase = (s = '') =>
  s.toLowerCase().replace(/(^|\s|\/)([a-záéíóúñ])/g, (_, p, c) => p + c.toUpperCase());

// Trim a string to at most `max` characters, cutting at the last word boundary.
export const clampWords = (s = '', max = 155) => {
  const t = s.trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim();
};
