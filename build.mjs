// Wraps src/page.html (page content only) in a full HTML document at site/index.html for static hosting.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const page = readFileSync(new URL("./src/page.html", import.meta.url), "utf8");
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>[hidden]{display:none!important}body{margin:0}img{max-width:100%}</style>
</head>
<body>
${page}
</body>
</html>
`;
mkdirSync(new URL("./site/", import.meta.url), { recursive: true });
writeFileSync(new URL("./site/index.html", import.meta.url), html);
console.log("wrote site/index.html");
