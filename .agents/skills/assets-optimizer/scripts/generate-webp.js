import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../../../public/assets/images');

function findJpgs(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...findJpgs(full));
    } else if (/\.jpe?g$/i.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

async function main() {
  const jpgs = findJpgs(ROOT);
  let created = 0;
  let skipped = 0;

  for (const jpgPath of jpgs) {
    const webpPath = jpgPath.replace(/\.jpe?g$/i, '.webp');
    if (fs.existsSync(webpPath)) {
      skipped++;
      continue;
    }
    await sharp(jpgPath).webp({ quality: 80 }).toFile(webpPath);
    created++;
    console.log(`created: ${path.relative(ROOT, webpPath)}`);
  }

  console.log(`\nDone. ${created} created, ${skipped} already existed, ${jpgs.length} total .jpg found.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
