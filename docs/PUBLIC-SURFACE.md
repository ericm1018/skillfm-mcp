# Public Surface Policy

This repo is safe to publish because it is only the SkillFM MCP distribution shell.

## Allowed

- `package.json` for `@skillfm/mcp`
- `server.json` for MCP Registry submission
- README and install docs
- `PRIVACY.md` and `SECURITY.md`
- Thin launcher code that delegates to `@skillfm/local@latest`
- Public security boundaries
- Public marketplace keywords
- Public examples and screenshots that contain no customer data

## Not Allowed

- non-public platform implementation
- proprietary evaluation internals
- private prompts or configuration
- real provider keys, tokens, cookies, or customer logs
- non-public automation logic
- unpublished business metrics

## Review Checklist Before Publishing

- `rg -i "token|secret|key|cookie|bearer|password" .`
- `rg -i "Skill-Aware|Brain|bearer|password|internal token|customer log|private prompt" .`
- Confirm every mention is public-facing and intentional.
- Confirm install commands delegate to published packages only.
- Confirm `server.json.name` matches `package.json.mcpName`.
- Confirm `package.json.publishConfig.access` is `public`.
- Confirm `server.json.repository.id` matches the GitHub repository id.
