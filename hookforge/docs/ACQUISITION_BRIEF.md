# HookForge — Acquisition Brief v1.1

## Executive summary
HookForge is a focused developer tool for testing webhook-consumer reliability before production. It helps teams rehearse failure patterns, compare retry policies, validate payload contracts, learn signature verification, and export reviewable results in a safe browser-local workspace.

## Product capabilities
- Scenario library and reusable custom scenarios
- JSON payload studio with validation and payload-size feedback
- Built-in and user-defined required-path contract checks
- HMAC-SHA256 generation and tamper verification using Web Crypto
- Educational provider-style signature fixtures
- Deterministic simulations for 503, persistent 500, 429, timeout, duplicates and out-of-order events
- Retry-policy comparison and batch test matrix
- Prioritized findings, reliability score, timeline and local history
- JSON/CSV report export, self-contained HTML report, scenario pack export/import, workspace backup/restore

## Why it is a differentiated asset
HookForge is not just a webhook request bin or a generic API client. Its core value is the repeatable reliability workflow: scenario recipes → payload contract → failure/retry matrix → prioritized findings → portable evidence.

## Technical handoff
- Self-contained HTML/CSS/JavaScript app
- Web Crypto API for local HMAC-SHA256 operations
- localStorage for workspace state
- No build step or runtime service
- No external request by default

## Commercial status
Working MVP / pre-launch / pre-revenue. No customers, users, revenue or integrations are claimed. Suggested asking price: $4,900 USD one-time.

## Limitations and production roadmap
Current runs are simulations. There is no real endpoint delivery, hosted endpoint, team/cloud sync, provider-certified signature verification or integration with GitHub/Stripe/Shopify. A production edition could add a server-side runner with strict endpoint allowlisting, egress controls, encrypted secrets, audit logs, signed share links, team accounts and provider-specific adapters.
