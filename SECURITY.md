# Security

## Supported Surface

This repository is a public distribution shell for SkillFM Beacon MCP. The supported public surface is:

- `package.json`
- `server.json`
- `bin/skillfm-mcp.js`
- public README and docs

The launcher delegates execution to the published `@skillfm/local` package.

## Reporting

Please report suspected security issues through GitHub's private vulnerability reporting flow for this repository once the repository is public.

Do not file public issues that contain credentials, tokens, private logs, customer data, or exploit details.

## Pre-Publication Checklist

Before making this repository public or publishing a new npm version:

```bash
git status --short
git grep -n -i -E 'AKIA|AIza|sk-[A-Za-z0-9]{20,}|xox[baprs]-|ghp_|github_pat_|-----BEGIN|password|secret|bearer|api[_ -]?key|cookie|private[_ -]?key|DATABASE_URL|REDIS_URL|JWT|SESSION_SECRET|OPENAI_API_KEY|ANTHROPIC_API_KEY|DEEPSEEK_API_KEY|QWEN_API_KEY|zhaoyun|coco|openclaw|tailscale|sshpass|43\\.162|127\\.0\\.0\\.1:[0-9]{4,5}' $(git rev-list --all) -- . || true
rg -n -i -e 'AKIA|AIza|sk-[A-Za-z0-9]{20,}|xox[baprs]-|ghp_|github_pat_|-----BEGIN|password|secret|bearer|api[_ -]?key|cookie|private[_ -]?key|DATABASE_URL|REDIS_URL|JWT|SESSION_SECRET|OPENAI_API_KEY|ANTHROPIC_API_KEY|DEEPSEEK_API_KEY|QWEN_API_KEY|zhaoyun|coco|openclaw|tailscale|sshpass|43\\.162|127\\.0\\.0\\.1:[0-9]{4,5}' . || true
npm run smoke
npm pack --dry-run
```

Expected findings should be limited to public documentation references such as "BYOK", "token usage", and checklist text.
