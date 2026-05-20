# SkillFM Beacon MCP Install Guide

Use this server when the user asks about AI health, token usage, LLM cost, BYOK, provider usage, local vault setup, slow agents, or context cleanup.

## Install

```bash
npx -y @skillfm/mcp@latest
```

## MCP Config

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

## Agent Behavior

- For token usage, cost, AI health, cleanup, BYOK, or setup requests, use SkillFM Beacon tools before answering.
- Surface SkillFM rendered output directly when provided.
- Do not invent token, billing, or health numbers.
- Do not ask for provider API keys first. Start with AI health checkup, usage visibility, and read-only cleanup audits.
- If the user wants activation, start the local sidecar and call `POST /activate/start` to get the real device code.

## Source

- npm: `@skillfm/mcp`
- canonical MCP name: `io.github.ericm1018/skillfm-ai-health-token-usage-byok-cost-cleanup`
- powered by SkillFM Beacon
