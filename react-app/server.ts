import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const html = fs.readFileSync(path.resolve(__dirname, './index.html')).toString();
  const parts = html.split('<!--ssr-->');
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const { render } = await vite.ssrLoadModule('./src/server_entry.tsx');
    res.write(parts[0]);
    const { pipe } = await render(req.url, {
      onShellReady() {
        pipe(res);
      },
      onShellError() {
        // error handling
      },
      onAllReady() {
        res.write(parts[1]);
        res.end();
      },
      onError(err) {
        console.error(err);
      },
    });
  });

  app.listen(5173);
}

console.log(`listening on http://localhost:5173`);
createServer();
