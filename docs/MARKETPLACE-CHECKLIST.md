# Marketplace Checklist

Use this checklist before submitting SkillFM Beacon to MCP registries, agent directories, or developer tool marketplaces.

## Public Identity

- Name: `SkillFM Beacon`
- MCP name: `io.github.ericm1018/skillfm-ai-health-token-usage-byok-cost-cleanup`
- npm package: `@skillfm/mcp`
- Repository: `https://github.com/ericm1018/skillfm-mcp`
- Website: `https://skillfm.ai`

## One-Liner

AI health checkups, token usage, LLM cost optimization, BYOK monitoring, and read-only cleanup audits for MCP-capable agents.

## Install

```bash
npx -y @skillfm/mcp@latest
```

Explicit MCP stdio form:

```bash
npx -y @skillfm/mcp@latest mcp
```

MCP client config:

```json
{
  "mcpServers": {
    "skillfm": {
      "command": "npx",
      "args": ["-y", "@skillfm/mcp@latest"]
    }
  }
}
```

## Keywords

`mcp`, `model-context-protocol`, `AI health checkup`, `token usage`, `LLM spend`, `AI cost optimizer`, `BYOK`, `local vault`, `agent monitoring`, `slow agent cleanup`, `context cleanup`, `Claude Code`, `Cursor`, `Cline`, `Claude Desktop`, `VS Code Copilot`, `OpenAI usage`, `Anthropic usage`, `DeepSeek usage`, `Qwen usage`

## Do Not Claim

- guaranteed income
- passive income
- automated income
- access to private provider billing without user authorization
- access to raw provider API keys through agents
- deletion or cleanup without explicit user action

## Registration Order

1. Publish `@skillfm/mcp` to npm with public access.
2. Make this GitHub repository public.
3. Submit `server.json` to the Official MCP Registry.
4. Verify registry search for `token usage`, `AI cost optimizer`, `AI health`, `BYOK`, and `agent cleanup`.
5. Submit to Cline, Glama, Smithery, and long-tail MCP directories.
6. Add live listing URLs back to the README or website docs.

## Local Checks

```bash
npm run smoke
npm pack --dry-run --json
node -e "const pkg=require('./package.json'); const srv=require('./server.json'); if (pkg.mcpName !== srv.name) throw new Error('mcpName mismatch'); if (pkg.name !== srv.packages[0].identifier) throw new Error('package mismatch'); if (pkg.version !== srv.version || pkg.version !== srv.packages[0].version) throw new Error('version mismatch'); console.log('metadata ok')"
```
