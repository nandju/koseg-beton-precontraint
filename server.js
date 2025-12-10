const path = require('path');
const fs = require('fs');
const { createServer } = require('http');
const { parse } = require('url');

const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = process.env.PORT || 3000;

// Check if we're in standalone mode
const standaloneServerPath = path.join(__dirname, '.next', 'standalone', 'server.js');
const standalonePackagePath = path.join(__dirname, '.next', 'standalone', 'package.json');

let handleRequest;

if (fs.existsSync(standaloneServerPath) && fs.existsSync(standalonePackagePath)) {
  // Standalone mode: use the built-in server
  const standaloneDir = path.join(__dirname, '.next', 'standalone');
  process.chdir(standaloneDir);
  
  // Load the standalone server
  const standaloneServer = require(path.join(standaloneDir, 'server.js'));
  
  // The standalone server exports a handler function
  if (typeof standaloneServer === 'function') {
    handleRequest = standaloneServer;
  } else if (standaloneServer.default) {
    handleRequest = standaloneServer.default;
  } else {
    // Fallback: create our own server using next
    const next = require('next');
    const app = next({ dev: false, hostname, port });
    handleRequest = app.getRequestHandler();
    app.prepare();
  }
} else {
  // Development mode: use next directly
  const next = require('next');
  const app = next({ dev: process.env.NODE_ENV !== 'production', hostname, port });
  handleRequest = app.getRequestHandler();
  app.prepare();
}

// Watch for restart.txt file changes
const restartFilePath = path.join(__dirname, 'restart.txt');
let restartWatcher = null;

function setupRestartWatcher() {
  if (fs.existsSync(restartFilePath)) {
    try {
      if (restartWatcher) {
        fs.unwatchFile(restartFilePath);
      }
      
      restartWatcher = fs.watchFile(restartFilePath, { interval: 1000 }, (curr, prev) => {
        if (curr.mtimeMs !== prev.mtimeMs) {
          console.log('Restart file changed, restarting server...');
          process.exit(0);
        }
      });
    } catch (err) {
      console.error('Error setting up restart watcher:', err);
    }
  }
}

// Create HTTP server
const server = createServer(async (req, res) => {
  try {
    const parsedUrl = parse(req.url, true);
    await handleRequest(req, res, parsedUrl);
  } catch (err) {
    console.error('Error occurred handling', req.url, err);
    res.statusCode = 500;
    res.end('internal server error');
  }
});

server.listen(port, hostname, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
  console.log(`> Ready on http://${hostname}:${port}`);
  setupRestartWatcher();
});
