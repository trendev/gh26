// Convertit les PNG sources de gh26-images/ en WebP optimisés dans public/img/.
// Usage : npm run convert-images
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, '../gh26-images');
const OUT = resolve(__dirname, '../public/img');

// Mapping source PNG -> nom WebP final (cf. CLAUDE.md § 3, nodes Figma 35:x)
const images = [
  { src: 'logo-3.png', out: 'logo.webp', maxWidth: 400, quality: 95 },
  { src: 'hero.png', out: 'hero.webp', maxWidth: 1400, quality: 82 },
  { src: 'real1.png', out: 'real1.webp', maxWidth: 900, quality: 82 },
  { src: 'real2.png', out: 'real2.webp', maxWidth: 900, quality: 82 },
  { src: 'real3.png', out: 'real3.webp', maxWidth: 900, quality: 82 },
  { src: 'apropos.png', out: 'apropos.webp', maxWidth: 1200, quality: 82 },
];

await mkdir(OUT, { recursive: true });

for (const { src, out, maxWidth, quality } of images) {
  const inputPath = resolve(SRC, src);
  const outputPath = resolve(OUT, out);

  const image = sharp(inputPath);
  const meta = await image.metadata();

  // On ne redimensionne que vers le bas (pas d'upscaling)
  const targetWidth = meta.width && meta.width > maxWidth ? maxWidth : undefined;

  await (targetWidth
    ? image.resize({ width: targetWidth, withoutEnlargement: true })
    : image
  )
    .webp({ quality, effort: 6 })
    .toFile(outputPath);

  const outMeta = await sharp(outputPath).metadata();
  console.log(
    `${src} (${meta.width}x${meta.height}) -> ${out} (${outMeta.width}x${outMeta.height})`
  );
}

console.log('\nConversion terminée :', OUT);
