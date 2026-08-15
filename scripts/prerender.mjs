import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { createServer } from "vite";

const root = process.cwd();
const distIndex = path.join(root, "dist", "index.html");

async function buildAssetMap() {
  const srcDir = path.join(root, "src", "assets");
  const distAssetsDir = path.join(root, "dist", "assets");

  let srcFiles = [];
  try {
    srcFiles = await readdir(srcDir);
  } catch {
    return new Map();
  }

  const distFiles = await readdir(distAssetsDir);
  const map = new Map();

  for (const file of srcFiles) {
    const ext = path.extname(file);
    const stem = path.basename(file, ext);
    const hashed = distFiles.find(
      (f) => f.startsWith(`${stem}-`) && f.endsWith(ext),
    );
    if (hashed) map.set(`/src/assets/${file}`, `./assets/${hashed}`);
  }

  return map;
}

const server = await createServer({
  root,
  logLevel: "error",
  appType: "custom",
  server: { middlewareMode: true },
});

try {
  const { render } = await server.ssrLoadModule("/src/entry-server.tsx");
  const appHtml = await render();
  const template = await readFile(distIndex, "utf-8");

  const marker = '<div id="root"></div>';
  if (!template.includes(marker)) {
    throw new Error(`Prerender marker not found in ${distIndex}`);
  }

  let html = template.replace(marker, `<div id="root">${appHtml}</div>`);

  const assetMap = await buildAssetMap();
  for (const [from, to] of assetMap) {
    html = html.replaceAll(from, to);
  }

  // CORS-mode fetches fail over file:// — emit a plain stylesheet link so the
  // prerendered page stays fully styled when opened directly from disk.
  html = html.replace(
    /<link rel="stylesheet" crossorigin /g,
    '<link rel="stylesheet" ',
  );

  await writeFile(distIndex, html);
  console.log(
    `prerendered dist/index.html (${appHtml.length} chars of markup, ${assetMap.size} asset url(s) rewritten)`,
  );
} finally {
  await server.close();
}
