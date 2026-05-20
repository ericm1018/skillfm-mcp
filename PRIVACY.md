# Privacy

SkillFM Beacon is designed as a local-first MCP entrypoint for AI health, token usage, cost optimization, BYOK monitoring, and cleanup audits.

## Public Package Boundary

This repository contains only:

- npm package metadata
- MCP registry metadata
- a thin launcher that delegates to `@skillfm/local@latest`
- public installation and activation docs

It does not contain hosted service code, proprietary evaluation internals, private prompts, customer data, provider credentials, or operational logs.

## Local Sidecar

When started, the SkillFM local sidecar binds to `127.0.0.1` on the user's machine. The sidecar is intended for local agent and browser activation flows.

The sidecar writes local discovery metadata to:

```text
~/.skillfm/local.json
```

## BYOK Keys

Provider keys are stored by the local SkillFM runtime in a local vault. Agents should not receive raw key values back through MCP tools.

## Activation

Activation uses a device-flow style approval step. Agents should display only the real verification URL and device code returned by the local sidecar. They should not invent placeholder activation codes.

## Data Handling

Marketplace listings for this package should describe the public user-facing capabilities only:

- AI health checkups
- token usage and LLM spend visibility
- cost optimization suggestions
- BYOK setup and local vault guidance
- read-only cleanup audits for slow or bloated agent environments

Marketplace listings should not claim guaranteed earnings, passive income, automatic income, or access to private customer/provider data.
