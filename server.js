const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { pipeline } = require('node:stream');

const root = fs.realpathSync(__dirname);
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.mp4': 'video/mp4', '.woff2': 'font/woff2', '.ttf': 'font/ttf'
};

const server = http.createServer(async (req, res) => {
  const finish = (code, headers = {}) => { res.writeHead(code, headers); res.end(); };
  if (!['GET', 'HEAD'].includes(req.method)) return finish(405, { Allow: 'GET, HEAD' });
  let pathname;
  try { pathname = decodeURIComponent(req.url.split('?')[0]); }
  catch { return finish(400); }
  if (pathname.includes('\\') || pathname.includes('\0') || pathname.split('/').some(part => part.startsWith('.'))) return finish(404);
  if (pathname === '/') pathname = '/index.html';
  // ponytail: This is a static site, so expose only its three entry files and typed assets.
  if (!['/index.html', '/styles.css', '/script.js'].includes(pathname) && !pathname.startsWith('/assets/')) return finish(404);
  const type = types[path.extname(pathname).toLowerCase()];
  if (!type) return finish(404);
  let filename, stat;
  try {
    filename = await fs.promises.realpath(path.join(root, pathname));
    if (!filename.startsWith(root + path.sep)) return finish(404);
    stat = await fs.promises.stat(filename);
    if (!stat.isFile()) return finish(404);
  } catch { return finish(404); }

  const headers = {
    'Content-Type': type, 'X-Content-Type-Options': 'nosniff',
    'Accept-Ranges': 'bytes', 'Cache-Control': 'no-cache'
  };
  let start = 0, end = stat.size - 1, status = 200;
  if (req.method === 'GET' && req.headers.range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
    if (!match || (!match[1] && !match[2])) return finish(416, { 'Content-Range': `bytes */${stat.size}` });
    if (!match[1]) start = Math.max(0, stat.size - Number(match[2]));
    else {
      start = Number(match[1]);
      if (match[2]) end = Math.min(Number(match[2]), end);
    }
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= stat.size) return finish(416, { 'Content-Range': `bytes */${stat.size}` });
    status = 206;
    headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
  }
  headers['Content-Length'] = Math.max(0, end - start + 1);
  res.writeHead(status, headers);
  if (req.method === 'HEAD' || !stat.size) return res.end();
  pipeline(fs.createReadStream(filename, { start, end }), res, () => {});
});

if (require.main === module) {
  const port = Number(process.env.PORT || 3003);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be between 1 and 65535');
  server.on('error', error => { console.error(error.message); process.exitCode = 1; });
  server.listen(port, () => console.log(`Northern All Star listening on port ${port}`));
}

module.exports = server;
