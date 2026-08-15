import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const W = 1200;
const H = 630;
const IMG_W = 400;
const IMG_H = 500;
const IMG_X = 740;
const IMG_Y = 65;

const gridLines = [];
for (let x = 0; x <= W; x += 76) {
  gridLines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>`);
}
for (let y = 0; y <= H; y += 76) {
  gridLines.push(`<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>`);
}

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#09090c"/>
  ${gridLines.join("")}

  <rect x="0" y="0" width="6" height="${H}" fill="#c9f556"/>

  <text x="80" y="140" font-family="DejaVu Sans" font-size="24" letter-spacing="8" fill="#c9f556">FRONTEND DEVELOPER</text>
  <line x1="80" y1="168" x2="200" y2="168" stroke="#c9f556" stroke-width="2" opacity="0.6"/>

  <text x="76" y="290" font-family="DejaVu Sans" font-weight="bold" font-size="104" fill="#fafafa">Al Amin</text>
  <text x="76" y="400" font-family="DejaVu Sans" font-weight="bold" font-size="104" fill="#fafafa">Hossain</text>

  <text x="80" y="462" font-family="DejaVu Sans" font-size="29" fill="#a1a1aa">React · Next.js · TypeScript</text>
  <text x="80" y="502" font-family="DejaVu Sans" font-size="29" fill="#a1a1aa">Vue · Nuxt · Tailwind CSS</text>

  <rect x="80" y="556" width="34" height="6" fill="#c9f556" opacity="0.85"/>
  <text x="130" y="566" font-family="DejaVu Sans" font-size="25" fill="#7d7d89">4+ years — Enterprise ERP · E-commerce · LMS</text>
  <text x="80" y="608" font-family="DejaVu Sans" font-size="22" letter-spacing="3" fill="#7d7d89">ALAMINDEV.IO</text>

  <rect x="${IMG_X - 22}" y="${IMG_Y + 22}" width="${IMG_W}" height="${IMG_H}" rx="20" fill="none" stroke="#c9f556" stroke-width="2" opacity="0.35"/>
  <rect x="${IMG_X}" y="${IMG_Y}" width="${IMG_W}" height="${IMG_H}" fill="#16161d"/>
</svg>`;

async function main() {
  const hero = await readFile(path.join(root, "src", "assets", "hero-image.jpeg"));

  const portrait = await sharp(hero)
    .resize(IMG_W, IMG_H, { fit: "cover", position: "centre" })
    .composite([
      {
        input: Buffer.from(
          `<svg width="${IMG_W}" height="${IMG_H}"><rect width="${IMG_W}" height="${IMG_H}" rx="20" fill="#fff"/></svg>`,
        ),
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer();

  await sharp(Buffer.from(svg))
    .composite([{ input: portrait, left: IMG_X, top: IMG_Y }])
    .flatten({ background: "#09090c" })
    .jpeg({ quality: 82, progressive: true })
    .toFile(path.join(root, "public", "og-image.jpg"));

  console.log(`generated public/og-image.jpg (${W}x${H})`);
}

await mkdir(path.join(root, "public"), { recursive: true });
await main();
