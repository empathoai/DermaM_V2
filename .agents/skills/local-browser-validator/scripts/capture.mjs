import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

const args = process.argv.slice(2);
const options = {
  url: '',
  output: '',
  width: 1920,
  height: 1080,
  mobile: false,
  browser: 'chrome',
  delay: 3000 // default 3 seconds delay for animations and media loading
};

// Parse CLI arguments
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--url' && args[i + 1]) {
    options.url = args[i + 1];
    i++;
  } else if (args[i] === '--output' && args[i + 1]) {
    options.output = args[i + 1];
    i++;
  } else if (args[i] === '--width' && args[i + 1]) {
    options.width = parseInt(args[i + 1], 10);
    i++;
  } else if (args[i] === '--height' && args[i + 1]) {
    options.height = parseInt(args[i + 1], 10);
    i++;
  } else if (args[i] === '--delay' && args[i + 1]) {
    options.delay = parseInt(args[i + 1], 10);
    i++;
  } else if (args[i] === '--mobile') {
    options.mobile = true;
  } else if (args[i] === '--browser' && args[i + 1]) {
    options.browser = args[i + 1].toLowerCase();
    i++;
  }
}

if (!options.url || !options.output) {
  console.error('Usage: node capture.mjs --url <URL> --output <absolute_path_to_png> [--width <number>] [--height <number>] [--delay <ms>] [--mobile] [--browser <chrome|edge>]');
  process.exit(1);
}

let userAgent = '';
if (options.mobile) {
  options.width = 375;
  options.height = 812;
  userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1';
}

function locateBrowser(browserType) {
  const chromePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  ];
  const edgePaths = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];

  const paths = browserType === 'edge' ? edgePaths : chromePaths;
  for (const p of paths) {
    if (fs.existsSync(p)) return p;
  }
  // Fallback to whichever is available
  for (const p of [...chromePaths, ...edgePaths]) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('No compatible browser executable found.');
}

try {
  const browserPath = locateBrowser(options.browser);
  const execArgs = [
    '--headless=new',
    `--window-size=${options.width},${options.height}`,
    `--screenshot=${options.output}`
  ];
  if (options.delay) {
    execArgs.push(`--virtual-time-budget=${options.delay}`);
  }
  if (userAgent) {
    execArgs.push(`--user-agent=${userAgent}`);
  }
  execArgs.push(options.url);

  console.log(`Executing: "${browserPath}" ${execArgs.join(' ')}`);

  const result = spawnSync(browserPath, execArgs, { encoding: 'utf8' });
  if (result.error) {
    console.error('Execution failed:', result.error);
    process.exit(1);
  }

  // Normalizing paths for existence check
  const normalizedOutput = path.resolve(options.output);

  if (fs.existsSync(normalizedOutput)) {
    const stats = fs.statSync(normalizedOutput);
    console.log(`Screenshot saved successfully: ${normalizedOutput} (${stats.size} bytes)`);
  } else {
    console.error('Error: Output file was not created.');
    if (result.stdout) console.log('Stdout:', result.stdout);
    if (result.stderr) console.error('Stderr:', result.stderr);
    process.exit(1);
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
