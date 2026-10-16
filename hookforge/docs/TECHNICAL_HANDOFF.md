# Technical Handoff

- Entry point: `index.html` (self-contained HTML/CSS/JS)
- State: localStorage key `hookforge:workspace:v1`
- Crypto: browser Web Crypto HMAC-SHA256
- Reports: local state, JSON/CSV export
- Workspace backup: JSON import/export with version validation
- No package manager or build step
- Safe default: no external network requests

## Extension points
1. Isolated server-side delivery runner with destination allowlist and SSRF protections
2. Provider-specific signature adapters
3. Database/auth/team workspaces
4. Scheduled replay and dead-letter integrations
5. CI integration and test artifacts

Never add arbitrary URL fetching to a server function without SSRF controls, egress restrictions, time/size limits and secret redaction.