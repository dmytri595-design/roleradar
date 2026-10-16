# HookForge Technical Handoff v1.1

## Runtime
- Self-contained HTML, CSS and JavaScript; no package install or build step.
- Web Crypto API for HMAC-SHA256 generation.
- localStorage for scenario, report and workspace persistence.
- Static deployment supported.

## Main modules
- Scenario library: built-in and custom failure recipes.
- Payload studio: JSON parsing/formatting, payload validation and size feedback.
- Contract validator: built-in checks and configurable required dot-paths.
- Signature lab: local HMAC-SHA256 generation and tamper verification; educational provider-style presets.
- Chaos drill: deterministic failure outcomes, retry policies, timeline, findings and score.
- Test matrix: batch combinations of failure patterns and retry policies.
- Reporting: JSON, CSV, self-contained HTML report, scenario pack portability and full workspace backup.

## Persistence model
Everything remains in the browser's localStorage. Export a workspace backup before clearing browser data. Imported JSON is parsed and basic schema-checked before applying.

## Production adapter roadmap
A production edition would need a server-side runner, strict endpoint allowlisting and egress restrictions, encrypted secret storage, authentication and team workspaces, persistent audit logs, real delivery/replay queues, rate limiting, provider-specific signature verification and clear consent before contacting an external endpoint.

## Safety boundary
The current app never contacts an external endpoint. The reliability score and timeline are based on deterministic simulation, not real delivery telemetry.