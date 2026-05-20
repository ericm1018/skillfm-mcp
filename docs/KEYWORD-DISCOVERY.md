# Keyword Discovery Notes

Use this note when checking SkillFM Beacon in MCP registries and downstream directories.

## Official MCP Registry

The Official MCP Registry `search` parameter currently performs a case-insensitive substring match on `server.name`, not a full-text search over title, description, README, or publisher-provided keywords.

Practical implication: core discovery terms must appear in the canonical MCP name.

Current canonical name:

```text
io.github.ericm1018/skillfm-ai-health-token-usage-byok-cost-cleanup
```

Expected single-token hits:

- `skillfm`
- `health`
- `token`
- `usage`
- `byok`
- `cost`
- `cleanup`

Expected hyphenated hits:

- `ai-health`
- `token-usage`

Known limitation: exact phrase queries with spaces, such as `AI health` or `token usage`, do not match this official API because server names cannot contain spaces.

## Public Copy

For directories that do index text fields, keep using the human-facing title and description:

- Title: `SkillFM Beacon`
- Description: `AI health, token usage, LLM cost optimization, BYOK vault, and cleanup audits for MCP agents.`

Keep README and marketplace descriptions keyword-rich, but do not rely on those fields for the Official MCP Registry search endpoint.
