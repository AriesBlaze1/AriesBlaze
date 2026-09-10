import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
const source = process.argv[2];
if (!source)
  throw new Error(
    'Pass the directory containing the supplied project screenshots.',
  );
await mkdir('public/projects', { recursive: true });
const images = [
  [path.join(source, '127.0.0.1_2026-07-23_12-18-23.png'), 'arcnotes'],
  [path.join(source, '127.0.0.1_2026-08-08_11-20-35.png'), 'fromus'],
  [
    path.join(source, 'billwise.pxxl.click_2026-07-15_22-46-16.png'),
    'billwise',
  ],
  [
    path.join(source, 'conventus.pxxl.click_2026-07-22_11-32-06.png'),
    'conventus',
  ],
  [
    path.join(source, 'markprint.pxxl.click_2026-08-03_19-25-25.png'),
    'markprint',
  ],
];
for (const [input, name] of images) {
  await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 86 })
    .toFile(`public/projects/${name}.webp`);
  console.log(`Prepared ${name}`);
}
