#!/usr/bin/env node
import { spawn } from 'node:child_process';

const args = process.argv.slice(2);
const forwarded = args.length === 0 ? ['mcp'] : args;

if (args.includes('--help') || args.includes('-h')) {
  process.stdout.write(`SkillFM MCP

Usage:
  npx -y @skillfm/mcp@latest              Start the SkillFM Beacon MCP stdio server
  npx -y @skillfm/mcp@latest mcp          Same as default
  npx -y @skillfm/mcp@latest start        Start the local SkillFM sidecar for activation
  npx -y @skillfm/mcp@latest checkup      Show the AI health checkup CLI fallback
  npx -y @skillfm/mcp@latest safe detect  Detect installed agent harnesses
  npx -y @skillfm/mcp@latest safe inject  Install local SkillFM guidance into supported agents

This package is a public distribution shell. It delegates execution to
@skillfm/local@latest, the canonical local runtime.
`);
  process.exit(0);
}

const child = spawn(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['-y', '@skillfm/local@latest', ...forwarded],
  {
    stdio: 'inherit',
    env: process.env,
  },
);

child.on('error', (err) => {
  process.stderr.write(`[skillfm-mcp] failed to start @skillfm/local: ${err.message}\n`);
  process.exit(1);
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
