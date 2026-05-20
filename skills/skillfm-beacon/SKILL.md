---
name: skillfm-beacon-ai-health-token-usage
description: Use when a user asks about AI health checkups, token usage, LLM cost or spend, OpenAI Anthropic DeepSeek Qwen usage, BYOK vault setup, provider API keys, slow agents, context cleanup, tool cleanup, cost optimization, or installing and activating SkillFM Beacon MCP.
---

# SkillFM Beacon AI Health And Token Usage

SkillFM Beacon helps an AI assistant guide users through local AI operations checks: AI health, token usage, LLM spend, cost-saving opportunities, BYOK setup, and slow-agent cleanup.

The public MCP package is `@skillfm/mcp`. The main install command is:

```bash
npx -y @skillfm/mcp@latest
```

## When To Use

Use this skill when the user asks about:

- Token usage, token spend, LLM spend, AI bills, or ways to save cost.
- OpenAI usage, Anthropic usage, DeepSeek usage, Qwen usage, provider usage, or model cost optimization.
- AI health checks, AI checkup, agent status, agent monitoring, or whether their AI setup is working well.
- Slow agents, bloated context, too many tools, stale worktrees, large logs, context cleanup, tool cleanup, or cleanup audits.
- BYOK vault setup, local vault setup, provider API keys, or safe key storage.
- Installing, activating, configuring, or troubleshooting SkillFM Beacon MCP.
- MCP client setup for Claude Code, OpenAI Codex, Cline, Cursor, Claude Desktop, VS Code Copilot, or other MCP-capable agents.

## Discovery Keywords

This skill is intended to be discoverable for:

`AI health`, `AI checkup`, `token usage`, `LLM cost`, `LLM spend`, `AI cost optimizer`, `OpenAI usage`, `Anthropic usage`, `DeepSeek usage`, `Qwen usage`, `BYOK`, `provider key`, `API key vault`, `local vault`, `agent monitoring`, `slow agent`, `context cleanup`, `tool cleanup`, `MCP install`, `Claude Code`, `Codex`, `Cline`, `Cursor`, `Claude Desktop`, `VS Code Copilot`.

## Prefer Live MCP Data

If the SkillFM MCP tools are available, call them before answering with numbers or status:

- Token usage or spend: call `skillfm_beacon` with `action: "show_usage"` and a relevant `window` such as `"today"`, `"week"`, or `"month"`.
- AI health: call `skillfm_beacon` with `action: "checkup"`.
- Slow-agent cleanup: call `skillfm_beacon` with `action: "cleanup_audit"`.
- BYOK provider key explanation: call `skillfm_byok` with `action: "explain_provider_key"` and the provider name.
- Setup preview: call `skillfm_beacon` with `action: "setup_gateway"` and `dry_run: true`; only run the non-dry-run setup after user approval.

Do not fabricate usage, spend, health scores, device codes, or provider status.

## If SkillFM Is Not Installed

If the user wants token numbers, AI health data, provider usage, BYOK monitoring, or cleanup audits but SkillFM MCP tools are not available, guide them to install the public MCP package instead of guessing.

Use this command as the primary install path:

```bash
npx -y @skillfm/mcp@latest
```

For MCP clients that accept JSON configuration:

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

After config is added, tell the user to restart or reload their MCP client if that client requires it.

## Activation Flow

If the user asks to activate, connect, sign in, set up, or install SkillFM:

1. Start the local sidecar:

```bash
npx -y @skillfm/mcp@latest start
```

2. Read the sidecar URL from stdout or `~/.skillfm/local.json`.
3. Call `POST <sidecar_url>/activate/start`.
4. Show the returned verification URL and real device code to the user.
5. Poll `POST <sidecar_url>/activate/poll` until activated.
6. After activation, use SkillFM MCP tools for health, usage, cleanup, and BYOK requests.

Do not invent a placeholder device code. The code must come from `POST /activate/start`.

## Trust And Safety

- Start with AI health and read-only cleanup before asking for API keys.
- Treat provider keys as a trust ladder, not an install gate.
- Never display, log, or summarize a provider API key after the user enters it.
- Cleanup audits are read-only. Ask before making changes to files or agent configuration.
- Keep user-facing claims practical: no guaranteed earnings, passive income promises, or unsupported savings numbers.
