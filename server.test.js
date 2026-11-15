// Run with: node --test server.test.js
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const server = require('./server');

before(() => new Promise(resolve => server.listen(0, '127.0.0.1', resolve)));
after(() => new Promise(resolve => server.close(resolve)));
function request(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request({ hostname: '127.0.0.1', port: server.address().port, path: url, ...options }, res => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks) }));
      res.on('error', reject);
    });
    req.on('error', reject);
    req.end();
  });
}

test('serves entry page and correct asset types, including HEAD', async () => {
  const home = await request('/?v=deploy');
  assert.equal(home.status, 200);
  assert.match(home.body.toString(), /Elevating Thai/);
  assert.match(home.headers['content-type'], /text\/html/);
  assert.equal((await request('/assets/brands/kkday.svg')).headers['content-type'], 'image/svg+xml');
  const head = await request('/assets/videos/novatrip.mp4', { method: 'HEAD' });
  assert.equal(head.status, 200);
  assert.equal(head.headers['content-type'], 'video/mp4');
  assert.equal(head.body.length, 0);
  assert.equal(Number(head.headers['content-length']), fs.statSync(path.join(__dirname, 'assets/videos/novatrip.mp4')).size);
});

test('video byte ranges support seeking, suffixes and invalid ranges', async () => {
  const url = '/assets/videos/novatrip.mp4';
  const source = fs.readFileSync(path.join(__dirname, url));
  for (const [range, expected] of [['bytes=0-15', source.subarray(0, 16)], ['bytes=-32', source.subarray(-32)], [`bytes=${source.length - 20}-`, source.subarray(-20)]]) {
    const response = await request(url, { headers: { Range: range } });
    assert.equal(response.status, 206);
    assert.deepEqual(response.body, expected);
    assert.equal(Number(response.headers['content-length']), expected.length);
  }
  for (const range of ['bytes=999999999-', 'bytes=20-10', 'bytes=-0', 'bytes=-', 'bytes=0-2,5-7']) {
    assert.equal((await request(url, { headers: { Range: range } })).status, 416);
  }
});

test('does not expose source, dotfiles or traversal paths', async () => {
  for (const url of ['/server.js', '/README.md', '/.git/config', '/assets/../server.js', '/assets/%2e%2e/server.js', '/assets/%5c..%5cserver.js', '/assets/%00.png', '/assets/supplied-assets.json', '/not-found']) {
    assert.equal((await request(url)).status, 404, url);
  }
  assert.equal((await request('/assets/%zz')).status, 400);
  assert.equal((await request('/', { method: 'POST' })).status, 405);
});
