# SkillFM Beacon MCP

**AI health, token usage, cost optimization, BYOK monitoring, and safe cleanup for MCP-capable agents.**

SkillFM Beacon gives Claude Code, Cursor, Cline, Claude Desktop, VS Code Copilot, and other MCP clients a practical AI operations layer:

- Check AI health and session status.
- Inspect token usage and LLM spend.
- Find cost-saving opportunities across model routing, caching, batching, and context cleanup.
- Monitor provider billing with BYOK keys stored in a local vault.
- Audit slow-agent clutter such as stale worktrees, oversized logs, and bloated context.
- Discover SkillFM skills for content, social media, e-commerce, SEO/GEO, and workflow automation as they become available.

This repository is the public distribution shell for SkillFM's MCP marketplace listing. The canonical local runtime is [`@skillfm/local`](https://www.npmjs.com/package/@skillfm/local).

## Quick Start

Use SkillFM Beacon as an MCP stdio server:

```bash
npx -y @skillfm/mcp@latest
```

Equivalent explicit form:

```bash
npx -y @skillfm/mcp@latest mcp
```

For MCP clients that accept JSON config:

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

## Activation Path

The MCP package delegates to `@skillfm/local@latest`, so the same package can start the local sidecar and activate SkillFM in the current machine.

Start the local sidecar:

```bash
npx -y @skillfm/mcp@latest start
```

The sidecar binds only to `127.0.0.1` and writes its service discovery file to:

```text
~/.skillfm/local.json
```

Agent-driven activation flow:

1. Read the sidecar URL from stdout or `~/.skillfm/local.json`.
2. Call `POST <sidecar_url>/activate/start`.
3. Show the returned verification URL and real device code to the user.
4. Poll `POST <sidecar_url>/activate/poll` until it returns `activated: true`.
5. Use `GET <sidecar_url>/status`, `GET <sidecar_url>/skills`, or the MCP tools.

Do not fabricate a placeholder code. The device code must come from `POST /activate/start`.

## Useful Commands

```bash
# Start MCP stdio server
npx -y @skillfm/mcp@latest

# Start local sidecar for current-chat activation
npx -y @skillfm/mcp@latest start

# Show AI health checkup from the CLI
npx -y @skillfm/mcp@latest checkup

# Detect supported agent harnesses
npx -y @skillfm/mcp@latest safe detect

# Install local SkillFM guidance into supported local agents
npx -y @skillfm/mcp@latest safe inject

# Remove injected local guidance
npx -y @skillfm/mcp@latest safe uninstall
```

## What SkillFM Helps With

SkillFM Beacon is for users who ask:

- "How many tokens did I use today?"
- "Why is my AI bill going up?"
- "Can I save money on OpenAI, Anthropic, DeepSeek, Qwen, or other LLM providers?"
- "Is my agent getting slow because the context or workspace is bloated?"
- "How do I safely connect a provider key without sending it to a SaaS dashboard?"
- "What skills can my AI run for content, e-commerce, social media, SEO/GEO, or automation?"

## Security Model

- **Local sidecar**: The activation sidecar listens on `127.0.0.1`, not the public network.
- **BYOK vault**: Provider API keys are stored locally by `@skillfm/local`; agents do not read key values back.
- **No private core in this repo**: This repository contains distribution metadata and a thin launcher only. Core safety logic, hosted services, policy systems, and internal orchestration are not included.
- **User-controlled activation**: OAuth device-flow activation requires the user to approve the real device code in their own browser.

## Marketplace Keywords

SkillFM Beacon is designed to be discoverable for:

`MCP server`, `AI health checkup`, `token usage`, `LLM spend`, `AI cost optimizer`, `BYOK`, `local vault`, `agent monitoring`, `slow agent cleanup`, `context cleanup`, `Claude Code`, `Cursor`, `Cline`, `Claude Desktop`, `VS Code Copilot`, `OpenAI usage`, `Anthropic usage`, `DeepSeek usage`, `Qwen usage`.

## Public Surface Boundary

This public package is intentionally small. It exists to make SkillFM easy to install from MCP marketplaces and agent directories while keeping core safety and platform logic private.

Public:

- MCP registry metadata
- npm launcher package
- install docs
- activation flow
- security model
- user-facing tool descriptions

Private:

- core safety engine internals
- hosted service implementation
- private policy logic
- private prompts and routing strategy
- customer data
- provider credentials

## License

MIT
