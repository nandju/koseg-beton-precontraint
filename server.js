const path = require('path');
const fs = require('fs');
const { createServer } = require('http');
const { parse } = require('url');

const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = process.env.PORT || 3000;

// Check for standalone server.js (from Next.js standalone build)
const standaloneServerPath = path.join(__dirname, 'server.js');
const standaloneAppPath = path.join(__dirname, '.next', 'server', 'app.js');

let handleRequest;
let app;

async function initializeServer() {
  // Try to use Next.js directly (for standalone mode, the server.js is already the Next.js server)
  try {
    const next = require('next');
    const isDev = process.env.NODE_ENV !== 'production';
    
    // Check if .next directory exists
    if (fs.existsSync(path.join(__dirname, '.next'))) {
      app = next({ 
        dev: isDev, 
        hostname, 
        port,
        dir: __dirname
      });
      handleRequest = app.getRequestHandler();
      await app.prepare();
      return;
    }
  } catch (err) {
    console.error('Error initializing Next.js:', err);
  }
  
  // Fallback: create a simple handler
  handleRequest = async (req, res) => {
    res.statusCode = 500;
    res.end('Next.js application not properly initialized');
  };
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

// Initialize and start server
initializeServer().then(() => {
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
}).catch((err) => {
  console.error('Failed to initialize server:', err);
  process.exit(1);
});
