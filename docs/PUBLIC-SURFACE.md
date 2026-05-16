# Public Surface Policy

This repo is safe to publish because it is only the SkillFM MCP distribution shell.

## Allowed

- `package.json` for `@skillfm/mcp`
- `server.json` for MCP Registry submission
- README and install docs
- Thin launcher code that delegates to `@skillfm/local@latest`
- Public security boundaries
- Public marketplace keywords
- Public examples and screenshots that contain no customer data

## Not Allowed

- core safety engine internals
- hosted service implementation
- proprietary scoring, routing, or enforcement logic
- private prompts
- real provider keys, tokens, cookies, or customer logs
- internal ops, growth automation, or agent orchestration
- unpublished business metrics

## Review Checklist Before Publishing

- `rg -i "token|secret|key|cookie|bearer|password" .`
- `rg -i "Skill-Aware|Brain|bearer|password|internal token|customer log" .`
- Confirm every mention is public-facing and intentional.
- Confirm install commands delegate to published packages only.
- Confirm `server.json.name` matches `package.json.mcpName`.
