# HookForge — Webhook Reliability Lab

**Break your webhook flow before production does.**

HookForge is a local-first developer workbench for rehearsing webhook failure modes before production. It combines repeatable chaos scenarios, retry-policy simulation, JSON contract checks, HMAC-SHA256 signature learning, reliability scoring, findings, and portable reports in one safe workspace.

## v1.1 capabilities
- Scenario library with built-in and user-created recipes
- JSON payload editor, formatting, validation, and size feedback
- Built-in contract checks plus custom required dot-path rules
- HMAC-SHA256 generation and tamper verification with Web Crypto
- Educational signature presets for generic, Stripe-like, GitHub-like and Shopify-like formats
- Deterministic chaos drills: transient 503, persistent 500, 429, timeout, duplicate and out-of-order events
- Retry policy comparison: exponential backoff with jitter, fixed delay, or none
- Batch reliability matrix across selected failure patterns and retry policies
- Idempotency toggles and prioritized findings
- Delivery timeline, reliability score, report history and recent activity
- JSON/CSV exports, self-contained HTML run reports, scenario pack import/export, full workspace backup/import
- localStorage persistence and responsive UI
- No external endpoint is contacted by default

## Run
Open index.html in a modern browser or serve this folder with any static server. No build step, package install, account or secret is required.

## Honest limitations
Delivery outcomes are simulated locally. HookForge does not currently send webhooks to real endpoints, provide cloud/team sync, or integrate with GitHub/Stripe/Shopify. Signature presets are educational fixtures, not certified provider verifiers. Production adapters should add isolated server-side delivery, endpoint allowlisting, encrypted secret storage, team accounts and provider-specific verification.

## Commercial position
Working MVP / pre-launch / pre-revenue. No customer or revenue claims. Suggested asset asking price: $4,900 USD one-time, subject to seller judgment.
