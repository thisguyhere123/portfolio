// Wraps src/page.html (page content only) in a full HTML document at ./index.html, copies src/img to ./img,
// and writes .nojekyll, so GitHub Pages serves the repo root as-is.
import { cpSync, readFileSync, writeFileSync } from "node:fs";

const SITE_URL = "https://thisguyhere123.github.io/portfolio/";
const page = readFileSync(new URL("./src/page.html", import.meta.url), "utf8");
const description = page.match(/<meta name="description" content="([^"]*)"/)[1];
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<link rel="canonical" href="${SITE_URL}">
<meta property="og:type" content="website">
<meta property="og:title" content="Eben Butts · AI & Security">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${SITE_URL}">
<style>[hidden]{display:none!important}body{margin:0}img{max-width:100%}</style>
</head>
<body>
${page}
</body>
</html>
`;
writeFileSync(new URL("./index.html", import.meta.url), html);
cpSync(new URL("./src/img/", import.meta.url), new URL("./img/", import.meta.url), { recursive: true });
writeFileSync(new URL("./.nojekyll", import.meta.url), "");
console.log("wrote index.html, img/, .nojekyll");
